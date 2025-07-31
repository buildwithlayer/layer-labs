"use client";

import React from "react";
import LayerLogo from "public/layerlabs.svg";
import Button from "./Button";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const links = [
    { name: "Products", link: "/" },
    { name: "Blog", link: "/blog" },
  ];

  const pathname = usePathname();
  const activeLink = "/" + pathname.split("/")[1];

  return (
    <div className="flex flex-col border-b border-black/10 fixed top-0 left-0 w-full z-50 bg-white">
      {/* Outer nav container */}
      <div className="flex justify-center items-center">
        {/* Inner nav container */}
        <div className="max-w-[--content-width] w-full flex justify-between items-center p-6">
          {/* Brand */}
          <div className="flex items-center gap-4 justify-center">
            <LayerLogo fill="var(--primary)" height={32} />
            <h1 className="font-bold text-[24px]">Layer <span className="font-normal">Labs</span></h1>
          </div>
          {/* NavLinks */}
          <div className="flex gap-8 items-center">
            <div className="hidden md:flex gap-6 items-center">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.link}
                  target={`${link.link.startsWith("http") ? "_blank" : ""}`}
                  className={`text-sm font-semibold text-gray-500 hover:text-primary py-2 ${activeLink === link.link ? "!text-black border-b-2 border-primary" : ""}`}
                >
                  {link.name}
                </a>
              ))}
            </div>
            <a href="#footer" className="hidden md:block">
              <Button label="Contact Us" handleClick={() => {}} size="lg" style="outlined" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
