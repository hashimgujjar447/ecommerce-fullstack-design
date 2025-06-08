import React from "react";
import MainLeft from "../../components/Home/MainComponent/MainLeft";
import MainMiddle from "../../components/Home/MainComponent/MainMiddle";
import MainRight from "../../components/Home/MainComponent/MainRight";
import HomeDeal from "../../components/Home/HomeDealsAndOffers/HomeDeal";

import HomeOutDoor from "../../components/Home/HomeOutdoor/HomeOutDoor";
import HomeElectronics from "../../components/Home/HomeElectronics/HomeElectronics";
import HomeSupplierCard from "../../components/Home/HomeContectSupplier/HomeSupplierCard";
import RecommendedCard from "../../components/Home/HomeRecommendedItems/RecommendedCard";
import HomeRecommended from "../../components/Home/HomeRecommendedItems/HomeRecommended";

const Home = () => {
  return (
    <div>
      <div className="sm:px-15 md:px-[40px] sm:bg-[#f7fafc] lg:px-[50px] sm:py-[20px] pt-3">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:rounded border border-[#DEE2E7] bg-white items-stretch">
          {/* Left - Hidden on small screens */}
          <div className="hidden md:flex md:col-span-1">
            <MainLeft className="flex-1" />
          </div>

          {/* Middle - Always visible, full width on small, span 2 cols on md+ */}
          <div className="col-span-1 md:col-span-2 flex sm:justify-center justify-start  sm:items-center">
            <MainMiddle className="flex-1" />
          </div>

          {/* Right - Hidden on small screens */}
          <div className="hidden md:flex md:col-span-1">
            <MainRight className="flex-1" />
          </div>
        </div>
      </div>
      <div className="sm:px-15 md:px-[40px] bg-[#f7fafc] lg:px-[50px] py-[20px]">
        <div className="  md:mt-8 ">
          <HomeDeal />
        </div>
      </div>
      <div className="sm:px-15 md:px-[40px] bg-[#f7fafc] lg:px-[50px] py-[20px]">
        <HomeOutDoor />
      </div>
      <div className="sm:px-15 md:px-[40px] bg-[#f7fafc] lg:px-[50px] pt-3">
        <HomeElectronics />
      </div>
      <div className="sm:px-15 md:px-[40px] bg-[#f7fafc] lg:px-[50px] pt-3">
        <HomeSupplierCard />
      </div>
      <div className=" px-2 sm:px-15 md:px-[40px] bg-[#f7fafc] lg:px-[50px] pt-3">
        <HomeRecommended />
      </div>
    </div>
  );
};

export default Home;
