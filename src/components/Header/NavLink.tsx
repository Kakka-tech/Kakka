"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  children: React.ReactNode;
  href: string;
  onClick?: () => void;
}

export default function NavLink({ children, href, onClick }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      onClick={onClick} 
      className={`text-[#000000] hover:text-[#C7C7C7] transition-colors font-medium text-[0.95rem] leading-[1.2] ${
        isActive ? "font-semibold" : ""
      }`}
    >
      {children}
    </Link>
  );
}

