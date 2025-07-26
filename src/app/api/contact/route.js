// src/app/api/contact/route.js
export async function POST(request) {
  try {
    const data = await request.json(); // { name, email, subject, message }

    // Tag this as a contact submission
    const payload = { kind: 'contact', ...data };

    const res = await fetch(process.env.GSHEET_WEBAPP_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      throw new Error(`Sheet write failed: ${res.statusText}`);
    }

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error('API /api/contact error:', err);
    return new Response(
      JSON.stringify({ success: false, error: err.message }),
      { status: 500 }
    );
  }
}
