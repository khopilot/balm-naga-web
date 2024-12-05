'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import dynamic from 'next/dynamic'

// Dynamically import ReactPlayer to avoid SSR issues
const ReactPlayer = dynamic(() => import('react-player').then(mod => mod.default), {
  ssr: false,
})

interface AboutSectionProps {
  dict: {
    title: string
    description: string
    values: Array<{
      title: string
      description: string
    }>
    images: string[] // New field for image URLs
  }
}

export function AboutSection({ dict }: AboutSectionProps) {
  const [isReady, setIsReady] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [videoKey, setVideoKey] = useState(0)

  const videoUrl = `${process.env.NEXT_PUBLIC_BASE_URL || ''}/video/naga-balm.mp4`

  return (
    <section className="relative overflow-hidden bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Video Container */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full rounded-2xl overflow-hidden aspect-video"
          >
            <div className="relative w-full h-full">
              {!isReady && !hasError && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
                  <div className="animate-spin rounded-full h-12 w-12 border-4 border-[#0DAFDB] border-t-transparent" />
                </div>
              )}
              {hasError && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
                  <div className="text-center">
                    <p className="text-red-500 mb-2">Error loading video</p>
                    <button
                      onClick={() => {
                        setHasError(false)
                        setIsReady(false)
                        setVideoKey((prev) => prev + 1)
                      }}
                      className="px-4 py-2 bg-[#0DAFDB] text-white rounded-lg hover:bg-[#0DAFDB]/90 transition-colors"
                    >
                      Retry
                    </button>
                  </div>
                </div>
              )}
              <div className={`transition-opacity duration-300 ${isReady ? 'opacity-100' : 'opacity-0'}`}>
                <ReactPlayer
                  key={videoKey}
                  url={videoUrl}
                  width="100%"
                  height="100%"
                  playing
                  loop
                  muted
                  playsinline
                  fallback={<div>Loading...</div>}
                  onReady={() => setIsReady(true)}
                  onError={() => setHasError(true)}
                  className="react-player"
                />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <div className="space-y-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold text-[#050707]"
            >
              {dict.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-[#050707]/70"
            >
              {dict.description}
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              {dict.values?.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="bg-[#FDD16E]/10 p-6 rounded-xl"
                >
                  <h3 className="text-xl font-semibold text-[#050707] mb-2">
                    {value.title}
                  </h3>
                  <p className="text-[#050707]/70">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
          {dict.images?.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="overflow-hidden rounded-lg"
            >
              <img
                src={image}
                alt={`Nagabalm image ${index + 1}`}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
