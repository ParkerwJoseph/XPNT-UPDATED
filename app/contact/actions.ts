"use server"

interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  phone?: string
  company?: string
  role?: string
  message?: string
  budget?: string
  timeline?: string
}

export async function submitContactForm(formData: FormData) {
  try {
    // Extract form data
    const data: ContactFormData = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      company: formData.get("company") as string,
      role: formData.get("role") as string,
      message: formData.get("message") as string,
      budget: formData.get("budget") as string,
      timeline: formData.get("timeline") as string,
    }

    // Validate required fields
    if (!data.firstName || !data.lastName || !data.email) {
      return {
        success: false,
        error: "Please fill in all required fields.",
      }
    }

    // Format email body
    const emailBody = `
New Client Inquiry via XPNT Site

Name: ${data.firstName} ${data.lastName}
Email: ${data.email}
${data.phone ? `Phone: ${data.phone}` : ""}
${data.company ? `Company: ${data.company}` : ""}
${data.role ? `Role: ${data.role}` : ""}
${data.budget ? `Budget: ${data.budget}` : ""}
${data.timeline ? `Timeline: ${data.timeline}` : ""}

Message:
${data.message || "No message provided"}

---
This inquiry was submitted through the XPNT Solutions website contact form.
    `.trim()

    // In a real implementation, you would use a service like:
    // - Resend
    // - SendGrid
    // - Nodemailer with SMTP
    // - AWS SES

    // For this example, I'll simulate the email sending
    // Replace this with your actual email service implementation

    // Example with a hypothetical email service:
    /*
    await emailService.send({
      to: 'jakeschincariol@gmail.com',
      subject: 'New Client Inquiry via XPNT Site',
      text: emailBody,
      replyTo: data.email
    })
    */

    // Simulate email sending delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Log the submission (in production, you'd send the actual email)
    console.log("Contact form submission:")
    console.log("To: jakeschincariol@gmail.com")
    console.log("Subject: New Client Inquiry via XPNT Site")
    console.log("Body:", emailBody)

    return {
      success: true,
      message: "Thanks for reaching out. We'll be in touch shortly.",
    }
  } catch (error) {
    console.error("Error submitting contact form:", error)
    return {
      success: false,
      error: "There was an error submitting your message. Please try again.",
    }
  }
}
