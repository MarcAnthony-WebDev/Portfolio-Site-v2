import { Resend } from "resend";
import { EmailTemplate } from "../../../emails/EmailTemplate"; // Assuming you have one template component
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { firstName, email, message } = await request.json();

    // Send email to yourself (admin)
    const adminEmailResponse = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["marcanthony.webdev@gmail.com"],
      subject: "New Contact Form Submission",
      react: EmailTemplate({ firstName, email, message, isAdmin: true }), // Admin template
    });

    if (adminEmailResponse.error) {
      return NextResponse.json(
        { error: adminEmailResponse.error },
        { status: 500 },
      );
    }

    // Send email to the user
    const userEmailResponse = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: [email],
      subject: "Thanks for viewing my site!",
      react: EmailTemplate({ firstName, email, message }), // User template
    });

    if (userEmailResponse.error) {
      return NextResponse.json(
        { error: userEmailResponse.error },
        { status: 500 },
      );
    }

    return NextResponse.json({ message: "Emails sent successfully!" });
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 },
    );
  }
}
