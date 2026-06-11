import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  const { name, phone, email, type, date, message } = await request.json();

  const { data, error } = await resend.emails.send({
    from: 'Sukoon Band <onboarding@resend.dev>', // replace with your verified domain once set up at resend.com/domains
    to: [process.env.CONTACT_EMAIL],
    replyTo: email,
    subject: `New Booking Request — ${type || 'Event'} · ${name}`,
    html: `
      <div style="font-family:sans-serif;max-width:560px;margin:0 auto;color:#131312">
        <h2 style="color:#871525;margin-bottom:4px">New Booking Request</h2>
        <p style="color:#8C8378;margin-top:0;margin-bottom:24px">Received from sukoon-band.com</p>

        <table style="width:100%;border-collapse:collapse">
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid #E2D6C4;width:140px;color:#534C44;font-size:14px">Name</td>
            <td style="padding:10px 0;border-bottom:1px solid #E2D6C4;font-weight:600">${name}</td>
          </tr>
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid #E2D6C4;color:#534C44;font-size:14px">Phone</td>
            <td style="padding:10px 0;border-bottom:1px solid #E2D6C4;font-weight:600">${phone}</td>
          </tr>
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid #E2D6C4;color:#534C44;font-size:14px">Email</td>
            <td style="padding:10px 0;border-bottom:1px solid #E2D6C4;font-weight:600"><a href="mailto:${email}" style="color:#871525">${email}</a></td>
          </tr>
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid #E2D6C4;color:#534C44;font-size:14px">Event type</td>
            <td style="padding:10px 0;border-bottom:1px solid #E2D6C4;font-weight:600">${type || '—'}</td>
          </tr>
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid #E2D6C4;color:#534C44;font-size:14px">Event date</td>
            <td style="padding:10px 0;border-bottom:1px solid #E2D6C4;font-weight:600">${date || '—'}</td>
          </tr>
          ${message ? `
          <tr>
            <td style="padding:10px 0;color:#534C44;font-size:14px;vertical-align:top">Message</td>
            <td style="padding:10px 0;white-space:pre-wrap">${message}</td>
          </tr>` : ''}
        </table>

        <p style="margin-top:28px;font-size:13px;color:#8C8378">
          Reply directly to this email to respond to ${name}.
        </p>
      </div>
    `,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ id: data.id });
}
