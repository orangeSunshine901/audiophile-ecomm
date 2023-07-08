// Home Page
import Image from "next/image"
import React from "react"
import hero from "public/home/desktop/image-hero.jpg"
import ButtonOne from "@/components/Buttons/ButtonOne"
import CategoryCards from "@/components/CategoryCards/CategoryCards"
import speakerImg from "public/home/desktop/image-speaker-zx9.png"
import containerTwoBg from "public/home/desktop/container-2-bg.jpg"
import containerThreeImg from "public/home/desktop/container-3-img.jpg"
import AboutSection from "@/components/AboutSection/AboutSection"

export default function page() {
  return (
    <div>
      <section className="relative h-[729px] flex flex-col items-center justify-center">
        <Image
          className="absolute z-0 object-cover h-[729px] top-0"
          src={hero}
          priority={true}
          alt={"This is an hero image for XX99 MARK 2 Headphones"}
        ></Image>
        <div className="flex flex-col items-start justify-center relative h-full w-[1110px] max-w-[1110px] gap-y-6 flex-shrink-0 pt-8">
          <p className="overline-text text-white/50">New product</p>
          <h1 className="text-white w-1/2">XX99 Mark II Headphones</h1>
          <p className="text-white/75 w-1/3 flex-shrink-0 w-[349px] mb-4 ">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <ButtonOne link={"category"} color={"bg-dark-salmon text-white"} />
        </div>
      </section>
      <section className="pt-[120px]">
        <CategoryCards />
      </section>
      <section className="pt-[168px] flex flex-col w-[100%] max-w-[1110px] m-auto gap-y-8">
        <div>
          <div className="flex flex-row w-full justify-end items-center rounded-md bg-dark-salmon h-[560px] relative container-one-desktop">
            <Image
              src={speakerImg}
              alt="Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound."
              className="h-[417px] w-[360px] z-10 absolute left-[13%] bottom-0 lg:block md:hidden"
            />
            <div className="z-10 relative w-1/3 flex flex-col gap-y-7">
              <h1 className="text-white">ZX9 SPEAKER</h1>
              <p className="text-white">
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound.
              </p>
              <ButtonOne color={"bg-black text-white"} />
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-row w-full justify-start items-center rounded-md h-[320px] relative">
            <div className="z-10 relative w-1/3 flex flex-col gap-y-7 justify-center items-start pl-[104px]">
              <h4>ZX7 SPEAKER</h4>
              <ButtonOne color={"border-black border text-black"} />
            </div>
            <Image
              alt="ZX7 SPEAKER"
              src={containerTwoBg}
              width={1110}
              className="absolute z-0"
            />
          </div>
          <div></div>
          <div></div>
        </div>
        <div>
          <div className="flex flex-row w-full justify-start items-center h-[320px] relative gap-x-[30px]">
            <div className="bg-black w-full max-w-[540px] h-[320px] rounded-md">
              <Image
                alt="decoration"
                src={containerThreeImg}
                className="object-cover w-[540px] h-[320px] rounded-md"
              />
            </div>
            <div className="w-full max-w-[540px] bg-grey h-[320px] rounded-md">
              <div className="pl-[95px] h-full flex flex-col justify-center gap-y-7">
                <h4>YX1 Earphones</h4>
                <ButtonOne color={"border-black border text-black"} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <AboutSection />
    </div>
  )
}
