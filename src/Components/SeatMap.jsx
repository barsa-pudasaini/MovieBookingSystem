import React, { useState } from 'react';
import { Armchair } from 'lucide-react';


const SeatMap = ({ selectedSeats = [], onSeatSelect }) => {
    const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    const cols = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const getSeatStatus = (seatId) => {
        if (selectedSeats.includes(seatId)) {
            return 'selected';
        }
        // Randomly mark some seats as booked for demo
        const isBooked = Math.random() > 0.8;
        return isBooked ? 'booked' : 'available';
    };

    const handleSeatClick = (seatId) => {
        const status = getSeatStatus(seatId);
        if (status === 'booked') return;
        onSeatSelect(seatId);
    };

    return (
        <div className="p-6 bg-black/80 rounded-xl border border-purple-500">
            {/* SCREEN */}
            <div className="text-center mb-8">
                <div className="w-3/4 h-2 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-4" />
                <p className="text-lg text-purple-300 font-semibold">SCREEN</p>
            </div>

            {/* SEATS */}
            <div className="flex flex-col items-center space-y-4">
                {rows.map((row) => (
                    <div key={row} className="flex items-center space-x-4">
                        <div className="w-8 text-center font-semibold text-purple-300">{row}</div>
                        {cols.map((col) => {
                            const seatId = `${row}${col}`;
                            const status = getSeatStatus(seatId);

                            return (
                                <button
                                    key={seatId}
                                    onClick={() => handleSeatClick(seatId)}
                                    disabled={status === 'booked'}
                                    className={`relative group ${status === 'booked'
                                            ? 'cursor-not-allowed'
                                            : 'cursor-pointer hover:scale-110 transition-transform'
                                        }`}
                                >
                                    <Armchair
                                        size={28}
                                        className={
                                            status === 'selected'
                                                ? 'text-purple-500 fill-current'
                                                : status === 'booked'
                                                    ? 'text-gray-700 fill-current'
                                                    : 'text-gray-400 hover:text-purple-400'
                                        }
                                    />
                                    <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-purple-300 opacity-0 group-hover:opacity-100 transition-opacity">
                                        {col}
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                ))}
            </div>

            {/* LEGEND */}
            <div className="mt-8 flex justify-center space-x-6 text-purple-300">
                <div className="flex items-center space-x-2">
                    <Armchair size={20} className="text-gray-400" />
                    <span>Available</span>
                </div>
                <div className="flex items-center space-x-2">
                    <Armchair size={20} className="text-purple-500 fill-current" />
                    <span>Selected</span>
                </div>
                <div className="flex items-center space-x-2">
                    <Armchair size={20} className="text-gray-700 fill-current" />
                    <span>Booked</span>
                </div>
            </div>
        </div>
    );
};

export default function SeatMap() {
    return (
        <div>
            Seat Map
        </div>
    );
}

