import React from "react";

const data = [
  {
    num: "01",
    title: "Track company-wide progress",
    desc: `See how your day-to-day tasks fit into the wider vision. Go from
        tracking progress at the milestone level all the way done to the
        smallest of details. Never lose sight of the bigger picture again.`,
  },
  {
    num: "02",
    title: "Advanced built-in reports",
    desc: `Set internal delivery estimates and track progress toward company
        goals. Our customizable dashboard helps you build out the reports
        you need to keep key stakeholders informed.`,
  },
  {
    num: "03",
    title: "Everything you need in one place",
    desc: ` Stop jumping from one service to another to communicate, store files,
            track tasks and share documents. Manage offers an all-in-one team
            productivity solution.`,
  },
];

function FeatureSection() {
  return (
    <section>
      <div className="container flex flex-col px-4  mx-auto mt-1 space-y-7 md:space-y-0 md:flex-row">
        {/* what's Different */}
        <div className="flex flex-col space-y-5 md:w-1/2">
          <h1 className="max-w-md text-4xl font-Be_Vietnam_Pro text-center md:text-start">
            What's Different About Manage?
          </h1>
          <p className="max-w-[320px] text-center ms-4 text-DarkGrayishBlue md:text-left">
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p>
        </div>

        {/* Number list */}
        {/* item list 1 */}
        <div className="flex flex-col space-y-5 md:w-1/2">
          {data.map((item) => {
            return (
              <div
                className="flex flex-col space-y-3 md:space-y-0 md:px-5 "
                key={item.num}
              >
                {/* heading */}
                <div className="rounded-l-full bg-BrightRedLight md:bg-transparent">
                  {/* full header  */}
                  <div className="flex items-center space-x-2">
                    {/* o1 circle */}
                    <div className="px-4 py-2 space-x-4 text-white bg-BrightRed rounded-full md:py-1">
                      <h1 className="text-2xl font-bold">{item.num}</h1>
                    </div>
                    <h1 className="text-base font-bold">{item.title}</h1>
                  </div>
                </div>
                {/* paragraph */}
                <p className="text-DarkBlue py-3 md:justify-start">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;
