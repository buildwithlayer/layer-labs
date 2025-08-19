"use client";

import React from "react";
import "animate.css/animate.compat.css";
import Button from "../Button";
import snaptaskThumb from "public/snaptask-thumb.png";
import mcpThumb from "public/mcp-thumb.png";
import placeholderThumb from "public/placeholder-thumb.png";
import Image, { StaticImageData } from "next/image";
import SnapLinearIcon from "public/snaplinear.svg";
import MCPIcon from "public/mcp.svg";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative w-screen flex items-center justify-center">
      <div className="w-full max-w-[--content-width] flex flex-col items-center gap-16 text-center py-16 z-10 relative px-4 md:px-0">
        <div className="w-full flex flex-col gap-4 px-6">
          {/* Text */}
          <div className="col-span-1 flex flex-col gap-8 items-center md:items-start text-center md:text-left pb-10">
            <div className="flex flex-col gap-4">
              <h1 className="font-medium text-6xl">Welcome to Layer Labs,</h1>
              <p className="text-xl">where we build AI products for real world impact.</p>
            </div>
            {/* <Button label="Contact Us" size="lg" /> */}
          </div>
          {/* Product Cards */}
          <ProductCard title="SnapTask" description="Turn your meetings into actionable tasks in Linear or Asana." imageSrc={snaptaskThumb} ctas={
            <div className="flex gap-2">
              <Link href="https://snaptask.io" target="_blank"><Button label="Try Now" additionalClasses="bg-white !text-black hover:bg-gray-900" /></Link>
            </div>
          }
            productIcon={<SnapLinearIcon className="w-8 h-8 fill-white" />}
          />
          <ProductCard title="RAG Remastered" description="Description for RAG Remastered" imageSrc={placeholderThumb} ctas={<Link href="/blog/cultivating-a-rag-system"><Button label="Learn More" style="outlined" additionalClasses="border-white hover:bg-white/10" /></Link>} />
          <ProductCard title="MCP Services" description="We built a suite of tools to make using Model Context Protocol easier." imageSrc={mcpThumb} ctas={<Button label="Coming Soon..." disabled style="outlined" additionalClasses="!bg-gray-200 !hover:bg-gray-200" />} productIcon={<MCPIcon className="w-8 h-8 fill-black" />} />
        </div>
      </div>
    </div>
  );
};

const ProductCard = ({title, description, imageSrc, ctas, productIcon}: {title: string, description: string, imageSrc: StaticImageData, ctas: React.ReactNode, productIcon?: React.ReactNode}) => {
  return (<div className="flex flex-col col-span-1 rounded-md border border-black/10 justify-between items-center bg-black/90 text-white transition-all duration-300 ease-in-out hover:scale-[1.02]">
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
    <Image src={imageSrc} alt={title} className="px-10 object-contain" />
  </div>
  );
};

export default Hero;
