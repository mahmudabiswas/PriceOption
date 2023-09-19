import React from "react";
import PriceOptions from "./PriceOptions";

const PriceOption = () => {
  const priceOpetion = [
    {
      id: "1",
      name: "Basic Membership",
      description: "Access to basic gym facilities",
      price: 29.99,
      features: [
        "Unlimited access to gym equipment",
        "Locker room access",
        "Free fitness assessment",
      ],
    },
    {
      id: "2",
      name: "Premium Membership",
      description: "Access to advanced gym facilities",
      price: 49.99,
      features: [
        "Unlimited access to gym equipment",
        "Locker room access",
        "Free fitness assessment",
        "Access to group fitness classes",
        "Personal trainer consultation (1 session/month)",
      ],
    },
    {
      id: "3",
      name: "Family Membership",
      description: "For families of 4",
      price: 99.99,
      features: [
        "Unlimited access to gym equipment for all family members",
        "Locker room access",
        "Free fitness assessment for all family members",
        "Access to group fitness classes",
        "Personal trainer consultation (2 sessions/month)",
      ],
    },
  ];

  return (
    <div className="bg-[#7b8697] text-white p-60">
      <h1 className="text-center text-2xl mb-4 text-red-500">
        {" "}
        Best price in our town{" "}
      </h1>
      <div className="grid  md:grid-cols-3 gap-6">
        {priceOpetion.map((option) => (
          <PriceOptions key={option.id} option={option} />
        ))}
      </div>
    </div>
  );
};

export default PriceOption;
