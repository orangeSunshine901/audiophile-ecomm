"use client"
import Image from "next/image"
import React from "react"
import { data } from "@/app/category/[products]/data"
import ButtonOne from "@/components/Buttons/ButtonOne"

export default function ProductCard({ product, index }) {
  return (
    <div>
      <div
        className={`item-${index} m-auto w-[100%] max-w-[1110px] flex justify-between items-center gap-x-10`}
      >
        <div className="relative rounded-md">
          <Image
            src={`${product.image.desktop}`}
            width={540}
            height={560}
            alt={product.name}
            className="object-cover rounded-md"
          />
        </div>
        <div className="flex flex-col gap-y-2">
          {product.new && (
            <p className="overline-text text-dark-salmon w-1/2">New Product</p>
          )}
          <h2 className="w-[100%] max-w-[342px]">{product.name}</h2>
          <p className="w-[100%] max-w-[442px] pt-3 pb-5 text-black/50">
            {product.description}
          </p>
          <ButtonOne
            color={"bg-dark-salmon text-white"}
            link={`category/${product.category}/${product.slug}`}
          />
        </div>
      </div>
    </div>
  )
}
