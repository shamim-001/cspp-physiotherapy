import { Resend } from "resend"
import { NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    // Validate API key exists
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured")
      return NextResponse.json(
        { error: "Email service is not configured. Please contact us directly." },
        { status: 500 }
      )
    }

    const body = await request.json()
    const { fullName, phone, email, preferredDate, preferredTime, problemType, additionalDetails } = body

    // Validate required fields
    if (!fullName || !phone) {
      return NextResponse.json({ error: "Full name and phone are required" }, { status: 400 })
    }

    // Format the email content with better HTML structure
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #1e6091; color: white; padding: 20px; text-align: center; }
            .content { background-color: #f9f9f9; padding: 20px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #1e6091; }
            .value { margin-left: 10px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>New Booking Request - CSPP</h2>
            </div>
            <div class="content">
              <div class="field">
                <span class="label">Full Name:</span>
                <span class="value">${fullName}</span>
              </div>
              <div class="field">
                <span class="label">Phone:</span>
                <span class="value">${phone}</span>
              </div>
              ${email ? `
              <div class="field">
                <span class="label">Email:</span>
                <span class="value">${email}</span>
              </div>
              ` : ""}
              ${preferredDate ? `
              <div class="field">
                <span class="label">Preferred Date:</span>
                <span class="value">${preferredDate}</span>
              </div>
              ` : ""}
              ${preferredTime ? `
              <div class="field">
                <span class="label">Preferred Time:</span>
                <span class="value">${preferredTime}</span>
              </div>
              ` : ""}
              ${problemType ? `
              <div class="field">
                <span class="label">Problem Type:</span>
                <span class="value">${problemType}</span>
              </div>
              ` : ""}
              ${additionalDetails ? `
              <div class="field">
                <span class="label">Additional Details:</span>
                <span class="value">${additionalDetails}</span>
              </div>
              ` : ""}
            </div>
          </div>
        </body>
      </html>
    `

    // Send email using Resend
    const data = await resend.emails.send({
      from: "CSPP Booking <onboarding@resend.dev>",
      to: ["csppphysiotherapy@gmail.com"],
      subject: `New Booking Request from ${fullName}`,
      html: emailHtml,
      replyTo: email || undefined, // Set reply-to if email is provided
    })

    return NextResponse.json({ success: true, data }, { status: 200 })
  } catch (error) {
    console.error("Error sending email:", error)

    // Provide more detailed error information
    const errorMessage = error instanceof Error ? error.message : "Unknown error"
    console.error("Detailed error:", errorMessage)

    return NextResponse.json(
      {
        error: "Failed to send booking request. Please try calling us directly.",
        details: process.env.NODE_ENV === "development" ? errorMessage : undefined
      },
      { status: 500 }
    )
  }
}
