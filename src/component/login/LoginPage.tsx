/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { userLogin } from "../authenticationAction/userLogin";
import Link from "next/link";
import { AiOutlineCopy, AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export default function LoginPage() {
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const demoEmail = "eve.holt@reqres.in";
    const demoPassword = "cityslicka";
    const [copied, setCopied] = useState<{ email?: boolean; password?: boolean }>({});
    const [showPassword, setShowPassword] = useState(false);
    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setIsLoading(true);

        const formData = new FormData(e.target as HTMLFormElement);

        const result = await userLogin(formData);

        if (result?.error) {
            setError(result.error);
            setIsLoading(false);
        }
    }

    
  const handleCopy = (text: string, type: "email" | "password") => {
    navigator.clipboard.writeText(text);
    setCopied({ ...copied, [type]: true });
    setTimeout(() => setCopied({ ...copied, [type]: false }), 2000);
  };


    return (
        <div className="min-h-screen bg-linear-to-b from-(--primary)/80 to-transparent">
            <div className="flex p-[1vw] items-center">
                <div className="relative">
                    <div className="bg-black/40 inverted-radius z-20 inset-0 absolute w-full h-full"></div>
                    <img
                        alt="login page image"
                        src="/image/login-img.jpg"
                        className="w-[50vw] h-[96vh] object-cover inverted-radius"
                    />

                </div>

                <div className="w-[50vw]">
                    <div className="w-[50%] mx-auto">
                        <h1 className="text-[3vw] mb-8 text-center font-thin">Secure Login</h1>

                        <form onSubmit={handleSubmit} className="space-y-[1.5vw]">
                            <div>
                                <label className="block text-[0.7vw] mb-2">
                                    Email Address
                                </label>
                                <input
                                    name="email"
                                    type="email"
                                    placeholder="eve.holt@reqres.in"
                                    required
                                    className="w-full px-[1vw] py-[1vw] border border-(--primary) bg-white/20 rounded-4xl placeholder-slate-400 focus:outline-none focusring-(--primary) focus:ring-1 focus:ring-(--primary) transition"
                                />
                            </div>

                            {/* Password */}
                            <div className="relative">
                                <label className="block text-[0.7vw] mb-2">
                                    Password
                                </label>
                                <input
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="cityslicka"
                                    required
                                    className="w-full px-[1vw] py-[1vw] border border-(--primary) bg-white/20 rounded-4xl placeholder-slate-400 focus:outline-none focusring-(--primary) focus:ring-1 focus:ring-(--primary) transition"
                                />
                                <span
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-[1vw] top-[50%]  text-[1.2vw] cursor-pointer "
                                >
                                    {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                                </span>
                            </div>


                            {error && (
                                <div className="px-[1vw] py-[1vw] bg-red-900/20 border rounded-4xl border-red-500">
                                    <p className="text-red-400 text-[0.8vw]">{error}</p>
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full cursor-pointer bg-(--secondary) hover:bg-(--primary) px-[1vw] py-[1vw] rounded-4xl disabled:bg-(--primary)  font-semibold  transition duration-200"
                            >
                                {isLoading ? "Signing in..." : "Sign In"}
                            </button>
                        </form>

                        <div className="mt-6 text-center text-[1vw]">
                            <p className="font-bold mb-1">Demo credentials:</p>

                            {/* Email */}
                            <div className="flex items-center justify-center gap-[0.5vw] font-mono">
                                <span>Email: {demoEmail}</span>
                                <AiOutlineCopy
                                    className="cursor-pointer "
                                    title="Copy email"
                                    onClick={() => handleCopy(demoEmail, "email")}
                                />
                                {copied.email && <span className="text-green-400 ml-[0.5vw]">Copied!</span>}
                            </div>

                            {/* Password */}
                            <div className="flex items-center justify-center gap-[0.5vw] font-mono mt-[0.5vw]">
                                <span>Password: {demoPassword}</span>
                                <AiOutlineCopy
                                    className="cursor-pointer "
                                    title="Copy password"
                                    onClick={() => handleCopy(demoPassword, "password")}
                                />
                                {copied.password && <span className="text-green-400 ml-[0.5vw]">Copied!</span>}
                            </div>
                        </div>

                        <Link
                            href="/"
                            className="block mt-6 text-center text-slate-400 hover:text-slate-300 text-sm transition"
                        >
                            ← Back to Home
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
}
