import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'

const middleware = createMiddleware(routing)

export function proxy(request: import('next/server').NextRequest) {
  return middleware(request)
}

export const config = {
  matcher: '/((?!api|trpc|_next|_vercel|studio|.*\\..*).*)',
}
