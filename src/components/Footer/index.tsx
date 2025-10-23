"use client";

import Link from "next/link";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import Logo from "../Icons/Logo";

export default function Footer() {
  return (
    <footer className="w-full bg-white text-sm">
      <div className="max-w-7xl mx-auto w-full px-6 sm:px-10 md:px-20 lg:px-32 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 lg:gap-x-10 text-center sm:text-left">
          <div className="flex flex-col items-center sm:items-start">
            <Link href="/" aria-label="Go to homepage" className="inline-block mb-2">
              <Logo className="w-24 h-auto" />
            </Link>
            <p className="text-gray-600 leading-relaxed text-sm max-w-[220px]">
              Beyond Websites. We Build Growth Engines.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3 text-gray-800 text-sm">Company</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li><a href="#" className="hover:text-gray-900">About Us</a></li>
              <li><a href="#" className="hover:text-gray-900">Our Team</a></li>
              <li><a href="#" className="hover:text-gray-900">Careers</a></li>
              <li><a href="#" className="hover:text-gray-900">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3 text-gray-800 text-sm">Services</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li><a href="#" className="hover:text-gray-900">Web Development</a></li>
              <li><a href="#" className="hover:text-gray-900">UI/UX Designer</a></li>
              <li><a href="#" className="hover:text-gray-900">Digital Marketing</a></li>
              <li><a href="#" className="hover:text-gray-900">Consulting</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3 text-gray-800 text-sm">Connect</h3>
            <div className="flex justify-center sm:justify-start space-x-5 text-gray-700">
              <a href="#" aria-label="LinkedIn" className="hover:text-gray-900 transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-gray-900 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" aria-label="GitHub" className="hover:text-gray-900 transition-colors">
                <Github size={18} />
              </a>
              <a href="#" aria-label="Email" className="hover:text-gray-900 transition-colors">
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="max-w-[928px] w-full text-center border-t border-[#4D5461]/40 py-4 text-[#4D5461] text-xs">
          © {new Date().getFullYear()}{" "}
          <Link href="/" className="font-semibold hover:underline">
            KAKKA
          </Link>
          . All rights reserved.
        </div>
      </div>
    </footer>
  );
}
