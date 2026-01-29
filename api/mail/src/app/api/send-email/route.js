import { Resend } from 'resend';

export const runtime = 'nodejs';

const resend = new Resend(process.env.RESEND_TOKEN);

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export async function OPTIONS() {
  return new Response(null, { status: 204, headers });
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { to, subject, html } = body;

    if (!to || !subject || !html) {
      return new Response(
        JSON.stringify({ message: 'Missing required fields' }),
        { status: 400, headers },
      );
    }

    const data = await resend.emails.send({
      from: 'info@roundhilldental.com',
      to,
      subject,
      html,
    });

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
      headers,
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, message: error.message }),
      { status: 500, headers },
    );
  }
}
