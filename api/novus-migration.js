import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// IT team email recipients
const IT_TEAM_EMAILS = [
  'sgonzales@vtmgroup.com',
  'tgates@vtmgroup.com'
];

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

    // Map location values to readable text
    const locationMap = {
      'on-site': 'On-site at Novus office',
      'home': 'Working from home',
      'remote': 'Remote Novus team member'
    };

    // Map urgency to readable text and emoji
    const urgencyMap = {
      'low': { text: 'Low - Can wait', emoji: '🟢' },
      'medium': { text: 'Medium - Affecting my work', emoji: '🟡' },
      'high': { text: 'High - Cannot work at all', emoji: '🟠' },
      'critical': { text: 'Critical - Business operations impacted', emoji: '🔴' }
    };

    const urgencyInfo = urgencyMap[urgency] || { text: urgency, emoji: '⚪' };
    const locationText = locationMap[location] || location;

    // Format the email content
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background-color: #AA1F2E; color: white; padding: 20px; text-align: center;">
          <h1 style="margin: 0; font-size: 20px;">Novus Migration Support Request</h1>
        </div>

        <div style="padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: white; border-radius: 8px; padding: 20px; margin-bottom: 15px;">
            <h2 style="margin: 0 0 15px 0; color: #333; font-size: 16px; border-bottom: 2px solid #AA1F2E; padding-bottom: 10px;">
              ${urgencyInfo.emoji} Urgency: ${urgencyInfo.text}
            </h2>

            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #666; width: 140px;"><strong>Name:</strong></td>
                <td style="padding: 8px 0; color: #333;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #666;"><strong>Phone:</strong></td>
                <td style="padding: 8px 0; color: #333;">
                  <a href="tel:${phone.replace(/[^\d+]/g, '')}" style="color: #AA1F2E;">${phone}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #666;"><strong>Alternate Email:</strong></td>
                <td style="padding: 8px 0; color: #333;">
                  ${alternateEmail ? `<a href="mailto:${alternateEmail}" style="color: #AA1F2E;">${alternateEmail}</a>` : '<em>Not provided</em>'}
                </td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #666;"><strong>Location:</strong></td>
                <td style="padding: 8px 0; color: #333;">${locationText}</td>
              </tr>
            </table>
          </div>

          <div style="background-color: white; border-radius: 8px; padding: 20px;">
            <h3 style="margin: 0 0 10px 0; color: #333; font-size: 14px;">Problem Description:</h3>
            <p style="margin: 0; color: #333; white-space: pre-wrap; line-height: 1.6;">${problemDescription.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>
          </div>
        </div>

        <div style="background-color: #333; color: #999; padding: 15px; text-align: center; font-size: 12px;">
          Submitted via Novus Migration Status Page
        </div>
      </div>
    `;

    const emailText = `
NOVUS MIGRATION SUPPORT REQUEST
================================

URGENCY: ${urgencyInfo.emoji} ${urgencyInfo.text}

CONTACT INFORMATION
-------------------
Name: ${name}
Phone: ${phone}
Alternate Email: ${alternateEmail || 'Not provided'}
Location: ${locationText}

PROBLEM DESCRIPTION
-------------------
${problemDescription}

================================
Submitted via Novus Migration Status Page
    `.trim();

    // Determine subject line based on urgency
    const subjectPrefix = urgency === 'critical' ? '🔴 CRITICAL: ' :
                          urgency === 'high' ? '🟠 HIGH: ' : '';

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: 'Novus IT Support <onboarding@resend.dev>',
      to: IT_TEAM_EMAILS,
      replyTo: alternateEmail || undefined,
      subject: `${subjectPrefix}[Novus Migration] Support Request from ${name}`,
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
