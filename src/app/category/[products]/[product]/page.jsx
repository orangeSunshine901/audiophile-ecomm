"use client"

import Link from "next/link"
import React, { useContext, useState } from "react"
import { data } from "../data"
import Image from "next/image"
import ButtonOne from "@/components/Buttons/ButtonOne"
import { CartContext } from "@/context/CartContext"
import { motion } from "framer-motion"

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
      {/* Product section */}
      <div className="lg:h-[97px] md:h-[89px] bg-black mb-[79px]"></div>
      <section className="lg:w-[1110px] md:w-[689px] m-auto lg:pb-[160px] md:pb-[120px]">
        <Link
          href={`/category/${productItem[0].category}`}
          className="block mb-10 text-black/50 font-medium"
        >
          Go Back
        </Link>
        <div className="flex w-[100%]">
          <div className="relative rounded-md bg-grey lg:h-[560px] lg:w-[540px] md:h-[480px] md:w-[281px]">
            <Image
              src={productItem[0].image.desktop}
              fill={true}
              alt={productItem[0].name}
              className="lg:object-cover md:object-contain rounded-md"
            />
          </div>
          <div className="flex-1 flex flex-col gap-y-[16px] justify-center lg:pl-[125px] md:pl-[69.5px]">
            <p className="overline-text text-dark-salmon">New Product</p>
            <h2>{productItem[0].name}</h2>
            <p className="pt-3 pb-8 text-black/50 w-full">
              {productItem[0].description}
            </p>
            <h6 className="pb-8">$ {productItem[0].price.toLocaleString()}</h6>
            <div className="flex gap-x-4">
              <div className="flex w-[120px] h-[48px] flex-row bg-grey">
                <button
                  className="flex-1 text-black/25 hover:text-dark-salmon ease-in-out duration-300"
                  onClick={() => {
                    quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1)
                  }}
                >
                  -
                </button>
                <p className="block flex-1 m-auto text-center">{quantity}</p>
                <button
                  className="flex-1 text-black/25 hover:text-dark-salmon ease-in-out duration-300"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
              <motion.button
                className="bg-dark-salmon text-white h-[48px] w-[160px] uppercase sub-title hover:bg-salmon ease-in-out duration-300"
                onClick={handleCart}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Add to Cart
              </motion.button>
            </div>
          </div>
        </div>
      </section>
      {/* In the box section */}
      <section className="flex lg:flex-row md:flex-col lg:w-[1110px] md:w-[689px] m-auto lg:pb-[160px] md:pb-[120px] gap-y-[120px]">
        <div className="w-[653px]">
          <h3 className="pb-6">Features</h3>
          {lines.map((p, i) => (
            <p className="pb-6 text-black/50" key={i}>
              {p}
            </p>
          ))}
        </div>
        <div className="flex lg:flex-col md:lg:flex-row h-full lg:pl-[125px] md:pl-0 gap-x-3">
          <h3 className="pb-6 lg:w-fit md:w-[339px]">In the box</h3>
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
      {/* Product Gallery */}
      <section className="lg:w-[1110px] md:w-[689px] m-auto grid grid-rows-2 grid-flow-col lg:gap-y-[32px] md:gap-y-[18px] gap-x-7 lg:pb-[160px] md:pb-[120px]">
        <div className="relative rounded-md bg-gray lg:w-[445px] lg:h-[280px] md:w-[277px] md:h-[174px]">
          <Image
            src={productItem[0].gallery.first.desktop}
            fill={true}
            className="object-cover rounded-md"
            alt={productItem[0].name}
          ></Image>
        </div>
        <div className="relative rounded-md bg-gray lg:w-[445px] lg:h-[280px] md:w-[277px] md:h-[174px]">
          <Image
            src={productItem[0].gallery.second.desktop}
            fill={true}
            className="object-cover rounded-md"
            alt={productItem[0].name}
          ></Image>
        </div>
        <div className="row-span-2 relative rounded-md bg-grey lg:w-[635px] lg:h-[592px] md:w-[395px] md:h-[368px]">
          <Image
            src={productItem[0].gallery.third.desktop}
            fill={true}
            className="object-cover rounded-md"
            alt={productItem[0].name}
          ></Image>
        </div>
      </section>
      {/* You may also like section */}
      <section className="lg:w-[1110px] md:w-[689px] m-auto lg:pb-[160px] md:pb-[120px]">
        <h3 className="text-center pb-6">You may also like</h3>
        <div className="flex items-center justify-between">
          {productItem[0].others.map((product, i) => (
            <div key={product.id} className="flex flex-col items-center">
              <div className="relative mb-6 rounded-md lg:w-[350px] lg:w-[318px] md:w-[223px] md:h-[318px]">
                <Image
                  src={product.image.desktop}
                  fill="true"
                  className="object-cover rounded-md"
                  alt={product.name}
                ></Image>
              </div>
              <h5 className="pb-6">{product.name}</h5>
              <ButtonOne
                link={`category/${product.slug}`}
                color={
                  "bg-dark-salmon text-white hover:bg-salmon ease-in-out duration-300"
                }
              ></ButtonOne>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
