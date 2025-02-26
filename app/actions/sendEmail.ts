"use server";

import { Resend } from "resend";

export async function sendEmail(name: string, email: string, phone: string, message: string) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY); 

    await resend.emails.send({
      from: "tom@classicsavl.com",
      to: ["tom@classicsavl.com"],
      subject: `New message from ${name}`,
      html: `<p>${message}</p><p>${name}</p><p>${email}</p><p>${phone}</p>`,
    });

    return { success: true };
  } catch (error) {
    console.error("Email sending error:", error);
    return { success: false, error: "Failed to send email." };
  }
}
