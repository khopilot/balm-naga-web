'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { LanguageSwitcher } from './LanguageSwitcher'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import MobileMenu from './MobileMenu'
import dynamic from 'next/dynamic'
import {
  FaHandHoldingHeart,
  FaBoxOpen,
  FaInfoCircle,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedin
} from 'react-icons/fa'

const MotionNav = motion.nav

const LogoSection = ({ lang }: { lang: string }) => {
  return (
    <Link href={`/${lang}`} className="flex items-center space-x-2">
      <div className="relative w-32 h-12">
        <Image
          src="/images/Naga Balm__SecondaryLogomark_Primary.png"
          alt="Naga Balm Logo"
          fill
          className="object-contain"
          priority
          sizes="(max-width: 768px) 128px, 128px"
        />
      </div>
    </Link>
  )
}

interface NavbarProps {
  lang: string
  dict: {
    navigation: {
      useCases: string
      products: string
      about: string
      contact: string
    }
  }
  pathname: string
}

export function Navbar({
  lang,
  dict,
  pathname
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { href: `/${lang}/use-cases`, label: dict.navigation.useCases, icon: FaHandHoldingHeart, description: 'Essential remedies for every need' },
    { href: `/${lang}/products`, label: dict.navigation.products, icon: FaBoxOpen, description: 'Discover our healing balms' },
    { href: `/${lang}/about`, label: dict.navigation.about, icon: FaInfoCircle, description: 'Our story and values' },
    { href: `/${lang}/contact`, label: dict.navigation.contact, icon: FaEnvelope, description: 'Get in touch with us' },
  ]

  const socialLinks = [
    { icon: FaFacebookF, href: '#', label: 'Facebook' },
    { icon: FaInstagram, href: '#', label: 'Instagram' },
    { icon: FaLinkedin, href: '#', label: 'LinkedIn' }
  ]

  if (!isMounted) {
    return null
  }

  return (
    <MotionNav
      className={`fixed top-0 w-full z-50 transition-all duration-500
        ${isScrolled 
          ? 'backdrop-blur-lg bg-transparent py-4' 
          : 'bg-[#FDD16E] py-6'
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <LogoSection lang={lang} />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-white hover:text-[#FDD16E] px-4 py-2 text-sm font-medium transition-colors duration-200
                  ${pathname === item.href ? 'text-[#FDD16E]' : ''}`}
              >
                {item.label}
              </Link>
            ))}
            
            <div className="ml-4">
              <LanguageSwitcher currentLang={lang} />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full border-2 border-[#050707] bg-[#050707] transition-all duration-300"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5 text-white" />
            ) : (
              <Menu className="h-5 w-5 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Enhanced App-like Interface */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[#050707] z-40 md:hidden"
          >
            {/* Header */}
            <div className="absolute top-0 left-0 right-0 px-6 py-4 bg-[#0DAFDB] flex justify-between items-center">
              <div className="relative w-28 h-10">
                <Image
                  src="/images/Naga Balm__SecondaryLogomark_Primary.png"
                  alt="Naga Balm Logo"
                  fill
                  className="object-contain brightness-0 invert"
                  priority
                />
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-white bg-[#050707]"
              >
                <X className="h-5 w-5 text-white" />
              </button>
            </div>

            <div className="h-full flex flex-col pt-24 pb-8 px-6">
              {/* Navigation Grid */}
              <div className="flex-1 flex items-center">
                <div className="grid grid-cols-2 gap-4">
                  {navigation.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`
                          block aspect-square p-6 rounded-2xl relative overflow-hidden
                          bg-white/10 hover:bg-white/20 
                          backdrop-blur-sm 
                          transition-all duration-300
                          ${pathname === item.href ? 'bg-white/20' : ''}
                        `}
                      >
                        {/* Background Image */}
                        <div className="absolute inset-0">
                          <Image
                            src={
                              item.href.includes('use-cases') 
                                ? "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800" // Massage/healing
                                : item.href.includes('products') 
                                ? "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=800" // Natural products
                                : item.href.includes('about')
                                ? "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=800" // New about image
                                : "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800" // Contact/desk
                            }
                            alt=""
                            fill
                            className="object-cover opacity-50"
                          />
                        </div>
                        {/* Content */}
                        <div className="relative z-10 h-full flex flex-col items-center justify-center">
                          <div className="relative w-12 h-12 mb-4">
                            <item.icon className="h-8 w-8 text-white drop-shadow-lg" />
                          </div>
                          <span className="text-white font-medium text-lg mb-2 drop-shadow-lg">
                            {item.label}
                          </span>
                          <span className="text-white font-medium text-sm drop-shadow-lg">
                            {item.description}
                          </span>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Bottom Section */}
              <div className="space-y-8 mt-8">
                {/* Language Switcher */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <LanguageSwitcher currentLang={lang} />
                </div>

                {/* Social Links */}
                <div className="flex justify-center space-x-6">
                  {socialLinks.map(({ icon: Icon, href, label }) => (
                    <motion.a
                      key={label}
                      href={href}
                      className="w-12 h-12 flex items-center justify-center rounded-full 
                        bg-white/10 backdrop-blur-sm transition-all duration-300"
                      aria-label={label}
                      whileHover={{ 
                        scale: 1.1, 
                        rotate: 10, 
                        backgroundColor: '#fff', 
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)' 
                      }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Icon 
                        className="h-6 w-6 text-white" 
                        style={{
                          color: label === 'Facebook' ? '#1877F2' : 
                                 label === 'Instagram' ? '#E4405F' : 
                                 '#0A66C2' // LinkedIn
                        }}
                      />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </MotionNav>
  )
}
