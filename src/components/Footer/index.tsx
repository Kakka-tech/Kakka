"use client";

import Link from "next/link";
import { Mail, Phone, Github, Linkedin, Instagram } from "lucide-react";
import Logo from "../Icons/Logo";

export default function Footer() {
  return (
    <footer className="w-full bg-white text-sm">
      <div className="max-w-7xl mx-auto w-full px-6 sm:px-10 md:px-20 lg:px-28 py-12 flex flex-col gap-10">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
          <div className="flex flex-col items-start gap-4 max-w-sm">
            <Link href="/" aria-label="Go to homepage" className="inline-block">
              <Logo className="w-28 h-auto" />
            </Link>

            <p className="text-gray-700 text-sm leading-relaxed max-w-[260px]">
              Beyond Websites. We Build Growth Engines.
            </p>

            <div className="flex items-center gap-4 mt-2 text-gray-700">
              <a
                href="https://www.linkedin.com/company/kakka-technologies"
                aria-label="LinkedIn"
                className="hover:text-gray-900 transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://www.instagram.com/kakka.tech"
                aria-label="Instagram"
                className="hover:text-gray-900 transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://github.com/orgs/Kakka-tech"
                aria-label="GitHub"
                className="hover:text-gray-900 transition-colors"
              >
                <Github size={18} />
              </a>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between gap-10 flex-1">
            <div className="flex flex-col gap-3 text-gray-700 text-sm relative top-[2.5rem]">
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <a
                  href="mailto:contact@kakkatech.com"
                  className="hover:underline"
                >
                  contact@kakkatech.com
                </a>
              </div>
              <div className="flex items-center gap-2 py-5 lg:py-0 md:py-0">
                <Phone size={16} />
                <span>+(234)-805-466-6781</span>
              </div>
            </div>

            <div className="flex gap-16">
              <div>
                <h3 className="font-semibold mb-3 text-gray-800 text-sm">
                  Company
                </h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>
                    <Link href="/about" className="hover:text-gray-900">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/portfolio" className="hover:text-gray-900">
                      Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link href="/service" className="hover:text-gray-900">
                      Service
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:text-gray-900">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-3 text-gray-800 text-sm">
                  Services
                </h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>
                    <Link href="/service" className="hover:text-gray-900">
                      Web Development
                    </Link>
                  </li>
                  <li>
                    <Link href="/service" className="hover:text-gray-900">
                      UI/UX Design
                    </Link>
                  </li>
                  <li>
                    <Link href="/service" className="hover:text-gray-900">
                      Digital Marketing
                    </Link>
                  </li>
                  <li>
                    <Link href="/service" className="hover:text-gray-900">
                      Consulting
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200">
          <div className="text-center py-4 text-gray-600 text-xs">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold">Kakka Technologies</span>. All rights reserved. ·{" "}
            <a
              href="/legal-notice"
              className="underline hover:text-gray-800 transition"
            >
              Legal Notice
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
