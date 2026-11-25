import { NextResponse } from 'next/server';
import { contactFormSchema } from '@/lib/validations';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    let json: unknown;
    try {
      json = await request.json();
    } catch {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid JSON payload received.',
        },
        { status: 400 }
      );
    }

    // Strict Server-Side Validation using Zod
    const validationResult = contactFormSchema.safeParse(json);

    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: 'Validation failed.',
          details: validationResult.error.format(),
        },
        { status: 400 }
      );
    }

    const { fullName, email, subject, message } = validationResult.data;

    // Secure server-side processing
    // In production, integrate email provider like Resend / SendGrid / NodeMailer:
    // const resendApiKey = process.env.RESEND_API_KEY;
    console.log('[Contact Submission Received]:', {
      fullName,
      email,
      subject,
      length: message.length,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message: `Thank you, ${fullName}! Your message has been received. Muhammad Zaki will be in touch shortly.`,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('[Contact API Error]:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'An internal server error occurred while processing your request.',
      },
      { status: 500 }
    );
  }
}
