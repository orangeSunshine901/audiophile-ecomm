"use client"
import Link from "next/link"
import React from "react"
import { motion } from "framer-motion"

export default function ButtonOne({ color, link }) {
  return (
    <Link href={`/${link}`}>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`sub-title ${color} h-[48px] w-[160px]`}
      >
        See Product
      </motion.button>
    </Link>
  )
}
