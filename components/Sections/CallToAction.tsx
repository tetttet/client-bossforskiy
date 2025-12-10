"use client";
import Image from "next/image";
import React, { useState } from "react";

const CallToAction = () => {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Логика подписки
    console.log("Subscribing email:", email);
  };

  return (
    <div className="mt-24 mb-5 font-sans">
      <div className="max-w-11/12 mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 font-montserrat-medium">
          {/* CONTACT AN ADVISOR */}
          <div className="space-y-4">
            <h2 className="link text-md font-montserrat-bold uppercase tracking-wider text-black">
              CONTACT AN ADVISOR
            </h2>
            <p className="text-sm leading-5 text-gray-700 !mb-10">
              CHANEL Client Care is available Monday to Sunday, 7 AM to 12 AM
              ET, to answer all your questions.
            </p>
            <p className="text-sm leading-5 text-gray-700">
              Please email us, call{" "}
              <span className="underline cursor-pointer">1.800.560.0005</span>{" "}
              or live chat with a CHANEL Advisor.
            </p>
          </div>

          {/* FIND A STORE */}
          <div className="space-y-4 relative">
            <h2 className="link text-md font-montserrat-bold uppercase tracking-wider text-black">
              FIND A STORE
            </h2>
            <div className="flex gap-2 relative">
              <Image
                src="/images/extra/qr_inst.png"
                alt="QR Code"
                width={150}
                height={150}
              />
              <p className="text-sm text-gray-700 absolute -bottom-5 left-1/2 transform -translate-x-1/2 !ml-6">
                Scan to explore <br /> BOSSFORSKIY&#39;s stores
              </p>
            </div>
          </div>

          {/* NEWSLETTER */}
          <div className="space-y-4">
            <h2 className="link text-md font-montserrat-bold uppercase tracking-wider text-black">
              NEWSLETTER
            </h2>
            <p className="text-sm leading-5 text-gray-700">
              Subscribe to receive news from BOSSFORSKIY
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col">
              <div className="flex items-end border-b border-black text-gray-700">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="!mt-1 py-1 w-full focus:outline-none text-xs bg-transparent"
                />
                <button type="submit" className="ml-2 text-xs uppercase pb-1">
                  →
                </button>
              </div>
            </form>
            <p className="text-sm text-gray-700 !mt-8">
              By clicking OK, I agree to BOSSFORSKIY&#39;s Privacy Policy and
              Legal Statement.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16 pt-4 border-t border-gray-200">
        <p className="max-w-11/12 mx-auto text-xs text-gray-700 px-8 font-montserrat-medium">
          <span className="font-montserrat-bold">Bossforskiy</span> • 2025 All
          rights reserved.
        </p>
      </div>
    </div>
  );
};

export default CallToAction;
