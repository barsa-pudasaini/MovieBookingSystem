import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Menu, X, Film, Search, LogOut, Ticket } from "lucide-react"

export default function Navbar() {
    const [open, setOpen] = useState(false)
    const [profileOpen, setProfileOpen] = useState(false)
    const navigate = useNavigate()

    const user = JSON.parse(localStorage.getItem("user"))

    const handleLogout = () => {
        localStorage.removeItem("user")
        setProfileOpen(false)
        navigate("/")
        window.location.reload()
    }

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
                        
                        <Link to="/contact" className="hover:text-purple-400">Contact</Link>
                    </div>
                </div>

                {/* RIGHT */}
                <div className="hidden md:flex items-center gap-4 relative">

                    {/* SEARCH */}
                    <div className="relative">
                        <Search size={18} className="absolute left-3 top-2.5 text-purple-400" />
                        <input
                            placeholder="Search movies..."
                            className="bg-zinc-900 border border-purple-800 text-white pl-10 pr-4 py-2 rounded-full text-sm outline-none"
                        />
                    </div>

                    {/* AUTH SECTION */}
                    {!user ? (
                        <Link
                            to="/login"
                            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full font-medium"
                        >
                            Login
                        </Link>
                    ) : (
                        <div className="relative">
                            {/* AVATAR */}
                            <img
                                src={user.avatar}
                                alt="user"
                                onClick={() => setProfileOpen(!profileOpen)}
                                className="w-10 h-10 rounded-full cursor-pointer border-2 border-purple-600"
                            />

                            {/* DROPDOWN */}
                            {profileOpen && (
                                <div className="absolute right-0 mt-3 w-48 bg-zinc-900 border border-purple-700 rounded-xl shadow-xl overflow-hidden">
                                    <div className="px-4 py-3 text-sm text-purple-300">
                                        Hi, {user.name}
                                    </div>

                                    <Link
                                        to="/my-booking"
                                        className="flex items-center gap-2 px-4 py-2 text-gray-300 hover:bg-purple-800"
                                        onClick={() => setProfileOpen(false)}
                                    >
                                        <Ticket size={16} />
                                        My Bookings
                                    </Link>

                                    <button
                                        onClick={handleLogout}
                                        className="w-full flex items-center gap-2 px-4 py-2 text-red-400 hover:bg-red-900/30"
                                    >
                                        <LogOut size={16} />
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {/* MOBILE ICON */}
                <button onClick={() => setOpen(!open)} className="md:hidden text-purple-400">
                    {open ? <X /> : <Menu />}
                </button>
            </div>

            {/* MOBILE MENU */}
            {open && (
                <div className="md:hidden bg-black px-6 pb-6 space-y-4 text-gray-300">
                    <Link to="/movies">Movies</Link>
                    <Link to="/category">Category</Link>
                    <Link to="/genre">Genre</Link>
                    <Link to="/contact">Contact</Link>

                    {!user ? (
                        <Link
                            to="/login"
                            className="block text-center bg-purple-600 text-white py-2 rounded-full"
                        >
                            Login
                        </Link>
                    ) : (
                        <>
                            <Link to="/my-booking">My Bookings</Link>
                            <button onClick={handleLogout} className="text-red-400">
                                Logout
                            </button>
                        </>
                    )}
                </div>
            )}
        </nav>
    )
}
