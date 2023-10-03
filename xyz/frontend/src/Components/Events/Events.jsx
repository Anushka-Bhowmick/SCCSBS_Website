import React from "react";
import "./Events.css";
const Events = () => {
  return  (<div className="relative bg-midnightblue w-full h-[832px] overflow-hidden">
  <div className="absolute top-[calc(50%_-_414px)] right-[808px] rounded-[50%] bg-deeppink [filter:blur(400px)] box-border w-[895px] h-[830px] border-[1px] border-solid border-black" />
  <section className="absolute top-[0px] left-[40px] w-[1068px] h-[818px] text-left text-base text-black font-jacques-francois">
    <div className="absolute top-[778px] left-[416px] rounded-131xl bg-skyblue w-[167px] h-10" />
    <div className="absolute top-[778px] left-[196px] rounded-131xl bg-white w-[167px] h-10" />
    <div className="absolute top-[778px] left-[866px] rounded-131xl bg-gray w-[167px] h-10" />
    <div className="absolute top-[778px] left-[639px] rounded-131xl bg-skyblue w-[167px] h-10" />
    <div className="absolute top-[788px] left-[446px] uppercase inline-block w-[110.72px] h-[19.09px]">
      REgister
    </div>
    <img
      className="absolute top-[271px] left-[198px] w-[837px] h-[470px] object-cover"
      alt=""
      src="/rectangle-24@2x.png"
    />
    <div className="absolute top-[788px] left-[677px] uppercase inline-block w-[96.66px] h-[19.09px]">
      Details
    </div>
    <div className="absolute top-[788px] left-[920px] uppercase inline-block w-[60.45px] h-[19.09px]">
      Next
    </div>
    <div className="absolute top-[788px] left-[236px] uppercase inline-block w-[110.12px] h-[19.09px]">
      previous
    </div>
    <div className="absolute top-[192px] left-[314px] text-[48px] capitalize font-semibold font-outfit text-white">
      Currently Ongoing Events:
    </div>
    <div className="absolute top-[122px] left-[0px] rounded-131xl bg-white w-[148px] h-[35px]" />
    <div className="absolute top-[126px] left-[27px] text-xl capitalize">
      CREATE
    </div>
    <div className="absolute top-[118px] left-[236px] w-[832px] h-[35px] text-xl">
      <section className="absolute top-[0px] left-[0px] rounded-131xl bg-white w-[832px] h-[35px]" />
      <div className="absolute top-[4px] left-[254px] uppercase">
        Search for an event....
      </div>
    </div>
    <div className="absolute top-[0px] left-[500.19px] text-[64px] [text-decoration:underline] capitalize font-semibold font-outfit text-white inline-block w-[445.83px] h-[1.79px]">
      Events
    </div>
  </section>
</div>
);
};
export default Events;
