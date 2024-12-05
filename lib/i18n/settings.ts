import type { Locale } from './i18n-config'

// Import dictionaries directly
import en from './dictionaries/en.json'
import kh from './dictionaries/kh.json'

// Create a simple object mapping instead of functions
const dictionaries = {
  en,
  kh,
} as const

export const getDictionary = async (locale: string) => {
  // Return the dictionary directly
  return dictionaries[locale as keyof typeof dictionaries]
} 