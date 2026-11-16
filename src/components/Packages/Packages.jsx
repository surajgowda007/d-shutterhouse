import { motion } from "framer-motion";
import {
  Check,
  Star,
  MessageCircle,
  CarFront,
  Clapperboard,
  Smartphone,
  Sparkles,
} from "lucide-react";

function Packages() {
  const whatsapp = (service) =>
    `https://wa.me/916364212989?text=${encodeURIComponent(
      `Hi D SHUTTERHOUSE, I'm interested in the ${service}. Please share more details.`
    )}`;

  const buttonClass =
    "inline-flex items-center gap-3 rounded-full border border-red-500/40 bg-neutral-900 px-8 py-4 text-white font-medium tracking-wide hover:bg-red-600 hover:border-red-600 transition-all duration-300 hover:scale-105";

  return (
    <section
      id="packages"
      className="bg-neutral-950 text-white pt-32 pb-52 px-6 md:px-20"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-red-500 uppercase tracking-[6px] text-center text-sm mb-4"
        >
          Pricing
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight text-center mb-24"
        >
          Packages
        </motion.h2>

        {/* ================= VEHICLE DELIVERY ================= */}

        <div id="vehicle-packages" className="mb-40">

          <h3 className="text-4xl md:text-5xl font-bold text-center mb-14">
            Vehicle Delivery
          </h3>

          <div className="grid md:grid-cols-2 gap-10 items-stretch">

            {/* STANDARD */}

            <motion.div
              whileHover={{ y: -10 }}
              className="relative overflow-hidden rounded-[32px] border border-red-500/30 bg-neutral-900/80 backdrop-blur-xl p-10 shadow-[0_0_35px_rgba(239,68,68,.08)] transition-all duration-500 hover:border-red-500"
            >

              <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-red-500/5 via-transparent to-transparent" />

              {/* Most Popular */}
              <div className="relative z-10"></div>

              <div className="absolute top-6 right-6 bg-white text-red-600 px-4 py-2 rounded-full text-xs font-semibold tracking-wide flex items-center gap-2 shadow-lg">
                <Star size={14} fill="currentColor" />
                Most Popular
              </div>

              <CarFront
                className="text-red-500 mb-6"
                size={40}
              />

              <h4 className="text-3xl font-bold mb-3">
                Standard
              </h4>

              <p className="text-5xl font-extrabold text-red-500 mb-10">
                ₹4,999
              </p>

              {[
                "2 Cinematic Videos",
                "Professional Editing",
                "Color Grading",
                "Background Music",
                "Same Day Delivery",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 mb-5">
                  <Check className="text-red-500" size={20} />
                  <span>{item}</span>
                </div>
              ))}

              <a
                href={whatsapp("₹4,999 Vehicle Delivery Package")}
                target="_blank"
                rel="noreferrer"
                className={`${buttonClass} mt-12`}
              >
                <MessageCircle size={20} />
                Book Now
              </a>

            </motion.div>

            {/* PREMIUM */}

            <motion.div
              whileHover={{ y: -10 }}
              className="relative overflow-hidden rounded-[32px] border border-red-500/30 bg-neutral-900/80 backdrop-blur-xl p-10 shadow-[0_0_35px_rgba(239,68,68,.08)] transition-all duration-500 hover:border-red-500"
            >

              <Sparkles
                className="text-red-500 mb-6"
                size={40}
              />

              <h4 className="text-3xl font-bold mb-3">
                Premium
              </h4>

              <p className="text-5xl font-extrabold text-red-500 mb-10">
                ₹8,999
              </p>

              {[
                "Everything in Standard",
                "Premium Color Grading",
                "Outdoor Location Shoot",
                "3 Cinematic Videos",
                "Premium Transitions",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 mb-5">
                  <Check className="text-red-500" size={20} />
                  <span>{item}</span>
                </div>
              ))}

              <a
                href={whatsapp("₹8,999 Premium Vehicle Package")}
                target="_blank"
                rel="noreferrer"
                className={`${buttonClass} mt-12`}
              >
                <MessageCircle size={20} />
                Book Now
              </a>

            </motion.div>

          </div>

        </div>

                {/* ================= COMMERCIAL ================= */}

        <div id="commercial-packages" className="mb-40">

          <h3 className="text-4xl md:text-5xl font-bold text-center mb-8">
            Commercial & Event Coverage
          </h3>

          <p className="text-gray-400 text-lg leading-8 text-center max-w-3xl mx-auto mb-12">
            Professional commercials, showroom events, inaugurations,
            product launches and brand films crafted with premium
            cinematic storytelling.
          </p>

          <motion.div
            whileHover={{ y: -8 }}
            className="bg-neutral-900/80 backdrop-blur-xl border border-neutral-800 rounded-[32px] p-12 transition-all duration-500 hover:border-red-500/40"
          >

            <Clapperboard
              className="text-red-500 mb-6"
              size={40}
            />

            <p className="text-5xl font-extrabold text-red-500 mb-6">
              Starting ₹7,999
            </p>

            <p className="text-gray-400 leading-8 mb-10 max-w-3xl">
              Every commercial project is planned according to your brand,
              location and production requirements. We deliver premium
              cinematic visuals that elevate your business identity.
            </p>

            <a
              href={whatsapp("Commercial & Event Coverage")}
              target="_blank"
              rel="noreferrer"
              className={buttonClass}
            >
              <MessageCircle size={20} />
              Request Custom Quote
            </a>

          </motion.div>

        </div>

        {/* ================= CUSTOM PACKAGE ================= */}

        <motion.div
          whileHover={{ y: -6 }}
          className="rounded-[36px] border border-red-500/20 bg-gradient-to-br from-neutral-900 via-neutral-900 to-black p-14 text-center shadow-[0_0_40px_rgba(239,68,68,.08)]"
        >

          <h3 className="text-4xl font-bold mb-6">
            Need a Custom Package?
          </h3>

          <p className="text-gray-400 text-lg leading-8 max-w-3xl mx-auto mb-12">
            Every project is unique. If your requirements don't fit into
            the above packages, we'll create a personalized quotation
            tailored to your vision and budget.
          </p>

          <a
            href={whatsapp("Custom Package")}
            target="_blank"
            rel="noreferrer"
            className={buttonClass}
          >
            <MessageCircle size={20} />
            Request Custom Quote
          </a>

        </motion.div>

      </div>
    </section>
  );
}

export default Packages;