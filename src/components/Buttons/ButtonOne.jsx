import Link from "next/link"
import React from "react"

export default function ButtonOne({ color, link }) {
  return (
    <button className={`${color} h-[48px] w-[160px]`}>
      <Link className="sub-title" href={`/${link}`}>
        See Product
      </Link>
    </button>
  )
}
