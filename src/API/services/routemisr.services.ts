import { ProductType } from "../types/product.type"
import { CategoryType } from './../types/category.type';




export async function getAllProduct() : Promise<ProductType[] | undefined> {
        try{
        const res = await fetch("https://ecommerce.routemisr.com/api/v1/products",{

            })
        const data = await res.json()
        // console.log("dataaaa", data)
        return data.data
        }
        catch(err){
            console.log(err)
            return undefined
        }
    }
export async function getCatsProduct(id:string) : Promise<ProductType[] | undefined> {
        try{
        const res = await fetch(`https://ecommerce.routemisr.com/api/v1/products?category[in]=${id}`,{

            })
        const data = await res.json()
        // console.log("dataaaa", data)
        return data.data
        }
        catch(err){
            console.log(err)
            return undefined
        }
    }

export async function getAllCategory(): Promise<CategoryType[] | undefined>{
    try{
        const res = await fetch("https://ecommerce.routemisr.com/api/v1/categories")
        const data = await res.json()
        // console.log(data.data)
        return data.data
    }
    catch(err){
        console.log(err)
        return undefined
    }
}

export async function  getSingleProduct( id: string) : Promise <ProductType | undefined> {
    try{
      const res = await fetch(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
      const data = await res.json()
    //   console.log(data.data)
      return data.data
    }catch(err){
      console.log(err)
      return undefined
    }
  }