import images from "./services/images";

function ThankYourCard() {
  return (
    <div className="w-full h-[100vh] bg-black ">
      <div className=" w-[400px] h-[400px] bg-Natural-VeryDarkBlue absolute top-[20%] left-[35%] rounded-xl">
        <div className="flex flex-col px-2 py-2">
          {/* main logo */}
          <img src={images.ThankYou} alt="star" className="mx-auto mt-[30px]" />

          {/* You selected 4 out of 5*/}
          <span className="items-center mt-5 bg-Natural-DarkBlue w-[70%] mx-auto rounded-full ">
            <h3 className="text-Primary-Orange text-[20px] font-sans ">
              You selected 4 out of 5
            </h3>
          </span>

          {/* Thank YOu */}
          <h1 className="text-white font-Family text-3xl mt-5 justify-center">
            Thank You!
          </h1>

          {/* paragraph */}
          <p className="text-Natural-LightGray font-serif mt-2 text-center px-2">
            We appreciated your taking the time to give a rating. if you every
            need more support.don't hesitate to contact us.
          </p>
        </div>

        <div className="flex flex-col px-8 py-7"></div>
      </div>
    </div>
  );
}

export default ThankYourCard;
