import React, { useEffect, useState } from "react";

const PromoBanner = () => {
  const [show, setShow] = useState(false);

  // 3 sec baad show hoga
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 w-full transition-transform duration-500 z-50 ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="bg-[#0B0D2A] text-white px-6 py-4 flex items-center justify-between">
        <p className="text-sm md:text-base">
          Get 20% (up to $100) off your first payment for design and development
          services on Dribbble! Use code{" "}
          <span className="font-semibold">WELCOME20 🎉</span>
        </p>

        <div className="flex items-center gap-4">
          <button className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium">
            Get Started
          </button>

          <button
            onClick={() => setShow(false)}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
