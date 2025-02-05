import "../../styles/about.css";
import Image from "next/image"; // Importing the Next.js Image component

export default function About() {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>Welcome to our website! We provide the best travel experiences tailored just for you.</p>

      <section className="mission-vision">
        <h2>Our Mission</h2>
        <p>To make travel easy, affordable, and enjoyable for everyone.</p>

        <h2>Our Vision</h2>
        <p>To be the leading travel service provider with a focus on customer satisfaction.</p>
      </section>

      <section className="team">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <Image src="/team1.jpg" alt="John Doe" width={300} height={200} />
            <h3>John Doe</h3>
            <p>Founder & CEO</p>
          </div>
          <div className="team-member">
            <Image src="/team2.jpg" alt="Jane Smith" width={300} height={200} />
            <h3>Jane Smith</h3>
            <p>Marketing Head</p>
          </div>
        </div>
      </section>
    </div>
  );
}
