"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import Summary from "@/components/Summary/Summary"
import Form from "@/components/Form/Form"
import { usePathname, useSearchParams } from "next/navigation"

export default function checkout() {
  const pathName = usePathname()
  const searchParams = useSearchParams()
  const [domLoaded, setDomLoaded] = useState(false)

  console.log(pathName)

  useEffect(() => {
    setDomLoaded(true)
  }, [])

  return (
    <div className="bg-grey">
      <div className="lg:h-[97px] md:h-[89px] sm:h-[89px] bg-black"></div>
      <section className="flex lg:w-[1110px] md:w-[689px] sm:w-[327px] m-auto font-medium flex-col">
        <Link
          href={`/`}
          className="block mb-10 sm:mb-6 text-black/50 pt-[79px] sm:pt-[16px] w-fit hover:text-dark-salmon ease-in-out duration-300"
        >
          Go Back
        </Link>
        <div className="flex lg:flex-row md:flex-col sm:flex-col lg:justify-between gap-y-[32px] md:justify-start lg:h-[1126px] md:h-[1777px] lg:mb-[141px] md:mb-0 sm:mb-[97px]">
          <div className="lg:w-[66%] sm:w-full md:w-full bg-white rounded-md pt-[54px] sm:pt-[24px] px-[28px] flex flex-col justify-start gap-y-6">
            <h3>Checkout</h3>
            <Form />
          </div>
          <div className="block lg:h-fit sm:w-full md:h-auto lg:min-h-[612px] md:min-h-[612px] lg:w-[32%] md:w-[100%] bg-white rounded-md px-[33px] py-[32px] sm:py-[24px]">
            {domLoaded && <Summary />}
          </div>
        </div>
      </section>
    </div>
  )
}
