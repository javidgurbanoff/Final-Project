"use client";
import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { IoMdPhotos } from "react-icons/io";
import { useWishlist } from "../../context/WishlistContext";

const DealProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const stars = Array(5).fill(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { addToWishlist } = useWishlist();

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div
      className="max-w-sm mx-4 mb-6"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="overflow-hidden relative">
        <img
          src={isHovered ? product.hoverImageUrl : product.imageUrl}
          alt={`${product.name} image`}
          className="w-full h-[334px] transform transition-transform duration-[350ms] ease-linear hover:scale-105 cursor-pointer"
        />

        <p className="absolute rounded-[6px] font-barlow font-semibold text-[13px] py-[5px] px-[8px] top-5 left-5 w-[49px] h-[24px] bg-[#aa8453] text-white text-center flex items-center justify-center">
          {product.discount}
        </p>

        {isHovered && (
          <div className="absolute top-5 right-5 flex gap-2">
            <div
              className="w-10 h-10 flex items-center justify-center border border-[#ededed] rounded-full text-[#848484] hover:text-[#aa8453] hover:bg-[#2b2b2b] transition-all cursor-pointer"
              onClick={() => addToWishlist(product)}
            >
              <FaHeart />
            </div>

            <div
              className="w-10 h-10 flex items-center justify-center border border-[#ededed] rounded-full text-[#848484] hover:text-[#aa8453] hover:bg-[#2b2b2b] transition-all cursor-pointer"
              onClick={handleOpenModal}
            >
              <IoMdPhotos className="text-xl" />
            </div>
          </div>
        )}
      </div>

      <div className="p-4">
        <div className="flex justify-between items-center">
          <h3 className="text-[14px] font-barlow text-[#000000]">
            {product.name}
          </h3>
          <div
            className="text-[#f9bf00] pl-1 flex"
            aria-label={`${product.rating} star rating`}
            onClick={() => addToWishlist(product)}
          >
            {stars.map((_, index) => (
              <FaHeart
                key={index}
                className={
                  index < product.rating ? "text-[#f9bf00]" : "text-gray-300"
                }
              />
            ))}
          </div>
        </div>
        <div className="flex items-center mt-2">
          <p className="text-[#222222] font-bold text-[14px]">
            {product.price}
          </p>
          {product.originalPrice && (
            <span className="text-[14px] text-[#d5d5d5] line-through decoration-[#da432a] ml-[10px]">
              {product.originalPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

const DealProducts = () => {
  const [dealProducts, setDealProducts] = useState([
    {
      id: 1,
      name: "Acamond Halo Stud Conse",
      price: "$198",
      discount: "-64%",
      originalPrice: "$550.00",
      imageUrl:
        "https://vinova-furstore.myshopify.com/cdn/shop/products/1_c2307dbf-d624-4bcd-b3de-99a7963f7496_360x.jpg?v=1694678001",
      hoverImageUrl:
        "https://vinova-furstore.myshopify.com/cdn/shop/products/1a_72f2474e-7e99-45e6-96e5-ddda5fc59906_360x.jpg?v=1694678001",
      rating: 5,
    },
    {
      id: 2,
      name: "Diamond Halo Stud Amet",
      price: "$210",
      discount: "-45%",
      originalPrice: "$380.00",
      imageUrl:
        "https://vinova-furstore.myshopify.com/cdn/shop/products/5_9fbce650-263b-44ad-8387-d6c23f3ade43_360x.jpg?v=1694678021",
      hoverImageUrl:
        "https://vinova-furstore.myshopify.com/cdn/shop/products/5a_360x.jpg?v=1694678021",
      rating: 4,
    },
    {
      id: 3,
      name: "Diamond Halo Stud Donec",
      price: "$247",
      discount: "-68%",
      originalPrice: "$770.00",
      imageUrl:
        "https://vinova-furstore.myshopify.com/cdn/shop/products/8_360x.jpg?v=1694678072",
      hoverImageUrl:
        "https://vinova-furstore.myshopify.com/cdn/shop/products/8a_360x.jpg?v=1694678072",
      rating: 0,
    },
    {
      id: 4,
      name: "Diamond Halo Stud Monte",
      price: "$236",
      discount: "-75%",
      originalPrice: "$945.00",
      imageUrl:
        "https://vinova-furstore.myshopify.com/cdn/shop/products/15_360x.jpg?v=1694678110",
      hoverImageUrl:
        "https://vinova-furstore.myshopify.com/cdn/shop/products/15a_360x.jpg?v=1695803744",
      rating: 0,
    },
  ]);

  const [newProduct, setNewProduct] = useState({
    id: null,
    name: "",
    price: "",
    discount: "",
    originalPrice: "",
    imageUrl: "",
    hoverImageUrl: "",
    rating: 0,
  });

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (!newProduct.name || !newProduct.price || !newProduct.imageUrl) {
      alert("Please fill all required fields.");
      return;
    }

    setDealProducts((prevProducts) => [
      ...prevProducts,
      { ...newProduct, id: prevProducts.length + 1 },
    ]);
    setNewProduct({
      id: null,
      name: "",
      price: "",
      discount: "",
      originalPrice: "",
      imageUrl: "",
      hoverImageUrl: "",
      rating: 0,
    });
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-[46px] text-center font-gilda mb-8">Deal Products</h2>

      <form onSubmit={handleAddProduct} className="mb-8">
        <input
          type="text"
          placeholder="Product Name"
          value={newProduct.name}
          onChange={(e) =>
            setNewProduct((prev) => ({ ...prev, name: e.target.value }))
          }
          className="border rounded p-2 mr-2"
        />
        <input
          type="text"
          placeholder="Price"
          value={newProduct.price}
          onChange={(e) =>
            setNewProduct((prev) => ({ ...prev, price: e.target.value }))
          }
          className="border rounded p-2 mr-2"
        />
        <input
          type="text"
          placeholder="Image URL"
          value={newProduct.imageUrl}
          onChange={(e) =>
            setNewProduct((prev) => ({ ...prev, imageUrl: e.target.value }))
          }
          className="border rounded p-2 mr-2"
        />
        <button
          type="submit"
          className="bg-[#2b2b2b] text-[#aa8453] px-4 py-2 rounded"
        >
          Add Product
        </button>
      </form>

      <div className="flex flex-wrap justify-center px-4 md:px-16 lg:px-32">
        {dealProducts.map((product) => (
          <DealProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default DealProducts;
