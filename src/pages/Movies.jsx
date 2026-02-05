import { Link } from "react-router-dom";
import { MOVIES } from "../seed/seedData";

// Default placeholder image in case a movie poster is missing
const DEFAULT_POSTER = "https://via.placeholder.com/500x750?text=No+Image";

export default function Movies() {
  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-3xl font-bold text-purple-500 mb-8">Now Showing 🎬</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {MOVIES.map((movie) => (
          <div
            key={movie.id}
            className="bg-zinc-900 border border-purple-700 rounded-xl overflow-hidden hover:scale-105 transition"
          >
            <img
              src={movie.poster || movie.image || DEFAULT_POSTER}
              alt={movie.title}
              className="h-[360px] w-full object-cover"
            />

            <div className="p-4">
              <h2 className="text-lg font-semibold text-purple-400">
                {movie.title}
              </h2>
              <p className="text-gray-400 text-sm mt-1">
                ⏱ {movie.duration ? movie.duration : "N/A"} mins
              </p>

              <Link to={`/movie/${movie.id}`}>
                <button className="mt-4 w-full bg-purple-600 hover:bg-purple-700 py-2 rounded-lg font-semibold text-white transition">
                  Book Now
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
