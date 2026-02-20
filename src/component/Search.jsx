import { ChevronDown, SearchIcon } from "lucide-react";
import React, { useState } from "react";
import DropdownToggle from "./ArrowSet";

export const Search = () => {
  let [hide, sethide] = useState(false);
  let [valuse, setvaluse] = useState("Shots");
  console.log(hide);
  return (
    <div className="w-130 h-fit relative">
      <input
        type="text"
        className="p-3 w-full rounded-4xl leading-7 hover:bg-background bg-extra-muted"
        placeholder="What are you looking for?"
      />
      <div className="absolute top-0 right-0 flex gap-2">
        <div className="flex relative">
          {/* <div
            onClick={() => sethide(!hide)}
            className="flex gap-1  items-center group cursor-pointer"
          >
            <span className="text-foreground text-sm font-semibold group-hover:text-muted">
              {valuse}
            </span>
            <span
              className={`mt-1 transition-transform duration-300 group-hover:text-muted ${
                hide ? "rotate-180" : "rotate-0"
              }`}
            >
              
              <ChevronDown size={15} />
            </span>
          </div> */}
          <DropdownToggle
            label="Services"
            isOpen={hide}
            onToggle={() => sethide(!hide)}
            className="text-sm font-semibold "
          />
          {hide ? (
            <div className="absolute top-13.5 p-5 pr-11  bg-background shadow-2xl flex flex-col items-start gap-3 *:hover:text-foreground *:text-muted *:font-semibold rounded-xl">
              <button
                onClick={() => {
                  sethide(!hide);
                  setvaluse("Shots");
                }}
              >
                Shots
              </button>
              <button
                onClick={() => {
                  sethide(!hide);
                  setvaluse("Designers");
                }}
              >
                Designers
              </button>
              <button
                onClick={() => {
                  sethide(!hide);
                  setvaluse("Services");
                }}
              >
                Services
              </button>
            </div>
          ) : (
            <div hidden></div>
          )}
        </div>
        <div className="m-1.5">
          <button className="bg-accent size-10 flex items-center justify-center rounded-full cursor-pointer">
            <SearchIcon className="text-background" size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};
