import { motion } from "framer-motion";

import {
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

import {
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

import {
  SiGmail,
} from "react-icons/si";

function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 mt-40 pt-24 pb-8">

      <div className="max-w-7xl mx-auto px-8 lg:px-16">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 justify-items-center text-center md:text-left">

          {/* Brand */}
          <div className="max-w-sm">
            <h2 className="text-3xl font-bold mb-5">
              D SHUTTER HOUSE
            </h2>

            <p className="text-gray-400 leading-8">
              Capturing stories through cinematic visuals,
              premium edits and unforgettable moments.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>
                <a href="#hero" className="hover:text-red-500 transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-red-500 transition">
                  About
                </a>
              </li>

              <li>
                <a href="#portfolio" className="hover:text-red-500 transition">
                  Portfolio
                </a>
              </li>

              <li>
                <a href="#services" className="hover:text-red-500 transition">
                  Services
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-red-500 transition">
                  Contact
                </a>
              </li>

            </ul>
          </div>

          {/* Contact */}
          <div>

            <h3 className="text-xl font-semibold mb-6">
              Contact
            </h3>

            <div className="space-y-4 text-gray-400">

              <p className="flex items-center justify-center md:justify-start gap-3">
                <Phone size={18} />
                +91 63642 12989
              </p>

              <p className="flex items-center justify-center md:justify-start gap-3">
                <Mail size={18} />
                dshutterhouse@gmail.com
              </p>

              <p className="flex items-center justify-center md:justify-start gap-3">
                <MapPin size={18} />
                Mysore, Karnataka
              </p>

            </div>

            <div className="flex justify-center md:justify-start gap-5 mt-8">

              <motion.a
                whileHover={{ scale: 1.15 }}
                href="https://www.instagram.com/d_shutterhouse/"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram className="text-red-500 text-3xl" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.15 }}
                href="https://wa.me/916364212989"
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp className="text-red-500 text-3xl" />
              </motion.a>

            </div>

          </div>

        </div>

        <div className="border-t border-neutral-800 mt-16 pt-8 text-center text-gray-500">
          © 2026 D Shutter House. All Rights Reserved.
        </div>

      </div>

    </footer>
  );
}

export default Footer;