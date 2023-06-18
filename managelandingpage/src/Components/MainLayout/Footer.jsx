import React from "react";
import Images from "../utility/Constrants/Images";

function Footer() {
  return (
    <>
      <section className="bg-VeryDarkBlue">
        <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
          {/* logo container  */}
          <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
            <div className="mx-auto my-6 text-center text-white md:hidden">
              Copyright &copy; 2023, All Rights Reserved to Mr.Sadeeq ❤️
            </div>
            {/* logo */}
            <div>
              <img src={Images.Logo} alt="logo" />
            </div>

            {/* social link Container  */}
            <div className="flex justify-center space-x-8 md:space-x-4">
              <a href="https://www.facebook.com/">
                <img
                  src={Images.FacebookIcon}
                  alt="facebook"
                  className="w-8 rounded-full"
                />
              </a>
              <a href="https://www.instagram.com/">
                <img
                  src={Images.InstagramIcon}
                  alt="instagram"
                  className="w-8 rounded-l"
                />
              </a>
              <a href="https://www.twitter.com/">
                <img
                  src={Images.TwitterIcon}
                  alt="twitter"
                  className="w-8 rounded-full"
                />
              </a>
              <a href="https://www.pinterest.com/">
                <img
                  src={Images.PinterestIcon}
                  alt="pinterest"
                  className="w-8 rounded-full"
                />
              </a>
              <a href="https://www.youtube.com/">
                <img
                  src={Images.YoutubeIcon}
                  alt="youtube"
                  className="w-8 rounded-full"
                />
              </a>
            </div>
          </div>

          {/* link container  */}
          <div className="flex justify-around space-x-32">
            <div className="flex flex-col space-y-3 text-white">
              <a href="#" className="hover:text-BrightRed">
                Home
              </a>
              <a href="#" className="hover:text-BrightRed">
                Pricing
              </a>
              <a href="#" className="hover:text-BrightRed">
                Products
              </a>
              <a href="#" className="hover:text-BrightRed">
                About
              </a>
            </div>
            <div className="flex flex-col space-y-3 text-white">
              <a href="#" className="hover:text-BrightRed">
                Careers
              </a>
              <a href="#" className="hover:text-BrightRed">
                Community
              </a>
              <a href="#" className="hover:text-BrightRed">
                Privacy Policy
              </a>
            </div>
          </div>

          {/* input Container */}
          <div className="flex flex-col justify-between">
            <form>
              <div className="flex space-x-3">
                <input
                  type="text"
                  placeholder="Updates in your inbox..."
                  className="flex-1 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-BrightRed"
                />
                <button className="px-6 py-4 text-white rounded-full bg-BrightRed hover:bg-BrightRedLight">
                  Go
                </button>
              </div>
            </form>
            {/* copyright message */}
            <div className="hidden text-white md:block">
              Copyright &copy; 2023, All Rights Reserved to Mr.Sadeeq ❤️
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
