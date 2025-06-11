import React from "react";
import CartItems from "../../components/Cart/CartItems";
import CouponCard from "../../components/Cart/CoupenCard";
import OrderSummaryCard from "../../components/Cart/CartSummary";

const Cart = () => {
  return (
    <div className=" sm:px-6 md:px-10 lg:px-[50px] md:py-5 bg-[#f7fafc]">
      <div className="flex flex-col md:flex-row md:gap-6 justify-between">
        {/* Left: Cart Items */}
        <div className="flex-1 w-full flex justify-center">
          <CartItems />
        </div>

        {/* Right: Summary + Coupon */}
        <div className="flex flex-col md:gap-4 w-full md:w-[350px] md:shrink-0">
          <CouponCard onApply={(code) => console.log(code)} />
          <OrderSummaryCard />
        </div>
      </div>
    </div>
  );
};

export default Cart;
