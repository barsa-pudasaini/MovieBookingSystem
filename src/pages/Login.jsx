import { Mail, Lock, Chrome } from "lucide-react"
import { Link } from "react-router-dom"

export default function Login() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black flex items-center justify-center">

            <div className="bg-zinc-900/80 border border-purple-800 p-8 rounded-2xl w-[360px] shadow-xl text-white">

                <h2 className="text-3xl font-bold text-center mb-6 text-purple-500">
                    Welcome Back 🎬
                </h2>

                <form className="space-y-4">
                    <div className="relative">
                        <Mail className="absolute left-4 top-3 text-purple-400" size={18} />
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full bg-black text-white placeholder-gray-400 pl-11 py-2 rounded-lg outline-none border border-purple-800 focus:ring-2 focus:ring-purple-600"
                        />
                    </div>

                    <div className="relative">
                        <Lock className="absolute left-4 top-3 text-purple-400" size={18} />
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full bg-black text-white placeholder-gray-400 pl-11 py-2 rounded-lg outline-none border border-purple-800 focus:ring-2 focus:ring-purple-600"
                        />
                    </div>

                    <button className="w-full bg-purple-600 hover:bg-purple-700 py-2 rounded-lg font-semibold">
                        Login
                    </button>
                </form>

                <div className="text-center text-gray-500 my-4">or</div>

                <button className="w-full flex items-center justify-center gap-3 border border-purple-700 py-2 rounded-lg hover:bg-purple-900">
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
