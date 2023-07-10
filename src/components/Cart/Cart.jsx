import Image from "next/image"
import React, { useContext, useState } from "react"
import { data } from "@/app/category/[products]/data"
import { CartContext } from "@/context/CartContext"
import Link from "next/link"

export default function Cart({ closeCart }) {
  const { cart, subtractQuantity, addQuantity, totalPriceCalc, clearCart } =
    useContext(CartContext)

  const [quantity, setQuantity] = useState()
  const cartTotal = totalPriceCalc()

  return (
    <div className="flex flex-col gap-y-8">
      <div className="flex justify-between">
        <h6>
          Cart <span>({cart.length})</span>
        </h6>
        <a
          onClick={clearCart}
          className="text-black/25 underline cursor-pointer"
        >
          Remove all
        </a>
      </div>
      <ul>
        {cart.map((item) => (
          <li
            key={item.id}
            className="flex w-full justify-between items-center gap-x-4 pb-6"
          >
            <div className="w-[64px] h-[64px]">
              <Image
                src={item.image}
                width={64}
                height={64}
                alt={item.name}
                className="rounded-md object-cover"
              />
            </div>
            <div className="flex flex-1 items-start flex-col">
              <h6 className="text-[15px] tracking-normal">{item.name}</h6>
              <p className="font-bold text-black/50">
                ${item.price.toLocaleString()}
              </p>
            </div>
            <div className="w-[96px] h-[32px] bg-grey flex items-center">
              <button
                className="flex-1"
                onClick={() => subtractQuantity(item.id)}
                disabled={item.quantity == 0}
              >
                -
              </button>
              <p className="flex-1 text-center">{item.quantity}</p>
              <button className="flex-1" onClick={(e) => addQuantity(item.id)}>
                +
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex justify-between">
        <p className="uppercase text-black/50">Total</p>
        <h6>${cartTotal.toLocaleString()}</h6>
      </div>
      <Link href={"/checkout"} onClick={() => closeCart()}>
        <button className="bg-dark-salmon text-white font-bold uppercase w-full h-[48px] text-[13px] tracking-[1px]">
          Checkout
        </button>
      </Link>
    </div>
  )
}
