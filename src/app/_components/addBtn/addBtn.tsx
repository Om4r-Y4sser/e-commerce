"use client"
import { Button } from '@/components/ui/button'

import React from 'react'
export default function AddBtn() {
  return (
    <Button
              onClick={(e)=>e.preventDefault()}
              aria-label="Add to cart"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#16A34A] text-lg text-white transition duration-200 hover:scale-105 hover:bg-green-700 active:scale-95"
            >
                +
    </Button>
  )
}
