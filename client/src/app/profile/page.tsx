"use client";

import React, { useEffect, useState } from "react";
import Footer from "../features/footer/footer";
import { IoHomeOutline } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import Link from "next/link";
import NavbarWithSidebar from "../components/NavbarWithSidebar/NavbarWithSidebar";
import { useRouter } from "next/navigation";

const user = {
  name: "Javid",
  email: "javid@gmail.com",
  bio: "Interior designer passionate about creating beautiful spaces with functional design.",
  avatar:
    "https://i.pinimg.com/736x/0f/d8/dd/0fd8ddeb39802a26a3264415f2dd8219.jpg",
};

const ProfilePage = () => {
  const [isClient, setIsClient] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [countdown, setCountdown] = useState(5);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
    const authToken = localStorage.getItem("authToken");

    if (!authToken) {
      const timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev === 1) {
            clearInterval(timer);
            router.push("/login");
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    } else {
      setIsAuthenticated(true);
    }
  }, [router]);

  const handleSignOut = () => {
    localStorage.removeItem("authToken");

    router.push("/login");
  };

  if (!isClient) return null;

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-[#f4f4f4]">
        <h2 className="text-2xl font-semibold text-[#020202]">
          You must be logged in to view this page.
        </h2>
        <p className="mt-4 text-lg text-[#020202]">
          Redirecting to login in {countdown} seconds...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#f4f4f4]">
      <NavbarWithSidebar />
      <div className="flex-grow pt-20 pb-10">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-6 text-[#aa8453]">
            <Link href="/">
              <IoHomeOutline className="w-4 h-4" />
            </Link>
            <span className="flex items-center ml-2">
              Home <GoDotFill className="w-2 h-2 mx-2" /> Profile
            </span>
          </div>

          <div className="text-center p-6 rounded-lg shadow-lg mb-6">
            <h1 className="text-[45px] mb-3 font-barlow font-bold">
              Welcome {user.name}{" "}
            </h1>

            <div className="w-[100px] h-[100px] rounded-full overflow-hidden mx-auto mb-4">
              <img
                src={user.avatar}
                alt="User Avatar"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-2xl font-semibold text-[#020202]">
              {user.name}
            </h1>
            <p className="text-lg text-[#020202] mt-2">{user.email}</p>
            <p className="text-sm text-[#020202] mt-4">{user.bio}</p>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/edit-profile"
              className="bg-[#aa8453] text-[#020202] py-2 px-4 rounded hover:bg-[#020202] hover:text-[#aa8453] transition-all"
            >
              Edit Profile
            </Link>
          </div>

          <div className="text-center mt-4">
            <button
              onClick={handleSignOut}
              className="bg-[#020202] text-[#ffffff] py-2 px-4 rounded hover:bg-[#aa8453] hover:text-[#ffffff] transition-all"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProfilePage;
