"use client";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../styles/home.css";
import Image from "next/image";
const sliderData = [
  { img: "/maldives.jpg", place: "Maldives" },
  { img: "/switzerland.jpg", place: "Switzerland" },
  { img: "/tokyo.jpg", place: "Tokyo, Japan" },
  { img: "/dubai.jpg", place: "Dubai, UAE" },
  { img: "/paris.jpg", place: "Paris, France" },
];

export default function Home() {
  return (
    <main className="home">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        className="home-slider"
      >
        {sliderData.map((slide, index) => (
          <SwiperSlide key={index} className="slide">
            <img src={slide.img} alt={slide.place} className="slide-img" />
            <div className="slide-text">{slide.place}</div>
          </SwiperSlide>
        ))}
      </Swiper>

      <h2>Explore Beautiful Destinations</h2>
      <p>Discover the world's most stunning locations!</p>
    </main>
  );
}
