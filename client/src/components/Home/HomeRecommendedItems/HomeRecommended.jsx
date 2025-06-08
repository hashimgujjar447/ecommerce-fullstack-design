import React from "react";
import RecommendedCard from "./RecommendedCard";

const HomeRecommended = () => {
  const products = [
    {
      id: 1,
      title: "T-shirt",
      price: 10.3,
      description: "T-shirts with multiple colors, for men",
      size: "M",
      image: "/assets/Bitma.png",
    },
    {
      id: 2,
      title: "Winter Coat",
      price: 10.3,
      description: "Jeans shorts for men, blue color",
      size: "L",
      image: "/assets/2 1.png",
    },
    {
      id: 3,
      title: "Brown Winter Coat",
      price: 12.5,
      description: "Brown winter coat, medium size",
      size: "M",
      image: "/assets/image 30.png",
    },
    {
      id: 4,
      title: "Travel Wallet",
      price: 34.0,
      description: "Jeans bag for travel, for men",
      size: "One size",
      image: "/assets/image 24.png",
    },
    {
      id: 5,
      title: "Leather Wallet",
      price: 99.0,
      description: "Leather wallet",
      size: "One size",
      image: "/assets/image 26.png",
    },
    {
      id: 6,
      title: "Camera Shorts",
      price: 9.99,
      description: "Canon camera black, 100x zoom",
      size: "M",
      image: "/assets/Bitmap.png",
    },
    {
      id: 7,
      title: "Gaming Headset",
      price: 8.99,
      description: "Headset for gaming with mic",
      size: "One size",
      image: "/assets/image 86.png",
    },
    {
      id: 8,
      title: "Smart Backpack",
      price: 10.3,
      description: "Smartwatch, silver color, modern",
      size: "Medium",
      image: "/assets/image 26.png",
    },
    {
      id: 9,
      title: "Clay Pot",
      price: 10.3,
      description: "Blue wallet for men, leather material",
      size: "Standard",
      image: "/assets/image 90.png",
    },
    {
      id: 10,
      title: "Travel Kettle",
      price: 80.95,
      description: "Jeans bag for travel, for men",
      size: "1L",
      image: "/assets/image 85.png",
    },
  ];

  return (
    <div>
      <h1 className="text-black text-[24px] font-bold pb-2 sm:p-4">
        Recommended Items
      </h1>
      <div
        className="
    grid 
    gap-4 
    [grid-template-columns:repeat(auto-fit,minmax(180px,1fr))] 
    lg:[grid-template-columns:repeat(4,minmax(0,1fr))] 
    xl:[grid-template-columns:repeat(5,minmax(0,1fr))]
  "
      >
        {products.map((product) => (
          <RecommendedCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomeRecommended;
