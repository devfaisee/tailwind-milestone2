import "../../styles/destinations.css";

const destinations = [
  {
    name: "Maldives",
    img: "/maldives.jpg",
    desc: "Crystal-clear waters and luxury resorts.",
    price: "$2,500",
  },
  {
    name: "Switzerland",
    img: "/switzerland.jpg",
    desc: "Breathtaking mountains and peaceful lakes.",
    price: "$3,200",
  },
  {
    name: "Tokyo",
    img: "/tokyo.jpg",
    desc: "A vibrant mix of modern and traditional Japan.",
    price: "$1,800",
  },
  {
    name: "Dubai",
    img: "/dubai.jpg",
    desc: "Skyscrapers, shopping, and desert adventures.",
    price: "$2,000",
  },
  {
    name: "Paris",
    img: "/paris.jpg",
    desc: "The city of love, art, and fine cuisine.",
    price: "$2,700",
  },
];

export default function Destinations() {
  return (
    <main className="destinations">
      <h1>Top Travel Destinations</h1>
      <div className="destinations-grid">
        {destinations.map((place, index) => (
          <div key={index} className="destination-card">
            <img src={place.img} alt={place.name} className="destination-img" />
            <h3>{place.name}</h3>
            <p>{place.desc}</p>
            <span className="price">{place.price}</span>
          </div>
        ))}
      </div>
    </main>
  );
}
