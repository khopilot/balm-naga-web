'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FDD16E]">
      <div className="max-w-xl mx-auto px-4 py-8 text-center">
        <img
          src="/images/Naga Balm__SecondaryLogomark_Primary.png"
          alt="Naga Balm"
          className="w-32 h-32 mx-auto mb-8 object-contain"
        />
        <h2 className="text-2xl font-bold text-[#050707] mb-4">
          Something went wrong!
        </h2>
        <p className="text-[#050707]/80 mb-8">
          We apologize for the inconvenience. Please try again or return to the home page.
        </p>
        <div className="space-x-4">
          <button
            onClick={reset}
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#0DAFDB] hover:bg-[#0DAFDB]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0DAFDB]"
          >
            Try again
          </button>
          <Link
            href="/"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-[#050707] bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0DAFDB]"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  )
} 