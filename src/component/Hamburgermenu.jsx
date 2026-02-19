import React, { useState } from "react";
import Logo from "./Logo";
import { Search } from "./Search";

const Hamburgermenu = () => {
  let [open, setOpen] = useState(false);
  return (
    <div className="flex gap-4 ">
      <div className="flex gap-4 items-center">
        <div
          onClick={() => setOpen(!open)}
          className="flex flex-col justify-center gap-1 cursor-pointer"
        >
          <span
            className={`h-0.75 w-6 bg-foreground rounded-full transition-all duration-300 ${
              open ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>

          <span
            className={`h-0.75 w-4.5 bg-foreground rounded-full transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          ></span>

          <span
            className={`h-0.75 bg-foreground rounded-full transition-all duration-300 ${
              open ? "-rotate-45 w-6 -translate-y-2" : "w-3 "
            }`}
          ></span>
        </div>
        <div>
          <Logo />
        </div>
      </div>
      <div>
        <Search />
      </div>
    </div>
  );
};

export default Hamburgermenu;
