import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = process.env.RESEND_API_KEY 
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, phone, age, course, instrument, message } = body;

    if (!resend) {
      // For development/testing without API key
      console.log('Registration email would be sent:', { fullName, email, course, instrument });
      return NextResponse.json(
        { message: 'Registration received (development mode)' },
        { status: 200 }
      );
    }

    // Send confirmation email to student
    await resend.emails.send({
      from: 'Madhur Gurmat Sangeet Vidyala <noreply@mgsvidyala.com>',
      to: email,
      subject: 'Registration Confirmation - Madhur Gurmat Sangeet Vidyala',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #ea580c;">Thank You for Registering!</h1>
          <p>Dear ${fullName},</p>
          <p>Thank you for registering with Madhur Gurmat Sangeet Vidyala. We have received your application for the following:</p>
          <ul>
            <li><strong>Course Level:</strong> ${course}</li>
            <li><strong>Instrument:</strong> ${instrument}</li>
          </ul>
          <p>Our team will review your application and contact you shortly to discuss the next steps.</p>
          <p>Your registration details:</p>
          <ul>
            <li><strong>Phone:</strong> ${phone}</li>
            <li><strong>Age:</strong> ${age}</li>
            ${message ? `<li><strong>Additional Message:</strong> ${message}</li>` : ''}
          </ul>
          <p>If you have any questions, please do not hesitate to contact us.</p>
          <p>Best regards,<br>Madhur Gurmat Sangeet Vidyala Team</p>
        </div>
      `,
    });

    // Send notification email to admin
    await resend.emails.send({
      from: 'Madhur Gurmat Sangeet Vidyala <noreply@mgsvidyala.com>',
      to: process.env.ADMIN_EMAIL || 'admin@mgsvidyala.com',
      subject: 'New Student Registration',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #ea580c;">New Student Registration</h1>
          <p>A new student has registered for classes:</p>
          <ul>
            <li><strong>Name:</strong> ${fullName}</li>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Phone:</strong> ${phone}</li>
            <li><strong>Age:</strong> ${age}</li>
            <li><strong>Course Level:</strong> ${course}</li>
            <li><strong>Instrument:</strong> ${instrument}</li>
            ${message ? `<li><strong>Additional Message:</strong> ${message}</li>` : ''}
          </ul>
          <p>Please follow up with the student to complete the registration process.</p>
        </div>
      `,
    });

    return NextResponse.json(
      { message: 'Registration successful' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { error: 'Failed to process registration' },
      { status: 500 }
    );
  }
} 