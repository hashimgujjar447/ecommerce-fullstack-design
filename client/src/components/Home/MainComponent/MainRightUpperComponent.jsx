import React from "react";
import { useNavigate } from "react-router-dom";

const MainRightUpperComponent = () => {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate("/signup");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className="bg-[#eaf1f9] h-[180px] lg:h-[190px] p-4 pb-5 w-full rounded-lg text-center">
      {/* Profile Image */}
      <div className="flex justify-center gap-4 items-start mb-4">
        <div className="bg-[#c7e1ff] h-[35px] w-[35px]  lg:w-[50px] lg:h-[50px] rounded-full flex justify-center items-end">
          <img
            src="/assets/mainPhoto.png"
            alt="profile"
            className="lg:w-[35px] lg:h-[35px] h-[25px] w-[25px] mb-1"
          />
        </div>
        <p className="text-[#1c1c1c] text-start text-[16px] font-normal leading-tight">
          Hi, user <br /> let’s get started
        </p>
      </div>

      {/* Greeting Text */}

      {/* Buttons */}
      <div className="mt-4 space-y-2">
        <button
          onClick={handleSignUp}
          className="bg-[#0d6efd] hover:bg-blue-600 text-white w-full lg:py-2 p-1 rounded-lg"
        >
          Join now
        </button>
        <button
          onClick={handleLogin}
          className="border border-[#dee2e7] text-[#0d6efd] w-full lg:py-2 p-1 rounded-lg bg-white"
        >
          Log in
        </button>
      </div>
    </div>
  );
};

export default MainRightUpperComponent;
