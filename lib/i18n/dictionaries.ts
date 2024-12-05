import type { Locale } from './i18n-config'

// Import dictionaries
import en from '@/dictionaries/en.json'
import kh from '@/dictionaries/kh.json'

const dictionaries = {
  en,
  kh,
}

export const getDictionary = async (locale: Locale) => {
  return dictionaries[locale]
} 