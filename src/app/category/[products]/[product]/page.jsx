"use client"

import Link from "next/link"
import React, { useContext, useState } from "react"
import { data } from "../data"
import Image from "next/image"
import ButtonOne from "@/components/Buttons/ButtonOne"
import { CartContext } from "@/context/CartContext"

export default function product({ params }) {
  const [quantity, setQuantity] = useState(1)

  const { addToCart, updateQuantity, cart } = useContext(CartContext)

  const productItem = data.filter((product) => {
    if (product.slug == params.product) {
      return product
    }
  })

  const lines = productItem[0].features.match(/[^\r\n]+/g)

  const handleCart = () => {
    const inCart = cart.filter((item) => {
      if (item.id == productItem[0].id) {
        return item
      }
    })

    if (inCart.length > 0) {
      updateQuantity(productItem[0].id, quantity)
    } else {
      addToCart(productItem[0], quantity)
    }
  }

  return (
    <div>
      <div className="h-[97px] bg-black mb-[79px]"></div>
      <section className="w-[1110px] m-auto pb-[160px]">
        <Link
          href={`/category/${productItem[0].category}`}
          className="block mb-10 text-black/50 font-medium"
        >
          Go Back
        </Link>
        <div className="flex w-[100%]">
          <div className="relative rounded-md">
            <Image
              src={productItem[0].image.desktop}
              width={540}
              height={560}
              alt={productItem[0].name}
              className="object-cover rounded-md"
            />
          </div>
          <div className="flex-1 flex flex-col gap-y-[16px] justify-center pl-[125px]">
            <p className="overline-text text-dark-salmon">New Product</p>
            <h2>{productItem[0].name}</h2>
            <p className="pt-3 pb-8 text-black/50 w-full">
              {productItem[0].description}
            </p>
            <h6 className="pb-8">$ {productItem[0].price}</h6>
            <div className="flex gap-x-4">
              <div className="flex w-[120px] h-[48px] flex-row bg-grey">
                <button
                  className="flex-1 text-black/25"
                  onClick={() => {
                    quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1)
                  }}
                >
                  -
                </button>
                <p className="block flex-1 m-auto text-center">{quantity}</p>
                <button
                  className="flex-1 text-black/25"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
              <button
                className="bg-dark-salmon text-white h-[48px] w-[160px] uppercase sub-title"
                onClick={handleCart}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="flex w-[1110px] m-auto pb-[160px]">
        <div className="w-[653px]">
          <h3 className="pb-6">Features</h3>
          {lines.map((p, i) => (
            <p className="pb-6 text-black/50" key={i}>
              {p}
            </p>
          ))}
        </div>
        <div className="flex flex-col h-full pl-[125px]">
          <h3 className="pb-6">In the box</h3>
          <ul>
            {productItem[0].includes.map((include) => (
              <li key={include.id}>
                <p className="pb-2 text-black/50">
                  <span className="pr-4 font-bold text-dark-salmon">
                    {include.quantity}x
                  </span>
                  {include.item}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="w-[1110px] m-auto grid grid-rows-2 grid-flow-col gap-y-[32px] gap-x-7 pb-[160px]">
        <div className="relative rounded-md">
          <Image
            src={productItem[0].gallery.first.desktop}
            width={445}
            height={280}
            className="object-cover rounded-md"
            alt={productItem[0].name}
          ></Image>
        </div>
        <div className="relative rounded-md">
          <Image
            src={productItem[0].gallery.second.desktop}
            width={445}
            height={280}
            className="object-cover rounded-md"
            alt={productItem[0].name}
          ></Image>
        </div>
        <div className="row-span-2 relative rounded-md">
          <Image
            src={productItem[0].gallery.third.desktop}
            width={635}
            height={592}
            className="object-cover rounded-md"
            alt={productItem[0].name}
          ></Image>
        </div>
      </section>
      <section className="w-[1110px] m-auto pb-[160px]">
        <h3 className="text-center pb-6">You may also like</h3>
        <div className="flex items-center justify-between">
          {productItem[0].others.map((product, i) => (
            <div key={product.id} className="flex flex-col items-center">
              <div className="relative pb-6 rounded-md">
                <Image
                  src={product.image.desktop}
                  width={350}
                  height={318}
                  className="object-cover rounded-md"
                  alt={product.name}
                ></Image>
              </div>
              <h5 className="pb-6">{product.name}</h5>
              <ButtonOne
                link={`category/${product.slug}`}
                color={"bg-dark-salmon text-white"}
              ></ButtonOne>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
