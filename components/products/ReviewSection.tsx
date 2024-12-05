'use client'

import { useState } from 'react'
import { StarIcon } from '@heroicons/react/24/solid'

export interface Review {
  id: string
  rating: number
  comment: string
  author: string
  date: string
}

interface ReviewSectionProps {
  productId: string
  reviews: Review[]
  dict: any
}

export function ReviewSection({ productId, reviews: initialReviews, dict }: ReviewSectionProps) {
  const [reviews, setReviews] = useState<Review[]>(initialReviews)
  const [rating, setRating] = useState(5)
  const [comment, setComment] = useState('')
  const [author, setAuthor] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // TODO: Implement review submission API
    const newReview: Review = {
      id: Date.now().toString(),
      rating,
      comment,
      author,
      date: new Date().toISOString()
    }

    setReviews([newReview, ...reviews])
    setComment('')
    setAuthor('')
    setRating(5)
  }

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold text-brand-black">{dict.reviews.title}</h2>
      
      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <div>
          <label className="block text-sm font-medium text-brand-black">
            {dict.reviews.rating}
          </label>
          <div className="mt-1 flex items-center">
            {[1, 2, 3, 4, 5].map((star) => (
              <StarIcon
                key={star}
                className={`h-5 w-5 cursor-pointer ${
                  star <= rating ? 'text-brand-yellow' : 'text-gray-300'
                }`}
                onClick={() => setRating(star)}
              />
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="comment" className="block text-sm font-medium text-brand-black">
            {dict.reviews.comment}
          </label>
          <textarea
            id="comment"
            required
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="mt-1 block w-full rounded-md border-brand-blue shadow-sm focus:border-brand-blue focus:ring-brand-blue"
            rows={4}
          />
        </div>

        <div>
          <label htmlFor="author" className="block text-sm font-medium text-brand-black">
            {dict.reviews.name}
          </label>
          <input
            type="text"
            id="author"
            required
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="mt-1 block w-full rounded-md border-brand-blue shadow-sm focus:border-brand-blue focus:ring-brand-blue"
          />
        </div>

        <button
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-brand-white bg-brand-blue hover:bg-brand-red focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-blue"
        >
          {dict.reviews.submit}
        </button>
      </form>

      <div className="mt-8 space-y-8">
        {reviews.map((review) => (
          <div key={review.id} className="border-t border-brand-blue pt-8">
            <div className="flex items-center">
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <StarIcon
                    key={star}
                    className={`h-5 w-5 ${
                      star <= review.rating ? 'text-brand-yellow' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <p className="ml-4 text-sm text-brand-black">{review.author}</p>
              <p className="ml-4 text-sm text-brand-blue">
                {new Date(review.date).toLocaleDateString()}
              </p>
            </div>
            <p className="mt-4 text-brand-black">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  )
} 