"use client";

import React from "react";

interface ButtonProps {
  label: string;
  handleClick: () => void;
  icon?: React.ReactNode;
  styleOverrides?: React.CSSProperties;
  style?: "contained" | "outlined";
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
  additionalClasses?: string;
}

const Button = ({
  label,
  handleClick,
  icon,
  styleOverrides,
  style = "contained",
  type,
  disabled,
  size = "md",
  additionalClasses,
}: ButtonProps) => {
  return (
    <button
      onClick={handleClick}
      className={`flex items-center w-fit justify-center gap-2 rounded-full text-sm px-4 py-2 font-semibold disabled:cursor-default ${
        size === "sm" ? "text-sm" : size === "md" ? "text-base" : "text-lg"
      } ${style === "contained" ? "bg-black text-white hover:bg-black/80 disabled:bg-gray-600" : "border border-black hover:bg-black/5 disabled:border-black/30 disabled:text-gray-600 disabled:hover:bg-transparent"} ${additionalClasses}`}
      style={{ ...styleOverrides }}
      type={type || "button"}
      disabled={disabled}
    >
      {icon}
      <p>{label}</p>
    </button>
  );
};

export default Button;
