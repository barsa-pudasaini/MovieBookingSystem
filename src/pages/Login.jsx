import { Mail, Lock, Chrome, Phone } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"

export default function Login() {
    const navigate = useNavigate()
    const [loginType, setLoginType] = useState("email")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const handleLogin = (e) => {
        e.preventDefault()

        if (password.length < 6) {
            setError("Password must be at least 6 characters")
            return
        }

        const user = {
            name: "Demo User",
            avatar: "https://i.pravatar.cc/150?img=12",
            provider: loginType
        }

        localStorage.setItem("user", JSON.stringify(user))
        navigate("/")
        window.location.reload()
    }

    const handleGoogleLogin = () => {
        const user = {
            name: "Google User",
            avatar: "https://i.pravatar.cc/150?img=32",
            provider: "google"
        }

        localStorage.setItem("user", JSON.stringify(user))
        navigate("/")
        window.location.reload()
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black flex items-center justify-center">
            <div className="bg-zinc-900/80 border border-purple-800 p-8 rounded-2xl w-[360px] shadow-xl text-white">

                <h2 className="text-3xl font-bold text-center mb-6 text-purple-500">
                    Welcome Back 🎬
                </h2>

                {/* LOGIN TYPE SWITCH */}
                <div className="flex mb-4 bg-black rounded-lg overflow-hidden">
                    <button
                        onClick={() => setLoginType("email")}
                        className={`w-1/2 py-2 ${loginType === "email" ? "bg-purple-600" : ""}`}
                    >
                        Email
                    </button>
                    <button
                        onClick={() => setLoginType("phone")}
                        className={`w-1/2 py-2 ${loginType === "phone" ? "bg-purple-600" : ""}`}
                    >
                        Phone
                    </button>
                </div>

                <form onSubmit={handleLogin} className="space-y-4">

                    {loginType === "email" ? (
                        <div className="relative">
                            <Mail className="absolute left-4 top-3 text-purple-400" size={18} />
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full bg-black pl-11 py-2 rounded-lg border border-purple-800 outline-none"
                                required
                            />
                        </div>
                    ) : (
                        <div className="relative">
                            <Phone className="absolute left-4 top-3 text-purple-400" size={18} />
                            <input
                                type="tel"
                                placeholder="Phone Number"
                                className="w-full bg-black pl-11 py-2 rounded-lg border border-purple-800 outline-none"
                                required
                            />
                        </div>
                    )}

                    <div className="relative">
                        <Lock className="absolute left-4 top-3 text-purple-400" size={18} />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full bg-black pl-11 py-2 rounded-lg border border-purple-800 outline-none"
                            required
                        />
                    </div>

                    {error && <p className="text-red-400 text-sm">{error}</p>}

                    <button className="w-full bg-purple-600 hover:bg-purple-700 py-2 rounded-lg font-semibold">
                        Login
                    </button>
                </form>

                <div className="text-center text-gray-500 my-4">or</div>

                <button
                    onClick={handleGoogleLogin}
                    className="w-full flex items-center justify-center gap-3 border border-purple-700 py-2 rounded-lg hover:bg-purple-900"
                >
                    <Chrome size={18} />
                    Continue with Google
                </button>

                <p className="text-center text-gray-400 mt-6 text-sm">
                    Don’t have an account?{" "}
                    <Link to="/register" className="text-purple-400 hover:underline">
                        Register
                    </Link>
                </p>
            </div>
        </div>
    )
}
