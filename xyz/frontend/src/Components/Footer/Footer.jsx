import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="relative bg-midnightblue w-full h-[156px] overflow-hidden text-left text-[24px] text-white font-poppins">
      <div className="absolute top-[0px] left-[-18px] w-[1298px] h-[156px]">
        <div className="absolute top-[0px] left-[18px] bg-black w-[1280px] h-[156px]" />
        <img
          className="absolute top-[10px] left-[18px] w-[174px] h-[135px] object-cover"
          alt=""
          src="/whatsapp-image-20230823-at-2027-2@2x.png"
        />
        <h1 className="m-0 absolute top-[42.55px] left-[249.48px] text-inherit font-normal font-inherit inline-block w-[899.43px] h-[39.71px]">
          Thank you for visiting our website and wishing you a very happy day
          ahead.
        </h1>
        <img
          className="absolute top-[69px] left-[1208px] rounded-[50px] w-[90px] h-[76px] object-cover"
          alt=""
          src="/open-source-1@2x.png"
        />
        <h1 className="m-0 absolute top-[130px] left-[517px] text-[20px] font-normal font-jacques-francois">
          @ConVene all rights reserved.
        </h1>
      </div>
    </div>
  );
};

export default Footer;
