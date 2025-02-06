"use client";
import Image from "next/image";

const destinations = [
  {
    name: "Maldives",
    image: "/maldives.jpg",
    desc: "Crystal-clear waters and luxury resorts.",
    price: "$2,500",
  },
  {
    name: "Switzerland",
    image: "/switzerland.jpg",
    desc: "Breathtaking mountains and peaceful lakes.",
    price: "$3,200",
  },
  {
    name: "Tokyo",
    image: "/tokyo.jpg",
    desc: "A vibrant mix of modern and traditional Japan.",
    price: "$1,800",
  },
  {
    name: "Dubai",
    image: "/dubai.jpg",
    desc: "Skyscrapers, shopping, and desert adventures.",
    price: "$2,000",
  },
  {
    name: "Paris",
    image: "/paris.jpg",
    desc: "The city of love, art, and fine cuisine.",
    price: "$2,700",
  },
];

export default function Destinations() {
  return (
    <main className="text-center p-6">
      <h1 className="text-3xl font-bold text-[#004AAD] mb-6">Top Travel Destinations</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {destinations.map((place, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-lg text-center transition-transform transform hover:-translate-y-1"
          >
            <Image
              src={place.image}
              alt={place.name}
              width={300}
              height={200}
              className="w-full h-40 object-cover rounded-lg"
            />
            <h3 className="text-xl font-semibold mt-4">{place.name}</h3>
            <p className="text-gray-600 mt-2">{place.desc}</p>
            <span className="block mt-4 font-bold text-[#004AAD]">{place.price}</span>
          </div>
        ))}
      </div>
    </main>
  );
}
