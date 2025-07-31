"use client";

import React from "react";
import "animate.css/animate.compat.css";
import ScrollAnimation from "react-animate-on-scroll";
import Button from "../Button";
import snaplinearThumb from "public/snaplinear-thumb.png";
import mcpThumb from "public/mcp-thumb.png";
import placeholderThumb from "public/placeholder-thumb.png";
import Image, { StaticImageData } from "next/image";
import SnapLinearIcon from "public/snaplinear.svg";
import MCPIcon from "public/mcp.svg";

const Hero = () => {
  return (
    <div className="relative w-screen flex items-center justify-center">
      <div className="w-full max-w-[--content-width] flex flex-col items-center gap-16 text-center py-16 z-10 relative px-4 md:px-0">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 px-6">
          {/* Text */}
          <div className="col-span-1 flex flex-col gap-8 items-center md:items-start text-center md:text-left pb-4">
            <div className="flex flex-col gap-4 max-w-[350px]">
              <h1 className="font-medium text-6xl">Welcome to Layer Labs,</h1>
              <p className="text-xl">where we build AI products for real world impact.</p>
            </div>
            <Button label="Contact Us" handleClick={() => {}} size="lg" />
          </div>
          {/* Product Cards */}
          <ProductCard title="SnapLinear" description="Turn your meetings into actionable tasks in Linear." imageSrc={snaplinearThumb} ctas={
            <div className="flex gap-2">
              <Button label="Try Now" handleClick={() => {}} />
              <Button label="Learn More" handleClick={() => {}} style="outlined" />
            </div>
          }
            productIcon={<SnapLinearIcon className="w-8 h-8 fill-black" />}
          />
          <ProductCard title="RAG Remastered" description="Description for RAG Remastered" imageSrc={placeholderThumb} ctas={<Button label="Coming Soon..." disabled handleClick={() => {}} style="outlined" />} />
          <ProductCard title="MCP Services" description="We built a suite of tools to make using Model Context Protocol easier." imageSrc={mcpThumb} ctas={<Button label="Learn More" handleClick={() => {}} style="outlined" />} productIcon={<MCPIcon className="w-8 h-8 fill-black" />} />
        </div>
      </div>
    </div>
  );
};

const ProductCard = ({title, description, imageSrc, ctas, productIcon}: {title: string, description: string, imageSrc: StaticImageData, ctas: React.ReactNode, productIcon?: React.ReactNode}) => {
  return (<div className="flex flex-col col-span-1 rounded-md border border-black/10 justify-between items-center">
    <div className="flex flex-col gap-4 items-center p-6">
      <div className="flex flex-col gap-2">
        <div className="flex justify-center items-center gap-2">
          {productIcon}
          <h3 className="text-2xl font-semibold">{title}</h3>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
      {ctas}
    </div>
    <Image src={imageSrc} alt={title} className="max-h-48 px-10 object-contain" />
  </div>
  );
};

export default Hero;
