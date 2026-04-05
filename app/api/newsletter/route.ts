import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  if (!email) {
    return NextResponse.json({ error: "Email required" }, { status: 400 });
  }

  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Server misconfiguration" }, { status: 500 });
  }

  const res = await fetch("https://api.brevo.com/v3/contacts", {
    method: "POST",
    headers: {
      "api-key": apiKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      updateEnabled: true,
    }),
  });

  if (!res.ok && res.status !== 204) {
    const body = await res.json().catch(() => ({}));
    // 400 with code "duplicate_parameter" means already subscribed — treat as success
    if (body?.code === "duplicate_parameter") {
      return NextResponse.json({ ok: true });
    }
    return NextResponse.json({ error: "Brevo error" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
