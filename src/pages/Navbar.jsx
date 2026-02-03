import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { Search, Menu, X, Film } from "lucide-react"

export default function Navbar() {
    const [open, setOpen] = useState(false)

    return (
        <nav className="bg-pink-100/80 backdrop-blur border-b border-pink-200 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* LEFT */}
                <div className="flex items-center gap-8">
                    <div className="flex items-center gap-2 text-pink-500 font-bold text-xl">
                        <Film />
                        PinkFlix
                    </div>

                    <div className="hidden md:flex gap-6 text-gray-600">
                        <Link className="hover:text-pink-500" to="/">Home</Link>
                        <Link className="hover:text-pink-500" to="/movies">Movies</Link>
                    </div>
                </div>

                {/* CENTER */}
                <div className="hidden md:flex flex-1 justify-center">
                    <div className="relative w-[340px]">
                        <Search className="absolute left-4 top-2.5 text-pink-400" size={18} />
                        <input
                            placeholder="Search movies, shows..."
                            className="w-full bg-white pl-11 pr-4 py-2 rounded-full text-sm outline-none focus:ring-2 focus:ring-pink-400"
                        />
                    </div>
                </div>

                {/* RIGHT */}
                <div className="hidden md:block">
                    <Link
                        to="/login"
                        className="bg-pink-400 hover:bg-pink-500 text-white px-6 py-2 rounded-full font-medium"
                    >
                        Login
                    </Link>
                </div>

                {/* MOBILE ICON */}
                <button onClick={() => setOpen(!open)} className="md:hidden text-pink-500">
                    {open ? <X /> : <Menu />}
                </button>
            </div>

            {/* MOBILE MENU */}
            {open && (
                <div className="md:hidden px-6 pb-6 space-y-4 text-gray-700">
                    <Link className="block hover:text-pink-500" to="/">Home</Link>
                    <Link className="block hover:text-pink-500" to="/movies">Movies</Link>

                    <div className="relative">
                        <Search className="absolute left-4 top-2.5 text-pink-400" size={18} />
                        <input
                            placeholder="Search movies..."
                            className="w-full bg-white pl-11 pr-4 py-2 rounded-full outline-none focus:ring-2 focus:ring-pink-400"
                        />
                    </div>

                    <Link
                        to="/login"
                        className="block text-center bg-pink-400 text-white py-2 rounded-full"
                    >
                        Login
                    </Link>
                </div>
            )}
        </nav>
    )
}
