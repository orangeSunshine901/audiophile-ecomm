"use client"
import { data } from "@/app/category/[products]/data"
import ProductCatalog from "@/components/ProductCatalog/ProductCatalog"
import { notFound } from "next/navigation"

const getData = (productsCategory) => {
  const productItems = data.filter((product) => {
    if (product.category == productsCategory) {
      return product
    }
  })

  if (productItems) {
    return productItems
  }
}
export default function products({ params }) {
  const productsCategory = getData(params.products)

  return (
    <div>
      <section className="h-[336px] w-full bg-black flex items-end justify-center">
        <h2 className="h-1/3 text-white">{params.products}</h2>
      </section>
      <ProductCatalog category={productsCategory} />
    </div>
  )
}
