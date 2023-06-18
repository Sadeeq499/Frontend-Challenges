import React from "react";
import Images from "../../Components/utility/Constrants/Images";

const TestimonialData = [
  {
    name: "Anisha Li",
    image: Images.AvatarAnisha,
    testimonial:
      "“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”",
  },
  {
    name: "Ali Bravo",
    image: Images.AvatarAli,
    testimonial:
      "“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”",
  },
  {
    name: "Richard Watts",
    image: Images.AvatarRichard,
    testimonial:
      "“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”",
  },
];

function Testimonial() {
  return (
    <section>
      <div className="max-w-8xl px-6 mx-auto mt-20 text-center">
        {/* heading */}
        <h2 className="text-4xl font-bold text-gray-800 ">What they've said</h2>

        {/* testimonial Container*/}
        <div className="flex flex-col space-y-16 mt-20 md:flex-row md:space-x-8 md:space-y-0">
          {/* testimonial 1*/}
          {TestimonialData.map((item, index) => (
            <div
              key={index}
              className=" flex  flex-col items-center   space-y-4   py-6 bg-VaryLightGray rounded-lg shadow-lg  md:w-1/3"
            >
              {/* image */}
              <img src={item.image} alt={item.name} className="w-16 -mt-16" />
              <h1 className="text-xl font-Be_Vietnam_Pro ">{item.name}</h1>
              <p className="text-DarkGrayishBlue">{item.testimonial}</p>
            </div>
          ))}
        </div>

        {/* button */}
        <div className="my-16">
          <button className="rounded-full px-6 py-2 text-white bg-BrightRed  hover:bg-BrightRed  hover:opacity-80">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
