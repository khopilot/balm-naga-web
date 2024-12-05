'use client'

import { Newsletter } from '@/components/common/Newsletter'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface ContactDict {
  contact: {
    title: string
    description: string
    address: string
    form: {
      name: string
      email: string
      message: string
      submit: string
    }
  }
  newsletter: {
    title: string
    description: string
    placeholder: string
    button: string
    success: string
    error: string
  }
}

export function ContactContent({ dict }: { dict: ContactDict }) {
  if (!dict?.contact) {
    return null;
  }

  return (
    <div className="bg-brand-white">
      {/* Hero Section */}
      <div className="relative h-screen bg-brand-yellow">
        <div className="absolute inset-0">
          <Image
            src="/images/contact-hero.jpg"
            alt="Contact Us"
            fill
            className="object-cover opacity-50"
            priority
          />
        </div>
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-brand-black max-w-4xl"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              {dict.contact.title}
            </motion.h1>
          </div>
        </div>
      </div>

      {/* Contact Form and Info Section */}
      <div className="relative bg-brand-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-16 py-16"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  delayChildren: 0.5,
                  staggerChildren: 0.2
                }
              }
            }}
          >
            {/* Contact Information */}
            <motion.div
              className="space-y-8"
              variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }}
            >
              <h2 className="text-3xl font-bold text-brand-black">{dict.contact.address}</h2>
              <address className="not-italic text-lg text-brand-black">
                Coco Khmer Co., Ltd.<br />
                #1529, NR. 2, Chakangre Krom,<br />
                Khan Mean Chey, Phnom Penh
              </address>

              <div className="space-y-4">
                <a href="tel:+85512345678" className="block text-brand-blue hover:text-brand-red">
                  +855 12 345 678
                </a>
                <a href="mailto:info@nagabalm.com" className="block text-brand-blue hover:text-brand-red">
                  info@nagabalm.com
                </a>
              </div>

              {/* Map */}
              <div className="mt-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3909.913082390646!2d104.91241631478882!3d11.528679791807433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109517bf7a8c50f%3A0x3136c84a78a3c6f9!2sChak%20Angrae%20Kraom%2C%20Phnom%20Penh!5e0!3m2!1sen!2skh!4v1635825896018!5m2!1sen!2skh"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="bg-white p-8 rounded-lg shadow-lg"
              variants={{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } }}
            >
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-brand-black">
                    {dict.contact.form.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full rounded-md border-brand-blue shadow-sm focus:border-brand-red focus:ring-brand-red"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-brand-black">
                    {dict.contact.form.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full rounded-md border-brand-blue shadow-sm focus:border-brand-red focus:ring-brand-red"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-brand-black">
                    {dict.contact.form.message}
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md border-brand-blue shadow-sm focus:border-brand-red focus:ring-brand-red"
                    placeholder="Your Message"
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-brand-blue text-brand-white py-3 px-4 rounded-md hover:bg-brand-red focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-blue"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {dict.contact.form.submit}
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-brand-blue">
        <Newsletter dict={dict.newsletter} />
      </div>
    </div>
  )
} 