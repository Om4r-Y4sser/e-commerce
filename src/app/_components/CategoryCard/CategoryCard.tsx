import React from 'react'
import Link from 'next/link'
import { CategoryType } from './../../../API/types/category.type';

export default function CategoryCard({ categories }: { categories: CategoryType }) {
    // Assuming the URL structure routes by ID or Slug. Adjust as needed.
    const categoryHref = `/category/${categories._id}` 

    return (
        <Link 
            href={categoryHref}
            className="flex h-[148px] flex-col items-center justify-center gap-3 rounded-lg bg-white p-4 shadow-sm transition-shadow hover:shadow-md sm:h-[172px] xl:h-[148px]"
        >
            <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#DCFCE7]">
                <img 
                    src={categories.image} 
                    alt={categories.name} 
                    className="h-full w-full object-cover"
                />
            </div>

            <h3 className="text-center font-exo text-base font-medium text-[#364153]">
                {categories.name}
            </h3>
        </Link>
    )
}