import { useState } from "react";
import { Link } from "react-router-dom";
import { MOVIES } from "../seed/seedData";

export default function Category() {
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  // unique genres
  const genres = [
    "All Genres",
    ...new Set(MOVIES.flatMap(movie => movie.genre || []))
  ];

  // filter logic
  const filteredMovies = MOVIES.filter(movie => {
    const matchesGenre =
      selectedGenre === "All" || movie.genre?.includes(selectedGenre);

    const matchesSearch = movie.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return matchesGenre && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-black text-white p-10">

      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
        <h1 className="text-3xl font-bold text-purple-500">
          Browse Movies 🎬
        </h1>

        {/* SEARCH + FILTER */}
        <div className="flex gap-4 w-full md:w-auto">
          {/* SEARCH */}
          <input
            type="text"
            placeholder="Search movie..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-64 bg-zinc-900 border border-purple-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />

          {/* GENRE DROPDOWN */}
          <select
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value)}
            className="bg-zinc-900 border border-purple-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
          >
            {genres.map((genre, i) => (
              <option key={i} value={genre}>
                {genre}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* MOVIES GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredMovies.map(movie => (
          <div
            key={movie.id}
            className="bg-zinc-900 border border-purple-800 rounded-xl overflow-hidden hover:scale-105 transition"
          >
            <img
              src={movie.poster}
              alt={movie.title}
              className="h-[360px] w-full object-cover"
            />

            <div className="p-4">
              <h2 className="text-lg font-semibold text-purple-400">
                {movie.title}
              </h2>

              <p className="text-gray-400 text-sm mt-1">
                ⏱ {movie.duration} mins
              </p>

              <p className="text-gray-500 text-xs mt-1">
                {movie.genre?.join(", ")}
              </p>

              <Link to={`/movie/${movie.id}`}>
                <button className="mt-4 w-full bg-purple-600 hover:bg-purple-700 py-2 rounded-lg font-semibold transition">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* EMPTY STATE */}
      {filteredMovies.length === 0 && (
        <p className="text-gray-400 mt-20 text-center text-lg">
          No movies found 😔
        </p>
      )}
    </div>
  );
}
