import Image from "next/image"
import aboutImage from "public/shared/desktop/image-best-gear.jpg"

export default function AboutSection() {
  return (
    <section className="flex my-[160px] w-[100%] max-w-[1110px] h-[588px] max-h-[588px] m-auto items-center justify-between">
      <div className="flex-1 pr-[125px]">
        <h2 className="pb-[32px]">
          Bringing you the <span className="text-dark-salmon">best</span> audio
          gear
        </h2>
        <p>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <div className="rounded-md">
        <Image
          alt="Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories."
          className="rounded-md"
          src={aboutImage}
        ></Image>
      </div>
    </section>
  )
}
