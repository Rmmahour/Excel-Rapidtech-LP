"use client";

import { useEffect, useState } from "react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "true");
    setVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookieConsent", "false");
    setVisible(false);
  };

  if (!visible) return null;

  return (

    <div className="fixed bottom-0 left-0 w-full z-[9999] bg-gray-900 text-white border-t border-gray-800 py-4 px-6 animate-slide-up ">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 shadow-[0_-2px_8px_rgba(0,0,0,0.2)] max-w-7xl mx-auto">
      <p className="text-sm md:text-base text-center md:text-left max-w-3xl">
        We use cookies to enhance your browsing experience and analyze our traffic. 
        By clicking <span className="font-semibold">“Accept”</span>, you agree to our 
        {/* <a
          href="/privacy-policy"
          className="underline text-orange-400 ml-1 hover:text-orange-300"
        >
          Privacy Policy
        </a>. */}
      </p>

      <div className="flex gap-3">
        <button
          onClick={acceptCookies}
          className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md font-medium transition-colors"
        >
          Accept
        </button>
        <button
          onClick={declineCookies}
          className="border border-gray-600 text-gray-300 hover:bg-gray-800 px-4 py-2 rounded-md font-medium transition-colors"
        >
          Decline
        </button>
      </div>
    </div>
    </div>

    
  );
}
