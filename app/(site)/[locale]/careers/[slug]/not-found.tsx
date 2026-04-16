import { Link } from '@/i18n/routing'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center px-6">
        <h1 className="text-6xl font-bold text-msv-blue mb-4">404</h1>
        <p className="text-xl text-msv-dark-2 mb-8">
          This job posting is no longer available.
        </p>
        <Link
          href="/careers"
          className="inline-flex items-center gap-2 bg-msv-blue text-white px-6 py-3 rounded-md font-semibold hover:bg-msv-blue/90 transition-colors"
        >
          View open positions
        </Link>
      </div>
    </div>
  )
}
