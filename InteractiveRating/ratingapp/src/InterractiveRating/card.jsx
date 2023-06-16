import React, { useState } from "react";
import images from "./services/images";
import ThankYourCard from "./ThankYouCard";
import { useNavigate } from "react-router-dom";

const number = [1, 2, 3, 4, 5];

function Card() {
  const navigate = useNavigate();

  const [clickStates, setClickStates] = useState(
    Array(number.length).fill(false)
  );

  const handleClick = (index) => {
    const updatedStates = clickStates.map((state, i) =>
      i === index ? !state : state
    );
    setClickStates(updatedStates);
    // const aa = updatedStates.indexOf(true) + 1;
    // console.log(aa);
  };
  // console.log(clickStates.indexOf(true) + 1);

  return (
    <div className="w-full h-[100vh] bg-black ">
      <div className=" w-[400px] h-[400px] bg-Natural-VeryDarkBlue absolute top-[20%] left-[35%] rounded-xl">
        <div className="flex flex-col px-8 py-7">
          {/* small circle */}
          <div className="w-[45px] h-[45px] bg-Natural-DarkBlue  rounded-full">
            <img
              src={images.Star}
              alt="star"
              className="w-[25px] h-[25px] mx-auto mt-[10px]"
            />
          </div>

          {/* TExt with How did we do */}
          <span className="text-start mt-4 text-Natural-White text-[27px] font-Family ">
            How did we do?
          </span>
          <p className="text-start text-Natural-LightGray font-serif mt-2">
            please let us how we did with your support request. All feedback is
            greatly appreciated. to help us improve our service.
          </p>

          {/* 5 stars */}
          <div className="flex justify-between mt-8">
            {number.map((item, index) => (
              <div
                key={index}
                className={`w-[45px] h-[45px] rounded-full ${
                  clickStates[index]
                    ? "bg-Primary-Orange"
                    : "bg-Natural-DarkBlue"
                } hover:bg-Natural-Medium`}
                onClick={() => handleClick(index)}
              >
                <h3
                  className={`text-Natural-LightGray font-semibold hover:font-bold hover:text-white mt-2 ${
                    clickStates[index] ? "text-white" : ""
                  }`}
                >
                  {item}
                </h3>
              </div>
            ))}
          </div>

          {/* button */}
          <button
            className={`w-full h-[40px] rounded-full
             hover:bg-Natural-White hover:text-Primary-Orange
               bg-Primary-Orange text-Natural-White
          
          font-Family mt-8`}
            onClick={() => {
              navigate("/ThankYouCard");
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
