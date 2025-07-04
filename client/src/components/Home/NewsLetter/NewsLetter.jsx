import React from "react";
import ButtonComponent from "../../Button";

const NewsLetter = () => {
  return (
    <section className="bg-[#EFF2F4]  sm:px-0">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-8 lg:px-6">
        <div className="mx-auto max-w-screen-md sm:text-center">
          <h2 className="mb-4 text-[20px]  font-semibold text-gray-900 ">
            Sign up for our newsletter
          </h2>
          <p className="mx-auto mb-8 text-[16px] max-w-2xl font-light text-gray-500 md:mb-6 sm:text-xl">
            Stay up to date with the roadmap progress, announcements and
            exclusive discounts feel free to sign up with your email.
          </p>
          <form action="#">
            <div className="items-center sm:justify-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
              <div className="relative">
                <label
                  htmlFor="email"
                  className="hidden mb-2 text-sm font-medium text-gray-900"
                >
                  Email address
                </label>
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </div>
                <input
                  className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg md:w-[300px] border border-gray-300 "
                  placeholder="Enter your email"
                  type="email"
                  id="email"
                  required
                />
              </div>
              <div>
                <ButtonComponent
                  type="submit"
                  className="bg-gradient-to-r sm:ml-3 rounded-lg from-[#127FFF] to-[#0067FF] text-white px-6 py-3 border-0 outline-none"
                >
                  Subscribe
                </ButtonComponent>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
