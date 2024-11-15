"use client";
import Image from "next/image";
import { TiThMenu } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import { useState } from "react";

export default function Navbar() {
  const [isClick, setisClick] = useState(false);

  const toggleNavbar = (): void => {
    setisClick(!isClick);
  };
  return (
    <div>
      <nav className="h-auto md:h-[92px]  bg-customBlue md:flex md:justify-between items-center px-[30px] md:px-[50px]">
        <div className="w-auto h-auto flex justify-between items-center md:justify-self-center py-3  text-white size-28px font-bold">
          <div className=" flex justify-center gap-5   sm:gap-1  flex-wrap">
            <Image src="/logo.png" alt="logo" width="39" height="19" />
            <h1 className="text-[28px] md:text-[20px]  lg:text-[28px] ">
              whitespace
            </h1>
          </div>
          <div className=" md:hidden" onClick={toggleNavbar}>
            {isClick ? (
              <ImCross className="text-2xl" />
            ) : (
              <TiThMenu className="text-3xl" />
            )}
          </div>
        </div>

        <div className="hidden w-[590px] h-[60px] md:flex justify-between gap-20 items-center ">
          <ul className=" flex gap-6 text-white items-center">
            <li>Products</li>
            <li>Solutions</li>
            <li>Resources</li>
            <li>Pricing</li>
          </ul>
          <div>
            <button className="bg-customYellow py-3 px-8 rounded text-customBlue font-medium ">
              Login
            </button>
          </div>
        </div>
        {/* Navbar for Small devices */}

        {isClick && (
          <ul className="h-[100%] text-white p-5 leading-10 text-center ">
            <li>Products</li>
            <li>Solutions</li>
            <li>Resources</li>
            <li>Pricing</li>
          </ul>
        )}
      </nav>
      <div className="h-0.5 w-full bg-white"></div>
    </div>
  );
}
