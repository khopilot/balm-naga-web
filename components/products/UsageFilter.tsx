'use client'

import { motion } from 'framer-motion'
import { FaRunning, FaChild, FaUserNurse, FaBrain } from 'react-icons/fa'
import { TbMoodSick, TbMassage } from 'react-icons/tb'
import { PiUserFocusBold } from 'react-icons/pi'

interface UsageFilterProps {
  selectedUsage: string | null
  onSelectUsage: (usage: string | null) => void
  lang?: string
}

export function UsageFilter({ selectedUsage, onSelectUsage, lang = 'en' }: UsageFilterProps) {
  const usageGroups = [
    {
      title: {
        en: "Who is it for?",
        kh: "សម្រាប់អ្នកណា?"
      },
      items: [
        { 
          id: 'all-people', 
          label: {
            en: 'All people',
            kh: 'មនុស្សគ្រប់រូប'
          }, 
          icon: PiUserFocusBold 
        },
        { 
          id: 'families', 
          label: {
            en: 'Families & Children',
            kh: 'គ្រួសារ និងកុមារ'
          }, 
          icon: FaChild 
        },
        { 
          id: 'sensitive-skin', 
          label: {
            en: 'Sensitive skin',
            kh: 'ស្បែកងាយរមាស់'
          }, 
          icon: FaUserNurse 
        },
      ]
    },
    {
      title: {
        en: "Type of Relief",
        kh: "ប្រភេទនៃការបំបាត់ការឈឺចាប់"
      },
      items: [
        { 
          id: 'deep-heat', 
          label: {
            en: 'Deep heat relief',
            kh: 'បំបាត់ការឈឺចាប់ដោយកំដៅ'
          }, 
          icon: TbMassage 
        },
        { 
          id: 'physical-activity', 
          label: {
            en: 'Sports & Exercise',
            kh: 'កីឡា និងហាត់ប្រាណ'
          }, 
          icon: FaRunning 
        },
        { 
          id: 'headaches', 
          label: {
            en: 'Headaches',
            kh: 'ឈឺក្បាល'
          }, 
          icon: FaBrain 
        },
      ]
    },
    {
      title: {
        en: "Specific Needs",
        kh: "តម្រូវការជាក់លាក់"
      },
      items: [
        { 
          id: 'joint-pain', 
          label: {
            en: 'Joint & Muscle Pain',
            kh: 'ឈឺសន្លាក់ និងសាច់ដុំ'
          }, 
          icon: TbMassage 
        },
        { 
          id: 'nausea', 
          label: {
            en: 'Nausea & Dizziness',
            kh: 'ចង់ក្អួត និងវិលមុខ'
          }, 
          icon: TbMoodSick 
        },
        { 
          id: 'congestion', 
          label: {
            en: 'Congestion',
            kh: 'ស្ទះច្រមុះ'
          }, 
          icon: TbMoodSick 
        },
      ]
    }
  ]

  return (
    <div className="space-y-4 sm:space-y-6">
      {usageGroups.map((group) => (
        <div key={group.title.en} className="space-y-2">
          <h4 className="text-xs sm:text-sm font-medium text-[#050707]/60">
            {group.title[lang as keyof typeof group.title]}
          </h4>
          <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
            {group.items.map((item) => {
              const Icon = item.icon
              return (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                  }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onSelectUsage(selectedUsage === item.id ? null : item.id)}
                  className={`
                    relative overflow-hidden rounded-md sm:rounded-lg
                    flex flex-col items-center justify-center
                    transition-all duration-300
                    aspect-square w-full max-w-[100px] mx-auto
                    ${selectedUsage === item.id
                      ? 'bg-gradient-to-br from-[#0DAFDB] to-[#0D8DB0] text-white shadow-md'
                      : 'bg-white hover:bg-gray-50 text-[#050707] border border-gray-100'
                    }
                  `}
                >
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-black/20" />
                    <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 to-transparent" />
                  </div>

                  <div className="relative z-10 text-center p-1 sm:p-2">
                    <Icon className={`w-4 h-4 sm:w-5 sm:h-5 mx-auto mb-1 ${
                      selectedUsage === item.id ? 'text-white' : 'text-[#0DAFDB]'
                    }`} />
                    <span className="text-[10px] sm:text-xs font-medium block leading-tight">
                      {item.label[lang as keyof typeof item.label]}
                    </span>
                  </div>

                  {selectedUsage === item.id && (
                    <motion.div
                      layoutId="selectedIndicator"
                      className="absolute bottom-0.5 sm:bottom-1 left-1/2 -translate-x-1/2 w-0.5 h-0.5 sm:w-1 sm:h-1 rounded-full bg-white"
                    />
                  )}
                </motion.button>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
} 