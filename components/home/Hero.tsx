'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface HeroProps {
  dict: {
    title: {
      word1: string
      word2: string
      word3: string
    }
    subtitle: string
    cta: string
  }
  lang: string
}

export function Hero({ dict, lang }: HeroProps) {
  const titleWords = lang === 'en' 
    ? ['Traditional', 'Healing', 'Balm']
    : [dict.title.word1, dict.title.word2, dict.title.word3]
  
  return (
    <section className="relative h-screen overflow-hidden bg-[#FDD16E]">
      <div className="relative z-10 h-full flex flex-col">
        {/* Mobile Logo (Top) */}
        <motion.div 
          className="flex md:hidden justify-center w-full pt-20 px-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-[350px] h-[350px] sm:w-[400px] sm:h-[400px]">
            <Image
              src="/images/Naga Balm__SecondaryLogomark_Black.png"
              alt="Naga Balm Logo"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 640px) 350px, 400px"
              quality={100}
            />
          </div>
        </motion.div>

        <div className="flex-1 flex items-center">
          <div className="w-full grid md:grid-cols-2 items-center">
            {/* Text Content */}
            <div className="flex flex-col items-start text-left px-4 sm:px-6 lg:px-16 xl:px-24">
              {/* Vertical Line */}
              <motion.div 
                className="relative h-16 md:h-24 w-px bg-[#050707] mb-6 md:mb-8"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.6 }}
              />

              {/* Title */}
              <div className="mb-6 md:mb-12">
                {titleWords.map((word, i) => (
                  <motion.div
                    key={i}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: i * 0.15,
                      ease: [0.16, 1, 0.3, 1] 
                    }}
                  >
                    <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#050707]
                      block leading-[1.1] md:leading-[1.1]"
                    >
                      {word}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Subtitle */}
              <motion.p
                className="text-lg sm:text-xl md:text-2xl text-[#050707]/80 max-w-xl mb-8 md:mb-12 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                At <span className="font-medium text-[#050707]">Naga Balm</span>, we are modernizing 
                the time-honored remedy of the <em>Preng Kola</em>, preserving its 
                legacy while evolving it for the 21st century.
              </motion.p>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="pb-8 md:pb-0"
              >
                <Link 
                  href={`/${lang}/products`}
                  className="group inline-flex items-center"
                >
                  <span className="text-[#050707] text-lg sm:text-xl font-medium border-b-2 border-[#050707] pb-1
                    transition-all duration-300 group-hover:border-[#0DAFDB] group-hover:text-[#0DAFDB]
                    flex items-center gap-2"
                  >
                    Discover Our Products
                    <ArrowRight className="w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 
                      group-hover:translate-x-2" />
                  </span>
                </Link>
              </motion.div>
            </div>

            {/* Desktop Logo */}
            <motion.div 
              className="hidden md:flex justify-end items-center w-full h-full"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative w-[650px] h-[650px] lg:w-[800px] lg:h-[800px] xl:w-[900px] xl:h-[900px]">
                <Image
                  src="/images/Naga Balm__SecondaryLogomark_Black.png"
                  alt="Naga Balm Logo"
                  fill
                  className="object-contain -translate-x-12"
                  priority
                  sizes="(max-width: 1024px) 650px, (max-width: 1280px) 800px, 900px"
                  quality={100}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
