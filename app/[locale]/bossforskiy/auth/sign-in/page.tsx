"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const SignInPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    // Здесь можно добавить запрос на сервер
  };

  return (
    <div className="flex items-center justify-center bg-[#f5f5f5] px-4">
      <div className="w-full max-w-sm rounded-none bg-white px-8 py-10 shadow-lg text-center border border-black/10">
        <h1 className="mb-6 text-3xl font-serif tracking-widest text-black uppercase">
          Sign In
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6 text-left">
          <div>
            <label className="block text-sm uppercase tracking-wide text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border-b border-black/30 bg-transparent focus:border-black focus:outline-none py-2 text-sm"
            />
          </div>

          <div>
            <label className="block text-sm uppercase tracking-wide text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full border-b border-black/30 bg-transparent focus:border-black focus:outline-none py-2 text-sm"
            />
          </div>

          <button
            type="submit"
            className="w-full border border-black bg-black text-white uppercase tracking-widest py-2 text-sm hover:bg-white hover:text-black transition-all duration-300"
          >
            Sign In
          </button>
        </form>

        <p className="mt-8 text-sm text-gray-600">
          Don’t have an account?{" "}
          <button
            type="button"
            onClick={() => router.push("/bossforskiy/auth/sign-up")}
            className="underline underline-offset-2 hover:text-black"
          >
            Register
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignInPage;
