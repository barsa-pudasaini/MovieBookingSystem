import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { MOVIES } from "../seed/seedData"

const heroImages = [
    "https://image.tmdb.org/t/p/original/8YFL5QQVPy3AgrEQxNYVSgiPEbe.jpg",
    "https://image.tmdb.org/t/p/original/zsbolOkw8RhTU4DKOrpf4M7KCmi.jpg",
    "https://image.tmdb.org/t/p/original/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
]

export default function Home() {
    const [index, setIndex] = useState(0)

    // HERO AUTO SLIDER
    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % heroImages.length)
        }, 2500)

        return () => clearInterval(timer)
    }, [])

    const nextSlide = () => {
        setIndex((prev) => (prev + 1) % heroImages.length)
    }

    const prevSlide = () => {
        setIndex((prev) =>
            prev === 0 ? heroImages.length - 1 : prev - 1
        )
    }

    // ONLY FIRST 8 MOVIES FROM SEED DATA
    const movies = MOVIES.slice(0, 8)

    return (
        <div className="bg-black text-white">

            {/* HERO SECTION */}
            <section className="relative h-[80vh] flex items-center">
                <img
                    src={heroImages[index]}
                    className="absolute inset-0 w-full h-full object-cover opacity-40 transition-all duration-700"
                />

                <div className="relative w-[85%] mx-auto">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 max-w-xl">
                        Welcome to <br />
                        <span className="text-purple-500">CineBook</span>
                    </h1>

                    <div className="flex gap-4">
                        <Link
                            to="/movies"
                            className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-full font-semibold"
                        >
                            Book Now
                        </Link>

                        <button className="border border-purple-500 px-6 py-3 rounded-full hover:bg-purple-600">
                            See Location
                        </button>
                    </div>
                </div>

                {/* ARROWS */}
                <button
                    onClick={prevSlide}
                    className="absolute left-6 bg-black/60 p-3 rounded-full hover:bg-purple-600"
                >
                    <ChevronLeft size={28} />
                </button>

                <button
                    onClick={nextSlide}
                    className="absolute right-6 bg-black/60 p-3 rounded-full hover:bg-purple-600"
                >
                    <ChevronRight size={28} />
                </button>
            </section>

            {/* NOW SHOWING */}
            <section className="max-w-7xl mx-auto px-6 py-14">
                <h2 className="text-3xl font-bold mb-8">Now Showing 🎬</h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {movies.map((movie) => (
                        <div
                            key={movie.id}
                            className="bg-zinc-900 rounded-xl overflow-hidden hover:scale-105 transition"
                        >
                            <img
                                src={movie.poster}
                                alt={movie.title}
                                className="h-[260px] w-full object-cover"
                            />

                            <div className="p-4">
                                <h3 className="font-semibold text-sm mb-1">
                                    {movie.title}
                                </h3>

                                <p className="text-gray-400 text-xs mb-3">
                                    Rating: {movie.rating}
                                </p>

                                <Link
                                    to={`/movies/${movie.id}`}
                                    className="block text-center bg-purple-600 hover:bg-purple-700 py-2 rounded-lg text-sm"
                                >
                                    
                                    Book Now
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    )
}
