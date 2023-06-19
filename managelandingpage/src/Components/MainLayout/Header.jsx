import React, { useState } from "react";
import Images from "../utility/Constrants/Images";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggle = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <>
      {/* navbar */}
      <nav className="container relative mx-auto p-6">
        {/* flex Container */}
        <div className="flex items-center justify-between">
          {/* logo */}
          <div className="pt-2">
            <img src={Images.Logo} alt="logo" className="w-32" />
          </div>

          {/* Menu items */}
          <div className="hidden md:flex items-center space-x-6">
            <a className="hover:text-DarkGrayishBlue" href="#pricing">
              {" "}
              Pricing{" "}
            </a>
            <a className="hover:text-DarkGrayishBlue" href="#product">
              {" "}
              Product{" "}
            </a>
            <a className="hover:text-DarkGrayishBlue" href="#about">
              {" "}
              About{" "}
            </a>
            <a className="hover:text-DarkGrayishBlue" href="#contact">
              {" "}
              Contact{" "}
            </a>
            <a className="hover:text-DarkGrayishBlue" href="#contact">
              {" "}
              Contact{" "}
            </a>
          </div>

          {/* Button */}
          <button className="hidden md:block rounded-full px-6 py-2 text-white bg-BrightRed  hover:bg-BrightRed  hover:opacity-80">
            Get Started
          </button>

          {/* Hamburger */}
          <div className="items-end md:hidden">
            <button onClick={handleToggle} className="w-16 h-16">
              {showMenu ? (
                <img src={Images.Close} alt="close " />
              ) : (
                <img src={Images.Hamburger} alt="hamburger" />
              )}
            </button>
          </div>

          {/* mobile view */}
          {showMenu && (
            <div className="md:hidden">
              <div className="absolute flex flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md">
                <a className="hover:text-DarkGrayishBlue" href="#pricing">
                  {" "}
                  Pricing{" "}
                </a>
                <a className="hover:text-DarkGrayishBlue" href="#product">
                  {" "}
                  Product{" "}
                </a>
                <a className="hover:text-DarkGrayishBlue" href="#about">
                  {" "}
                  About{" "}
                </a>
                <a className="hover:text-DarkGrayishBlue" href="#contact">
                  {" "}
                  Contact{" "}
                </a>
                <a className="hover:text-DarkGrayishBlue" href="#contact">
                  {" "}
                  Contact{" "}
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

export default Header;
