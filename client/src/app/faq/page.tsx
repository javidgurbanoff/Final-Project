"use client";
import React, { useState } from "react";
import Footer from "../features/footer/footer";
import { IoHomeOutline } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import Modal from "../components/Modal/Modal";
import NavbarWithSidebar from "../components/NavbarWithSidebar/NavbarWithSidebar";
import BackToTopButton from "../components/BackToTopButton/BackToTopButton";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Link from "next/link";

export default function Faq() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | false>(false);
  const [pending, setPending] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  const faqItems = [
    {
      src: "https://vinova-furstore.myshopify.com/cdn/shop/files/757-delivery-flat_140x.gif?v=1695610093",
      title: "Delivery Policy",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam consequat ut ex vel finibus. Nunc eget molestie purus. Fusce imperdiet pulvinar est, eget fermentum nisi.",
    },
    {
      src: "https://vinova-furstore.myshopify.com/cdn/shop/files/299-coins-dollar-flat_140x.gif?v=1695610092",
      title: "Return & Refund",
      content:
        "Maecenas congue metus id turpis iaculis mattis. Sed pellentesque id arcu id scelerisque. Ut ullamcorper rutrum justo, at blandit eros maximus ut.",
    },
    {
      src: "https://vinova-furstore.myshopify.com/cdn/shop/files/1708-home-safety-flat_140x.gif?v=1695610092",
      title: "Privacy Policy",
      content:
        "Vivamus libero dolor, porta eget vehicula eu, iaculis id lacus. Sed interdum convallis sapien, eget faucibus sapien.",
    },
    {
      src: "https://vinova-furstore.myshopify.com/cdn/shop/files/1413-page-size-flat_140x.gif?v=1695610092",
      title: "Size Guide",
      content:
        "Integer congue, sem elementum varius tristique, erat nulla rutrum risus, a imperdiet nulla lorem fermentum erat.",
    },
    {
      src: "https://vinova-furstore.myshopify.com/cdn/shop/files/455-credit-card-bank-flat_140x.gif?v=1695610092",
      title: "Payment & Taxes",
      content:
        "Pellentesque elementum justo at velit fringilla, eu feugiat erat fermentum.",
    },
  ];

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <NavbarWithSidebar />
      <BackToTopButton />
      <Modal />
      <div className="flex-grow text-center pt-[90px] w-full flex flex-col items-center pb-[30px]">
        <div className="pb-[90px]">
          <h1 className="text-[30px] text-[#222] font-gilda">
            FREQUENTLY ASKED QUESTIONS
          </h1>
          <div className="flex justify-center items-center space-x-2 mt-4 text-[#222]">
            <Link href="/">
              <IoHomeOutline className="w-3 h-3" />
            </Link>
            <span className="flex justify-center text-[11px] items-center">
              Home <GoDotFill className="text-center mx-2 w-2 h-2" /> Frequently
              Asked Questions
            </span>
          </div>
        </div>

        <div className="w-full max-w-[1200px]">
          <div className="flex flex-wrap justify-evenly py-[22px] px-[10px]">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center mb-6 md:mb-0"
              >
                <img src={item.src} alt={item.title} className="pb-3" />
                <h2 className="text-sm font-semibold text-[#222]">
                  {item.title}
                </h2>
              </div>
            ))}
          </div>

          <div className="mt-8">
            {faqItems.map((item, index) => (
              <Accordion
                key={index}
                expanded={expanded === `panel${index}`}
                onChange={handleChange(`panel${index}`)}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel${index}-content`}
                  id={`panel${index}-header`}
                >
                  <Typography>{item.title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{item.content}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        </div>

        <div className="text-[#202020] text-[22px] justify-center font-barlow mt-8">
          <h3 className="font-bold mb-[7px]">
            Can't find the answer you are looking for?
          </h3>
          <h3 className="font-extrabold mb-[27px]">WE'RE HERE TO HELP!</h3>

          <Link href="/contact">
            <button
              type="submit"
              className={`bg-[#aa8453] w-[200px] h-[60px] text-white text-[18px] font-barlow px-6 py-2 rounded-[4px] ${
                pending
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-[#ffffff] border-[2px] hover:border-[#000] hover:text-[#000]"
              } transition-all`}
              disabled={pending}
            >
              {pending ? "Loading..." : "Contact Us Now"}
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
