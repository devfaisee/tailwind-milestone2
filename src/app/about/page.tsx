import Image from "next/image";

export default function About() {
  return (
    <div className="max-w-3xl mx-auto my-12 p-6 bg-white shadow-lg rounded-xl">
      <h1 className="text-center text-3xl font-bold text-[#004AAD]">About Us</h1>
      <p className="text-center text-gray-700 mt-4">
        Welcome to our website! We provide the best travel experiences tailored just for you.
      </p>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-[#FF6B00]">Our Mission</h2>
        <p className="text-gray-700 mt-2">To make travel easy, affordable, and enjoyable for everyone.</p>

        <h2 className="text-2xl font-semibold text-[#FF6B00] mt-6">Our Vision</h2>
        <p className="text-gray-700 mt-2">To be the leading travel service provider with a focus on customer satisfaction.</p>
      </section>

      <section className="mt-12 text-center">
        <h2 className="text-2xl font-semibold text-gray-900">Meet Our Team</h2>
        <div className="flex flex-wrap justify-center gap-6 mt-6">
          <div className="bg-gray-100 p-4 rounded-xl w-64 shadow-md text-center">
            <Image src="/team1.jpg" alt="John Doe" width={300} height={200} className="rounded-lg" />
            <h3 className="mt-4 text-lg font-semibold text-gray-900">John Doe</h3>
            <p className="text-gray-500">Founder & CEO</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-xl w-64 shadow-md text-center">
            <Image src="/team2.jpg" alt="Jane Smith" width={300} height={200} className="rounded-lg" />
            <h3 className="mt-4 text-lg font-semibold text-gray-900">Jane Smith</h3>
            <p className="text-gray-500">Marketing Head</p>
          </div>
        </div>
      </section>
    </div>
  );
}
