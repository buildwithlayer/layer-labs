import dynamic from "next/dynamic";
import Image from "next/image";
import LayerLogo from "public/layerlabs.svg";
import React from "react";

const Footer = () => {
  return (
    // Outer footer container
    <div
      id="footer"
      className="w-screen flex items-center justify-center bg-black text-white"
    >
      {/* Inner footer container */}
      <div className="w-full max-w-[--content-width] px-6 py-12 flex flex-col items-center md:items-start text-center md:text-left gap-4 justify-between">
        {/* Top Section */}
        {/* Newsletter */}
        {/* Bottom Section */}
        <div className="w-full flex justify-between gap-4">
          {/* Desktop Left Bottom Section / Mobile Full Bottom Section */}
          <div className="w-full flex flex-col items-center md:items-start text-center md:text-left gap-4 justify-between">
            {/* Brand */}
            <div className="flex justify-center items-center gap-4">
              <LayerLogo fill="var(--primary)" height={32} />
              <h1 className="font-bold text-[24px]">
                Layer <span className="font-normal">Labs</span>
              </h1>
            </div>
            {/* Vertical Links on Mobile */}
            <div className="md:hidden flex flex-col justify-center items-center gap-4 w-full">
              <SocialsSection />
              <LinksSection />
            </div>
            {/* Copyright */}
            <p className="font-light text-gray-600">
              {`© ${new Date()
                .getFullYear()
                .toString()} Layer. All rights reserved.`}
            </p>
          </div>
          {/* Horizontal Links on Mobile */}
          <div className="hidden md:flex flex-col justify-between items-end gap-4 w-full">
            <SocialsSection />
            <LinksSection />
          </div>
        </div>
      </div>
    </div>
  );
};

const SocialsSection = () => {
  const socials = [
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/company/buildwithlayer",
      imageSrc: "/linkedin.svg",
    },
    {
      name: "X",
      link: "https://x.com/buildwithlayer",
      imageSrc: "/x.svg",
    },
    {
      name: "Discord",
      link: "https://discord.com/invite/VTqxJfgZAt",
      imageSrc: "/discord.svg",
    },
    {
      name: "GitHub",
      link: "https://github.com/buildwithlayer",
      imageSrc: "/github.svg",
    },
  ];

  return (
    <div className="flex gap-2">
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 flex items-center justify-center hover:scale-105 transition-all"
        >
          <Image
            src={social.imageSrc}
            alt={social.name}
            className="w-6 h-6 invert"
            width={20}
            height={20}
          />
        </a>
      ))}
    </div>
  );
};

const LinksSection = () => {
  const links = [
    {
      name: "Terms of Service",
      link: "https://storage.googleapis.com/generic-assets/TermsOfService.pdf",
    },
    {
      name: "Privacy Policy",
      link: "https://storage.googleapis.com/generic-assets/PrivacyPolicy.pdf",
    },
  ];

  return (
    <div className="flex gap-4">
      {links.map((link) => (
        <a key={link.name} href={link.link} className={"font-light text-sm text-gray-700 hover:text-white text-center md:text-left py-2 md:py-0 block"}>
          {link.name}
        </a>
      ))}
    </div>
  );
};

export default Footer;
