import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { fullName, company, email, website, country, industry, lookingFor, timeline, message } = body;

    // Basic server-side validation
    if (!fullName || !company || !email || !country || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    // TODO: Connect to your preferred notification channel:
    // Option A: Resend — import { Resend } from "resend"; const resend = new Resend(process.env.RESEND_API_KEY);
    // Option B: Formspree — fetch("https://formspree.io/f/YOUR_FORM_ID", { method: "POST", body: JSON.stringify(body) })
    // Option C: Slack webhook — fetch(process.env.SLACK_WEBHOOK_URL, { method: "POST", body: JSON.stringify({ text: `New inquiry from ${fullName}...` }) })
    // Option D: Notion API — use @notionhq/client to create a database entry

    // For now, log to console (replace with real implementation)
    console.log("New contact form submission:", {
      fullName,
      company,
      email,
      website,
      country,
      industry,
      lookingFor,
      timeline,
      message: message.slice(0, 100) + "...",
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
