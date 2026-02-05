import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Film, Search } from "lucide-react";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="bg-black border-b border-purple-800 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* LEFT */}
                <div className="flex items-center gap-10">
                    <Link to="/" className="flex items-center gap-2 text-purple-500 font-bold text-xl">
                        <Film />
                        CineBook
                    </Link>

                    <div className="hidden md:flex gap-6 text-gray-300">
                        <Link to="/movies" className="hover:text-purple-400">Movies</Link>
                        <Link to="/category" className="hover:text-purple-400">Category</Link>
                        <Link to="/genre" className="hover:text-purple-400">Genre</Link>
                        <Link to="/contact" className="hover:text-purple-400">Contact</Link>
                    </div>
                </div>

                {/* RIGHT */}
                <div className="hidden md:flex items-center gap-4">
                    {/* SEARCH */}
                    <div className="relative">
                        <Search size={18} className="absolute left-3 top-2.5 text-purple-400" />
                        <input
                            placeholder="Search movies..."
                            className="bg-zinc-900 border border-purple-800 text-white pl-10 pr-4 py-2 rounded-full text-sm outline-none focus:ring-2 focus:ring-purple-600"
                        />
                    </div>

                    {/* LOGIN */}
                    <Link
                        to="/login"
                        className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full font-medium"
                    >
                        Login
                    </Link>
                </div>

                {/* MOBILE ICON */}
                <button onClick={() => setOpen(!open)} className="md:hidden text-purple-400">
                    {open ? <X /> : <Menu />}
                </button>
            </div>

            {/* MOBILE MENU */}
            {open && (
                <div className="md:hidden bg-black px-6 pb-6 space-y-4 text-gray-300">
                    <Link to="/movies" className="block hover:text-purple-400 transition">Movies</Link>
                    <Link to="/category" className="block hover:text-purple-400 transition">Category</Link>
                    <Link to="/genre" className="block hover:text-purple-400 transition">Genre</Link>
                    <Link to="/contact" className="block hover:text-purple-400 transition">Contact</Link>

                    <div className="relative">
                        <Search size={18} className="absolute left-3 top-2.5 text-purple-400" />
                        <input
                            placeholder="Search movies..."
                            className="w-full bg-zinc-900 border border-purple-800 text-white pl-10 py-2 rounded-full outline-none"
                        />
                    </div>

                    <Link
                        to="/login"
                        className="block text-center bg-purple-600 text-white py-2 rounded-full hover:bg-purple-700 transition"
                    >
                        Login
                    </Link>
                </div>
            )}
        </nav>
    );
}
