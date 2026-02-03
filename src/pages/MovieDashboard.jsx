import { useNavigate } from "react-router-dom"

export default function MovieDashboard() {
  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem("user"))

  if (!user) navigate("/login")

  const logout = () => {
    localStorage.removeItem("user")
    navigate("/")
    window.location.reload()
  }

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold text-red-500 mb-6">
        Dashboard 🎬
      </h1>

      {user.role === "admin" && (
        <>
          <div className="bg-zinc-900 p-6 rounded-xl mb-4">
            🎞 Carousel (Admin)
          </div>
          <div className="bg-zinc-900 p-6 rounded-xl mb-4">
            🎟 My Bookings
          </div>
        </>
      )}

      {user.role !== "admin" && (
        <div className="bg-zinc-900 p-6 rounded-xl mb-4">
          👤 User Dashboard
        </div>
      )}

      <button
        onClick={logout}
        className="bg-red-600 px-6 py-2 rounded-lg"
      >
        Logout
      </button>
    </div>
  )
}
