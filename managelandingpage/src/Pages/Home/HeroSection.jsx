import React from "react";
import Images from "../../Components/utility/Constrants/Images";

function HeroSection() {
  return (
    <section id="hero">
      {/* flex container */}
      <div className="container flex flex-col-reverse md:flex-row items-center  px-6 mx-auto mt-10 space-y-10 md:space-y-0">
        {/* left col */}
        <div className="flex flex-col mb-28 space-y-7 md:w-1/2">
          {/* heading */}
          <h1 className="max-w-md text-4xl font-Be_Vietnam_Pro text-center md:text-5xl md:text-left">
            Bring Everyone together to build better products
          </h1>
          {/* paragraph */}
          <p className="max-w-[320px] text-center ms-4 text-DarkGrayishBlue  md:text-left md:ms-0">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          {/* button */}
          <div className="flex justify-center md:justify-start ">
            <button className="rounded-full px-6 py-2 text-white bg-BrightRed  hover:bg-BrightRed  hover:opacity-80">
              Get Started
            </button>
          </div>
        </div>
        {/* right col  images*/}
        <div className="md:w-1/2">
          <img src={Images.Intro} alt="hero" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
