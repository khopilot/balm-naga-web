import Link from 'next/link'
import Image from 'next/image'

interface FooterProps {
  lang: string
  dict: any
}

export function Footer({ lang, dict }: FooterProps) {
  return (
    <footer className="bg-brand-black text-brand-white mt-auto">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Naga Balm</h3>
            <p className="text-sm text-gray-300 mb-4">
              Handcrafted by Coco Khmer Co., Ltd. Operating out of a purpose-built cosmetics-grade manufacturing facility in Chak Angre Krom.
            </p>
            <p className="text-sm text-gray-300">
              Petroleum-Free | 100% Natural | Handcrafted in Cambodia
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{dict.footer.quickLinks}</h3>
            <nav className="flex flex-col space-y-3">
              <Link href={`/${lang}/use-cases`} className="text-gray-300 hover:text-brand-yellow">
                {dict.navigation.useCases}
              </Link>
              <Link href={`/${lang}/products`} className="text-gray-300 hover:text-brand-yellow">
                {dict.navigation.products}
              </Link>
              <Link href={`/${lang}/about`} className="text-gray-300 hover:text-brand-yellow">
                {dict.navigation.about}
              </Link>
              <Link href={`/${lang}/contact`} className="text-gray-300 hover:text-brand-yellow">
                {dict.navigation.contact}
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{dict.footer.contact}</h3>
            <address className="not-italic">
              <p className="text-sm text-gray-300 mb-2">
                Coco Khmer Co., Ltd.<br />
                #1529, NR. 2, Chakangre Krom,<br />
                Khan Mean Chey, Phnom Penh
              </p>
            </address>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} Naga Balm. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 