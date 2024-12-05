import { Navbar } from '@/components/common/Navbar'
import { Footer } from '@/components/common/Footer'
import { getDictionary } from '@/lib/i18n/settings'
import { Metadata } from 'next'
import Script from 'next/script'

interface RootLayoutProps {
  children: React.ReactNode
  params: {
    lang: string
  }
}

export const metadata: Metadata = {
  title: 'Naga Balm',
  description: 'Traditional Cambodian healing balm, handcrafted with natural ingredients',
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/icon-192.png', sizes: '192x192' },
      { url: '/icon-512.png', sizes: '512x512' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' },
    ],
  },
}

export default async function RootLayout({
  children,
  params: { lang },
}: RootLayoutProps) {
  const dict = await getDictionary(lang)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Naga Balm',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://nagabalm.com',
    logo: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://nagabalm.com'}/images/Naga Balm__SecondaryLogomark_Primary.png`,
    description: 'Traditional Cambodian healing balm, handcrafted with natural ingredients',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '#1529, NR. 2, Chakangre Krom',
      addressLocality: 'Phnom Penh',
      addressRegion: 'Khan Mean Chey',
      addressCountry: 'Cambodia'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+855-12-345-678',
      contactType: 'customer service',
      email: 'info@nagabalm.com'
    },
    sameAs: [
      'https://facebook.com/nagabalm',
      'https://instagram.com/nagabalm',
      'https://twitter.com/nagabalm'
    ]
  }

  return (
    <html lang={lang} className="h-full">
      <head>
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          strategy="afterInteractive"
        />
      </head>
      <body className="flex flex-col min-h-screen">
        <Navbar lang={lang} dict={dict} pathname="/" />
        {children}
        <Footer lang={lang} dict={dict} />
      </body>
    </html>
  )
} 