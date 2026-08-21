export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    if (url.pathname === '/api/contact' && request.method === 'POST') {
      try {
        const data = await request.json();
        // Honeypot — silently accept bots without doing anything
        if (data.website_hp) {
          return Response.json({ ok: true });
        }
        const name = (data.name || '').toString().trim();
        const email = (data.email || '').toString().trim();
        const message = (data.message || '').toString().trim();
        if (!name || !email || !message) {
          return Response.json({ ok: false, error: 'Please fill in your name, email, and message.' }, { status: 400 });
        }
        if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
          return Response.json({ ok: false, error: 'Please enter a valid email address.' }, { status: 400 });
        }
        // No storage configured yet — accept and instruct to call for fastest response.
        return Response.json({ ok: true });
      } catch (e) {
        return Response.json({ ok: false, error: 'Something went wrong. Please call (309) 732-0950.' }, { status: 500 });
      }
    }

    return env.ASSETS.fetch(request);
  },
};
