import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Send notification email to admin
    await resend.emails.send({
      from: 'Madhur Gurmat Sangeet Vidyala <noreply@mgsvidyala.com>',
      to: process.env.ADMIN_EMAIL || 'admin@mgsvidyala.com',
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #ea580c;">New Contact Form Submission</h1>
          <p>You have received a new message from the contact form:</p>
          <ul>
            <li><strong>Name:</strong> ${name}</li>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Subject:</strong> ${subject}</li>
          </ul>
          <h2>Message:</h2>
          <p>${message}</p>
        </div>
      `,
    });

    // Send confirmation email to user
    await resend.emails.send({
      from: 'Madhur Gurmat Sangeet Vidyala <noreply@mgsvidyala.com>',
      to: email,
      subject: 'Thank you for contacting us',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #ea580c;">Thank You for Contacting Us</h1>
          <p>Dear ${name},</p>
          <p>Thank you for reaching out to Madhur Gurmat Sangeet Vidyala. We have received your message and will get back to you shortly.</p>
          <p>For your reference, here's a copy of your message:</p>
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
          </div>
          <p>Best regards,<br>Madhur Gurmat Sangeet Vidyala Team</p>
        </div>
      `,
    });

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
} 