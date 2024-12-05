'use client'

import { motion } from 'framer-motion'

interface HeroSectionProps {
  title: string
  subtitle: string
}

export function HeroSection({ title, subtitle }: HeroSectionProps) {
  return (
    <section className="h-screen w-full flex items-center relative bg-[#FDD16E] snap-start">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div 
          className="max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Vertical Line */}
          <motion.div
            className="w-px h-24 bg-[#050707] mb-12"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.6 }}
          />

          <motion.h1 
            className="text-6xl md:text-7xl lg:text-8xl font-bold text-[#050707] mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {title}
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl lg:text-3xl text-[#050707]/80 max-w-3xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {subtitle}
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
} 