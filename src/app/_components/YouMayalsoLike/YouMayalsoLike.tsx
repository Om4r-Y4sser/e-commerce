
import Link from 'next/link'
import { ProductType } from '@/API/types/product.type'
import { CarouselItem } from '@/components/ui/carousel'
import ratingStars from '@/app/_components/Rating/Ratings'

export default function YouMayalsoLike({
  related,
}: {
  related: ProductType
}) {
  return (
    <CarouselItem className="basis-[288px] max-w-[85%] pl-3">

      <Link
        href={`/productdetails/${related.id}`}
        className="group flex h-[394px] flex-col overflow-hidden rounded-lg border border-[#E5E7EB] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-lg"
      >

        {/* Product Image */}
        <div className="relative flex h-[240px] shrink-0 items-center justify-center overflow-hidden bg-white p-3">

          <img
            src={related.imageCover}
            alt={related.title}
            className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
          />

        </div>

        {/* Product Information */}
        <div className="flex flex-1 flex-col gap-2 p-4">

          {/* Category */}
          <p className="text-xs font-medium text-[#6A7282]">
            {related.category.name}
          </p>

          {/* Title */}
          <h3 className="line-clamp-2 text-base font-semibold leading-6 text-[#364153] transition-colors group-hover:text-[#16A34A]">
            {related.title}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-2">

            <div className="flex items-center gap-0.5 text-sm text-[#FCC800]">
              {ratingStars(related.ratingsAverage)}
            </div>

            <span className="text-xs text-[#6A7282]">
              {related.ratingsAverage} ({related.ratingsQuantity})
            </span>

          </div>

          {/* Price */}
          <div className="mt-auto flex flex-wrap items-baseline gap-2">

            {related.priceAfterDiscount ? (
              <>
                <span className="text-lg font-bold text-[#16A34A]">
                  {related.priceAfterDiscount} EGP
                </span>

                <span className="text-sm text-[#6A7282] line-through">
                  {related.price} EGP
                </span>
              </>
            ) : (
              <span className="text-lg font-bold text-[#101828]">
                {related.price} EGP
              </span>
            )}

          </div>

        </div>

      </Link>

    </CarouselItem>
  )
}
