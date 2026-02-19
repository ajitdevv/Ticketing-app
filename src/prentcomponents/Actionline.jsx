import React from "react";
import Logo from "../component/Logo";
import ActionNav from "../component/ActionNav";
import SocialIcons from "../component/SocialIcons";

const Actionline = () => {
  return (
    <div className="flex justify-around ">
      <Logo />
      <ActionNav />
      <SocialIcons />
    </div>
  );
};

export default Actionline;
