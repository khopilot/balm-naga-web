import { getProduct } from '@/lib/products'
import { getDictionary } from '@/lib/i18n/settings'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { SocialShare } from '@/components/products/SocialShare'
import { ReviewSection } from '@/components/products/ReviewSection'
import type { Review } from '@/components/products/ReviewSection'

export default async function ProductPage({
  params: { lang, product }
}: {
  params: { lang: string; product: string }
}) {
  const dict = await getDictionary(lang)
  const productData = await getProduct(product, lang)

  if (!productData) {
    notFound()
  }

  // In a real app, you would fetch this from an API
  const mockReviews: Review[] = []

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12">
          {/* Product Image */}
          <div className="relative aspect-square bg-[#FDD16E]/10 rounded-2xl overflow-hidden">
            <Image
              src={productData.image}
              alt={productData.name}
              fill
              className="object-contain p-8"
            />
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-4xl font-bold text-brand-black">
              {productData.name}
            </h1>
            <div className="mt-3">
              <p className="text-3xl text-brand-blue font-bold">$12.99</p>
            </div>
            <div className="mt-6">
              <p className="text-base text-brand-black">{productData.description}</p>
            </div>

            <div className="mt-8 space-y-6">
              <button className="w-full bg-brand-blue hover:bg-brand-red text-brand-white py-3 px-8 rounded-md transition-colors duration-200">
                Add to Cart
              </button>
              
              <div className="pt-6 border-t border-brand-yellow">
                <SocialShare 
                  url={`https://nagabalm.com/${lang}/products/${product}`} 
                  title={productData.name}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 border-t border-brand-yellow pt-16">
        <ReviewSection
          productId={product}
          reviews={mockReviews}
          dict={dict}
        />
      </div>
    </div>
  )
} 