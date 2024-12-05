'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

const languages = [
  { 
    code: 'en',
    name: 'English',
    flag: '/images/Flag_of_the_United_Kingdom_(3-5).svg.png'
  },
  { 
    code: 'kh',
    name: 'ខ្មែរ',
    flag: '/images/Flag_of_Cambodia.svg.png'
  }
]

export function LanguageSwitcher({ currentLang }: { currentLang: string }) {
  const pathname = usePathname()
  const redirectPath = pathname ? pathname.replace(`/${currentLang}`, '') : ''

  return (
    <div className="relative inline-flex items-center bg-black/10 backdrop-blur-sm rounded-full p-0.5">
      {languages.map((lang) => (
        <motion.div
          key={lang.code}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Link
            href={`/${lang.code}${redirectPath}`}
            className={`
              relative flex items-center px-3 py-1.5 min-w-[78px]
              text-xs font-medium rounded-full
              transition-all duration-300 ease-in-out
              ${currentLang === lang.code
                ? 'bg-white text-[#0DAFDB]'
                : 'text-white/90 hover:text-white hover:bg-white/10'
              }
            `}
          >
            <div className="flex items-center justify-center space-x-1.5 mx-auto">
              <div className="relative w-5 h-3.5">
                <Image
                  src={lang.flag}
                  alt={`${lang.name} flag`}
                  fill
                  className="object-cover"
                  sizes="20px"
                  priority
                />
              </div>
              <span className={`
                ${currentLang === lang.code ? 'font-semibold' : ''}
                tracking-wide
              `}>
                {lang.name}
              </span>
            </div>

            {/* Active Indicator */}
            {currentLang === lang.code && (
              <motion.div
                layoutId="activeLang"
                className="absolute inset-0 bg-white rounded-full -z-10"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
          </Link>
        </motion.div>
      ))}
    </div>
  )
}
