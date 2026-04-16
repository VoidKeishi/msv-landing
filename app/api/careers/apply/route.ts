// Careers application API — v1 stub.
//
// Intentionally returns 501 with a fallback-email payload. The real handler
// (Google Drive upload + Sheets append) lands in a follow-up pass once the
// service account, Drive folder, and tracking Sheet are provisioned.
// See HR_HANDOFF.md for the v2 scope and client provisioning steps.

import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  let form: FormData
  try {
    form = await request.formData()
  } catch {
    return NextResponse.json(
      { ok: false, code: 'bad_request', message: 'Invalid form payload.' },
      { status: 400 }
    )
  }

  const jobSlug = String(form.get('jobSlug') ?? '').trim()
  if (!jobSlug) {
    return NextResponse.json(
      { ok: false, code: 'bad_request', message: 'Missing job reference.' },
      { status: 400 }
    )
  }

  const recruitmentEmail = String(form.get('recruitmentEmail') ?? '').trim() || null

  return NextResponse.json(
    {
      ok: false,
      code: 'not_implemented',
      message:
        'Online submission is not yet available. Please email your CV to the recruitment email shown on the job page.',
      recruitmentEmail,
    },
    { status: 501 }
  )
}
