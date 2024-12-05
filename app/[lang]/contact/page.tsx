// components/ContactPageContent.tsx

'use client'

import { getDictionary } from '@/lib/i18n/settings'
import { ContactContent } from '@/components/contact/ContactContent'

export default async function ContactPage({
  params: { lang }
}: {
  params: { lang: string }
}) {
  const dict = await getDictionary(lang)
  
  return <ContactContent dict={dict} />
}
