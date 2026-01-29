import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET,OPTIONS,PATCH,DELETE,POST,PUT',
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
  );

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { to, subject, html } = req.body;

    if (!to || !subject || !html) {
      return res
        .status(400)
        .json({ error: 'Missing required fields: to, subject, html' });
    }

    const data = await resend.emails.send({
      from: 'onboarding@resend.dev', // Change this to your verified domain
      to: to, // FIX: This was pointing to API_KEY before!
      subject,
      html,
    });

    return res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    console.error('Email sending error:', error);
    return res.status(500).json({
      success: false,
      error: error.message || 'Failed to send email',
    });
  }
}
