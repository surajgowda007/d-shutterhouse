import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "../../assets/logos/logo.png";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero", id: "hero" },
    { name: "About", href: "#about", id: "about" },
    { name: "Portfolio", href: "#portfolio", id: "portfolio" },
    { name: "Services", href: "#services", id: "services" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
  scrolled
    ? "bg-black/85 backdrop-blur-xl border-b border-red-500/20 shadow-2xl py-2"
    : "bg-black/30 backdrop-blur-lg border-b border-white/10 py-3 md:py-5"
}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8">

        {/* Logo */}

        <a href="#hero">
          <motion.img
            src={logo}
            alt="D Shutter House"
            whileHover={{ scale: 1.05 }}
            animate={{
              scale: scrolled ? 0.92 : 1,
            }}
            transition={{ duration: 0.3 }}
            className="w-36 sm:w-44 lg:w-56 object-contain cursor-pointer"
          />
        </a>

        {/* Navigation */}

        <ul className="hidden lg:flex items-center gap-11 font-heading font-semibold text-[16px] tracking-wide text-white">

          {navLinks.map((link) => (
            <li key={link.name} className="relative">

              <a
                href={link.href}
                className={`transition duration-300 ${
                  active === link.id
                    ? "text-red-500"
                    : "hover:text-red-500"
                }`}
              >
                {link.name}
              </a>

              <motion.span
                layoutId="navbar-indicator"
                transition={{
                  type: "spring",
                  stiffness: 380,
                  damping: 28,
                }}
                className={`absolute left-0 -bottom-2 h-[2px] rounded-full bg-red-500 ${
                  active === link.id ? "w-full" : "w-0"
                }`}
              />

            </li>
          ))}

        </ul>

        {/* Book Now */}

        <a href="#contact">

          <motion.button
            whileHover={{
              scale: 1.05,
              y: -2,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="group relative overflow-hidden rounded-full bg-gradient-to-r from-red-600 to-red-500 px-8 py-3.5 font-heading font-semibold tracking-wide text-white shadow-lg transition-all duration-500 hover:shadow-[0_0_35px_rgba(239,68,68,.45)]"
          >

            <span className="relative z-10 flex items-center gap-2">
              Book Now

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>

            </span>

            <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-700 group-hover:translate-x-full" />

          </motion.button>

        </a>

      </div>
    </motion.nav>
  );
}

export default Navbar;