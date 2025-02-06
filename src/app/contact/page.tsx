"use client";
import { useState, ChangeEvent, FormEvent } from "react";


export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="max-w-lg mx-auto my-12 p-6 bg-white shadow-lg rounded-xl text-center">
      <h2 className="text-3xl font-bold text-[#004AAD] mb-6">Contact Us</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-[#004AAD]"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-[#004AAD]"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-lg text-lg h-32 resize-none focus:outline-none focus:ring-2 focus:ring-[#004AAD]"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-[#FF6B00] text-white py-3 rounded-lg text-lg font-semibold transition duration-300 hover:bg-[#D95A00]"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
