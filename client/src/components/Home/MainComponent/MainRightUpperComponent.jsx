import React from "react";
import { useNavigate } from "react-router-dom";
import { UseContext } from "../../../Context/EcommerceContext";
import { logout } from "../../../Api/auth.js"; // Assuming you have a logout function in your auth API

const MainRightUpperComponent = () => {
  const navigate = useNavigate();
  const { user, setUser } = UseContext();

  const handleSignUp = () => {
    navigate("/signup");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    logout()
      .then(async () => {
        // Wait shortly to ensure cookie is set
        setTimeout(async () => {
          try {
            setUser(null); // Clear user context
            navigate("/");
          } catch (err) {
            console.error("Failed to fetch user after login", err);
            setError(true);
          } finally {
            setLoading(false);
          }
        }, 100);
      })
      .catch((error) => {
        // Handle logout error, e.g., show error message
        console.error("Logout failed:", error);
      });
  };

  return (
    <div className="bg-[#eaf1f9] h-[180px] lg:h-[190px] p-4 pb-5 w-full rounded-lg text-center">
      {/* Profile Image & Greeting */}
      <div className="flex justify-center gap-4 items-start mb-4">
        <div className="bg-[#c7e1ff] h-[35px] w-[35px]  lg:w-[50px] lg:h-[50px] rounded-full flex justify-center items-end">
          <img
            src="/assets/mainPhoto.png"
            alt="profile"
            className="lg:w-[35px] lg:h-[35px] h-[25px] w-[25px] mb-1"
          />
        </div>

        <p className="text-[#1c1c1c] text-start text-[16px] font-normal leading-tight">
          {user?.fullName ? `Hi, ${user.fullName.split(" ")[0]}` : "Hi, user"}
          <br />
          {user ? "Welcome back!" : "Let’s get started"}
        </p>
      </div>

      {/* Buttons */}
      <div className="mt-4 space-y-2">
        {user ? (
          <>
            <button
              onClick={handleLogout}
              className="bg-[#0d6efd] hover:bg-blue-600 text-white w-full lg:py-2 p-1 rounded-lg"
            >
              Logout
            </button>
            <button
              onClick={handleLogin}
              className="text-sm underline text-blue-600 mt-1"
            >
              Log in with a different account
            </button>
          </>
        ) : (
          <>
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
          </>
        )}
      </div>
    </div>
  );
};

export default MainRightUpperComponent;
