import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { fullName, email, phone, product, details } = body;

    if (!fullName || !email || !phone || !product || !details) {
      return NextResponse.json(
        { success: false, error: "All fields are required" },
        { status: 400 }
      );
    }

    const data = await resend.emails.send({
  from: process.env.FROM_EMAIL as string, // e.g. "onboarding@resend.dev" or your verified domain
  to: [
    process.env.TO_EMAIL_1 as string,
    process.env.TO_EMAIL_2 as string,
  ],
  subject: `New Inquiry from ${fullName}`,
  html: `
    <h2>New Contact Form Submission</h2>
    <p><strong>Full Name:</strong> ${fullName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Product of Interest:</strong> ${product}</p>
    <p><strong>Details:</strong> ${details}</p>
  `,
});



    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}
