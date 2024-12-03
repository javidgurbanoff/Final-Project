"use client";

import React, { useState } from "react";
import NavbarWithSidebar from "../components/NavbarWithSidebar/NavbarWithSidebar";
import Footer from "../features/footer/footer";
import BackToTopButton from "../components/BackToTopButton/BackToTopButton";
import Filter from "@/app/components/Filter/Filter";
import ProductCard from "@/app/components/ProductCard/ProductCard";
import LoadMoreButton from "@/app/components/LoadMoreButton/LoadMoreButton";

interface Product {
  title: string;
  price: number;
  color: string;
  productType: string;
  availability: string;
  src: string;
}

interface FiltersState {
  color: string[];
  availability: string[];
  minPrice: number;
  maxPrice: number;
  productType: string[];
}

export default function Collection() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [filters, setFilters] = useState<FiltersState>({
    color: [],
    availability: [],
    minPrice: 0,
    maxPrice: 1000,
    productType: [],
  });

  const [productsToShow, setProductsToShow] = useState(2);
  const [showAll, setShowAll] = useState(false);

  const catalogFurnitur: Product[] = [
    {
      title: "Uiamond Halo Strud Cum",
      price: 628,
      color: "bg-blue-500",
      productType: "Chairs",
      availability: "In stock",
      src: "https://vinova-furstore.myshopify.com/cdn/shop/products/32_360x.jpg?v=1694678290",
    },
    {
      title: "Diamond Halo Stud Quis",
      price: 200,
      color: "bg-gray",
      productType: "Tables",
      availability: "Out of stock",
      src: "https://vinova-furstore.myshopify.com/cdn/shop/products/18_360x.jpg?v=1694678145",
    },
    {
      title: "Diamond Halo Stud Quis",
      price: 736,
      color: "bg-black",
      productType: "Clocks",
      availability: "In stock",
      src: "https://vinova-furstore.myshopify.com/cdn/shop/products/12_360x.jpg?v=1694678190",
    },
    {
      title: "Diamond Halo Stud Magnis",
      price: 325,
      color: "bg-black",
      productType: "Lamps",
      availability: "In stock",
      src: "https://vinova-furstore.myshopify.com/cdn/shop/products/13_360x.jpg?v=1694678199",
    },
    {
      title: "Diamond Halo Stud lortim",
      price: 950,
      color: "bg-orange-500",
      productType: "Chair",
      availability: "In stock",
      src: "https://vinova-furstore.myshopify.com/cdn/shop/products/15a_360x.jpg?v=1695803744",
    },
  ];

  const filteredProducts = catalogFurnitur.filter((item) => {
    if (item.price < filters.minPrice || item.price > filters.maxPrice) {
      return false;
    }

    if (filters.color.length > 0 && !filters.color.includes(item.color)) {
      return false;
    }

    if (
      filters.availability.length > 0 &&
      !filters.availability.includes(item.availability)
    ) {
      return false;
    }

    if (
      filters.productType.length > 0 &&
      !filters.productType.includes(item.productType)
    ) {
      return false;
    }

    return true;
  });

  const handleFilterChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    filterType: keyof FiltersState
  ) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters };

      if (isChecked) {
        if (!updatedFilters[filterType].includes(value)) {
          updatedFilters[filterType] = [
            ...(updatedFilters[filterType] || []),
            value,
          ];
        }
      } else {
        updatedFilters[filterType] = (updatedFilters[filterType] || []).filter(
          (item) => item !== value
        );
      }

      return updatedFilters;
    });
  };

  const clearFilters = () => {
    setFilters({
      color: [],
      availability: [],
      minPrice: 0,
      maxPrice: 1000,
      productType: [],
    });
  };

  const loadMoreProducts = () => {
    if (showAll) {
      setProductsToShow(2);
    } else {
      setProductsToShow(filteredProducts.length);
    }
    setShowAll(!showAll);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <BackToTopButton />
      <NavbarWithSidebar />
      <div className="pt-[147px] pb-[147px] mb-[110px] h-[375px] bg-[#e7e8eb]">
        <div className="ml-44">
          <h1 className="text-[30px] font-gilda mb-[7px] text-[#222222]">
            ARMCHAIR
          </h1>
        </div>
      </div>

      <div className="w-full">
        <div className="max-w-[1200px] flex px-4 mx-auto">
          <Filter
            filters={filters}
            handleFilterChange={handleFilterChange}
            clearFilters={clearFilters}
            setFilters={setFilters}
          />

          <div className="w-[840px] flex-1">
            <div className="grid grid-cols-3 gap-4">
              {filteredProducts.slice(0, productsToShow).map((item, index) => (
                <ProductCard key={index} item={item} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center text-xl text-gray-600">
                No items found
              </div>
            )}

            {filteredProducts.length > 2 && (
              <LoadMoreButton
                loadMore={loadMoreProducts}
                totalProducts={filteredProducts.length}
                showAll={showAll}
              />
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
