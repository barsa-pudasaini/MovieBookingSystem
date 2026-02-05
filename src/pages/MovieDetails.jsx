import { useParams } from "react-router-dom";
import { useState } from "react";
import { MOVIES, THEATRES } from "../seed/seedData";

export default function MovieDetails() {
  const { id } = useParams();
  const movie = MOVIES.find(m => m.id === id);
  const [selectedTheatre, setSelectedTheatre] = useState(null);

  if (!movie) return <p className="text-yellow-400 p-10">Movie not found 😭</p>;

  return (
    <div className="min-h-screen bg-black text-white p-10 grid grid-cols-1 lg:grid-cols-3 gap-10">

      {/* LEFT SIDE - TRAILER */}
      <div className="lg:col-span-2">
        <iframe
          src={movie.trailer} // Trailer always shows
          title={movie.title}
          allowFullScreen
          className="w-full h-[360px] rounded-xl border border-purple-700"
        />

        <h1 className="text-3xl font-bold text-purple-500 mt-6">
          {movie.title}
        </h1>

        <p className="text-gray-300 mt-4 leading-relaxed text-lg">
          {movie.synopsis || movie.description}
        </p>
      </div>

      {/* RIGHT SIDE - NOW SHOWING BOX */}
      <div className="bg-zinc-900 border border-purple-700 rounded-2xl p-6 flex flex-col justify-between h-fit max-h-[420px]">

        <div>
          <h2 className="text-2xl font-semibold text-purple-400 mb-4">
            Now Showing
          </h2>

          {/* THEATRE SELECT */}
          {!selectedTheatre && (
            <select
              className="w-full text-lg font-semibold bg-black border border-purple-600 rounded-xl px-4 py-2 mb-4 hover:bg-purple-900 transition-all"
              onChange={e =>
                setSelectedTheatre(THEATRES.find(t => t.name === e.target.value))
              }
            >
              <option value="">Choose Theatre</option>
              {THEATRES.map((t, i) => (
                <option key={i} value={t.name}>
                  {t.name}
                </option>
              ))}
            </select>
          )}

          {/* SELECTED THEATRE SHOWTIMES */}
          {selectedTheatre && (
            <div className="mt-2">
              <p className="text-purple-300 mb-3 font-medium">
                {selectedTheatre.name} Showtimes
              </p>

              <div className="flex flex-wrap gap-3 mb-3">
                {/* Example showtimes, can be made dynamic later */}
                {["10:00 AM", "1:30 PM", "5:00 PM"].map((time, i) => (
                  <span
                    key={i}
                    className="border border-purple-600 px-3 py-1 rounded-lg text-sm text-purple-200"
                  >
                    {time}
                  </span>
                ))}
              </div>

              {/* CHANGE THEATRE BUTTON */}
              <button
                className="text-sm text-purple-400 underline hover:text-purple-200"
                onClick={() => setSelectedTheatre(null)}
              >
                Change Theatre
              </button>
            </div>
          )}
        </div>

        {/* BUY TICKETS BUTTON */}
        <button className="mt-6 w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-xl shadow-lg transition-all transform hover:scale-105">
          Buy Tickets 🎟
        </button>

      </div>
    </div>
  );
}
