"use client";

import React from "react";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "flex justify-center items-center gap-2 font-medium transition-all duration-300 rounded-[20px] focus:outline-none";

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const variantStyles = {
    primary: clsx(
      "text-white",
      "bg-[#4758E0]",
      "shadow-[inset_0_-4px_10px_0_rgba(0,0,0,0.15),inset_0_8px_10px_0_rgba(244,244,244,0.35)]",
      "hover:bg-[#3848c9]"
    ),
    outline:
      "border border-[#4758E0] text-[#4758E0] bg-transparent hover:bg-[#4758E0] hover:text-white",
    ghost:
      "bg-transparent text-[#4758E0] hover:bg-[#f2f2ff] hover:text-[#3848c9]",
  };

  return (
    <button
      className={clsx(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}
