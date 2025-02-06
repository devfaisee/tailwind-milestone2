"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image"; // Importing the Next.js Image component

const sliderData = [
  { image: "/maldives.jpg", place: "Maldives" },
  { image: "/switzerland.jpg", place: "Switzerland" },
  { image: "/tokyo.jpg", place: "Tokyo, Japan" },
  { image: "/dubai.jpg", place: "Dubai, UAE" },
  { image: "/paris.jpg", place: "Paris, France" },
];

export default function Home() {
  return (
    <main className="text-center p-6">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        className="w-full max-w-3xl mx-auto mb-8"
      >
        {sliderData.map((slide, index) => (
          <SwiperSlide key={index} className="relative h-64 flex justify-center items-center overflow-hidden rounded-lg">
            <Image
              src={slide.image}
              alt={slide.place}
              width={500}
              height={300}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-60 text-white px-4 py-2 rounded-md text-lg font-semibold">
              {slide.place}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <h2 className="text-2xl font-bold text-[#004AAD] mb-4">Explore Beautiful Destinations</h2>
      <p className="text-gray-600">Discover the world's most stunning locations!</p>
    </main>
  );
}

// Removed duplicate sliderData and Home function
