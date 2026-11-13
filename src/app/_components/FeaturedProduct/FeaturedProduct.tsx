
import React from 'react'
import { getAllProduct } from '@/API/services/routemisr.services'
import ProductCard from './../ProductCard/ProductCard'
import Link from 'next/link'

export default async function FeaturedProduct() {
  const allProducts = await getAllProduct()

  return (
    <section className="mx-auto w-full max-w-[1536px] px-4 py-12 md:px-8 lg:py-16">

      {/* Section Heading */}
      <div className="mb-8 flex items-center gap-3">
        <div className="h-8 w-1.5 shrink-0 rounded-full bg-gradient-to-b from-[#00BC7D] to-[#007A55]" />

        <h2 className="text-3xl font-bold leading-9 text-[#1E2939]">
          Featured Products
        </h2>
      </div>

      {/* Responsive Products Grid */}
      <div className="grid grid-cols-1 gap-6 min-[768px]:grid-cols-4 min-[1280px]:grid-cols-5">
        {allProducts?.map((product) => (
          <div  key={product.id}>
          <ProductCard
            
            product={product}
          />
          </div>
        ))}
      </div>

    </section>
  )
}
