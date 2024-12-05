'use client'

import { useState } from 'react'
import { ProductCard } from './ProductCard'
import { UsageFilter } from './UsageFilter'

interface Product {
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
}

interface ProductGridProps {
  lang: string
  initialProducts: Product[]
  dict: any
}

export function ProductGrid({ lang, initialProducts, dict }: ProductGridProps) {
  const [selectedUsage, setSelectedUsage] = useState<string | null>(null)

  const filteredProducts = initialProducts.filter(product => {
    const matchesUsage = selectedUsage === null || (() => {
      const usage = selectedUsage.toLowerCase()
      const recommendedFor = product.recommendedFor.toLowerCase()
      const description = product.description.toLowerCase()
      
      switch(usage) {
        case 'all-people':
          return true

        case 'families':
          return recommendedFor.includes('families') || 
                 recommendedFor.includes('children') || 
                 recommendedFor.includes('aged 1+') ||
                 description.includes('safe for children')

        case 'sensitive-skin':
          return recommendedFor.includes('sensitive skin') || 
                 description.includes('gentle') ||
                 description.includes('mild') ||
                 description.includes('sensitive')

        case 'deep-heat':
          return description.includes('heat') ||
                 description.includes('warm') ||
                 description.includes('fire') ||
                 recommendedFor.includes('deep heat') ||
                 product.name.toLowerCase().includes('fire')

        case 'physical-activity':
          return recommendedFor.includes('physical activity') || 
                 recommendedFor.includes('athletes') ||
                 description.includes('muscle recovery') ||
                 description.includes('sports') ||
                 description.includes('exercise')

        case 'headaches':
          return description.includes('headache') ||
                 description.includes('migraine') ||
                 description.includes('tension') ||
                 recommendedFor.includes('headache')

        case 'joint-pain':
          return description.includes('joint') ||
                 description.includes('muscle') ||
                 description.includes('arthritis') ||
                 recommendedFor.includes('joint pain') ||
                 recommendedFor.includes('muscle pain')

        case 'nausea':
          return description.includes('nausea') ||
                 description.includes('dizziness') ||
                 description.includes('motion sickness') ||
                 recommendedFor.includes('nausea') ||
                 recommendedFor.includes('dizziness')

        case 'congestion':
          return description.includes('congestion') ||
                 description.includes('nasal') ||
                 description.includes('breathing') ||
                 description.includes('chest') ||
                 recommendedFor.includes('congestion')

        default:
          return false
      }
    })()

    return matchesUsage
  })

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Filters - Left Side */}
      <div className="w-full lg:w-1/4 lg:sticky lg:top-24 lg:h-fit">
        <UsageFilter
          selectedUsage={selectedUsage}
          onSelectUsage={setSelectedUsage}
          lang={lang}
        />
      </div>

      {/* Products Grid - Right Side */}
      <div className="w-full lg:w-3/4">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              lang={lang}
            />
          ))}
        </div>
      </div>
    </div>
  )
} 