"use client";
import Link from "next/link";
import React, { useState } from "react";

const RegisterForm = () => {
  const [form, setForm] = useState({
    civility: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    mobilePhone: "",
    birthday: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form data:", form);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-800">
      <h1 className="text-4xl font-serif mb-2">Your Account</h1>
      <div className="text-gray-500 mb-10">
        Create your account on
        <Link href="/" className="underline ml-1">
          BOSSFORSKIY.com
        </Link>
      </div>

      <form onSubmit={handleSubmit} className="w-full max-w-3xl space-y-8">
        <h2 className="text-2xl font-serif">Your personal information</h2>
        <p className="text-sm text-gray-500">(*) All fields mandatory</p>

        {/* Civility */}
        <div>
          <label className="block text-sm text-gray-700 mb-1">*Civility</label>
          <select
            name="civility"
            value={form.civility}
            onChange={handleChange}
            className="w-full border-b border-gray-400 focus:border-black outline-none py-2"
          >
            <option value="">Select</option>
            <option value="Mr">Mr</option>
            <option value="Mrs">Mrs</option>
            <option value="Ms">Ms</option>
          </select>
        </div>

        {/* First + Last Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm text-gray-700 mb-1">
              *First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              className="w-full border-b border-gray-400 focus:border-black outline-none py-2"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">
              *Last Name
            </label>
            <input
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              className="w-full border-b border-gray-400 focus:border-black outline-none py-2"
            />
          </div>
        </div>

        {/* Email + Password */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm text-gray-700 mb-1">*E-mail</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border-b border-gray-400 focus:border-black outline-none py-2"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">
              *Password
            </label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full border-b border-gray-400 focus:border-black outline-none py-2"
            />
            <p className="text-xs text-gray-500 mt-1">
              Password must contain at least 8 characters, one uppercase letter,
              one digit, and one special character.
            </p>
          </div>
        </div>

        {/* Mobile + Birthday */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm text-gray-700 mb-1">
              *Mobile Phone
            </label>
            <input
              type="tel"
              name="mobilePhone"
              value={form.mobilePhone}
              onChange={handleChange}
              className="w-full border-b border-gray-400 focus:border-black outline-none py-2"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">Birthday</label>
            <input
              type="date"
              name="birthday"
              value={form.birthday}
              onChange={handleChange}
              className="w-full border-b border-gray-400 focus:border-black outline-none py-2"
            />
          </div>
        </div>

        {/* Submit */}
        <div className="pt-8">
          <button
            type="submit"
            className="px-8 py-3 bg-black text-white font-medium tracking-wide hover:bg-gray-800 transition-all"
          >
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
