'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

interface HowToUseSectionProps {
  dict: {
    title: string
    description: string
    steps: Array<{
      title: string
      description: string
    }>
  }
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export function HowToUseSection({ dict }: HowToUseSectionProps) {
  if (!dict) return null

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-24 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 w-80 h-80 bg-yellow-100 rounded-full opacity-20" />
        <div className="absolute -left-20 -bottom-20 w-60 h-60 bg-blue-100 rounded-full opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="bg-yellow-100 text-yellow-800 text-sm font-medium px-4 py-1 rounded-full">
              How It Works
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 mb-6"
          >
            {dict.title}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 leading-relaxed"
          >
            {dict.description}
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 relative"
        >
          {dict.steps?.map((step, index) => (
            <motion.div
              key={step.title}
              variants={itemVariants}
              className="relative group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              {/* Connecting Lines (hidden on mobile) */}
              {index < dict.steps.length - 1 && (
                <div className="hidden md:block absolute -right-4 top-1/2 w-8 h-0.5 bg-yellow-200 transform -translate-y-1/2" />
              )}
              
              <div className="bg-white rounded-2xl shadow-lg p-8 pt-14 relative border border-gray-100 h-full hover:shadow-xl transition-shadow duration-300">
                <div className="absolute -left-3 -top-3 w-14 h-14 rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center text-2xl font-bold text-white transform rotate-3 group-hover:rotate-6 transition-transform duration-300">
                  {index + 1}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-yellow-600 transition-colors duration-300">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
                
                <div className="mt-6 flex items-center text-yellow-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Success Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full">
            <CheckCircle2 className="w-5 h-5" />
            <span className="text-sm font-medium">Ready to get started</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HowToUseSection
