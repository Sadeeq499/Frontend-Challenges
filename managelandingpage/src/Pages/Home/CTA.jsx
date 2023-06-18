import React from "react";

function CTA() {
  return (
    <section className="bg-BrightRed">
      <div className="container flex flex-col items-center justify-between px-6 py-20 mx-auto space-y-12 md:flex-row md:py-12 md:space-y-0">
        {/* heading */}
        <h2 className="text-5xl font-bold leading-tight text-center text-white md:text-4xl  md:max-w-xl md:text-left">
          {" "}
          Simplify how your teams work today
        </h2>
        <div className="py-1">
          {/* button */}
          <button className="rounded-full px-6 py-2 text-BrightRed bg-white  hover:animate-pulse">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}

export default CTA;
