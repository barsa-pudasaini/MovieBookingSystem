import React from "react"
import { Film } from "lucide-react"
import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 border-t border-purple-900/60 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-10">

        {/* LOGO + DESC */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 text-purple-500 font-bold text-2xl">
            <Film />
            CineBook
          </div>
          <p className="text-gray-400 max-w-sm leading-relaxed">
            Discover the latest movies, book tickets, and stay updated with
            CineBook. Your ultimate cinema companion.
          </p>
        </div>

        {/* NAVIGATION */}
        <div className="flex flex-col gap-4">
          <h3 className="text-white font-semibold tracking-wide">
            Navigation
          </h3>
          <div className="flex flex-col gap-2">
            <Link to="/" className="hover:text-purple-400 transition">Home</Link>
            <Link to="/movies" className="hover:text-purple-400 transition">Movies</Link>
            <Link to="/category" className="hover:text-purple-400 transition">Category</Link>
            <Link to="/genre" className="hover:text-purple-400 transition">Genre</Link>
            <Link to="/contact" className="hover:text-purple-400 transition">Contact</Link>
          </div>
        </div>

        {/* INFO */}
        <div className="flex flex-col gap-4">
          <h3 className="text-white font-semibold tracking-wide">
            Info
          </h3>
          <div className="flex flex-col gap-2">
            <Link to="/faqs" className="hover:text-purple-400 transition">FAQs</Link>
            <Link to="/terms" className="hover:text-purple-400 transition">Terms & Conditions</Link>
            <Link to="/privacy" className="hover:text-purple-400 transition">Privacy Policy</Link>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="mt-12 text-center text-gray-500 text-sm border-t border-purple-900/40 pt-6">
        &copy; {new Date().getFullYear()}{" "}
        <span className="text-purple-400 font-medium">CineBook</span>.
        All rights reserved.
      </div>
    </footer>
  )
}
