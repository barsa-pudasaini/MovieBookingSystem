export default function MyBookings() {
 
  const user = JSON.parse(localStorage.getItem("user"));
  const bookings = user
    ? JSON.parse(localStorage.getItem(`bookings_${user.id}`)) || []
    : [];


  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-3xl text-purple-500 font-bold mb-6">
        My Bookings 🎟
      </h1>

      {bookings.length === 0 && (
        <p className="text-gray-400">No bookings yet.</p>
      )}

      <div className="space-y-4">
        {bookings.map((b, i) => (
          <div
            key={i}
            className="bg-[#1B1B2F] border border-purple-700 rounded-xl p-4 flex gap-4 items-center shadow-lg"
          >
            {/* Movie Poster */}
            {b.poster && (
              <img
                src={b.poster}
                alt={b.movie}
                className="w-20 h-28 rounded-xl border border-purple-500 object-cover"
              />
            )}

            {/* Booking Info */}
            <div className="flex-1 space-y-1">
              <h2 className="text-xl text-purple-400 font-semibold">{b.movie}</h2>
              <p className="text-gray-300">
                {b.theatre} • {b.time}
              </p>
              <p className="text-gray-400">
                Seats: {b.seats.join(", ")} • Rs {b.price}
              </p>

              <p className="text-purple-500 font-bold">
                Total: Rs {b.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
