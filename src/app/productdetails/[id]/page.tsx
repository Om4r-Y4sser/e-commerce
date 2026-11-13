
import { getCatsProduct, getSingleProduct } from '@/API/services/routemisr.services'
import { ProductType } from '@/API/types/product.type'
import ratingStars from '@/app/_components/Rating/Ratings'
import YouMayalsoLike from '@/app/_components/YouMayalsoLike/YouMayalsoLike'

import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

import { Button } from '@/components/ui/button'

import {
  ShoppingCart,
  Heart,
  Truck,
  RotateCcw,
  ShieldCheck,
  Minus,
  Plus,
} from 'lucide-react'

export default async function ProductDetails(props: {
  params: Promise<{ id: string }>
}) {
  const params = await props.params
  const id = params.id

  const Product = await getSingleProduct(id)

  const productCategory = Product?.category._id

  async function Categorytoarray(
    id = productCategory
  ): Promise<ProductType[] | undefined> {
    if (!id) return undefined

    const Catsproduct = await getCatsProduct(id)
    return Catsproduct
  }

  const relatedProduct = await Categorytoarray()

  if (!Product) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center px-4">
        <p className="text-lg font-medium text-[#6A7282]">
          Product not found.
        </p>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-white pb-16">

      {/* Main Product Section */}
      <section className="mx-auto w-full max-w-[1504px] px-4 py-8 sm:py-10">

        {/* Product Layout */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,0.35fr)_minmax(0,1fr)] lg:gap-8">

          {/* Product Images */}
          <div className="h-fit rounded-xl bg-white p-4 shadow-sm ring-1 ring-gray-100">

            {/* Main Image */}
            <div className="flex h-[360px] items-center justify-center overflow-hidden rounded-lg bg-white sm:h-[440px] lg:h-[469px]">
              <img
                src={Product.imageCover}
                alt={Product.title}
                className="h-full w-full object-contain p-2"
              />
            </div>

            {/* Image Thumbnails */}
            <div className="mt-4 grid grid-cols-4 gap-2">
              {Product.images.map((src) => (
                <div
                  key={src}
                  className="flex aspect-[3/4] cursor-pointer items-center justify-center overflow-hidden rounded-md border border-gray-200 bg-white p-1 transition hover:border-[#16A34A]"
                >
                  <img
                    src={src}
                    alt={Product.title}
                    className="h-full w-full object-contain"
                  />
                </div>
              ))}
            </div>

          </div>

          {/* Product Information */}
          <div className="flex flex-col rounded-xl bg-white p-5 shadow-sm ring-1 ring-gray-100 sm:p-6 lg:p-8">

            {/* Category Badge */}
            <div className="mb-5 flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-[#F0FDF4] px-3 py-1.5 text-xs font-medium text-[#15803D]">
                {Product.category.name}
              </span>
            </div>

            {/* Product Title */}
            <h1 className="text-2xl font-bold leading-tight text-[#101828] sm:text-3xl">
              {Product.title}
            </h1>

            {/* Rating */}
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-1 text-lg text-[#FCC800]">
                {ratingStars(Product.ratingsAverage)}
              </div>

              <span className="text-sm font-medium text-[#4A5565]">
                {Product.ratingsAverage} ({Product.ratingsQuantity} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="mt-5 flex flex-wrap items-center gap-3">
              {Product.priceAfterDiscount ? (
                <>
                  <span className="text-3xl font-bold text-[#101828]">
                    {Product.priceAfterDiscount} EGP
                  </span>

                  <span className="text-lg text-[#6A7282] line-through">
                    {Product.price} EGP
                  </span>

                  <span className="rounded-full bg-red-50 px-3 py-1 text-sm font-semibold text-red-500">
                    Sale
                  </span>
                </>
              ) : (
                <span className="text-3xl font-bold text-[#101828]">
                  {Product.price} EGP
                </span>
              )}
            </div>

            {/* Divider */}
            <div className="my-6 border-t border-gray-100" />

            {/* Description */}
            <div className="space-y-2">
              <h2 className="text-base font-semibold text-[#101828]">
                Description
              </h2>

              <p className="text-sm leading-7 text-[#4A5565] sm:text-base">
                {Product.description}
              </p>
            </div>

            {/* Divider */}
            <div className="my-6 border-t border-gray-100" />

            {/* Quantity */}
            <div className="mb-6 space-y-2">
              <label className="text-sm font-medium text-[#364153]">
                Quantity
              </label>

              {/* Visual placeholder - quantity logic not implemented */}
              <div className="flex h-[52px] w-fit items-center overflow-hidden rounded-lg border-2 border-[#E5E7EB]">
                <div className="flex h-full w-[52px] items-center justify-center text-[#4A5565] opacity-50">
                  <Minus size={18} />
                </div>

                <span className="flex h-full w-[64px] items-center justify-center border-x border-gray-200 text-lg font-medium text-[#364153]">
                  1
                </span>

                <div className="flex h-full w-[52px] items-center justify-center text-[#4A5565]">
                  <Plus size={18} />
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3 sm:flex-row">

              <Button
                type="button"
                className="h-[52px] flex-1 rounded-xl bg-[#16A34A] text-base font-medium text-white shadow-lg shadow-green-600/20 hover:bg-green-700"
              >
                <ShoppingCart size={20} />
                Add to Cart
              </Button>

              <Button
                type="button"
                className="h-[52px] flex-1 rounded-xl bg-[#101828] text-base font-medium text-white hover:bg-gray-800"
              >
                Buy Now
              </Button>

            </div>

            {/* Wishlist */}
            <Button
              type="button"
              variant="outline"
              className="mt-3 h-[52px] w-full rounded-xl border-2 border-[#E5E7EB] text-base font-medium text-[#364153] hover:bg-gray-50"
            >
              <Heart size={20} />
              Add to Wishlist
            </Button>

            {/* Service Benefits */}
            <div className="mt-6 grid grid-cols-1 gap-4 border-t border-gray-100 pt-6 sm:grid-cols-3">

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#DCFCE7] text-[#16A34A]">
                  <Truck size={20} />
                </div>

                <div>
                  <h3 className="text-sm font-medium text-[#101828]">
                    Free Delivery
                  </h3>
                  <p className="text-xs text-[#6A7282]">
                    Orders over 500 EGP
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#DCFCE7] text-[#16A34A]">
                  <RotateCcw size={20} />
                </div>

                <div>
                  <h3 className="text-sm font-medium text-[#101828]">
                    30 Days Return
                  </h3>
                  <p className="text-xs text-[#6A7282]">
                    Money back
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#DCFCE7] text-[#16A34A]">
                  <ShieldCheck size={20} />
                </div>

                <div>
                  <h3 className="text-sm font-medium text-[#101828]">
                    Secure Payment
                  </h3>
                  <p className="text-xs text-[#6A7282]">
                    100% Protected
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Product Details Tabs */}
      <section className="mx-auto w-full max-w-[1504px] px-4 pb-12">

        <div className="overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-gray-100">

          {/* Tabs - visual only */}
          <div className="flex overflow-x-auto border-b border-gray-200">

            <div className="flex shrink-0 items-center gap-2 border-b-2 border-[#16A34A] bg-[#F0FDF4]/50 px-5 py-4 text-sm font-medium text-[#16A34A] sm:px-6 sm:text-base">
              Product Details
            </div>

            <div className="flex shrink-0 items-center px-5 py-4 text-sm font-medium text-[#4A5565] sm:px-6 sm:text-base">
              Reviews ({Product.ratingsQuantity})
            </div>

            <div className="flex shrink-0 items-center px-5 py-4 text-sm font-medium text-[#4A5565] sm:px-6 sm:text-base">
              Shipping & Returns
            </div>

          </div>

          {/* Product Details Content */}
          <div className="space-y-6 p-5 sm:p-6 lg:p-8">

            <div className="space-y-3">
              <h2 className="text-lg font-semibold text-[#101828]">
                About this Product
              </h2>

              <p className="text-sm leading-7 text-[#4A5565] sm:text-base">
                {Product.description}
              </p>
            </div>

            {/* Information Cards */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

              <div className="space-y-4 rounded-lg bg-[#F9FAFB] p-4 sm:p-5">
                <h3 className="font-medium text-[#101828]">
                  Product Information
                </h3>

                <div className="flex items-center justify-between gap-3 text-sm">
                  <span className="text-[#6A7282]">Category</span>
                  <span className="text-right font-medium text-[#101828]">
                    {Product.category.name}
                  </span>
                </div>

                <div className="flex items-center justify-between gap-3 text-sm">
                  <span className="text-[#6A7282]">Rating</span>
                  <span className="font-medium text-[#101828]">
                    {Product.ratingsAverage} / 5
                  </span>
                </div>

                <div className="flex items-center justify-between gap-3 text-sm">
                  <span className="text-[#6A7282]">Reviews</span>
                  <span className="font-medium text-[#101828]">
                    {Product.ratingsQuantity}
                  </span>
                </div>
              </div>

              <div className="space-y-4 rounded-lg bg-[#F9FAFB] p-4 sm:p-5">
                <h3 className="font-medium text-[#101828]">
                  Key Details
                </h3>

                <p className="text-sm leading-7 text-[#4A5565]">
                  {Product.title}
                </p>

                <p className="text-sm leading-7 text-[#4A5565]">
                  {Product.description}
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="mx-auto w-full max-w-[1504px] px-4 pb-16">

        <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="mb-2 text-sm font-medium text-[#16A34A]">
              DISCOVER MORE
            </p>

            <h2 className="text-2xl font-bold text-[#101828] sm:text-3xl">
              You May Also Like
            </h2>

            <p className="mt-2 text-sm text-[#6A7282]">
              Explore more products from the same category.
            </p>
          </div>
        </div>

        <Carousel
          opts={{
            align: 'start',
            loop: false,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-3 py-2">
            {relatedProduct?.map((related) => (
              <YouMayalsoLike
                key={related.id}
                related={related}
              />
            ))}
          </CarouselContent>

          <div className="mt-5 flex justify-end gap-2">
            <CarouselPrevious className="static translate-y-0" />
            <CarouselNext className="static translate-y-0" />
          </div>
        </Carousel>

      </section>

    </main>
  )
}
