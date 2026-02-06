import { useLocation } from "react-router-dom";
import { useState } from "react";
import SeatMap from "../components/SeatMap";

export default function SeatBooking() {
    const location = useLocation();
    const { theatre, time, movie } = location.state || {};
    const [selectedSeats, setSelectedSeats] = useState([]);

    // Check if navigation state exists
    if (!theatre || !time || !movie)
        return <p className="text-purple-400 p-10">No booking information found 😭</p>;

    const seatPrice = 500; // cost per seat
    const totalCost = selectedSeats.length * seatPrice;

    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) return alert("Please login first!");


    const handleSeatSelect = (seatId) => {
        // toggle seat selection
        setSelectedSeats(prev =>
            prev.includes(seatId)
                ? prev.filter(s => s !== seatId)
                : [...prev, seatId]
        );
    };

    const handleBookTickets = () => {
        if (selectedSeats.length === 0) return alert("Please select at least one seat!");
        if (!user) return alert("Please login first!");

        const bookingData = {
            movie: movie.title,
            movieId: movie.id,
            poster: movie.poster,
            theatre: theatre.name,
            time: time,
            seats: selectedSeats,
            price: totalCost,
            bookedAt: new Date().toISOString(),
        };

        // Get existing bookings for this user
        const userBookingsKey = `bookings_${user.id}`; // or user.email
        const existingBookings = JSON.parse(localStorage.getItem(userBookingsKey)) || [];

        // Save new booking
        localStorage.setItem(userBookingsKey, JSON.stringify([...existingBookings, bookingData]));


        alert(
            `Booking Confirmed!\nMovie: ${bookingData.movie}\nTheatre: ${bookingData.theatre}\nShowtime: ${bookingData.showtime}\nSeats: ${bookingData.seats.join(", ")}\nTotal: Rs ${bookingData.totalCost}`
        );

        // TODO: Save bookingData to Firebase here
    };

    return (
        <div className="min-h-screen bg-black p-10 text-white">
            <h1 className="text-3xl font-bold text-purple-500 mb-6">{movie.title}</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* LEFT SIDE - BOOKING SUMMARY */}
                <div className="lg:col-span-1 bg-[#1B1B2F] border border-purple-500 rounded-2xl p-6 flex flex-col justify-between h-full shadow-lg">
                    <h2 className="text-2xl font-semibold text-purple-500 mb-4">Booking Summary</h2>

                    {/* Movie Poster */}
                    <img
                        src={movie?.poster || "https://via.placeholder.com/100x195?text=No+Image"}
                        alt={movie?.title || "Movie Poster"}
                        className="w-full rounded-xl mb-4 border border-purple-500 object-cover"
                    />

                    <div className="space-y-3 text-purple-300">
                        <p><span className="font-semibold text-purple-400">Movie:</span> {movie.title}</p>
                        <p><span className="font-semibold text-purple-400">Theatre:</span> {theatre.name}</p>
                        <p><span className="font-semibold text-purple-400">Showtime:</span> {time}</p>
                        <p><span className="font-semibold text-purple-400">Selected Seats:</span> {selectedSeats.join(", ") || "None"}</p>
                        <p className="text-xl font-bold text-purple-500">Total: Rs {totalCost}</p>
                    </div>

                    <button
                        onClick={handleBookTickets}
                        className="mt-6 w-full bg-purple-500 hover:bg-purple-400 text-black font-bold py-3 rounded-2xl shadow-lg transition-all transform hover:scale-105"
                    >
                        Book Tickets 🎟
                    </button>
                </div>

                {/* RIGHT SIDE - SEAT MAP */}
                <div className="lg:col-span-2">
                    <SeatMap
                        selectedSeats={selectedSeats}
                        onSeatSelect={handleSeatSelect}
                    />
                </div>
            </div>
        </div>
    );
}
