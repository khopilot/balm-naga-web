// components/home/FeaturedProducts.tsx
import { getProducts } from '@/lib/products'
import { getDictionary } from '@/lib/i18n/settings'
import { FeaturedProductsClient } from './FeaturedProductsClient'

export async function FeaturedProducts({ lang }: { lang: string }) {
  const dict = await getDictionary(lang)
  const allProducts = await getProducts(lang)
  
  const featuredProducts = allProducts.filter(product => 
    ['naga-balm-original', 'naga-balm-ice', 'naga-balm-fire'].includes(product.id)
  ).slice(0, 3)

  const featuredDict = {
    title: dict.products?.featured?.title || '',
    subtitle: dict.products?.featured?.subtitle || '',
    viewAll: dict.products?.featured?.viewAll || ''
  }

  return (
    <section className="relative w-full bg-white py-24 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FDD16E]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#0DAFDB]/5 rounded-full blur-3xl" />
      </div>

      {/* Main Content */}
      <div className="relative">
        {/* Title Decoration */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 flex flex-col items-center">
          <div className="w-12 h-1 bg-[#0DAFDB] mb-8" />
        </div>
        
        <FeaturedProductsClient 
          products={featuredProducts}
          lang={lang}
          dict={featuredDict}
        />

        {/* Floating Dots */}
        <div className="absolute top-20 left-10 w-3 h-3 rounded-full bg-[#0DAFDB]/20 animate-float" />
        <div className="absolute bottom-20 right-10 w-3 h-3 rounded-full bg-[#FDD16E]/40 animate-float-delayed" />
        <div className="absolute top-40 right-20 w-2 h-2 rounded-full bg-[#0DAFDB]/30 animate-float" />
        <div className="absolute bottom-40 left-20 w-2 h-2 rounded-full bg-[#FDD16E]/30 animate-float-delayed" />
      </div>
    </section>
  )
}
