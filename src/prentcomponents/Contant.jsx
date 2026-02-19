import React from "react";
import Contant1 from "../component/Contant1";
import Contant2 from "../component/Contant2";
import ProfileHero from "../component/Profilecard";
import profileImg from "../assets/user.webp"
import Moreby from "../component/Moreby";

const Contant = () => {
  return (
    <div className="mt-6 w-full">
      <Contant1 />
      <Contant2 />
      <ProfileHero  image={profileImg}
      name="Danny Amacher"
      subtitle="SaaS Product Design + Design Systems 👋 ✨"/>
      <Moreby />
    </div>
  );
};

export default Contant;
