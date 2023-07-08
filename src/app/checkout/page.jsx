"use client"

import Link from "next/link"
import * as Yup from "yup"
import { useFormik } from "formik"
import { useEffect, useState } from "react"

export default function checkout() {
  // const [valid, setValid] = useState(false)
  // const [phone, setPhone] = useLocalStorage("phone", "")

  const formik = useFormik({
    initialValues: {
      name: "",
    },
  })

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

  const validationSchema = Yup.object({
    name: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    email: Yup.string().email("Invalid email addresss`").required("Required"),
    phone: Yup.string()
      .matches(phoneRegExp, "Invalid phone number format")
      .required("Required"),
    address: Yup.string().required("Required"),
    zip: Yup.string().max(5, "Enter a valid zip address").required("Required"),
    city: Yup.string().required("Enter your city"),
    payment: Yup.string().oneOf(
      ["e", "cod"],
      "Select atleast one payment method",
    ),
  })

  // const checkoutDetails = (event) => {
  //   event.preventDefault()
  //   const formData = new FormData(event.target)
  //   let checkoutForm = {
  //     name: formData.get("name"),
  //     email: formData.get("email"),
  //     phone: formData.get("phone"),
  //     address: formData.get("address"),
  //     zip: formData.get("zip"),
  //     city: formData.get("city"),
  //     payment: formData.get("payment"),
  //   }
  //   console.log(checkoutForm)
  // }

  // const validatePhone = async (phone) => {
  //   const isValid = await validationSchema.isValid(phone)
  //   setValid(isValid)
  // }

  // useEffect(() => {
  //   validatePhone(phone)
  // }, [phone])

  return (
    <div className="bg-grey">
      <div className="h-[97px] bg-black"></div>
      <section className="flex w-[1110px] m-auto font-medium flex-col">
        <Link href={`/`} className="block mb-10 text-black/50 pt-[79px]">
          Go Back
        </Link>
        <div className="flex justify-between h-[1126px] mb-[141px]">
          <div className="w-[65%] bg-white rounded-md pt-[54px] px-[48px] flex flex-col justify-start gap-y-10">
            <h3>Checkout</h3>
            <form id="checkout-form">
              <div className="pb-[53px]">
                <p className="sub-title text-dark-salmon pb-3">
                  Billing Details
                </p>
                <div className="flex flex-wrap w-full justify-between gap-y-6">
                  <div className="w-[309px]">
                    <label
                      htmlFor="name"
                      className="text-xs font-bold block mb-2"
                    >
                      Name
                    </label>
                    <input
                      className="block rounded-md border w-full h-[56px] border-grey text-black font-bold text-[14px] focus:outline-none focus:border-dark-salmon placeholder:text-[14px] placeholder:font-bold px-[24px] placeholder:text-black/40"
                      placeholder="Your Name"
                      name="name"
                      id="name"
                      type="text"
                      autoFocus={true}
                    ></input>
                  </div>
                  <div className="w-[309px]">
                    <label className="text-xs font-bold block mb-2">
                      Email Address
                    </label>
                    <input
                      className="block rounded-md border w-full h-[56px] border-grey text-black font-bold text-[14px] focus:outline-none focus:border-dark-salmon placeholder:text-[14px] placeholder:font-bold px-[24px] placeholder:text-black/40"
                      placeholder="Your Email"
                      id="email"
                      name="email"
                      type="email"
                      autoFocus={true}
                    ></input>
                  </div>
                  <div className="w-[309px]">
                    <label className="text-xs font-bold block mb-2">
                      Phone Number
                    </label>
                    <input
                      className="block rounded-md border w-full h-[56px] border-grey text-black font-bold text-[14px] focus:outline-none focus:border-dark-salmon placeholder:text-[14px] placeholder:font-bold px-[24px] placeholder:text-black/40"
                      placeholder="Your Phone Number"
                      id="phone"
                      name="phone"
                      type="phone"
                      autoFocus={true}
                    ></input>
                  </div>
                </div>
              </div>
              <div className="pb-[53px]">
                <p className="sub-title text-dark-salmon pb-3">Shipping Info</p>
                <div className="flex flex-wrap w-full justify-between gap-y-6">
                  <div className="w-full">
                    <label className="text-xs font-bold block mb-2">
                      Address
                    </label>
                    <input
                      className="block rounded-md border w-full h-[56px] border-grey text-black font-bold text-[14px] focus:outline-none focus:border-dark-salmon placeholder:text-[14px] placeholder:font-bold px-[24px] placeholder:text-black/40"
                      placeholder="1137 Williams Avenue"
                      name="address"
                      id="address"
                      type="text"
                      autoFocus={true}
                    ></input>
                  </div>
                  <div className="w-[309px]">
                    <label className="text-xs font-bold block mb-2">
                      Zip/Code
                    </label>
                    <input
                      className="block rounded-md border w-full h-[56px] border-grey text-black font-bold text-[14px] focus:outline-none focus:border-dark-salmon placeholder:text-[14px] placeholder:font-bold px-[24px] placeholder:text-black/40"
                      placeholder="10001"
                      name="zip"
                      id="zip"
                      type="text"
                      autoFocus={true}
                    ></input>
                  </div>
                  <div className="w-[309px]">
                    <label className="text-xs font-bold block mb-2">
                      Email Address
                    </label>
                    <input
                      className="block rounded-md border w-full h-[56px] border-grey text-black font-bold text-[14px] focus:outline-none focus:border-dark-salmon placeholder:text-[14px] placeholder:font-bold px-[24px] placeholder:text-black/40"
                      placeholder="Your Email"
                      id="name"
                      type="email"
                      autoFocus={true}
                    ></input>
                  </div>
                  <div className="w-[309px]">
                    <label className="text-xs font-bold block mb-2">
                      Phone Number
                    </label>
                    <input
                      className="block rounded-md border w-full h-[56px] border-grey text-black font-bold text-[14px] focus:outline-none focus:border-dark-salmon placeholder:text-[14px] placeholder:font-bold px-[24px] placeholder:text-black/40"
                      placeholder="Your Phone Number"
                      id="name"
                      type="phone"
                      autoFocus={true}
                    ></input>
                  </div>
                </div>
              </div>
              <div className="pb-[53px]">
                <p className="sub-title text-dark-salmon pb-3">
                  Billing Details
                </p>
                <div className="flex flex-wrap w-full justify-between gap-y-6">
                  <div className="w-[309px]">
                    <label className="text-xs font-bold block mb-2">Name</label>
                    <input
                      className="block rounded-md border w-full h-[56px] border-grey text-black font-bold text-[14px] focus:outline-none focus:border-dark-salmon placeholder:text-[14px] placeholder:font-bold px-[24px] placeholder:text-black/40"
                      placeholder="Your Name"
                      name="name"
                      id="name"
                      type="text"
                      autoFocus={true}
                    ></input>
                  </div>
                  <div className="w-[309px]">
                    <label className="text-xs font-bold block mb-2">
                      Email Address
                    </label>
                    <input
                      className="block rounded-md border w-full h-[56px] border-grey text-black font-bold text-[14px] focus:outline-none focus:border-dark-salmon placeholder:text-[14px] placeholder:font-bold px-[24px] placeholder:text-black/40"
                      placeholder="Your Email"
                      id="name"
                      type="email"
                      autoFocus={true}
                    ></input>
                  </div>
                  <div className="w-[309px]">
                    <label className="text-xs font-bold block mb-2">
                      Phone Number
                    </label>
                    <input
                      className="block rounded-md border w-full h-[56px] border-grey text-black font-bold text-[14px] focus:outline-none focus:border-dark-salmon placeholder:text-[14px] placeholder:font-bold px-[24px] placeholder:text-black/40"
                      placeholder="Your Phone Number"
                      id="name"
                      type="phone"
                      autoFocus={true}
                    ></input>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="h-[612px] w-[32%] bg-white rounded-md">
            <button form="checkout-form" type="submit">
              Submit
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
