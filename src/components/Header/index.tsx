"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import NavLink from "./NavLink";
import Logo from "../Icons/Logo";
import Button from "../Button";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Service", href: "/service" },
  { name: "Journey", href: "/journey" },
  { name: "About", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // logical open state
  const [menuVisible, setMenuVisible] = useState(false); // DOM presence
  const [closing, setClosing] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const router = useRouter();

  const ANIM_DURATION = 280; // ms — must match CSS animation duration

  const openMenu = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setClosing(false);
    setMenuVisible(true);
    // tiny rAF so the element is in the DOM before the open class applies
    requestAnimationFrame(() => setMenuOpen(true));
  };

  const closeMenu = () => {
    setClosing(true);
    setMenuOpen(false);
    closeTimer.current = setTimeout(() => {
      setMenuVisible(false);
      setClosing(false);
    }, ANIM_DURATION);
  };

  const toggle = () => (menuOpen ? closeMenu() : openMenu());

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuVisible ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuVisible]);

  useEffect(
    () => () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    },
    [],
  );

  return (
    <>
      <style>{`
        /* ── Panel ── */
        @keyframes panelIn {
          from { opacity: 0; transform: translateY(-16px) scaleY(0.94); }
          to   { opacity: 1; transform: translateY(0)    scaleY(1);    }
        }
        @keyframes panelOut {
          from { opacity: 1; transform: translateY(0)    scaleY(1);    }
          to   { opacity: 0; transform: translateY(-16px) scaleY(0.94); }
        }
        .menu-panel {
          transform-origin: top center;
        }
        .menu-panel-open {
          animation: panelIn ${ANIM_DURATION}ms cubic-bezier(0.22,1,0.36,1) forwards;
        }
        .menu-panel-close {
          animation: panelOut ${ANIM_DURATION}ms cubic-bezier(0.4,0,1,1) forwards;
        }

        /* ── Links stagger in ── */
        @keyframes linkIn {
          from { opacity: 0; transform: translateX(-14px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes linkOut {
          from { opacity: 1; transform: translateX(0); }
          to   { opacity: 0; transform: translateX(-14px); }
        }
        .menu-link {
          opacity: 0;
        }
        .menu-panel-open  .menu-link { animation: linkIn  0.22s cubic-bezier(0.22,1,0.36,1) forwards; }
        .menu-panel-close .menu-link { animation: linkOut 0.14s ease-in forwards; }

        /* ── Backdrop ── */
        @keyframes backdropIn  { from { opacity: 0; } to { opacity: 1; } }
        @keyframes backdropOut { from { opacity: 1; } to { opacity: 0; } }
        .menu-backdrop-open  { animation: backdropIn  ${ANIM_DURATION}ms ease forwards; }
        .menu-backdrop-close { animation: backdropOut ${ANIM_DURATION}ms ease forwards; }

        /* ── Hamburger bars ── */
        .hb-bar {
          display: block;
          width: 20px;
          height: 2px;
          background: #131927;
          border-radius: 2px;
          transition: transform 0.3s cubic-bezier(0.22,1,0.36,1),
                      opacity   0.2s ease,
                      width     0.3s cubic-bezier(0.22,1,0.36,1);
          transform-origin: center;
        }
      `}</style>

      <header
        className={`w-full z-100 transition-all duration-300 ${
          isSticky ?
            "fixed top-0 left-0 bg-white/85 backdrop-blur-md border-b border-[#E8EAF0]/60 shadow-[0_1px_12px_rgba(0,0,0,0.06)]"
          : "relative bg-white"
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-10 h-17 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => {
              router.push("/");
              closeMenu();
            }}
            aria-label="Go to homepage"
            className="cursor-pointer shrink-0 z-10"
          >
            <Logo />
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <NavLink key={link.name} href={link.href}>
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA */}
          <Button
            variant="primary"
            size="sm"
            className="hidden md:flex items-center justify-center rounded-full! font-semibold text-[0.9rem] px-5 h-10 shrink-0"
            onClick={() =>
              window.open("https://calendly.com/kakka-tech-co/30min", "_blank")
            }
          >
            Get started
          </Button>

          {/* Hamburger — morphs to X */}
          <button
            onClick={toggle}
            className="md:hidden flex flex-col items-center justify-center gap-1.25 w-10 h-10 rounded-full hover:bg-gray-100 active:scale-95 transition-transform"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span
              className="hb-bar"
              style={{
                transform: menuOpen ? "translateY(7px) rotate(45deg)" : "none",
              }}
            />
            <span
              className="hb-bar"
              style={{
                opacity: menuOpen ? 0 : 1,
                width: menuOpen ? "0px" : "20px",
              }}
            />
            <span
              className="hb-bar"
              style={{
                transform:
                  menuOpen ? "translateY(-7px) rotate(-45deg)" : "none",
              }}
            />
          </button>
        </div>

        {/* Mobile menu panel */}
        {menuVisible && (
          <div
            className={`menu-panel md:hidden absolute top-full left-0 right-0 z-99 ${
              closing ? "menu-panel-close" : "menu-panel-open"
            }`}
            style={{
              background: "rgba(255,255,255,0.97)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              borderBottom: "1px solid rgba(232,234,240,0.8)",
              boxShadow:
                "0 24px 64px rgba(0,0,0,0.13), 0 4px 16px rgba(0,0,0,0.06)",
            }}
          >
            <nav className="px-5 pt-4 pb-2 flex flex-col">
              {navLinks.map((link, i) => (
                <div
                  key={link.name}
                  className="menu-link border-b border-[#F0F2F6] last:border-0"
                  style={{
                    animationDelay:
                      closing ?
                        `${(navLinks.length - 1 - i) * 25}ms`
                      : `${i * 40}ms`,
                  }}
                >
                  <NavLink href={link.href} onClick={closeMenu}>
                    <span className="flex items-center justify-between py-4 px-1 w-full group">
                      <span className="text-[15px] font-medium text-[#131927] group-hover:text-[#4758E0] transition-colors duration-150">
                        {link.name}
                      </span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        className="text-[#C8CCDA] group-hover:text-[#4758E0] group-hover:translate-x-0.5 transition-all duration-150 shrink-0"
                      >
                        <path
                          d="M6 3l5 5-5 5"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </NavLink>
                </div>
              ))}
            </nav>

            {/* CTA */}
            <div
              className="menu-link px-5 py-5"
              style={{
                animationDelay: closing ? "0ms" : `${navLinks.length * 40}ms`,
              }}
            >
              <button
                className="w-full h-12 rounded-full bg-[#4758E0] text-white font-semibold text-[15px] tracking-wide
                  hover:bg-[#3848D0] active:scale-[0.98] transition-all duration-200
                  shadow-[0_4px_20px_rgba(71,88,224,0.35)]"
                onClick={() => {
                  window.open(
                    "https://calendly.com/kakka-tech-co/30min",
                    "_blank",
                  );
                  closeMenu();
                }}
              >
                Get started →
              </button>
              <p className="text-center text-[12px] text-[#9096A8] mt-3">
                Free 30-min strategy call
              </p>
            </div>
          </div>
        )}
      </header>

      {/* Backdrop */}
      {menuVisible && (
        <div
          className={`fixed inset-0 z-98 md:hidden ${
            closing ? "menu-backdrop-close" : "menu-backdrop-open"
          }`}
          style={{
            background: "rgba(19,25,39,0.3)",
            backdropFilter: "blur(3px)",
          }}
          onClick={closeMenu}
          aria-hidden
        />
      )}
    </>
  );
}
