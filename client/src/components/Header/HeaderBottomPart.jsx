import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";

const HeaderBottomPart = () => {
  const headerBottomItemsLeftSide = [
    {
      id: 1,
      name: "All Categories",
      link: "/",
      icon: <IoMenu className="text-2xl text-[#1c1c1c]" />,
    },
    { id: 2, name: "Hot offers", link: "/" },
    { id: 3, name: "Gift boxes", link: "/" },
    { id: 4, name: "Projects", link: "/" },
    { id: 5, name: "Registry", link: "/" },
    { id: 6, name: "Menu items", link: "/" },
    {
      id: 7,
      name: "Help",
      link: "/",
      icon: <RiArrowDropDownLine className="text-2xl text-[#8B96A5]" />,
    },
  ];

  const headerBottomRightSide = [
    {
      id: 1,
      name: "English, USD",
      link: "/",
      icon: <RiArrowDropDownLine className="text-2xl text-[#8B96A5]" />,
    },
    {
      id: 2,
      name: "Ship to",
      link: "/",
      icon: <RiArrowDropDownLine className="text-2xl text-[#8B96A5]" />,
    },
  ];

  return (
    <div className="w-full overflow-x-auto overflow-y-hidden whitespace-nowrap xl:overflow-visible scrollbar-hide">
      <div className="flex items-center justify-between gap-6 min-w-[700px] md:min-w-0">
        {/* Left-side menu */}
        <ul className="flex items-center gap-3 text-sm font-medium">
          {headerBottomItemsLeftSide.map((item) => (
            <li
              key={item.id}
              className="text-[#0D6EFD] md:text-[#1C1C1C] flex items-center justify-center bg-[#EFF2F4] md:bg-white rounded-md h-[36px] w-[115px] md:rounded-none"
            >
              <Link to={item.link} className="flex items-center gap-1">
                {item.name === "All Categories" ? (
                  <>
                    <span className="md:inline hidden">{item.icon}</span>
                    {item.name}
                  </>
                ) : (
                  <>
                    {item.name}
                    {item.icon && item.icon}
                  </>
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right-side settings */}
        <ul className="flex items-center gap-3 lg:gap-5 text-sm font-medium">
          {headerBottomRightSide.map((item) => (
            <li
              key={item.id}
              className="text-[#0D6EFD] md:text-[#1C1C1C] flex items-center justify-center bg-[#EFF2F4] md:bg-white rounded-md h-[36px] w-[115px] md:rounded-none"
            >
              <Link to={item.link} className="flex items-center gap-1">
                {item.name === "Ship to" ? (
                  <>
                    {item.name}
                    <img
                      src="/assets/icon.png"
                      alt="flag"
                      className="w-4 h-4"
                    />
                    {item.icon}
                  </>
                ) : (
                  <>
                    {item.name}
                    {item.icon}
                  </>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HeaderBottomPart;
