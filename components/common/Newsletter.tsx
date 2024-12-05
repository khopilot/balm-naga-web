'use client'

import { useState } from 'react'

interface NewsletterProps {
  dict: {
    title: string
    description: string
    placeholder: string
    button: string
    success: string
    error: string
  }
}

export function Newsletter({ dict }: NewsletterProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      // TODO: Implement newsletter subscription API
      await new Promise(resolve => setTimeout(resolve, 1000))
      setStatus('success')
      setEmail('')
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:py-10 lg:px-8">
      <div className="px-4 py-4 rounded-lg md:py-6 md:px-8 lg:py-8 lg:px-10 xl:flex xl:items-center">
        <div className="xl:w-0 xl:flex-1">
          <h2 className="text-2xl font-extrabold tracking-tight text-brand-white sm:text-3xl">
            {dict.title}
          </h2>
          <p className="mt-2 max-w-3xl text-lg leading-6 text-brand-white opacity-90">
            {dict.description}
          </p>
        </div>
        <div className="mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8">
          <form onSubmit={handleSubmit} className="sm:flex">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-5 py-3 placeholder-gray-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-blue focus:ring-brand-white focus:border-brand-white rounded-md"
              placeholder={dict.placeholder}
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="mt-3 w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-brand-blue bg-brand-white hover:bg-brand-yellow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-blue focus:ring-brand-white sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
            >
              {dict.button}
            </button>
          </form>
          {status === 'success' && (
            <p className="mt-3 text-sm text-brand-yellow">{dict.success}</p>
          )}
          {status === 'error' && (
            <p className="mt-3 text-sm text-brand-red">{dict.error}</p>
          )}
        </div>
      </div>
    </div>
  )
} 