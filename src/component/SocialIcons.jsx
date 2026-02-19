import React from "react";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const SocialIcons = () => {
  return (
    <div className="flex items-center gap-4">
      
      <a href="" className="cursor-pointer hover:opacity-70 transition">
        <Twitter size={22} />
      </a>

      <a href="" className="cursor-pointer hover:opacity-70 transition">
        <Facebook size={22} />
      </a>

      <a href="" className="cursor-pointer hover:opacity-70 transition">
        <Instagram size={22} />
      </a>
      <a href="" className="cursor-pointer hover:opacity-70 transition">
        <Youtube size={24} />
      </a>

    

    </div>
  );
};

export default SocialIcons;
