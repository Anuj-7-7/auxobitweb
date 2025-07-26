// src/app/api/enquiry/route.js
export async function POST(request) {
  try {
    const data = await request.json(); // { email, subject, message }

    // Add the kind so Apps Script knows which tab to write to
    const payload = { kind: 'enquiry', ...data };

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
    console.error('API /api/enquiry error:', err);
    return new Response(
      JSON.stringify({ success: false, error: err.message }),
      { status: 500 }
    );
  }
}
