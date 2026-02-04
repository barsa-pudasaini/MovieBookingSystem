import { useParams } from "react-router-dom"
import { useState } from "react"

const movies = [
  {
    id: "1",
    title: "Inception",
    trailer: "https://www.youtube.com/embed/YoHD9XEInc0",
    description:
      "Inception is a mind-bending science fiction thriller directed by Christopher Nolan. The story follows Dom Cobb, a skilled thief who specializes in extracting secrets from deep within the subconscious during dreams. Cobb is offered a chance to erase his criminal past by performing an impossible task called inception. As layers of dreams stack upon one another, reality begins to blur. The film explores time, memory, guilt, and the power of ideas. With stunning visuals and a gripping score, Inception challenges the audience to question what is real."
  },
  {
    id: "2",
    title: "Oppenheimer",
    trailer: "https://www.youtube.com/embed/uYPbbksJxIg",
    description:
      "Oppenheimer is a historical drama that tells the story of J. Robert Oppenheimer, the brilliant physicist behind the creation of the atomic bomb. The film explores his role in the Manhattan Project and the moral consequences of his invention. As the world changes forever, Oppenheimer struggles with guilt, power, and responsibility. The narrative moves between science, politics, and personal conflict. It is a deep and emotional portrayal of ambition and its cost."
  },
  {
    id: "3",
    title: "The Dark Knight",
    trailer: "https://www.youtube.com/embed/EXeTwQWrcwY",
    description:
      "The Dark Knight follows Batman as he faces his greatest enemy, the Joker. Gotham City descends into chaos as the Joker challenges Batman’s sense of justice and morality. The film explores themes of order versus chaos and heroism versus corruption. Heath Ledger delivers a legendary performance as the Joker. With intense action sequences and emotional depth, this movie redefined the superhero genre."
  },
  {
    id: "4",
    title: "Interstellar",
    trailer: "https://www.youtube.com/embed/zSWdZVtXT7E",
    description:
      "Interstellar is a visually stunning science fiction epic about humanity’s fight for survival. A group of astronauts travels through a wormhole in search of a new home for mankind. The film explores time dilation, love, sacrifice, and space exploration. Scientific concepts are blended with emotional storytelling. It is both an intellectual and emotional journey across the universe."
  },
  {
    id: "5",
    title: "Avengers Endgame",
    trailer: "https://www.youtube.com/embed/TcMBFSGVi1c",
    description:
      "Avengers Endgame concludes the epic Infinity Saga of the Marvel Cinematic Universe. The Avengers reunite to undo the devastation caused by Thanos. The film is packed with emotional moments, heroic sacrifices, and epic battles. It celebrates friendship, loss, and redemption. Endgame serves as a powerful farewell to many beloved characters."
  },
  {
    id: "6",
    title: "Parasite",
    trailer: "https://www.youtube.com/embed/5xH0HfJHsaY",
    description:
      "Parasite is a dark social satire that explores class inequality in modern society. The film follows a poor family that slowly infiltrates a wealthy household. As secrets unravel, tension builds toward an explosive climax. The story blends humor, suspense, and tragedy. Parasite offers a sharp critique of social divisions."
  },
  {
    id: "7",
    title: "Joker",
    trailer: "https://www.youtube.com/embed/zAGVQLHvwOY",
    description:
      "Joker tells the origin story of Arthur Fleck, a failed comedian who descends into madness. Set in a decaying Gotham City, the film explores mental illness, isolation, and society’s neglect. Arthur’s transformation into Joker is both tragic and disturbing. Joaquin Phoenix delivers a haunting performance. The movie challenges viewers with its dark realism."
  },
  {
    id: "8",
    title: "The Matrix",
    trailer: "https://www.youtube.com/embed/vKQi3bBA1y8",
    description:
      "The Matrix follows Neo, a hacker who discovers that reality is a simulated illusion. Humanity is unknowingly trapped by intelligent machines. Neo joins a rebellion to free mankind from control. The film blends philosophy, action, and groundbreaking visual effects. It questions reality, freedom, and choice."
  },
  {
    id: "9",
    title: "Gladiator",
    trailer: "https://www.youtube.com/embed/owK1qxDselE",
    description:
      "Gladiator follows Maximus, a Roman general betrayed by a corrupt emperor. Forced into slavery, he rises as a gladiator seeking revenge. The film explores honor, loyalty, and justice. Epic battles and emotional storytelling define the movie. It is a timeless tale of strength and sacrifice."
  },
  {
    id: "10",
    title: "The Shawshank Redemption",
    trailer: "https://www.youtube.com/embed/6hB3S9bIaco",
    description:
      "The Shawshank Redemption tells the story of Andy Dufresne, a man wrongly imprisoned for murder. Inside prison, he forms a bond with fellow inmate Red. The film explores hope, friendship, and perseverance. Andy’s quiet resilience inspires everyone around him. It is a powerful story of redemption and freedom."
  }
]

