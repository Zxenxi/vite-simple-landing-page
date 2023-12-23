/* eslint-disable no-unused-vars */
import React from "react";
import Fb from "../assets/icon/fb.png";
import Dc from "../assets/icon/Discord.png";
import git from "../assets/icon/github.png";
import google from "../assets/icon/Google.png";

export const SectionThree = () => {
  return (
    <div className=" bg-[#0f172a]  h-[300px] py-11 ">
      <div className="pb-24 -mt-8">
        <h1 className="text-white text-4xl font-bold text-center">
          Who We Colaborate With!
        </h1>
      </div>
      <div className="flex gap-5 justify-evenly h-12">
        <img src={git} alt="" className="w-auto" />
        <img src={google} alt="" className="w-auto" />
        <img src={Dc} alt="" className="w-auto" />
        <img src={Fb} alt="" className="w-auto" />
      </div>
    </div>
  );
};
