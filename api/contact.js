import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, message, freeSession } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Format the email content
    const emailHtml = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Interested in $50 AI Readiness Session:</strong> ${freeSession ? 'Yes' : 'No'}</p>
      <h3>Message:</h3>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `;

    const emailText = `
New Contact Form Submission

Name: ${name}
Email: ${email}
Interested in $50 AI Readiness Session: ${freeSession ? 'Yes' : 'No'}

Message:
${message}
    `.trim();

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: 'AI Ready PDX <onboarding@resend.dev>',
      to: ['pbrown@vital-enterprises.com', 'johnwebber@novuslabs.com', 'rhoppes@vital-enterprises.com'],
      replyTo: email,
      subject: `[AI Ready PDX] New Contact from ${name}`,
      html: emailHtml,
      text: emailText,
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(500).json({ error: 'Failed to send email' });
    }

    return res.status(200).json({ success: true, id: data.id });
  } catch (error) {
    console.error('Server error:', error);
    return res.status(500).json({ error: 'Server error' });
  }
}
