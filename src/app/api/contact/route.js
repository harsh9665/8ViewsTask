import { connectDB } from '@/lib/mongodb';
import Contact from '@/models/Contact';

export async function POST(req) {
  try {
    const body = await req.json();
    const { fullName, email, mobile, message, source } = body;
    const normalizedEmail = email?.trim().toLowerCase();
    const normalizedMobile = mobile?.replace(/[\s\-\+]/g, '');

    if (!fullName?.trim() || !normalizedEmail || !normalizedMobile || !message?.trim()) {
      return Response.json(
        { error: 'Full name, email, mobile, and message are required.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(normalizedEmail)) {
      return Response.json(
        { error: 'Invalid email address.' },
        { status: 400 }
      );
    }

    const mobileRegex = /^[0-9]{10}$/;
    if (!mobileRegex.test(normalizedMobile)) {
      return Response.json(
        { error: 'Invalid mobile number.' },
        { status: 400 }
      );
    }

    await connectDB();

    const existingContact = await Contact.findOne({
      $or: [{ email: normalizedEmail }, { mobile: normalizedMobile }],
    }).lean();

    if (existingContact) {
      return Response.json(
        {
          status: 'duplicate',
          message: 'We already have your enquiry. Our team will get back to you shortly.',
        },
        { status: 200 }
      );
    }

    await Contact.create({
      fullName: fullName.trim(),
      email: normalizedEmail,
      mobile: normalizedMobile,
      message: message.trim(),
      source: source || 'contact_section',
    });

    return Response.json(
      {
        status: 'success',
        message: 'Enquiry submitted successfully.',
      },
      { status: 201 }
    );
  } catch (err) {
    console.error('Contact API error:', err.message);
    return Response.json(
      { error: 'Internal server error.' },
      { status: 500 }
    );
  }
}
