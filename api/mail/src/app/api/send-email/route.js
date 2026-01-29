import { Resend } from 'resend';

export const runtime = 'nodejs';

const resend = new Resend(process.env.RESEND_TOKEN);

const headers = {
  'Access-Control-Allow-Origin': 'https://roundhilldental.com',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Origin, Content-Type, Accept, Authorization',
  'Access-Control-Expose-Headers': 'Content-Length',
  'Access-Control-Allow-Credentials': 'true',
  'Access-Control-Max-Age': '43200',
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
