import React from "react";

const LatestNews = () => {
  const newsItems = [
    {
      id: 1,
      date: "22",
      month: "Oct 2023",
      title: "Pellentesque nunc condentum",
      description:
        "Valentine’s Day 2021 has no choice but to unfold rather differently than usua...",
      imageUrl:
        "https://vinova-furstore.myshopify.com/cdn/shop/articles/blog-10_380x.jpg?v=1695010636",
    },
    {
      id: 2,
      date: "22",
      month: "Oct 2023",
      title: "Aliquam vitae maximus justo",
      description:
        "Valentine’s Day 2021 has no choice but to unfold rather differently than usua...",
      imageUrl:
        "https://vinova-furstore.myshopify.com/cdn/shop/articles/blog-9_380x.jpg?v=1695010612",
    },
    {
      id: 3,
      date: "18",
      month: "Sep 2023",
      title: "Nullam consectetur lacus nec",
      description:
        "Valentine’s Day 2021 has no choice but to unfold rather differently than usua...",
      imageUrl:
        "https://vinova-furstore.myshopify.com/cdn/shop/articles/blog-12_380x.jpg?v=1695010714",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center">
      <p className="text-[46px] font-extralight pr-6 font-gilda">Latest News</p>

      <div className="flex justify-center space-x-6 mt-8">
        {newsItems.map((item) => (
          <div key={item.id} className="w-[370px] bg-white overflow-hidden">
            <div className="overflow-hidden">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-[235px] transform transition-transform duration-[350ms] ease-linear hover:scale-105"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <span className="text-[22px] font-bold text-[#aa8453]">
                  {item.date}
                </span>
                <span className="text-[14px] text-[#444] ml-2">
                  {item.month}
                </span>
              </div>
              <h3 className="text-[18px] font-bold text-[#222222]">
                {item.title}
              </h3>
              <p className="text-[14px] text-[#777] mt-2">{item.description}</p>
              <a
                href="#"
                className="text-[14px] font-semibold text-[#aa8453] mt-4 block"
              >
                Read more →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestNews;
