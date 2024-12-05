'use client'

import { motion } from 'framer-motion'

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FDD16E]">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="relative w-32 h-32"
      >
        <img
          src="/images/Naga Balm__SecondaryLogomark_Primary.png"
          alt="Loading..."
          className="w-full h-full object-contain"
        />
      </motion.div>
    </div>
  )
} 