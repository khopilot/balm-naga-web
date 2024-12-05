import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nagabalm',
  description: 'Traditional Cambodian healing balm',
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'https://nagabalm.com'
  ),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className="h-full" suppressHydrationWarning>
      <body className="h-full" suppressHydrationWarning>
        <div className="min-h-full flex flex-col">
          {children}
        </div>
      </body>
    </html>
  )
} 