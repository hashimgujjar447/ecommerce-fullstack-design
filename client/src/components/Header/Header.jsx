import React, { useState } from "react";
import InputComponent from "../Input.jsx";
import ButtonComponent from "../Button.jsx";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoPersonSharp } from "react-icons/io5";
import { MdMessage } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import HeaderBottomPart from "./HeaderBottomPart.jsx";
import { MdOutlineSearch } from "react-icons/md";
import MobileMenu from "./MobileMenu.jsx";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const listItems = [
    {
      id: 1,
      name: "Profile",
      link: "/",
      logo: <IoPersonSharp className="text-2xl text-[#8B96A5]" />,
    },
    {
      id: 2,
      name: "Message",
      link: "/about",
      logo: <MdMessage className="text-2xl text-[#8B96A5]" />,
    },
    {
      id: 3,
      name: "Orders",
      link: "/orders",
      logo: <FaHeart className="text-2xl text-[#8B96A5]" />,
    },
    {
      id: 4,
      name: "My Cart",
      link: "/contact",
      logo: <FaCartShopping className="text-2xl text-[#8B96A5]" />,
    },
  ];

  const smallScreenItems = [
    {
      id: 1,

      link: "/contact",
      logo: <FaCartShopping className="w-[24px] h-[24px] text-[#1C1C1C]" />,
    },
    {
      id: 2,

      link: "/",
      logo: <IoPersonSharp className="w-[24px] h-[24px] text-[#1C1C1C]" />,
    },
  ];
  return (
    <header className="bg-[#FFFFFF]  ">
      <div className="flex items-center justify-between p-4 sm:px-15 md:px-[40px]  lg:px-[50px] py-[20px]   h-[80px]">
        <div className="flex items-center gap-4">
          <IoMenu
            className="text-3xl text-[#1C1C1C] md:hidden"
            onClick={() => setShowMenu((prev) => !prev)}
          />

          <div
            className={`fixed top-0 left-0 w-[280px] h-screen overflow-y-auto md:hidden bg-white shadow-lg z-50 transform transition-all duration-500 ease-in-out
    ${showMenu ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`}
          >
            <MobileMenu setShowMenu={setShowMenu} showMenu={showMenu} />
          </div>

          <figure>
            <img
              src="/assets/logo-colored.png"
              alt="website logo"
              className="w-[116px] h-[36px]  md:w-[150px] md:h-[46px]"
            />
          </figure>
        </div>
        <div className="flex items-center justify-center md:flex hidden">
          <InputComponent
            type="text"
            name="search"
            placeholder="Search..."
            className="border-2 border-[#0D6EFD] md:w-[250px] lg:w-[330px] xl:w-[450px] 2xl:w-[700px] h-[40px] rounded-l px-3  focus:outline-none transition-all"
          />
          <div className="flex items-center border-y-2 border-[#0D6EFD] lg:flex hidden h-[40px]">
            <ButtonComponent
              type="button"
              className="   text-[#1C1C1C] font-[400] text-sm lg:text-md  px-2  transition-colors"
            >
              All category
            </ButtonComponent>
            <RiArrowDropDownLine className="text-3xl text-[#8B96A5] " />
          </div>

          <ButtonComponent
            type="button"
            className="bg-[#0D6EFD] border-2 border-[#0D6EFD] h-[40px]   text-white px-4 rounded-r hover:bg-blue-600 transition-colors"
          >
            Search
          </ButtonComponent>
        </div>
        <div className="flex items-center gap-2 hidden md:flex md:gap-4 lg:gap-6">
          {listItems.map((item) => {
            return (
              <div key={item.id} className="flex flex-col  items-center">
                {item.logo && <span className="text-2xl">{item.logo}</span>}
                <p className="text-[12px] text-[#8B96A5]">{item.name}</p>
              </div>
            );
          })}
        </div>
        {/* Small screen items */}
        <div className="flex items-center gap-6 md:hidden">
          {smallScreenItems.map((item) => {
            return (
              <div key={item.id} className="flex flex-col items-center">
                {item.logo}
              </div>
            );
          })}
        </div>
      </div>
      <div className="md:hidden   p-4 sm:px-15 md:px-[40px]  lg:px-[50px] ">
        <div className=" relative border-1 border-[#DEE2E7] bg-[#F7FAFC] rounded-md ">
          <MdOutlineSearch className="text-[#8B96A5] text-xl absolute left-4 top-3" />
          <InputComponent
            type="text"
            name="search"
            placeholder="Search..."
            className=" bg-[#F7FAFC] ml-7  h-[40px] px-3  focus:outline-none transition-all"
          />
        </div>
      </div>
      <nav className=" py-4 md:flex h-[60px] md:border-y-1 border-[#E5E5E5] p-4 sm:px-15 md:px-[40px]  lg:px-[50px]    height-[80px]">
        <HeaderBottomPart />
      </nav>
    </header>
  );
};

export default Header;
