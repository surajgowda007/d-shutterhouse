import { motion } from "framer-motion";
import {
  CarFront,
  Clapperboard,
  CalendarDays,
  Smartphone,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: CarFront,
    title: "Vehicle Delivery Films",
    description:
      "Luxury cinematic vehicle handover videos that create unforgettable customer experiences.",
  },
  {
    icon: Clapperboard,
    title: "Commercial Films",
    description:
      "Professional advertisements and brand films crafted with premium storytelling and visuals.",
  },
  {
    icon: CalendarDays,
    title: "Event Coverage",
    description:
      "Corporate events, inaugurations, product launches and celebrations captured beautifully.",
  },
  {
    icon: Smartphone,
    title: "Social Media Reels",
    description:
      "High-impact vertical videos optimized for Instagram Reels, YouTube Shorts and Facebook.",
  },
];

function Services() {
  return (
    <section
      id="services"
      className="bg-black text-white py-32 px-6 md:px-20"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-red-500 uppercase tracking-[8px] text-center text-sm mb-5"
        >
          SERVICES
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-black text-center"
        >
          What We Do
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-lg text-gray-400 max-w-3xl mx-auto text-center leading-8"
        >
          Every project is planned, filmed and edited with a cinematic approach
          to create visuals that leave a lasting impression.
        </motion.p>

        {/* Cards */}

        <div className="grid md:grid-cols-2 gap-10">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.6,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                className="group relative overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900/70 backdrop-blur-xl p-10 transition-all duration-500 hover:border-red-500 hover:shadow-[0_0_40px_rgba(239,68,68,.18)]"
              >

                {/* Glow */}

                <div className="absolute -top-20 -right-20 w-60 h-60 bg-red-600/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition duration-700"></div>

                {/* Icon */}

                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-red-600 to-red-500 shadow-[0_0_30px_rgba(239,68,68,.35)] transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">

                  <Icon size={30} />

                </div>

                {/* Title */}

                <h3 className="text-3xl font-bold mb-5">
                  {service.title}
                </h3>

                {/* Description */}

                <p className="text-gray-400 leading-8 mb-10">
                  {service.description}
                </p>

                {/* Button */}

                <a
                  href="#packages"
                  className="group inline-flex items-center gap-3 rounded-full border border-red-500/30 bg-white/5 backdrop-blur-xl px-6 py-3 text-white font-semibold transition-all duration-500 hover:border-red-500 hover:bg-red-600 hover:shadow-[0_0_35px_rgba(239,68,68,.35)]"
                >
                  <span>Learn More</span>

                  <ArrowRight
                    size={18}
                    className="transition-all duration-300 group-hover:translate-x-1"
                  />
                </a>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default Services;