import React from "react";

const FeaturesGrid = () => {
  return (
    <div className="mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="w-full h-auto flex items-center space-x-4 bg-gray-50 p-4 rounded-lg shadow-md">
        <img
          src="https://vinova-furstore.myshopify.com/cdn/shop/files/icon-1_200x.png?v=1695007028"
          alt="Extra Shipping"
          className="object-contain"
        />
        <div>
          <h4 className="text-lg font-semibold text-gray-800">
            Extra Shipping
          </h4>
          <p className="text-sm text-gray-600 line-clamp-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry lorem Ipsum.
          </p>
        </div>
      </div>

      <div className="w-full h-auto flex items-center space-x-4 bg-gray-50 p-4 rounded-lg shadow-md">
        <img
          src="https://vinova-furstore.myshopify.com/cdn/shop/files/icon-2_200x.png?v=1695007028"
          alt="Payment Secured"
          className="object-contain"
        />
        <div>
          <h4 className="text-lg font-semibold text-gray-800">
            Payment Secured
          </h4>
          <p className="text-sm text-gray-600 line-clamp-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry lorem Ipsum.
          </p>
        </div>
      </div>

      <div className="w-full h-auto flex items-center space-x-4 bg-gray-50 p-4 rounded-lg shadow-md">
        <img
          src="https://vinova-furstore.myshopify.com/cdn/shop/files/icon-3_200x.png?v=1695007028"
          alt="Money Back Guarantee"
          className="object-contain "
        />
        <div>
          <h4 className="text-lg font-semibold text-gray-800">
            Money Back Guarantee
          </h4>
          <p className="text-sm text-gray-600 line-clamp-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry lorem Ipsum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesGrid;
