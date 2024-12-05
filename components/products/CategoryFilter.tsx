'use client'

import { motion } from 'framer-motion'

interface CategoryFilterProps {
  selectedCategory: string | null
  onSelectCategory: (category: string | null) => void
}

export function CategoryFilter({
  selectedCategory,
  onSelectCategory,
}: CategoryFilterProps) {
  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'balms', label: 'Healing Balms' },
    { id: 'oils', label: 'Massage Oils' },
  ]

  return (
    <div className="flex flex-wrap gap-4 py-6">
      {categories.map((category) => (
        <motion.button
          key={category.id}
          onClick={() => onSelectCategory(category.id === 'all' ? null : category.id)}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          className={`
            px-6 py-3 rounded-full text-sm font-medium
            transition-all duration-300
            ${selectedCategory === (category.id === 'all' ? null : category.id)
              ? 'bg-[#0DAFDB] text-white shadow-lg'
              : 'bg-white text-[#0DAFDB] border-2 border-[#0DAFDB]/20 hover:border-[#0DAFDB]'
            }
          `}
        >
          {category.label}
        </motion.button>
      ))}
    </div>
  )
} 