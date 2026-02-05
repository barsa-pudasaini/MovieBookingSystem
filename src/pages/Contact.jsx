import React, { useState } from "react";
import Footer from "./Footer";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Message sent! We will contact you soon.");
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <div className="min-h-screen bg-black text-white flex flex-col">
            <div className="max-w-4xl mx-auto px-6 py-16 flex flex-col gap-10">
                <h1 className="text-4xl font-bold text-purple-500 text-center">
                    Contact Us
                </h1>
                <p className="text-gray-300 text-center">
                    Have questions or suggestions? Fill out the form below and we’ll get back to you as soon as possible.
                </p>

                {/* CONTACT FORM */}
                <form
                    onSubmit={handleSubmit}
                    className="bg-[#1B1B2F] border border-purple-700 rounded-2xl p-8 flex flex-col gap-6 shadow-lg"
                >
                    <div className="flex flex-col gap-2">
                        <label className="text-purple-400 font-medium" htmlFor="name">Your Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            className="bg-black border border-purple-800 rounded-lg px-4 py-2 text-white outline-none focus:ring-2 focus:ring-purple-600"
                            required
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-purple-400 font-medium" htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            className="bg-black border border-purple-800 rounded-lg px-4 py-2 text-white outline-none focus:ring-2 focus:ring-purple-600"
                            required
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-purple-400 font-medium" htmlFor="message">Message</label>
                        <textarea
                            name="message"
                            id="message"
                            rows="5"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Write your message here..."
                            className="bg-black border border-purple-800 rounded-lg px-4 py-2 text-white outline-none focus:ring-2 focus:ring-purple-600"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-2xl font-semibold text-lg transition transform hover:scale-105"
                    >
                        Send Message
                    </button>
                </form>

                {/* CONTACT INFO */}
                <div className="bg-[#1B1B2F] border border-purple-700 rounded-2xl p-6 flex flex-col gap-4 shadow-lg">
                    <h2 className="text-2xl font-bold text-purple-500">Other Ways to Reach Us</h2>
                    <p className="text-gray-300">Email: support@cinebook.com</p>
                    <p className="text-gray-300">Phone: +977 9800000000</p>
                    <p className="text-gray-300">Address: CineBook HQ, Kathmandu, Nepal</p>
                </div>
            </div>

            {/* FOOTER */}
            <Footer />
        </div>
    );
}
