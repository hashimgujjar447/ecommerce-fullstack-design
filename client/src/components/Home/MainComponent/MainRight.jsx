import React from "react";
import MainRightUpperComponent from "./MainRightUpperComponent";

const MainRight = () => {
  return (
    <div className="p-4 flex flex-col justify-between gap-2  items-center">
      <MainRightUpperComponent />
      <div className="bg-[#F38332] rounded-[8px] p-1 lg:p-2 h-[100px]  flex justify-center items-center xl:w-full">
        <p className="lg:text-xl text-[16px] lg:p-1 xl:p-2 lg:pr-14 text-white">
          Get US $10 off with a new supplier
        </p>
      </div>
      <div className="bg-[#55BDC3] p-1 lg:p-2 rounded-[8px] h-[100px] flex justify-center items-center xl:w-full">
        <p className="lg:text-xl text-[16px] lg:p-1 xl:p-2  lg:pr-14 text-white">
          Send quotes with supplier preferences
        </p>
      </div>
    </div>
  );
};

export default MainRight;
