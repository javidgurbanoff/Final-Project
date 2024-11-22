import React from "react";

const BillingCards = () => {
  const billingCardsData = [
    {
      imageUrl:
        "https://vinova-furstore.myshopify.com/cdn/shop/files/icon-4-1_200x.png?v=1696837724",
      title: "Extra Shipping",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum",
    },
    {
      imageUrl:
        "https://vinova-furstore.myshopify.com/cdn/shop/files/icon-4-2_200x.png?v=1696837724",
      title: "Return Policy",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum",
    },
    {
      imageUrl:
        "https://vinova-furstore.myshopify.com/cdn/shop/files/icon-4-3_200x.png?v=1696837724",
      title: "Payment Secured",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum",
    },
    {
      imageUrl:
        "https://vinova-furstore.myshopify.com/cdn/shop/files/icon-4-4_200x.png?v=1696837724",
      title: "Money Back Guarantee",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum",
    },
  ];

  return (
    <div className="w-full h-[238px] flex justify-center py-[30px] gap-4">
      {billingCardsData.map((card, index) => (
        <div
          key={index}
          className="flex w-[299px] h-[178px] flex-col items-center p-4 pt-8 bg-white border border-[#e4e6e6] hover:shadow-lg transition-shadow duration-300 group"
        >
          <div className="flex items-center space-x-2">
            <img
              src={card.imageUrl}
              alt={card.title}
              className="w-[23px] object-cover mr-1 h-[20px] transition-transform duration-300 group-hover:animate-left-right"
            />
            <h3 className="text-[18px] text-[#202020] font-gilda font-normal">
              {card.title}
            </h3>
          </div>
          <p className="text-center text-[14px] leading-7 text-[#778082] mt-2">
            {card.desc}
          </p>
        </div>
      ))}
    </div>
  );
};

export default BillingCards;
