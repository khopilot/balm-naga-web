'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Partner } from '@/lib/data/partners'

interface PartnersSectionProps {
  dict: {
    title: string
    subtitle: string
  }
  partners: Partner[]
}

export function PartnersSection({ dict, partners }: PartnersSectionProps) {
  return (
    <section className="py-24 bg-white snap-start">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-[#050707] mb-4"
          >
            {dict.title}
          </motion.h2>
          <div className="w-20 h-1 bg-[#0DAFDB] mx-auto mb-6" />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-[#050707]/70 max-w-2xl mx-auto mb-12"
          >
            {dict.subtitle}
          </motion.p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white rounded-xl shadow-md hover:shadow-xl 
                transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <div className="relative aspect-[4/3]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FDD16E]/5 to-[#0DAFDB]/5 opacity-50" />
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain p-6 filter transition-all duration-300
                    group-hover:scale-105 group-hover:brightness-110"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  priority={index < 8}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.opacity = '0.5';
                    target.style.filter = 'grayscale(100%)';
                  }}
                  loading={index < 8 ? 'eager' : 'lazy'}
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 
                to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-center text-sm font-medium">
                  {partner.name}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 