import { PartnersSection } from '@/components/about/PartnersSection'
import { HeroSection } from '@/components/about/HeroSection'
import { getDictionary } from '@/lib/i18n/settings'
import { partners } from '@/lib/data/partners'

interface AboutDict {
  about: {
    meta: {
      title: string
      description: string
    }
    hero: {
      title: string
      subtitle: string
    }
    partners: {
      title: string
      subtitle: string
    }
  }
}

interface PageProps {
  params: {
    lang: string
  }
}

export default async function AboutPage({ params }: PageProps) {
  const dict = await getDictionary(params.lang) as AboutDict

  return (
    <main className="snap-y snap-mandatory h-screen overflow-y-auto overflow-x-hidden">
      {/* Hero Section */}
      <HeroSection 
        title={dict.about.hero.title}
        subtitle={dict.about.hero.subtitle}
      />

      {/* Partners Section */}
      <PartnersSection 
        dict={dict.about.partners} 
        partners={partners}
      />
    </main>
  )
}
