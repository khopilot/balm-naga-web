import React from 'react'
import { getDictionary } from '@/lib/i18n/settings'
import type { Metadata } from 'next'
import { Hero } from '@/components/home/Hero'
import { AboutSection } from '@/components/home/AboutSection'
import { BenefitsSection } from '@/components/home/BenefitsSection'
import { FeaturedProducts } from '@/components/home/FeaturedProducts'
import { HowToUseSection } from '@/components/home/HowToUseSection'
import { Newsletter } from '@/components/common/Newsletter'
import { PageLayout } from '@/components/common/PageLayout'

interface HomeDict {
  meta: {
    title: string
    description: string
  }
  intro: {
    title: string
    description: string
  }
  hero: {
    title: string
    subtitle: string
    cta: string
  }
  benefits: {
    title: string
    items: Array<{
      title: string
      description: string
      icon: "leaf" | "hand" | "star"
    }>
  }
  about: {
    title: string
    description: string
    values: Array<{
      title: string
      description: string
    }>
  }
  howToUse: {
    title: string
    description: string
    steps: Array<{
      title: string
      description: string
    }>
  }
}

type HomeProps = {
  params: {
    lang: 'en' | 'km'
  }
}

export async function generateMetadata({ params }: HomeProps): Promise<Metadata> {
  const dict = await getDictionary(params.lang)
  const homeDict = dict.home as HomeDict
  const url = process.env.NEXT_PUBLIC_SITE_URL || 'https://nagabalm.com'
  
  return {
    title: homeDict.meta.title,
    description: homeDict.meta.description,
    metadataBase: new URL(url),
    alternates: {
      canonical: '/',
      languages: {
        'en': '/en',
        'km': '/kh'
      },
    },
    openGraph: {
      title: homeDict.meta.title,
      description: homeDict.meta.description,
      url: url,
      siteName: 'Naga Balm',
      locale: params.lang,
      type: 'website',
      images: [
        {
          url: '/images/og-image.jpg',
          width: 1200,
          height: 630,
          alt: homeDict.meta.title
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: homeDict.meta.title,
      description: homeDict.meta.description,
      images: ['/images/og-image.jpg'],
      creator: '@nagabalm',
      site: '@nagabalm'
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    },
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon-16x16.png',
      apple: '/apple-touch-icon.png',
    },
    manifest: '/site.webmanifest',
  }
}

export default async function Home({ params: { lang } }: HomeProps) {
  const dict = await getDictionary(lang)
  const homeDict = dict.home as HomeDict

  const sections = [
    {
      id: 'hero',
      Component: Hero,
      props: { dict: homeDict.hero, lang },
      className: 'min-h-screen'
    },
    {
      id: 'about',
      Component: AboutSection,
      props: { dict: homeDict.about },
      className: 'bg-white',
      condition: !!homeDict.about
    },
    {
      id: 'benefits',
      Component: BenefitsSection,
      props: { dict: homeDict.benefits },
      className: 'bg-[#FDD16E]/5',
      condition: !!homeDict.benefits
    },
    {
      id: 'products',
      Component: FeaturedProducts,
      props: { lang },
      className: 'bg-white'
    },
    {
      id: 'howToUse',
      Component: HowToUseSection,
      props: { dict: homeDict.howToUse },
      className: 'bg-white',
      condition: !!homeDict.howToUse
    },
    {
      id: 'newsletter',
      Component: Newsletter,
      props: { dict: dict.newsletter },
      className: 'bg-[#0DAFDB]'
    }
  ]

  return (
    <PageLayout dict={dict} withNewsletter={false}>
      <div className="relative flex flex-col">
        {/* Navigation Dots */}
        <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
          <div className="flex flex-col gap-4">
            {sections
              .filter(section => section.condition !== false)
              .map(section => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="w-3 h-3 rounded-full bg-white/20 hover:bg-white/40 
                    transition-all duration-300 
                    group relative"
                  aria-label={`Go to ${section.id} section`}
                >
                  <span className="absolute right-full mr-4 py-1 px-2 
                    bg-white/10 backdrop-blur-sm rounded-full text-white text-sm
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300
                    whitespace-nowrap"
                  >
                    {section.id.charAt(0).toUpperCase() + section.id.slice(1)}
                  </span>
                </a>
              ))}
          </div>
        </nav>

        {/* Main Content */}
        {sections.map(({ id, Component, props, className, condition }) => 
          condition !== false && (
            <section
              key={id}
              id={id}
              className={`relative snap-start snap-always ${className}`}
            >
              {React.createElement(Component as any, props)}
            </section>
          )
        )}
      </div>
    </PageLayout>
  )
}
