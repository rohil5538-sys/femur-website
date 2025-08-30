import { NextResponse } from "next/server"

type Payload = {
  name: string
  email: string
  company?: string
  phone?: string
  projectType: string
  budget?: string
  timeline?: string
  message: string
  services?: string[]
  newsletter?: boolean
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Partial<Payload>

    // Basic validation
    if (!body?.name || !body?.email || !body?.projectType || !body?.message) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 })
    }

    const payload: Payload = {
      name: body.name,
      email: body.email,
      company: body.company || "",
      phone: body.phone || "",
      projectType: body.projectType,
      budget: body.budget || "",
      timeline: body.timeline || "",
      message: body.message,
      services: body.services || [],
      newsletter: Boolean(body.newsletter),
    }

    // Optional: forward to a webhook if configured
    const webhook = process.env.CONTACT_WEBHOOK_URL
    if (webhook) {
      await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ source: "femur-website", payload }),
      })
    }

    // Optional: add email provider integration here (Resend, etc.)
    // Keep response generic
    return NextResponse.json({ ok: true })
  } catch (e) {
    return NextResponse.json({ error: "Unable to process request." }, { status: 500 })
  }
}
