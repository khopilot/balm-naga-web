'use client'

import { ProductGrid } from '@/components/products/ProductGrid'
import { PageLayout } from '@/components/common/PageLayout'
import { getDictionary } from '@/lib/i18n/settings'
import { getProducts } from '@/lib/products'

export default async function ProductsPage({
  params: { lang }
}: {
  params: { lang: string }
}) {
  const dict = await getDictionary(lang)
  const products = await getProducts(lang)

  return (
    <PageLayout dict={dict}>
      <div className="bg-brand-yellow">
        <div className="max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-brand-black sm:text-5xl lg:text-6xl">
            {dict.products.title}
          </h1>
          <p className="mt-6 text-xl text-brand-black max-w-3xl">
            {dict.products.description}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <ProductGrid 
          lang={lang}
          initialProducts={products}
          dict={dict}
        />
      </div>
    </PageLayout>
  )
} 