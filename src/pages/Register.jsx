import { Mail, Lock, User, Chrome } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { auth, googleProvider } from "../config/Firebase";
import { signInWithPopup } from "firebase/auth";

export default function Register() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleRegister = (e) => {
        e.preventDefault();

        if (password.length < 8) {
            setError("Password must be at least 8 characters");
            return;
        }

        // Fake register (later can replace with Firebase email/password)
        const user = {
            name: username,
            avatar: "https://i.pravatar.cc/150?img=48",
            provider: "register",
            email
        };

        localStorage.setItem("user", JSON.stringify(user));
        navigate("/");
        window.location.reload();
    };

    const handleGoogleRegister = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const user = result.user;

            const userData = {
                name: user.displayName,
                avatar: user.photoURL,
                email: user.email,
                provider: "google"
            };

            localStorage.setItem("user", JSON.stringify(userData));
            navigate("/");
            window.location.reload();
        } catch (err) {
            console.log("Google login error:", err.message);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black flex items-center justify-center">
            <div className="bg-zinc-900/80 border border-purple-800 p-8 rounded-2xl w-[360px] shadow-xl text-white">
                <h2 className="text-3xl font-bold text-center mb-6 text-purple-500">
                    Create Account 🎥
                </h2>

                <form onSubmit={handleRegister} className="space-y-4">
                    <div className="relative">
                        <User className="absolute left-3 top-3 text-purple-400" size={18} />
                        <input
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full bg-black border border-purple-800 py-2 pl-10 rounded-lg outline-none"
                            required
                        />
                    </div>

                    <div className="relative">
                        <Mail className="absolute left-3 top-3 text-purple-400" size={18} />
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-black border border-purple-800 py-2 pl-10 rounded-lg outline-none"
                            required
                        />
                    </div>

                    <div className="relative">
                        <Lock className="absolute left-3 top-3 text-purple-400" size={18} />
                        <input
                            type="password"
                            placeholder="Password (min 8 chars)"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full bg-black border border-purple-800 py-2 pl-10 rounded-lg outline-none"
                            required
                        />
                    </div>

                    {error && <p className="text-red-400 text-sm">{error}</p>}

                    <button
                        type="submit"
                        className="w-full bg-purple-600 hover:bg-purple-700 py-2 rounded-lg font-semibold"
                    >
                        Register
                    </button>
                </form>

                <div className="text-center text-gray-500 my-4">or</div>

                <button
                    onClick={handleGoogleRegister}
                    className="w-full flex items-center justify-center gap-3 border border-purple-700 py-2 rounded-lg hover:bg-purple-900"
                >
                    <Chrome size={18} />
                    Continue with Google
                </button>

                <p className="text-center text-gray-400 mt-6 text-sm">
                    Already have an account?{" "}
                    <Link to="/login" className="text-purple-400 hover:underline">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
}
