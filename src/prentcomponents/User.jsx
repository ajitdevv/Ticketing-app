import React from "react";
import UserInfo from "../component/UserInfo";
import ActionB from "../component/ActionB";

const User = () => {
  return (
    <div className=" sticky top-22 bg-background z-99 pb-3 pt-5 ">
      <div className="flex justify-around items-center">
        <div><UserInfo /></div>
        <div><ActionB /></div>
      </div>
    </div>
  );
};

export default User;
