import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, phone, alternateEmail, location, urgency, problemDescription } = req.body;

    // Validate required fields
    if (!name || !phone || !location || !urgency || !problemDescription) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Format the email content
    const emailHtml = `
      <h2>Novus Migration Support Request</h2>
      <p><strong>Urgency:</strong> ${urgency}</p>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Alternate Email:</strong> ${alternateEmail || 'Not provided'}</p>
      <p><strong>Location:</strong> ${location}</p>
      <h3>Problem Description:</h3>
      <p>${problemDescription.replace(/\n/g, '<br>')}</p>
    `;

    const emailText = `
Novus Migration Support Request

Urgency: ${urgency}
Name: ${name}
Phone: ${phone}
Alternate Email: ${alternateEmail || 'Not provided'}
Location: ${location}

Problem Description:
${problemDescription}
    `.trim();

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: 'Novus IT Support <novus-support@aireadypdx.com>',
      to: ['sgonzales@vtmgroup.com', 'tgates@vtmgroup.com', 'pbrown@vital-enterprises.com'],
      replyTo: alternateEmail || 'hello@aireadypdx.com',
      subject: `[Novus Migration] Support Request from ${name}`,
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
