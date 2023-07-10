"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import Summary from "@/components/Summary/Summary"
import Form from "@/components/Form/Form"

export default function checkout() {
  // const [valid, setValid] = useState(false)
  // const [phone, setPhone] = useLocalStorage("phone", "")
  const [domLoaded, setDomLoaded] = useState(false)

  useEffect(() => {
    setDomLoaded(true)
  }, [])

  return (
    <div className="bg-grey">
      <div className="h-[97px] bg-black"></div>
      <section className="flex w-[1110px] m-auto font-medium flex-col">
        <Link href={`/`} className="block mb-10 text-black/50 pt-[79px] w-fit">
          Go Back
        </Link>
        <div className="flex justify-between h-[1126px] mb-[141px]">
          <div className="w-[66%] bg-white rounded-md pt-[54px] px-[48px] flex flex-col justify-start gap-y-10">
            <h3>Checkout</h3>
            <Form />
          </div>
          <div className="h-fit min-h-[612px] w-[32%] bg-white rounded-md px-[33px] py-[32px]">
            {domLoaded && <Summary />}
          </div>
        </div>
      </section>
    </div>
  )
}
