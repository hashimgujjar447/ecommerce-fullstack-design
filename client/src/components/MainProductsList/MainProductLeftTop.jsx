import React, { useState } from "react";
import CustomCheckBox from "../CustomCheckBox";
import { UseContext } from "../../Context/EcommerceContext";

const MainProductLeftTop = () => {
  const [showFeatured, setShowFeatured] = React.useState(false);
  const [feature, setFeature] = useState("Featured");
  const { isGridView, toggleView } = UseContext();
  const menuItems = [
    { id: 1, label: "Featured" },
    { id: 2, label: "Most Popular" },
    { id: 3, label: "Best Rated" },
  ];

  return (
    <div className="bg-white flex justify-between items-center rounded-lg border-1 border-[#DEE2E7] px-4 py-2">
      <div>
        <p className="text-[#495057] text-[16px] ">
          12,911 items in <b>Mobile accessory</b>
        </p>
      </div>
      <div className="flex gap-4 items-center">
        <div className="flex items-center gap-2">
          <CustomCheckBox />
          <p>Verified only</p>
        </div>

        <div
          className="relative"
          onClick={() => setShowFeatured(!showFeatured)}
        >
          <div className="p-2 border-1 hover:cursor-pointer flex rounded-lg items-center justify-between border-[#DEE2E7] w-[172px] ">
            {feature}
            <img src="/assets/angleDown.png" />
          </div>
          {showFeatured && (
            <div className="absolute top-full left-0 bg-white border-1 border-[#DEE2E7] rounded-lg shadow-lg mt-2 w-full z-10">
              <ul className="p-2">
                {menuItems.map((item) => (
                  <li
                    key={item.id}
                    className="py-1 px-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setFeature(item.label);
                      setShowFeatured(false);
                    }}
                  >
                    {item.label}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className=" flex items-center border-1 border-[#DEE2E7] rounded">
          <div
            className={`p-2 ${
              isGridView ? " bg-[#EFF2F4]" : "bg-white"
            } border-1 border-[#DEE2E7] rounded-l`}
            onClick={toggleView}
          >
            <img
              src="/assets/grid.png"
              alt="Filter"
              className="w-6 h-6 cursor-pointer"
            />
          </div>

          <div
            className={`p-2 ${
              !isGridView ? " bg-[#EFF2F4]" : "bg-white"
            } border-1 border-[#DEE2E7] rounded-r`}
            onClick={toggleView}
          >
            <img
              src="/assets/boldMenu.png"
              alt="Filter"
              className="w-6 h-6 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainProductLeftTop;