const theatres = [
  { name: "QFX", times: ["10:00 AM", "1:30 PM", "5:00 PM"] },
  { name: "FCube", times: ["11:00 AM", "3:00 PM", "7:00 PM"] },
  { name: "Big Movies", times: ["12:00 PM", "4:30 PM", "8:30 PM"] }
]

export default function MovieDetails() {
  const { id } = useParams()
  const movie = movies.find(m => m.id === id)
  const [selectedTheatre, setSelectedTheatre] = useState(null)

  if (!movie) return <p className="text-white p-10">Movie not found</p>

  return (
    <div className="min-h-screen bg-black text-white p-10 grid grid-cols-1 lg:grid-cols-3 gap-10">

      {/* LEFT SIDE */}
      <div className="lg:col-span-2">
        <iframe
          src={movie.trailer}
          title={movie.title}
          allow="autoplay; encrypted-media"
          allowFullScreen
          className="w-full h-[360px] rounded-xl border border-purple-800"
        />

        <h1 className="text-3xl font-bold text-purple-500 mt-6">
          {movie.title}
        </h1>

        <p className="text-gray-400 mt-4 leading-relaxed">
          {movie.description}
        </p>

        {/* BUY TICKETS — LEFT SIDE */}
        <button className="mt-6 bg-purple-600 hover:bg-purple-700 px-10 py-3 rounded-xl font-semibold">
          Buy Tickets 🎟
        </button>
      </div>

      {/* RIGHT SIDE — BIG NOW SHOWING BOX */}
      <div className="bg-zinc-900 border border-purple-800 rounded-2xl p-8 h-fit min-h-[350px]">
        <h2 className="text-2xl font-semibold text-purple-400 mb-6">
          Now Showing
        </h2>

        {/* SMALL SELECT THEATRE */}
        {!selectedTheatre && (
          <select
            className="w-full max-w-[220px] bg-black border border-purple-700 rounded-lg px-4 py-2 text-white"
            onChange={(e) => {
              const theatre = theatres.find(t => t.name === e.target.value)
              setSelectedTheatre(theatre)
            }}
          >
            <option value="">Select Theatre</option>
            {theatres.map((t, index) => (
              <option key={index} value={t.name}>
                {t.name}
              </option>
            ))}
          </select>
        )}

        {/* SHOWTIMES */}
        {selectedTheatre && (
          <div className="mt-6">
            <p className="text-purple-400 font-semibold mb-3">
              {selectedTheatre.name} Showtimes
            </p>

            <div className="flex flex-wrap gap-3">
              {selectedTheatre.times.map((time, i) => (
                <span
                  key={i}
                  className="border border-purple-600 px-4 py-1 rounded-lg text-sm"
                >
                  {time}
                </span>
              ))}
            </div>

            <button
              className="mt-5 text-sm text-purple-400 underline"
              onClick={() => setSelectedTheatre(null)}
            >
              Change Theatre
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
