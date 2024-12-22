import { NextRequest, NextResponse } from "next/server";
import emailjs from "emailjs-com";

export async function POST(req: NextRequest) {

  const url = req.url;

  if (!url.includes("/contact")) {
    return NextResponse.json(
      { error: "Email submission is only allowed from the contact page." },
      { status: 400 }
    );
  }

  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "All fields are required." },
      { status: 400 }
    );
  }

  try {
    const serviceID = "service_a79ofoi";
    const templateID = "website_ip5xw39";
    const userID = "fNhUcZtPS1NsJ3AYT";

    await emailjs.send(serviceID, templateID, { name, email, message }, userID);

    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("EmailJS Error:", error);
    return NextResponse.json(
      { error: "Failed to send email." },
      { status: 500 }
    );
  }
}
