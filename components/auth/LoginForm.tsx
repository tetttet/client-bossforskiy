"use client";
import React from "react";

interface LoginFormProps {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  touched: {
    email: boolean;
    password: boolean;
    [key: string]: boolean;
  };
  setTouched: React.Dispatch<
    React.SetStateAction<{
      email: boolean;
      password: boolean;
      [key: string]: boolean;
    }>
  >;
}

const LoginForm: React.FC<LoginFormProps> = ({
  handleSubmit,
  email,
  setEmail,
  password,
  setPassword,
  touched,
  setTouched,
}) => {
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Email */}
      <div className="relative">
        <input
          type="email"
          value={email}
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => setTouched((p) => ({ ...p, email: true }))}
          className={`peer block w-full border-b border-gray-400 focus:border-black focus:outline-none py-2 text-sm bg-transparent`}
        />
        <label
          htmlFor="email"
          className={`absolute left-0 text-gray-500 text-sm transition-all duration-200
            ${email ? "-top-3 text-xs text-black" : "top-2 text-sm"}
            peer-focus:-top-3 peer-focus:text-xs peer-focus:text-black`}
        >
          *Email
        </label>
        {touched.email && !email && (
          <p className="text-red-500 !text-xs mt-1">
            The email field is required
          </p>
        )}
      </div>

      {/* Password */}
      <div className="relative">
        <input
          type="password"
          value={password}
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          onBlur={() => setTouched((p) => ({ ...p, password: true }))}
          className={`peer block w-full border-b border-gray-400 focus:border-black focus:outline-none py-2 text-sm bg-transparent`}
        />
        <label
          htmlFor="password"
          className={`absolute left-0 text-gray-500 text-sm transition-all duration-200
            ${password ? "-top-3 text-xs text-black" : "top-2 text-sm"}
            peer-focus:-top-3 peer-focus:text-xs peer-focus:text-black`}
        >
          *Password
        </label>
        {touched.password && !password && (
          <p className="text-red-500 !text-xs mt-1">The password is required</p>
        )}
      </div>

      {/* Options */}
      <div className="flex items-center justify-between text-sm">
        <label className="flex items-center gap-2">
          <input type="checkbox" className="accent-black" />
          Keep me logged in
        </label>
        <button type="button" className="text-gray-600 hover:underline text-xs">
          I forgot my password
        </button>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-gray-200 text-gray-500 py-2 rounded-md text-sm cursor-pointer hover:bg-[#33383c] hover:text-white transition"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
