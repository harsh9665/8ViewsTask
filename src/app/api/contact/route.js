import { connectDB } from '@/lib/mongodb';
import Contact from '@/models/Contact';

export async function POST(req) {
  try {
    const body = await req.json();
    const { fullName, email, mobile, message } = body;

    // ── Basic validation ──
    if (!fullName || !email || !mobile) {
      return Response.json(
        { error: 'Full name, email, and mobile are required.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json(
        { error: 'Invalid email address.' },
        { status: 400 }
      );
    }

    const mobileRegex = /^[0-9+\-\s]{7,15}$/;
    if (!mobileRegex.test(mobile)) {
      return Response.json(
        { error: 'Invalid mobile number.' },
        { status: 400 }
      );
    }

    // ── Save to DB ──
    await connectDB();
    await Contact.create({ fullName, email, mobile, message });

    return Response.json(
      { message: 'Enquiry submitted successfully.' },
      { status: 201 }
    );
  } catch (err) {
    console.error('Contact API error:', err);
    return Response.json(
      { error: 'Internal server error.' },
      { status: 500 }
    );
  }
}