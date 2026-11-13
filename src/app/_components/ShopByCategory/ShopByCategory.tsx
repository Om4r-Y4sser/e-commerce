import { getAllCategory } from '@/API/services/routemisr.services'
import { CategoryType } from './../../../API/types/category.type';
import CategoryCard from '../CategoryCard/CategoryCard';
import Link from 'next/link';

export default async function ShopByCategory() {
    const Category: CategoryType[] | undefined = await getAllCategory()
    
    return (
        <section className="relative mx-auto w-full max-w-[1536px] px-4 py-8">
            <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:h-[100px] sm:flex-row sm:items-center">
                <div className="flex items-center gap-3">
                    <div className="h-8 w-1.5 rounded-full bg-gradient-to-b from-[#00BC7D] to-[#007A55]"></div>
                    <h2 className="font-exo text-2xl font-bold text-[#1E2939] sm:text-[30px]">
                        Shop By Category
                    </h2>
                </div>

                
                <Link 
                    href="/categories" 
                    className="flex items-center gap-2 self-end font-exo text-base font-medium text-[#16A34A] transition-colors hover:text-green-700 sm:self-auto"
                >
                    View All Categories
                    <svg className="h-4 w-5" fill="currentColor" viewBox="0 0 20 16" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M12.293 3.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 9H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </Link>
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 xl:grid-cols-6">
                {Category?.map((category) => (
                    <CategoryCard key={category._id} categories={category}/>
                ))}
            </div>
        </section>
    )
}