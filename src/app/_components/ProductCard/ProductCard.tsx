
import { ProductType } from '@/API/types/product.type'
import Link from 'next/link'
import React from 'react'
import {
  LuEye,
  LuHeart,
  LuRefreshCw,
  LuShoppingCart,
} from 'react-icons/lu'
import ratingStars from '../Rating/Ratings'
import { Button } from '@/components/ui/button'
import AddBtn from './../addBtn/addBtn'

export default function ProductCard({ product }: { product: ProductType }) {
  
  const discount = product.priceAfterDiscount
    ? Math.round(
        ((product.price - product.priceAfterDiscount) / product.price) * 100
      )
    : 0

  return (
    <div>
      <Link href={`/productdetails/${product._id}`}>
      
    <div className="h-full min-w-0 w-full">
      <div className="group flex h-full min-h-98.5 flex-col overflow-hidden rounded-lg border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-lg">

        <div className="relative h-60 w-full shrink-0 bg-white">
            <img
              src={product.imageCover}
              alt={product.title}
              className="h-full w-full object-contain p-3 transition-transform duration-300 group-hover:scale-105"
            />

          {discount > 0 && (
            <span className="absolute left-3 top-3 rounded bg-red-500 px-2 py-1 text-xs font-medium text-white">
              -{discount}%
            </span>
          )}

          <div className="absolute right-3 top-3 flex flex-col gap-2">
            <button
              type="button"
              aria-label="Add to wishlist"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-base text-[#4A5565] shadow-sm transition hover:bg-green-600 hover:text-white"
            >
              <LuHeart />
            </button>

            <button
              type="button"
              aria-label="Compare"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-base text-[#4A5565] shadow-sm transition hover:bg-green-600 hover:text-white"
            >
              <LuRefreshCw />
            </button>

            <div
              aria-label="View product"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-base text-[#4A5565] shadow-sm transition hover:bg-green-600 hover:text-white"
            >
              <LuEye />
            </div>
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-1 p-4">

          <p className="text-xs font-medium leading-4 text-[#6A7282]">
            {product.category.name}
          </p>

          <h2 className="line-clamp-2 min-h-6 text-base font-medium leading-6 text-[#364153]">
              {product.title}
          </h2>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-0.5 text-base text-[#FCC800]">
              {ratingStars(product.ratingsAverage)}
            </div>

            <span className="text-xs leading-4 text-[#6A7282]">
              {product.ratingsAverage} ({product.ratingsQuantity})
            </span>
          </div>

          {/* Price and Cart */}
          <div className="mt-auto flex items-center justify-between gap-2 pt-2">

            <div className="flex min-w-0 flex-wrap items-baseline gap-x-2">
              {product.priceAfterDiscount ? (
                <>
                  <span className="text-lg font-bold leading-7 text-[#16A34A]">
                    {product.priceAfterDiscount} EGP
                  </span>

                  <span className="text-sm font-medium text-[#6A7282] line-through">
                    {product.price} EGP
                  </span>
                </>
              ) : (
                <span className="text-lg font-bold leading-7 text-[#1E2939]">
                  {product.price} EGP
                </span>
              )}
            </div>

            <AddBtn/>
          </div>
        </div>
      </div>
    </div>
  
      </Link>
    </div>
  )
}
