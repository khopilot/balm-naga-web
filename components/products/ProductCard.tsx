// components/products/ProductCard.tsx
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface ProductCardProps {
  id: string
  name: string
  description: string
  image: string
  category: string
  keyIngredient: {
    name: string
    benefits: string
  }
  recommendedFor: string
  lang: string
}

export function ProductCard({
  id,
  name,
  description,
  image,
  category,
  keyIngredient,
  recommendedFor,
  lang
}: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col"
    >
      <Link href={`/${lang}/products/${id}`} className="flex flex-col h-full">
        {/* Image Container - Fixed aspect ratio */}
        <div className="relative w-full pt-[100%]">
          <div className="absolute inset-0">
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover rounded-t-xl"
            />
            {/* Category Badge */}
            <div className="absolute top-4 left-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium 
                bg-[#FDD16E] text-[#050707]">
                {category}
              </span>
            </div>
          </div>
        </div>

        {/* Content - Flex grow to fill remaining space */}
        <div className="flex-grow p-6 flex flex-col">
          <h3 className="text-xl font-bold text-[#050707] mb-2">
            {name}
          </h3>
          
          <p className="text-sm text-[#050707]/70 mb-4 line-clamp-2">
            {description}
          </p>

          {/* Key Ingredient */}
          <div className="mb-4 p-4 bg-[#FDD16E]/10 rounded-lg">
            <h4 className="text-sm font-semibold text-[#050707] mb-1">
              Key Ingredient: {keyIngredient.name}
            </h4>
            <p className="text-xs text-[#050707]/70 line-clamp-2">
              {keyIngredient.benefits}
            </p>
          </div>

          {/* Recommended For */}
          <div className="text-sm text-[#050707]/70">
            <span className="font-medium text-[#050707]">Recommended for: </span>
            <span className="line-clamp-1">{recommendedFor}</span>
          </div>

          {/* Learn More Link - Push to bottom */}
          <div className="mt-auto pt-6 flex items-center text-sm font-medium text-[#0DAFDB] group-hover:text-[#FDD16E]">
            Learn More
            <svg 
              className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 5l7 7-7 7" 
              />
            </svg>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
