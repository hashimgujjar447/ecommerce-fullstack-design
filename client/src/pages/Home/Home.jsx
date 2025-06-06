import React from "react";
import MainLeft from "../../components/Home/MainComponent/MainLeft";
import MainMiddle from "../../components/Home/MainComponent/MainMiddle";
import MainRight from "../../components/Home/MainComponent/MainRight";

const Home = () => {
  return (
    <div className="sm:px-15 md:px-[40px] bg-[#f7fafc] lg:px-[50px] py-[20px]">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 rounded border border-[#DEE2E7] bg-white items-stretch">
        {/* Left - Hidden on small screens */}
        <div className="hidden md:flex md:col-span-1">
          <MainLeft className="flex-1" />
        </div>

        {/* Middle - Always visible, full width on small, span 2 cols on md+ */}
        <div className="col-span-1 md:col-span-2 flex justify-center items-center">
          <MainMiddle className="flex-1" />
        </div>

        {/* Right - Hidden on small screens */}
        <div className="hidden md:flex md:col-span-1">
          <MainRight className="flex-1" />
        </div>
      </div>
    </div>
  );
};

export default Home;
