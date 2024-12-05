'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { LanguageSwitcher } from './LanguageSwitcher'
import { X } from 'lucide-react'
import { IconType } from 'react-icons'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  lang: string
  navigation: Array<{
    href: string
    label: string
    icon: IconType
    description: string
  }>
  pathname: string
  currentLang: string
}

export default function MobileMenu({
  isOpen,
  onClose,
  navigation,
  pathname,
  currentLang
}: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-[72px] bg-[#0DAFDB]/95 backdrop-blur-lg z-50 border-t border-white/10"
          >
            <div className="max-w-7xl mx-auto px-4 py-8">
              <div className="grid gap-6">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onClose}
                    className={`flex items-center p-4 rounded-lg transition-colors
                      ${pathname === item.href ? 'bg-white/20' : 'hover:bg-white/10'}`}
                  >
                    <item.icon className="h-6 w-6 text-white" />
                    <div className="ml-4">
                      <p className="text-white font-medium">{item.label}</p>
                      <p className="text-white/60 text-sm">{item.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-white/10">
                <LanguageSwitcher currentLang={currentLang} />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40"
            onClick={onClose}
          />
        </>
      )}
    </AnimatePresence>
  )
} 