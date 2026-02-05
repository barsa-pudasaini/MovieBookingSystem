import {
    collection,
    getDocs,
    deleteDoc,
    doc,
    setDoc
} from "firebase/firestore";
import { db } from "../config/Firebase";

/* ================= MOVIES (20 UNIQUE ITEMS) ================= */
export const MOVIES = [
    {
        id: "movie_1",
        title: "Inception",
        genre: ["Sci-Fi"],
        rating: 8.8,
        duration: 148,
        status: "now_showing",
        synopsis: "A thief enters dream worlds to steal secrets.",
        poster: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
        trailer: "https://www.youtube.com/embed/YoHD9XEInc0"
    },
    {
        id: "movie_2",
        title: "The Dark Knight",
        genre: ["Action"],
        rating: 9.0,
        duration: 152,
        status: "now_showing",
        synopsis: "Batman vs Joker in Gotham City.",
        poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        trailer: "https://www.youtube.com/embed/EXeTwQWrcwY"
    },
    {
        id: "movie_3",
        title: "Interstellar",
        genre: ["Sci-Fi"],
        rating: 8.6,
        duration: 169,
        status: "now_showing",
        synopsis: "Astronauts journey through a wormhole to save humanity.",
        poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
        trailer: "https://www.youtube.com/embed/zSWdZVtXT7E"
    },
    {
        id: "movie_4",
        title: "Avengers Endgame",
        genre: ["Action"],
        rating: 8.4,
        duration: 181,
        status: "now_showing",
        synopsis: "The Avengers unite for a final battle to undo Thanos' snap.",
        poster: "https://image.tmdb.org/t/p/w500/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg",
        trailer: "https://www.youtube.com/embed/TcMBFSGVi1c"
    },
    {
        id: "movie_5",
        title: "Parasite",
        genre: ["Thriller"],
        rating: 8.5,
        duration: 132,
        status: "now_showing",
        synopsis: "A poor family infiltrates a wealthy household.",
        poster: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
        trailer: "https://www.youtube.com/embed/5xH0HfJHsaY"
    },
    {
        id: "movie_6",
        title: "Joker",
        genre: ["Drama"],
        rating: 8.4,
        duration: 122,
        status: "now_showing",
        synopsis: "A comedian descends into madness in Gotham City.",
        poster: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
        trailer: "https://www.youtube.com/embed/zAGVQLHvwOY"
    },
    {
        id: "movie_7",
        title: "Dune",
        genre: ["Sci-Fi"],
        rating: 8.1,
        duration: 155,
        status: "now_showing",
        synopsis: "Paul Atreides becomes central to a galactic war over Arrakis.",
        poster: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
        trailer: "https://www.youtube.com/embed/n9xhJrPXop4"
    },
    {
        id: "movie_8",
        title: "Titanic",
        genre: ["Romance"],
        rating: 7.9,
        duration: 195,
        status: "now_showing",
        synopsis: "Love story aboard the ill-fated Titanic.",
        poster: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
        trailer: "https://www.youtube.com/embed/kVrqfYjkTdQ"
    },
    {
        id: "movie_9",
        title: "Oppenheimer",
        genre: ["History"],
        rating: 8.9,
        duration: 180,
        status: "now_showing",
        synopsis: "The story of J. Robert Oppenheimer and the atomic bomb.",
        poster: "https://image.tmdb.org/t/p/w500/ptpr0kGAckfQkJeJIt8st5dglvd.jpg",
        trailer: "https://www.youtube.com/embed/uYPbbksJxIg"
    },
    {
        id: "movie_10",
        title: "The Batman",
        genre: ["Action"],
        rating: 8.3,
        duration: 156,
        status: "now_showing",
        synopsis: "Batman investigates corruption in Gotham City.",
        poster: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
        trailer: "https://www.youtube.com/embed/mqqft2x_Aa4"
    },
    {
        id: "movie_11",
        title: "Doctor Strange",
        genre: ["Action"],
        rating: 7.5,
        duration: 115,
        status: "now_showing",
        synopsis: "A neurosurgeon discovers the hidden world of magic.",
        poster: "https://image.tmdb.org/t/p/w500/uGBVj3bEbCoZbDjjl9wTxcygko1.jpg",
        trailer: "https://www.youtube.com/embed/HSzx-zryEgM"
    },
    {
        id: "movie_12",
        title: "Spider-Man: No Way Home",
        genre: ["Action"],
        rating: 8.7,
        duration: 148,
        status: "now_showing",
        synopsis: "Peter Parker faces multiverse chaos after identity is revealed.",
        poster: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
        trailer: "https://www.youtube.com/embed/JfVOs4VSpmA"
    }
    
];



/* ================= THEATRES ================= */
export const THEATRES = [
    { id: "theatre_1", name: "Grand Cinema", location: "Downtown" },
    { id: "theatre_2", name: "City Plex", location: "Mall Road" },
    { id: "theatre_3", name: "IMAX Arena", location: "Tech Park" }
];

/* ================= SHOWTIMES ================= */
export const SHOWTIMES = MOVIES.slice(0, 10).map((movie, index) => ({
    id: `show_${index + 1}`,
    movieId: movie.id,
    theatreId: THEATRES[index % 3].id,
    time: `${10 + index * 2}:00`
}));

/* ================= SEATS ================= */
function generateSeats(show) {
    const seats = [];
    const rows = "ABCDEFGHIJ".split("");
    rows.forEach(row => {
        for (let i = 1; i <= 10; i++) {
            seats.push({
                id: `${show.id}_${row}${i}`,
                showTimeId: show.id,
                seatID: `${row}${i}`,
                status: "available",
                type: row <= "B" ? "VIP" : "Regular"
            });
        }
    });
    return seats;
}

/* ================= SEED FUNCTION ================= */
export async function seedFirestore() {
    console.log("🔥 Clearing old data...");

    const collections = ["movies", "theatres", "showtimes", "seats"];

    for (const col of collections) {
        const snap = await getDocs(collection(db, col));
        for (const d of snap.docs) {
            await deleteDoc(doc(db, col, d.id));
        }
    }

    console.log("✅ Old data removed");

    for (const movie of MOVIES) await setDoc(doc(db, "movies", movie.id), movie);

    for (const theatre of THEATRES)
        await setDoc(doc(db, "theatres", theatre.id), theatre);

    for (const show of SHOWTIMES) {
        await setDoc(doc(db, "showtimes", show.id), show);
        const seats = generateSeats(show);
        for (const seat of seats) {
            await setDoc(doc(db, "seats", seat.id), seat);
        }
    }

    console.log("🎉 Seeding completed successfully");
}
