import { getDictionary } from '@/lib/i18n/settings'
import { PageLayout } from '@/components/common/PageLayout'
import Image from 'next/image'

export default async function UseCasesPage({
  params: { lang }
}: {
  params: { lang: string }
}) {
  const dict = await getDictionary(lang)

  return (
    <PageLayout dict={dict}>
      {/* Hero Section */}
      <div className="min-h-screen flex items-center bg-brand-yellow">
        <div className="max-w-7xl mx-auto px-4 sm:py-24 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-brand-black">
            {dict.useCases.title}
          </h1>
          <p className="mt-4 text-xl text-brand-black">
            {dict.useCases.description}
          </p>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="min-h-screen flex items-center bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-[#050707]/80 leading-relaxed">
              Each Naga Balm product is carefully formulated for specific uses, 
              providing targeted relief for different conditions. Discover the 
              best way to use our products for your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases Grid */}
      <div className="min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dict.useCases.cases.map((useCase, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-sm p-8 border-2 border-brand-yellow hover:border-brand-blue transition-colors duration-300"
              >
                <h2 className="text-2xl font-bold text-brand-black mb-4">
                  {useCase.title}
                </h2>
                <p className="text-brand-black">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  )
} 