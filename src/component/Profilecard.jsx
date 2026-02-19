import React from "react";
import {ButtonPrimary2 } from "./Button";

const ProfileHero = ({ image, name, subtitle }) => {
  return (
    <div className="w-full bg-background py-16 flex flex-col items-center relative">
      
      {/* Top Horizontal Lines */}
      <div className="absolute top-25 left-0 w-full flex items-center justify-between px-30">
        <div className="h-px bg-gray-300 w-[43%]"></div>
        <div className="h-px bg-gray-300 w-[43%]"></div>
      </div>

      {/* Profile Image */}
      <div className="size-18 rounded-full overflow-hidden z-10">
        <img
          src={image}
          alt="profile"
          className="w-full h-full object-cover"
        />
      </div>
      <h1 className="mt-6 text-xl font-semibold text-[#0F172A]">
        {name}
      </h1>
      <p className="mb-4 mt-2 text-gray-600 text-[14px]">
        {subtitle}
      </p>
        <ButtonPrimary2 children={"Get in touch"} />
 
    </div>
  );
};

export default ProfileHero;
