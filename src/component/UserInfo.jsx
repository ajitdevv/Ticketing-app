import React from "react";
import user from "../assets/user.webp";
const UserInfo = () => {
  return (
    <div className=" flex gap-3 items-center ">
      <img className="size-12 rounded-full cursor-pointer" src={user} alt="user image" />
      <div className="flex gap-2 items-center">
        <h1 className="font-semibold text-[15px] cursor-pointer">Danny Amacher</h1>
        <h2 className="text-green-500 text-xs font-semibold cursor-pointer">
          Available for work
        </h2>

        <div className="relative group">
          <button className="cursor-pointer text-xs font-semibold text-muted">
            Follow
          </button>
          <div className="hidden -top-12 -left-17 absolute  group-hover:block p-2 bg-foreground rounded-2xl">
            <h1 className=" flex gap-px items-center justify-center text-background  w-45 ">
              Follow danny Amacher
            </h1>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
