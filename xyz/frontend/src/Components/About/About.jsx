import React from "react";
import "./About.css";
const About = () => {
  return (
    <div className="relative bg-midnightblue w-full h-[832px] overflow-hidden text-left text-[48px] text-white font-outfit">
      <div className="absolute top-[26px] left-[22px] w-[1257.78px] h-[781.62px]">
        <div className="absolute top-[64px] left-[599px] w-[658.78px] h-[717.62px]">
          <img
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/objectother-19@2x.png"
          />
        </div>
        <div className="absolute top-[162px] left-[0px] inline-block w-[618px] h-[596px]">
          <p className="m-0">
            ConVene is a dynamic web platform designed to streamline the process
            of discovering, registering for, and managing events.
          </p>
          <p className="m-0 text-[24px] font-jacques-francois">
            <span>
              <span>&nbsp;</span>
            </span>
          </p>
          <p className="m-0 text-[32px]">
            <span>
              <span>
                Whether you're an eager participant looking for your next
                challenge or an enthusiastic organizer aiming to attract a
                diverse audience, ConVene has you covered.
              </span>
            </span>
          </p>
        </div>
        <h1 className="m-0 absolute top-[0px] left-[470px] text-[64px] [text-decoration:underline] capitalize font-semibold font-inherit inline-block w-[295.85px] h-[99.93px] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
          About Us
        </h1>
      </div>
      <div className="absolute top-[calc(50%_-_416px)] right-[-447px] rounded-[50%] bg-skyblue [filter:blur(400px)] box-border w-[895px] h-[832px] border-[1px] border-solid border-black" />
    </div>
  );
};

export default About;
