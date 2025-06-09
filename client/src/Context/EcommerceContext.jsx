import { createContext, useContext, useState } from "react";

const EcommerceContext = createContext({
  products: [],
  isGridView: false,
});

export const ContextProvider = ({ children }) => {
  const [isGridView, setIsGridView] = useState(false);
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Canon Camera EOS 2000, Black 10x zoom",
      price: 998.0,
      oldPrice: 1128.0,
      rating: 7.5,
      orders: 154,
      shipping: "Free Shipping",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      image: "/assets/image 33.png", // Add image path
    },
    {
      id: 2,
      title: "GoPro HERO6 4K Action Camera - Black",
      price: 998.0,
      oldPrice: null,
      rating: 7.5,
      orders: 154,
      shipping: "Free Shipping",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit",
      image: "/assets/image 23.png",
    },
    {
      id: 3,
      title: "GoPro HERO6 4K Action Camera - Black",
      price: 998.0,
      oldPrice: null,
      rating: 7.5,
      orders: 154,
      shipping: "Free Shipping",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit",
      image: "/assets/image 32.png",
    },
    {
      id: 4,
      title: "GoPro HERO6 4K Action Camera - Black",
      price: 998.0,
      oldPrice: null,
      rating: 7.5,
      orders: 154,
      shipping: "Free Shipping",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit",
      image: "/assets/image 34.png",
    },
    {
      id: 5,
      title: "GoPro HERO6 4K Action Camera - Black",
      price: 998.0,
      oldPrice: 1128.0,
      rating: 7.5,
      orders: 154,
      shipping: "Free Shipping",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit",
      image: "/assets/image 35.png",
    },
    {
      id: 6,
      title: "GoPro HERO6 4K Action Camera - Black",
      price: 998.0,
      oldPrice: null,
      rating: 7.5,
      orders: 154,
      shipping: "Free Shipping",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit",
      image: "/assets/image 86.png",
    },
    {
      id: 7,
      title: "Winter Coat for Men - Blue",
      price: 120.0,
      oldPrice: 150.0,
      rating: 8.2,
      orders: 98,
      shipping: "Free Shipping",
      description: "Stylish and warm winter coat for men with durable fabric.",
      image: "/assets/image 30.png",
    },
    {
      id: 8,
      title: "Cotton Casual Shirt - White",
      price: 35.0,
      oldPrice: 45.0,
      rating: 8.0,
      orders: 320,
      shipping: "Free Shipping",
      description: "Breathable cotton shirt for everyday wear.",
      image: "/assets/image 34 shirt.png",
    },
    {
      id: 9,
      title: "Handwoven Carpet - Persian Design",
      price: 240.0,
      oldPrice: 300.0,
      rating: 9.1,
      orders: 72,
      shipping: "Free Shipping",
      description: "Premium handwoven Persian-style carpet for living rooms.",
      image: "/assets/carpet.png",
    },
    {
      id: 10,
      title: "Leather Handbag - Brown",
      price: 89.0,
      oldPrice: 110.0,
      rating: 8.4,
      orders: 198,
      shipping: "Free Shipping",
      description: "Elegant and spacious leather handbag for daily use.",
      image: "/assets/image 24.png",
    },
    {
      id: 11,
      title: "King Size Bed with Storage",
      price: 799.0,
      oldPrice: 999.0,
      rating: 9.0,
      orders: 45,
      shipping: "Free Shipping",
      description:
        "Spacious and sturdy bed with under-bed storage compartments.",
      image: "/assets/image 93.png",
    },

    {
      id: 12,
      title: "Stylish bag ",
      price: 180.0,
      oldPrice: 220.0,
      rating: 9.2,
      orders: 130,
      shipping: "Free Shipping",
      description: "Ergonomic and stylish bag for everyday use.",
      image: "/assets/image 26.png",
    },
    {
      id: 13,
      title: "Men's Cotton Long Nikar",
      price: 22.0,
      oldPrice: 30.0,
      rating: 7.9,
      orders: 85,
      shipping: "Free Shipping",
      description: "Comfortable long nikar made with breathable fabric.",
      image: "/assets/Bitma.png",
    },
  ]);

  const toggleView = () => {
    setIsGridView((prev) => !prev);
  };
  return (
    <EcommerceContext.Provider
      value={{ products, isGridView, setProducts, toggleView }}
    >
      {children}
    </EcommerceContext.Provider>
  );
};

export const UseContext = function () {
  return useContext(EcommerceContext);
};
