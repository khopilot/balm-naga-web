'use client'

import { motion } from 'framer-motion'
import { Leaf, HandMetal, Star } from 'lucide-react'

const icons = {
  leaf: Leaf,
  hand: HandMetal,
  star: Star,
}

interface BenefitsSectionProps {
  dict: {
    title: string
    items: Array<{
      title: string
      description: string
      icon: keyof typeof icons
    }>
  }
}

export function BenefitsSection({ dict }: BenefitsSectionProps) {
  if (!dict) {
    return null
  }

  return (
    <section className="bg-[#0DAFDB]/5 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-[#050707] mb-16"
        >
          {dict.title}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dict.items?.map((item, index) => {
            const Icon = icons[item.icon]
            
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#0DAFDB] text-white mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-[#050707] mb-2">
                  {item.title}
                </h3>
                <p className="text-[#050707]/70">
                  {item.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
} 