import React, { useEffect, useState } from "react";
import ButtonComponent from "../Button";
import { UseContext } from "../../Context/EcommerceContext";

const OrderSummaryCard = () => {
  const { cart } = UseContext();
  const [subTotal, setSubTotal] = useState(0);
  const [total, setTotal] = useState(0);

  function calculateOrder() {
    const cartSubTotal = cart.reduce((prev, curr) => {
      return prev + curr.price * curr.quantity;
    }, 0);

    setSubTotal(cartSubTotal);
    if (cartSubTotal > 0) {
      let totalCalculatedResult = cartSubTotal + 14;
      if (cartSubTotal > 99) {
        totalCalculatedResult = cartSubTotal + 14 - 60;
      }

      return setTotal(totalCalculatedResult);
    }
    setTotal(0);
  }

  useEffect(() => {
    calculateOrder();
  }, [cart]);

  return (
    <div className="w-full md:max-w-[230px]  lg:max-w-[300px]  bg-white rounded-md shadow-sm p-4 border border-[#EEE]">
      <h2 className="text-lg font-semibold text-[#1C1C1C] mb-4">
        Order Summary
      </h2>

      <div className="space-y-2 text-sm text-[#606060]">
        <div className="flex justify-between">
          <span>Subtotal:</span>
          <span>${subTotal}</span>
        </div>
        <div className="flex justify-between">
          <span>Discount:</span>
          <span>-$60</span>
        </div>
        <div className="flex justify-between">
          <span>Tax:</span>
          <span>+$14</span>
        </div>
      </div>

      <hr className="my-4 border-gray-200" />

      <div className="flex justify-between font-semibold text-[#1C1C1C] text-base mb-4">
        <span>Total:</span>
        <span>${total}</span>
      </div>

      <ButtonComponent className="w-full bg-[#00B517] hover:bg-green-600 text-white py-2 rounded-lg font-medium">
        Checkout ({cart.length} items)
      </ButtonComponent>
    </div>
  );
};

export default OrderSummaryCard;
