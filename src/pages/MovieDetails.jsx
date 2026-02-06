import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { MOVIES, THEATRES } from "../seed/seedData";

export default function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = MOVIES.find(m => m.id === id);
  const [selectedTheatre, setSelectedTheatre] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  if (!movie)
    return <p className="text-purple-400 p-10">Movie not found 😭</p>;

  const handleBuyTickets = () => {
    if (!selectedTheatre || !selectedTime) return;

    // ✅ Include the movie object in navigation state
    navigate(`/movie/${id}/seats`, {
      state: { theatre: selectedTheatre, time: selectedTime, movie: movie },
    });
  };

  return (
    <div className="min-h-screen bg-black text-white p-10 grid grid-cols-1 lg:grid-cols-3 gap-10">

      {/* LEFT SIDE - TRAILER */}
      <div className="lg:col-span-2">
        <iframe
          src={movie.trailer}
          title={movie.title}
          allowFullScreen
          className="w-full h-[360px] rounded-xl border border-purple-500"
        />

        <h1 className="text-3xl font-bold text-purple-500 mt-6">
          {movie.title}
        </h1>

        <p className="text-purple-200 mt-4 leading-relaxed text-lg">
          {movie.synopsis || movie.description}
        </p>

        <div className="flex gap-6 mt-4 text-purple-300">
          <span>⭐ {movie.rating}</span>
          <span>⏱ {movie.duration} mins</span>
          <span>🎭 {movie.genre?.join(", ")}</span>
        </div>
      </div>

      {/* RIGHT SIDE - NOW SHOWING BOX */}
      <div className="bg-[#1B1B2F] border border-purple-500 rounded-2xl p-6 flex flex-col justify-between h-[600px]">

        <div>
          <h2 className="text-2xl font-semibold text-purple-500 mb-5">
            Now Showing
          </h2>

          {!selectedTheatre && (
            <select
              className="w-full text-lg font-semibold bg-black border border-purple-500 rounded-xl px-5 py-3 mb-4 hover:bg-[#2A1B3D] transition-all"
              onChange={e =>
                setSelectedTheatre(
                  THEATRES.find(t => t.name === e.target.value)
                )
              }
            >
              <option value="">Choose Theatre</option>
              {THEATRES.map((t, i) => (
                <option key={i} value={t.name}>{t.name}</option>
              ))}
            </select>
          )}

          {selectedTheatre && !selectedTime && (
            <div>
              <p className="text-purple-300 mb-3 font-medium">
                {selectedTheatre.name} Showtimes
              </p>

              <div className="flex flex-wrap gap-3 mb-4">
                {["10:00 AM", "1:30 PM", "5:00 PM"].map((time, i) => (
                  <button
                    key={i}
                    className="border border-purple-500 px-4 py-1 rounded-lg text-sm text-purple-200 hover:bg-purple-500 hover:text-black transition"
                    onClick={() => setSelectedTime(time)}
                  >
                    {time}
                  </button>
                ))}
              </div>

              <button
                className="text-sm text-purple-400 underline hover:text-purple-300"
                onClick={() => setSelectedTheatre(null)}
              >
                Change Theatre
              </button>
            </div>
          )}

          {selectedTime && (
            <p className="text-purple-300 font-medium mb-4">
              Selected: {selectedTheatre.name} @ {selectedTime}
            </p>
          )}
        </div>

        {/* BUY TICKETS BUTTON */}
        <button
          onClick={handleBuyTickets}
          className={`w-full text-lg font-bold py-3 rounded-2xl shadow-lg transition-all transform hover:scale-105 ${selectedTheatre && selectedTime
            ? "bg-purple-500 hover:bg-purple-400 text-black"
            : "bg-gray-700 cursor-not-allowed text-gray-400"
            }`}
          disabled={!selectedTheatre || !selectedTime}
        >
          Buy Tickets 🎟
        </button>

      </div>
    </div>
  );
}
