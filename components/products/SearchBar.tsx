'use client'

interface SearchBarProps {
  onSearch: (query: string) => void
  placeholder: string
}

export function SearchBar({ onSearch, placeholder }: SearchBarProps) {
  return (
    <div className="max-w-lg w-full lg:max-w-xs mb-8">
      <label htmlFor="search" className="sr-only">Search</label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg className="h-5 w-5 text-brand-blue" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
          </svg>
        </div>
        <input
          id="search"
          className="block w-full pl-10 pr-3 py-2 border border-brand-blue rounded-md leading-5 bg-brand-white placeholder-brand-blue focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red sm:text-sm"
          placeholder={placeholder}
          type="search"
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
    </div>
  )
} 