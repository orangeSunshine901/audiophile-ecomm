import Image from "next/image"
import React from "react"
import ButtonTwo from "../Buttons/ButtonTwo"
import headphone from "public/shared/desktop/image-category-thumbnail-headphones.png"
import speaker from "public/shared/desktop/image-category-thumbnail-speakers.png"
import earphone from "public/shared/desktop/image-category-thumbnail-earphones.png"

export default function CategoryCards() {
  return (
    <div className="w-[100%] max-w-[1110px] flex flex-row justify-between m-auto flex-wrap">
      <div className="w-[32%] h-[264px] flex flex-col relative items-center justify-end">
        <Image
          className="absolute top-0 left-[50%] translate-x-[-50%] h-[160px] w-auto"
          src={headphone}
          alt="Headphones"
        />
        <div className="w-full bg-grey h-[204px] flex flex-col items-center justify-end pb-[30px] gap-y-[12px] rounded-md">
          <h6>Headphones</h6>
          <ButtonTwo link={"/category/headphones"} />
        </div>
      </div>
      <div className="w-[32%] h-[264px] flex flex-col relative items-center justify-end">
        <Image
          className="absolute top-0 left-[50%] translate-x-[-50%] h-[160px] w-auto"
          src={speaker}
          alt="Image of Speakers"
        />
        <div className="w-full bg-grey h-[204px] flex flex-col items-center justify-end pb-[30px] gap-y-[12px] rounded-md">
          <h6>Speakers</h6>
          <ButtonTwo link={"/category/speakers"} />
        </div>
      </div>
      <div className="w-[32%] h-[264px] flex flex-col relative items-center justify-end">
        <Image
          className="absolute top-0 left-[50%] translate-x-[-50%] h-[160px] w-auto"
          src={earphone}
          alt="Earphones"
        />
        <div className="w-full bg-grey h-[204px] flex flex-col items-center justify-end pb-[30px] gap-y-[12px] rounded-md">
          <h6>Earphones</h6>
          <ButtonTwo link={"/category/earphones"} />
        </div>
      </div>
    </div>
  )
}
