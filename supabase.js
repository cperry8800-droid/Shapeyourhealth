// Shape — Supabase client (Phase 1: auth + profiles)
// Loads the Supabase JS v2 client from CDN and exposes it as window.shapeDb.
// All pages that need auth should include this file *after* the CDN script:
//   <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
//   <script src="supabase.js"></script>

(function () {
  var SUPABASE_URL = 'https://zznufekgjngecelwxndw.supabase.co';
  var SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_vuOq-03RJHruIz0PWtXiUA_R4zvTJcR';

  if (typeof window === 'undefined') return;
  if (!window.supabase || !window.supabase.createClient) {
    console.error('[shape] Supabase CDN script missing. Add @supabase/supabase-js@2 before supabase.js');
    return;
  }

  var client = window.supabase.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      storageKey: 'shape.auth'
    }
  });

  // ===== Public API (attached to window.shapeDb) =====
  var shapeDb = {
    client: client,

    // Sign up a new user and create their profile row.
    async signUp(opts) {
      var email = opts.email;
      var password = opts.password;
      var role = opts.role; // 'client' | 'trainer' | 'nutritionist'
      var fullName = opts.fullName || '';

      var signUpRes = await client.auth.signUp({
        email: email,
        password: password,
        options: {
          data: { full_name: fullName, role: role }
        }
      });
      if (signUpRes.error) return { error: signUpRes.error };

      var user = signUpRes.data && signUpRes.data.user;
      // If email confirmations are enabled, user exists but no session yet.
      // Either way, upsert the profile row now.
      if (user) {
        var profileRes = await client.from('profiles').upsert({
          id: user.id,
          role: role,
          full_name: fullName
        });
        if (profileRes.error) {
          console.warn('[shape] profile upsert failed', profileRes.error);
        }
      }
      return { data: signUpRes.data, user: user };
    },

    // Sign in with email + password, returning the user's profile.
    async signIn(email, password) {
      var res = await client.auth.signInWithPassword({ email: email, password: password });
      if (res.error) return { error: res.error };
      var user = res.data.user;
      var profile = await shapeDb.getProfile(user.id);
      return { user: user, profile: profile };
    },

    async signOut() {
      await client.auth.signOut();
      // Clear legacy demo keys so stale UI state doesn't linger.
      try {
        localStorage.removeItem('shapeLoggedIn');
        localStorage.removeItem('shapeUserType');
        localStorage.removeItem('shapeFirstName');
        localStorage.removeItem('shapeLastName');
        localStorage.removeItem('shapeEmail');
      } catch (e) {}
    },

    async getSession() {
      var res = await client.auth.getSession();
      return res.data && res.data.session;
    },

    async getUser() {
      var res = await client.auth.getUser();
      return res.data && res.data.user;
    },

    async getProfile(userId) {
      if (!userId) {
        var u = await shapeDb.getUser();
        if (!u) return null;
        userId = u.id;
      }
      var res = await client.from('profiles').select('*').eq('id', userId).maybeSingle();
      if (res.error) {
        console.warn('[shape] getProfile error', res.error);
        return null;
      }
      return res.data;
    },

    // Guard a dashboard page.
    // - No session → return { demo: true } so the page can render a sample view.
    // - Logged in with wrong role → bounce to their own dashboard.
    // - Logged in with right role → return { session, profile }.
    async requireRole(expectedRole) {
      var session = await shapeDb.getSession();
      if (!session) {
        return { demo: true };
      }
      var profile = await shapeDb.getProfile(session.user.id);
      if (!profile) {
        return { demo: true };
      }
      if (expectedRole && profile.role !== expectedRole) {
        window.location.href = shapeDb.dashboardFor(profile.role);
        return null;
      }
      return { session: session, profile: profile };
    },

    // Inject a top-of-page "sample dashboard" banner for logged-out visitors.
    showDemoBanner(role) {
      if (document.getElementById('shapeDemoBanner')) return;
      var signupHref = role === 'trainer' ? 'signup-trainer.html'
        : role === 'nutritionist' ? 'signup-nutritionist.html'
        : 'signup-client.html';
      var label = role === 'trainer' ? 'trainer' : role === 'nutritionist' ? 'nutritionist' : 'client';
      var bar = document.createElement('div');
      bar.id = 'shapeDemoBanner';
      bar.innerHTML =
        '<div style="display:flex;align-items:center;justify-content:center;gap:12px;flex-wrap:wrap;' +
        'padding:10px 16px;background:#1A1A1A;color:#fff;font-size:0.82rem;font-weight:500;' +
        'letter-spacing:0.02em;border-bottom:1px solid rgba(255,255,255,0.1);' +
        'position:sticky;top:0;z-index:9999;text-align:center;">' +
        '<span style="opacity:0.85;">Sample ' + label + ' dashboard — sign up to get your own.</span>' +
        '<a href="' + signupHref + '" style="color:#fff;text-decoration:underline;font-weight:600;">Sign up</a>' +
        '<a href="login.html" style="color:#fff;opacity:0.7;">Log in</a>' +
        '</div>';
      document.body.insertBefore(bar, document.body.firstChild);
    },

    // ===== Sessions (bookings) =====

    // Create a new session request. Called by a client from a provider's profile.
    async requestSession(opts) {
      var session = await shapeDb.getSession();
      if (!session) return { error: { message: 'You must be logged in to book.' } };
      var row = {
        client_id: session.user.id,
        provider_id: opts.providerId,
        provider_role: opts.providerRole,
        type: opts.type,
        scheduled_at: opts.scheduledAt,
        duration_min: opts.durationMin || 30,
        notes: opts.notes || null,
        client_phone: opts.type === 'phone' ? (opts.clientPhone || null) : null,
        status: 'requested'
      };
      var res = await client.from('sessions').insert(row).select().single();
      return res;
    },

    // List sessions where current user is a participant (client OR provider).
    async listSessions(opts) {
      opts = opts || {};
      var session = await shapeDb.getSession();
      if (!session) return { data: [], error: null };
      var q = client.from('sessions').select('*');
      if (opts.asClient) q = q.eq('client_id', session.user.id);
      else if (opts.asProvider) q = q.eq('provider_id', session.user.id);
      // If neither flag set, RLS still limits to participants.
      if (opts.status) q = q.eq('status', opts.status);
      if (opts.upcoming) q = q.gte('scheduled_at', new Date().toISOString());
      q = q.order('scheduled_at', { ascending: opts.ascending !== false });
      return await q;
    },

    async updateSession(id, patch) {
      return await client.from('sessions').update(patch).eq('id', id).select().single();
    },

    // Accept a booking request → generate a Jitsi room URL for video sessions.
    async acceptSession(id) {
      var url = 'https://meet.jit.si/shape-' + id.replace(/-/g, '').slice(0, 16);
      var s = await client.from('sessions').select('type').eq('id', id).single();
      var patch = { status: 'confirmed' };
      if (s.data && s.data.type === 'video') patch.meeting_url = url;
      return await client.from('sessions').update(patch).eq('id', id).select().single();
    },

    dashboardFor(role) {
      if (role === 'trainer') return 'trainer-dashboard.html';
      if (role === 'nutritionist') return 'nutrition-schedule.html';
      return 'clients.html';
    },

    // Swap any element with .shape-auth-logged-out / .shape-auth-logged-in
    // classes based on the current session. Safe to call on any page.
    async applyNavAuthState() {
      var session = await shapeDb.getSession();
      var loggedIn = !!session;
      document.querySelectorAll('.shape-auth-logged-out').forEach(function (el) {
        el.style.display = loggedIn ? 'none' : '';
      });
      document.querySelectorAll('.shape-auth-logged-in').forEach(function (el) {
        el.style.display = loggedIn ? '' : 'none';
      });
      if (loggedIn) {
        var profile = await shapeDb.getProfile(session.user.id);
        document.querySelectorAll('#shapeNavUserName, .shape-nav-user-name').forEach(function (el) {
          if (profile && profile.full_name) el.textContent = profile.full_name;
          else el.textContent = session.user.email || '';
        });
        // Rewrite any dashboard-link anchors with data-shape-dashboard-link
        // to point at the user's own dashboard.
        if (profile) {
          var dash = shapeDb.dashboardFor(profile.role);
          document.querySelectorAll('[data-shape-dashboard-link]').forEach(function (el) {
            el.setAttribute('href', dash);
          });
        }
      }
    }
  };

  window.shapeDb = shapeDb;

  // Global sign-out helper (used by navbar buttons site-wide).
  window.shapeSignOut = async function () {
    if (window.shapeDb) await window.shapeDb.signOut();
    window.location.href = 'home.html';
  };

  // Auto-apply nav auth state on every page that loads this script.
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { shapeDb.applyNavAuthState(); });
  } else {
    shapeDb.applyNavAuthState();
  }
})();
