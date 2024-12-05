'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  category: 'balms' | 'oils' | 'sprays' | 'inhalers';
  ingredients: string[];
  keyIngredient: {
    name: string;
    benefits: string;
  };
  recommendedFor: string;
}

interface FeaturedProductsClientProps {
  products: Product[];
  lang: string;
  dict: {
    title: string;
    subtitle: string;
    viewAll: string;
  };
}

export function FeaturedProductsClient({ products, lang, dict }: FeaturedProductsClientProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-[#050707] mb-4">
          {dict.title}
        </h2>
        <div className="w-20 h-1 bg-[#0DAFDB] mx-auto mb-6" />
        <p className="text-[#050707]/70 text-lg max-w-2xl mx-auto">
          {dict.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-y-12 gap-x-8 sm:grid-cols-2 lg:grid-cols-3 mb-16">
        {products.map((product) => (
          <div
            key={product.id}
            className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl 
              transition-all duration-500 hover:-translate-y-1"
          >
            {/* Product Image Container */}
            <div className="relative w-full aspect-square overflow-hidden rounded-t-2xl 
              bg-gradient-to-br from-[#FDD16E]/10 to-[#0DAFDB]/5">
              <div className="absolute inset-0 bg-white/40" />
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain p-8 transform group-hover:scale-105 
                  transition-transform duration-500 ease-out"
              />
            </div>
            
            {/* Product Info */}
            <div className="p-8 relative">
              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#FDD16E]/10 
                  transform rotate-45 translate-x-12 -translate-y-12" />
              </div>

              <h3 className="text-xl font-bold text-[#050707] mb-3">
                {product.name}
              </h3>
              <p className="text-[#050707]/70 mb-6 line-clamp-2 leading-relaxed">
                {product.description}
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-start text-sm text-[#050707]/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0DAFDB] mr-3 mt-1.5 flex-shrink-0" />
                  <span className="leading-relaxed">{product.keyIngredient.benefits}</span>
                </div>
                <div className="flex items-start text-sm text-[#050707]/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0DAFDB] mr-3 mt-1.5 flex-shrink-0" />
                  <span className="leading-relaxed">{product.recommendedFor}</span>
                </div>
              </div>

              <Link
                href={`/${lang}/products/${product.id}`}
                className="inline-flex items-center text-[#0DAFDB] font-medium
                  hover:text-[#0DAFDB]/80 transition-colors group/link"
              >
                Learn More
                <ArrowRight className="ml-2 w-4 h-4 transform group-hover/link:translate-x-1 
                  transition-transform duration-300" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Link
          href={`/${lang}/products`}
          className="inline-flex items-center justify-center
            px-10 py-4 border-2 border-[#0DAFDB]
            text-lg font-medium rounded-xl
            text-white bg-[#0DAFDB] 
            transition-all duration-300 
            hover:bg-white hover:text-[#0DAFDB]
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0DAFDB]
            group shadow-lg hover:shadow-xl"
        >
          {dict.viewAll}
          <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 
            transition-transform duration-300" />
        </Link>
      </div>
    </div>
  )
} 