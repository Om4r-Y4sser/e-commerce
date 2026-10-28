"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import {
  LuChevronDown,
  LuCircleUser,
  LuGift,
  LuHeadset,
  LuHeart,
  LuLogOut,
  LuMail,
  LuMenu,
  LuPhone,
  LuSearch,
  LuShoppingCart,
  LuUser,
  LuUserPlus,
  LuX,
} from "react-icons/lu"
import { FaTruck } from "react-icons/fa"
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet"

export default function Navbar() {
  const Links = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
    { label: "Categories", href: "/categories" },
    { label: "Brands", href: "/brands" },
    { label: "Support", href: "/contact" },
    { label: "Wishlist", href: "/wishlist" },
    { label: "Cart", href: "/cart" },
  ]
  const mainLinks = Links.slice(0, 4)

  const [isOpen, setisOpen] = useState(false)
  const isLoggedIn = true
  const userName = "Usama"

  return (
    <header className='sticky top-0 z-50 bg-white font-medium'>
      <div className='hidden border-b border-gray-200 bg-white lg:block'>
        <div className='mx-auto flex h-10 max-w-[1536px] items-center justify-between gap-6 px-4 text-sm leading-5 text-gray-500'>
          <div className='flex items-center gap-6'>
            <span className='flex items-center gap-2'>
              <FaTruck className='text-sm text-green-600' />
              <span>Free Shipping on Orders 500 EGP</span>
            </span>
            <span className='flex items-center gap-2'>
              <LuGift className='text-sm text-green-600' />
              <span>New Arrivals Daily</span>
            </span>
          </div>

          <div className='flex items-center gap-6'>
            <div className='flex items-center gap-4'>
              <a href='tel:+18001234567' className='flex items-center gap-1.5 hover:text-green-600'>
                <LuPhone className='text-sm' />
                <span>+1 (800) 123-4567</span>
              </a>
              <a href='mailto:support@freshcart.com' className='flex items-center gap-1.5 hover:text-green-600'>
                <LuMail className='text-sm' />
                <span>support@freshcart.com</span>
              </a>
            </div>

            <span className='h-4 w-px bg-gray-200' />

            {isLoggedIn ? (
              <div className='flex items-center gap-4 text-gray-600'>
                <span className='flex items-center gap-1.5'>
                  <LuUser className='text-sm' />
                  <span>{userName}</span>
                </span>
                <button className='flex items-center gap-1.5 hover:text-green-600'>
                  <LuLogOut className='text-sm' />
                  <span>Sign Out</span>
                </button>
              </div>
            ) : (
              <div className='flex items-center gap-4 text-gray-600'>
                <Link href='/login' className='flex items-center gap-1.5 hover:text-green-600'>
                  <LuUser className='text-sm' />
                  <span>Sign In</span>
                </Link>
                <Link href='/register' className='flex items-center gap-1.5 hover:text-green-600'>
                  <LuUserPlus className='text-sm' />
                  <span>Sign Up</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className='bg-white shadow-sm'>
        <div className='mx-auto flex h-16 max-w-[1536px] items-center justify-between gap-8 px-4 md:h-[72px]'>
          <Link href='/' className='shrink-0'>
            <Image
              src='/freshcart-logo.49f1b44d.svg'
              alt='FreshCart'
              width={165}
              height={32}
              priority
              className='h-6 w-auto md:h-8'
            />
          </Link>

          <form className='relative hidden max-w-2xl flex-1 md:block'>
            <input
              type='text'
              placeholder='Search for products, brands and more...'
              className='h-[46px] w-full rounded-full border border-gray-200 bg-gray-50/50 py-3 pl-5 pr-12 text-sm font-medium text-gray-700 outline-none placeholder:text-gray-700/50 focus:border-green-600'
            />
            <button
              type='submit'
              className='absolute right-1.5 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-green-600 text-white transition hover:bg-green-700'
            >
              <LuSearch className='text-base' />
            </button>
          </form>

          <nav className='hidden items-center gap-6 xl:flex'>
            {mainLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className='flex items-center gap-1.5 py-2 text-base leading-6 text-gray-700 transition hover:text-green-600'
              >
                {link.label}
                {link.label === "Categories" && <LuChevronDown className='text-xs' />}
              </Link>
            ))}
          </nav>

          <div className='flex items-center gap-1 md:gap-2'>
            <div className='hidden pr-2 lg:block'>
              <Link href='/contact' className='flex items-center gap-2 pr-3'>
                <span className='flex h-10 w-10 items-center justify-center rounded-full bg-green-50 text-green-600'>
                  <LuHeadset className='text-xl' />
                </span>
                <span className='flex flex-col text-xs leading-4'>
                  <span className='text-gray-400'>Support</span>
                  <span className='font-semibold text-gray-700'>24/7 Help</span>
                </span>
              </Link>
            </div>

            <Link
              href='/wishlist'
              className='rounded-full p-2.5 text-xl text-gray-500 transition hover:text-green-600'
              aria-label='Wishlist'
            >
              <LuHeart />
            </Link>
            <Link
              href='/cart'
              className='rounded-full p-2.5 text-xl text-gray-500 transition hover:text-green-600'
              aria-label='Cart'
            >
              <LuShoppingCart />
            </Link>

            {isLoggedIn ? (
              <Link
                href='/profile'
                className='hidden rounded-full p-2.5 text-xl text-gray-500 transition hover:text-green-600 lg:block'
                aria-label='Profile'
              >
                <LuCircleUser />
              </Link>
            ) : (
              <Link
                href='/login'
                className='hidden items-center gap-2 rounded-full bg-green-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-green-700 lg:flex'
              >
                <LuUser />
                <span>Sign In</span>
              </Link>
            )}

            <Sheet open={isOpen} onOpenChange={setisOpen}>
              <SheetTrigger
                className='ml-1 flex h-10 w-10 items-center justify-center rounded-full bg-[#16A34A] text-xl text-white transition hover:bg-[#15803d] lg:hidden cursor-pointer focus:outline-none'
                aria-label='Toggle navigation menu'
              >
                <LuMenu />
              </SheetTrigger>

              <SheetContent
                side='right'
                className='w-[320px] max-w-[331.5px] p-0 flex flex-col justify-between h-full bg-white shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] border-l border-gray-100'
              >
                <SheetTitle className='sr-only'>Navigation Menu</SheetTitle>
                <SheetDescription className='sr-only'>
                  Mobile navigation drawer with product search, store links, account options, and help.
                </SheetDescription>

                <div className='flex flex-col flex-1 overflow-y-auto'>
                  <div className='flex h-[69px] shrink-0 items-center justify-between bg-[#F9FAFB]/50 px-4'>
                    <Link href='/' onClick={() => setisOpen(false)}>
                      <Image
                        src='/freshcart-logo.49f1b44d.svg'
                        alt='FreshCart'
                        width={165}
                        height={32}
                        priority
                        className='h-8 w-auto'
                      />
                    </Link>
                    <SheetClose
                      className='flex h-9 w-9 items-center justify-center rounded-full bg-[#F3F4F6] text-[#4A5565] transition hover:bg-gray-200 cursor-pointer focus:outline-none'
                      aria-label='Close menu'
                    >
                      <LuX className='text-lg' />
                    </SheetClose>
                  </div>

                  <form
                    onSubmit={(e) => {
                      e.preventDefault()
                      setisOpen(false)
                    }}
                    className='p-4 shrink-0'
                  >
                    <div className='relative w-full'>
                      <input
                        type='text'
                        placeholder='Search products...'
                        className='h-[46px] w-full rounded-[12px] border border-[#E5E7EB] bg-[#F9FAFB] py-3 pl-4 pr-12 text-sm font-medium text-[#364153] outline-none placeholder:text-[#364153]/50 focus:border-[#16A34A]'
                      />
                      <button
                        type='submit'
                        className='absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-[8px] bg-[#16A34A] text-white transition hover:bg-[#15803d]'
                        aria-label='Search'
                      >
                        <LuSearch className='text-sm' />
                      </button>
                    </div>
                  </form>

                  <nav className='flex flex-col gap-1 px-4 py-2 shrink-0'>
                    {mainLinks.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        onClick={() => setisOpen(false)}
                        className='flex h-12 items-center rounded-[12px] px-4 py-3 text-base font-medium text-[#364153] transition hover:bg-[#F9FAFB] hover:text-[#16A34A]'
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>

                  <div className='mx-4 my-2 border-t border-[#F3F4F6]' />

                  <div className='flex flex-col gap-1 px-4 py-2 shrink-0'>
                    <Link
                      href='/wishlist'
                      onClick={() => setisOpen(false)}
                      className='flex h-[60px] items-center justify-between rounded-[12px] px-4 py-3 transition hover:bg-[#F9FAFB]'
                    >
                      <div className='flex items-center gap-3'>
                        <div className='flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#FEF2F2] text-[#FB2C36]'>
                          <LuHeart className='text-lg' />
                        </div>
                        <span className='text-base font-medium text-[#364153]'>Wishlist</span>
                      </div>
                      <span className='flex h-6 min-w-[28px] items-center justify-center rounded-full bg-[#FB2C36] px-2.5 text-xs font-bold text-white'>
                        5
                      </span>
                    </Link>

                    <Link
                      href='/cart'
                      onClick={() => setisOpen(false)}
                      className='flex h-[60px] items-center justify-between rounded-[12px] px-4 py-3 transition hover:bg-[#F9FAFB]'
                    >
                      <div className='flex items-center gap-3'>
                        <div className='flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F0FDF4] text-[#16A34A]'>
                          <LuShoppingCart className='text-lg' />
                        </div>
                        <span className='text-base font-medium text-[#364153]'>Cart</span>
                      </div>
                      <span className='flex h-6 min-w-[27px] items-center justify-center rounded-full bg-[#16A34A] px-2.5 text-xs font-bold text-white'>
                        3
                      </span>
                    </Link>
                  </div>

                  <div className='mx-4 my-2 border-t border-[#F3F4F6]' />

                  <div className='flex flex-col gap-1 px-4 py-2 shrink-0'>
                    {isLoggedIn ? (
                      <>
                        <Link
                          href='/profile'
                          onClick={() => setisOpen(false)}
                          className='flex h-[60px] items-center gap-3 rounded-[12px] px-4 py-3 transition hover:bg-[#F9FAFB]'
                        >
                          <div className='flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F3F4F6] text-[#6A7282]'>
                            <LuUser className='text-lg' />
                          </div>
                          <span className='text-base font-medium text-[#364153]'>{userName}</span>
                        </Link>
                        <button
                          type='button'
                          onClick={() => {
                            setisOpen(false)
                          }}
                          className='flex h-[60px] w-full items-center gap-3 rounded-[12px] px-4 py-3 transition hover:bg-red-50 text-left'
                        >
                          <div className='flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#FEF2F2] text-[#FB2C36]'>
                            <LuLogOut className='text-lg' />
                          </div>
                          <span className='text-base font-medium text-[#E7000B]'>Sign Out</span>
                        </button>
                      </>
                    ) : (
                      <>
                        <Link
                          href='/login'
                          onClick={() => setisOpen(false)}
                          className='flex h-[60px] items-center gap-3 rounded-[12px] px-4 py-3 transition hover:bg-[#F9FAFB]'
                        >
                          <div className='flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F3F4F6] text-[#16A34A]'>
                            <LuUser className='text-lg' />
                          </div>
                          <span className='text-base font-medium text-[#364153]'>Sign In</span>
                        </Link>
                        <Link
                          href='/register'
                          onClick={() => setisOpen(false)}
                          className='flex h-[60px] items-center gap-3 rounded-[12px] px-4 py-3 transition hover:bg-[#F9FAFB]'
                        >
                          <div className='flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#DCFCE7] text-[#16A34A]'>
                            <LuUserPlus className='text-lg' />
                          </div>
                          <span className='text-base font-medium text-[#364153]'>Sign Up</span>
                        </Link>
                      </>
                    )}
                  </div>
                </div>

                <div className='p-4 pt-2 shrink-0'>
                  <Link
                    href='/contact'
                    onClick={() => setisOpen(false)}
                    className='flex h-[74px] items-center gap-3 rounded-[12px] border border-[#F3F4F6] bg-[#F9FAFB] p-4 transition hover:border-green-200 hover:bg-green-50/30'
                  >
                    <div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#DCFCE7] text-[#16A34A]'>
                      <LuHeadset className='text-xl' />
                    </div>
                    <div className='flex flex-col text-left'>
                      <span className='text-sm font-semibold leading-5 text-[#364153]'>Need Help?</span>
                      <span className='text-sm font-medium leading-5 text-[#16A34A]'>Contact Support</span>
                    </div>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}