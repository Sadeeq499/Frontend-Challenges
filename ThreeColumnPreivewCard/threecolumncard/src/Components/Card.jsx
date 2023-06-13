// import React from "react";
// import { Images } from "../Services";

// const Data = [
//   {
//     bgColor: "bg-Primary-BrightOrange",
//     img: Images.logoOne,
//     title: "SEDANS",
//     text: "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
//     btnTextColor: "text-Primary-BrightOrange",
//   },
//   {
//     bgColor: "bg-Primary-BrightOrange",
//     img: Images.logoOne,
//     title: "SEDANS",
//     text: "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
//     btnTextColor: "text-Primary-BrightOrange",
//   },
// ];

// function Card() {
//   return (
//     <div className=" bg-slate-300  mt-5 shadow-lg shadow-indigo-400 mx-auto w-[80%] h-[80vh]">
//       {/*  create three card s */}
//       {Data.map((item) => {
//         return (
//           <div className="justify-center">
//             <div
//               className={`${item.bgColor} w-[27%] h-[65vh] mt-5  shadow-lg shadow-indigo-400 rounded`}
//             >
//               <div className="m-5">
//                 <img src={item.img} className="w-16 pt-4" />
//                 <h1 className="text-3xl font-Family1 text-white mt-8">
//                   {item.title}
//                 </h1>

//                 <p className="text-white mt-5">{item.text}</p>

//                 <button
//                   className={`bg-white ${item.btnTextColor}-BrightOrange mt-16 p-2 rounded-3xl w-32`}
//                 >
//                   Learn More
//                 </button>
//               </div>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// export default Card;
import React from "react";
import { Images } from "../Services";

const Data = [
  {
    bgColor: "bg-Primary-BrightOrange",
    img: Images.logoOne,
    title: "SEDANS",
    text: "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
    btnTextColor: "text-Primary-BrightOrange",
  },
  {
    bgColor: "bg-Primary-DarkCyan",
    img: Images.logoTwo,
    title: "SUVS",
    text: "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.",
    btnTextColor: "DarkCyan",
  },
  {
    bgColor: "bg-Primary-VeryDarkCyan",
    img: Images.logoThree,
    title: "LUXURY",
    text: "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.",
    btnTextColor: "text-Primary-VeryDarkCyan",
  },
];

function Card() {
  return (
    <div className="bg-slate-100 mt-5 shadow-lg shadow-indigo-400 mx-auto w-[80%] h-[80vh] flex justify-center">
      {/* create three cards */}
      {Data.map((item, index) => {
        return (
          <div
            key={index}
            className={`${item.bgColor} w-[27%] h-[65vh] mt-5 -ms-1 rounded`}
          >
            <div className="m-5">
              <img src={item.img} className="w-16 pt-4" alt={item.title} />
              <h1 className="text-3xl font-Family1 text-white mt-8">
                {item.title}
              </h1>
              <p className="text-white mt-5">{item.text}</p>
              <button
                className={`bg-white ${item.btnTextColor}-BrightOrange mt-16 p-2 rounded-3xl w-32`}
              >
                Learn More
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
