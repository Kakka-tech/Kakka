"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import NavLink from "./NavLink";
import Logo from "../Icons/Logo";
import Button from "../Button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Service", href: "/service" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Journey", href: "/journey" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full flex justify-center mt-4 z-[100] bg-white">
      <div
        className={`max-w-[928px] w-full flex items-center justify-between px-6 py-4 rounded-[20px]
        transition-all duration-300
        ${
          isSticky
            ? "z-[100] fixed top-4 left-1/2 -translate-x-1/2 backdrop-blur-sm bg-white/70 shadow-[0_4px_30px_rgba(0,0,0,0.1)] border border-white/20"
            : "relative bg-white shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
        }
        `}
      >
        <button
          onClick={() => router.push("/")}
          aria-label="Go to homepage"
          className="cursor-pointer"
        >
          <Logo />
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink key={link.name} href={link.href}>
              {link.name}
            </NavLink>
          ))}
        </nav>

        <Button
          variant="primary"
          size="sm"
          className="hidden md:block !rounded-full !text-[0.95rem] font-medium p-[16px] w-[113px] h-[45px]"
          onClick={() =>
            window.open("https://calendly.com/kakka-tech-co/30min", "_blank")
          }
        >
          Get Started
        </Button>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-full text-[#131927] hover:bg-gray-100 transition"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="fixed top-[80px] left-0 w-full bg-white/95 backdrop-blur-md shadow-lg rounded-b-[20px] p-6 md:hidden transition-all duration-300 z-[90]">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}

            <Button
              variant="primary"
              size="sm"
              className="!rounded-full w-full font-medium mt-4"
              onClick={() => {
                window.open(
                  "https://calendly.com/kakka-tech-co/30min",
                  "_blank"
                );
                setMenuOpen(false);
              }}
            >
              Get Started
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
