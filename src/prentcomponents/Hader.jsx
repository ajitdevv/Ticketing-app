import React from "react";
import { ButtonPrimary, ButtonSecondary } from "../component/Button";
import Hamburgermenu from "../component/Hamburgermenu";

const Hader = () => {
  return (
    <div className="flex justify-between items-center sticky top-0 z-100 py-5 px-10 bg-background">
      <div>
        <Hamburgermenu />
      </div>
      <div className="flex gap-4 items-center">
        <ButtonSecondary children={"Sign up"} />
        <ButtonPrimary children={"Log in"} />
      </div>
    </div>
  );
};

export default Hader;
