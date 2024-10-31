import React from "react";
import Image from "next/image";
import logo from "@/images/logo.png";
import SearchPar from "./SearchPar";
import TopBarItem from "./TopBarItem";
import UsaFlag from "@/images/usa-flag.png";
import UserImage from "@/images/user-hero-image.jpg";
const TopBar = () => {
  return (
    <div className="flex flex-row h-[100px] ">
      <Image
        src={logo}
        alt="logo"
        width={150}
        height={100}
        className="relative -mt-10 -mb-5 ml-10 mr-[80px] w-[150px]  2xl:w-1/6"
      />
      <div className="flex m-7 w-full justify-between">
        <SearchPar />
        <div className="flex">
          <TopBarItem>
            <div className="flex items-center">
              <Image
                src={UsaFlag}
                alt="usa flag"
                width={20}
                className="rounded-full mr-2"
              />
              <h3 className="mr-3 text-sm font-semibold">ENG</h3>
              <i className="bx bx-chevron-down" />
            </div>
          </TopBarItem>
          <TopBarItem>
            <i className="bx bxs-bell text-xl" />
          </TopBarItem>
          <TopBarItem>
            <div className="flex items-center ">
              <Image
                src={UserImage}
                alt="user image"
                className="rounded-full h-9 w-9 mr-3"
              />
              <div className="flex flex-col">
                <h3 className=" text-[12px] font-semibold">Arun Singh</h3>
                <p className="text-gray-400 text-[10px]">Product Manager</p>
              </div>
            </div>
          </TopBarItem>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
