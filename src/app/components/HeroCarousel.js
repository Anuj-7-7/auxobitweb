"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "../styles/HeroCarousel.css";

export default function HeroCarousel() {
  const slides = [
    {
      src: "/images/hellrampage.png",
      shortDesc: "Expendable fixed‑wing kamikaze",
      productName: "Hell Rampage",
      detail: "Incinerate the competition.",
      textColor: "white"
    },
    {
      src: "/images/Hellfirev1.png",
      shortDesc: "FPV drone payload dropper",
      productName: "Hellfire",
      detail: "Unleash the inferno.",
      textColor: "white"
    },{
      src: "/images/Hellfirev2.png",
      shortDesc: "Pin‑removable dropping drone",
      productName: "Hellfire V2",
      detail: "Ignite the skies.",
      textColor: "white"
    },
     {
      src: "/images/digitaltrainer.png",
      shortDesc: "FPV trainer drone",
      productName: "Digital Trainer",
      detail: "Robust and reusable.",
      textColor: "black"
    },
    {
      src: "/images/Mysticone.png",
      shortDesc: "Autonomous bathymetric USV",
      productName: "Mystic One",
      detail: "Uncover the mystics.",
      textColor: "white"
    },
  ];

  return (
    <section className="w-full h-[750px] relative overflow-hidden z-0 carousel-wrapper">
      <Swiper
        modules={[Autoplay, Navigation]}
        autoplay={{ delay: 10000, disableOnInteraction: false }}
        navigation
        loop
        className="absolute inset-0 w-full h-full"
        slidesPerView={1}
      >
        {slides.map(({ src, shortDesc, productName, detail, textColor }, idx) => (
  <SwiperSlide key={idx}>
    <div className="w-full h-full relative">
      <img
        src={src}
        alt={`Slide ${idx + 1}`}
        className="w-full h-full object-cover"
      />

      <div className="overlay">
        <div
          className="p-6 rounded-md text-center pointer-events-auto allin"
          style={{ color: textColor }}
        >
          <p className="uppercase text-sm upw">{shortDesc}</p>
          <h2 className="text-4xl font-bold mb-4 men">{productName}</h2>
          <p className="italic mb-6 blw">{detail}</p>
          <div className="btngrp">
            <a
              href={`/products/${productName.replace(/\s+/g, '-').toLowerCase()}`}
              className="px-6 py-2 lnmr"
            >
              Learn More
            </a>
            <a
              href={`/contact?product=${encodeURIComponent(productName)}`}
              className="px-6 py-2 enq"
            >
              Enquire ➔
            </a>
          </div>
        </div>
      </div>
    </div>
  </SwiperSlide>
))}

      </Swiper>

      <style jsx global>{`
        .swiper-button-prev,
        .swiper-button-next {
          color: #fff !important;
          opacity: 1 !important;
          z-index: 10 !important;
        }
        .swiper-button-prev::after,
        .swiper-button-next::after {
          font-size: 1.8rem !important;
        }
      `}</style>
    </section>
  );
}
