"use client";
import React, { useState } from "react";
import LoginForm from "./LoginForm";
import { useRouter } from "next/navigation";

type AuthFormProps = {
  setShowLogin: React.Dispatch<React.SetStateAction<boolean>>;
};

const AuthForm: React.FC<AuthFormProps> = ({ setShowLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [touched, setTouched] = useState({ email: false, password: false });
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ email: true, password: true });

    if (email && password) {
      console.log("Logging in:", { email, password });
    }
  };

  const handleCreateAccount = () => {
    setShowLogin(false);
    router.push("/bossforskiy/auth/sign-up");
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-[#f8f8f8] border-t border-black/10">
      <div className="w-full max-w-lg rounded-md -mt-16">
        {/* Header */}
        <div className="text-center mb-8 border-b border-gray-400 p-4 pb-6">
          <h1 className="text-4xl font-serif mb-2">No account?</h1>
          <p className="text-gray-500 mb-10"> Create one in a few seconds!</p>
          <button
            onClick={handleCreateAccount}
            className="px-8 py-4 border bg-black border-white hover:border-black text-white uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all duration-500 group relative overflow-hidden mt-4"
          >
            <span className="relative z-10">Create Account</span>
            <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-[cubic-bezier(.19,1,.22,1)]"></span>
          </button>
        </div>

        {/* Login Title */}
        <h2 className="text-2xl font-serif mb-8">To access to your account</h2>

        {/* Form */}
        <LoginForm
          handleSubmit={handleSubmit}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          touched={touched}
          setTouched={setTouched}
        />

        {/* Bottom Link */}
        <div className="text-center text-xs text-gray-500 mt-8">
          Log into your{" "}
          <a href="#" className="underline">
            BOSSFORSKIY.com
          </a>{" "}
          account
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
