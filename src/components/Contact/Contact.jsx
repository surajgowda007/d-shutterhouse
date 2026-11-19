import { motion } from "framer-motion";
import { Phone, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Contact() {
  const whatsappMessage = encodeURIComponent(
    "Hi D SHUTTERHOUSE, I would like to know more about your photography and videography services."
  );

  const cardClass =
    "group relative overflow-hidden rounded-[32px] border border-neutral-800 bg-neutral-900/70 backdrop-blur-xl p-10 transition-all duration-500 hover:-translate-y-3 hover:border-red-500 hover:shadow-[0_0_45px_rgba(239,68,68,.20)]";

  return (
    <section
      id="contact"
      className="bg-black py-32 md:py-40 px-6 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-red-500 uppercase tracking-[8px] text-center text-sm mb-5"
        >
          CONTACT
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-black text-center"
        >
          Let's Create Something
          <br />
          Cinematic
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center text-gray-400 text-lg leading-9 mt-8 mb-28"
        >
          Have a project in mind? Whether it's a vehicle delivery,
          commercial production or social media content,
          we'd love to bring your vision to life with
          premium cinematic storytelling.
        </motion.p>

        {/* Contact Cards */}

        <div className="grid md:grid-cols-2 gap-10">

          {/* Phone */}

          <motion.a
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              y: -12,
              scale: 1.02,
            }}
            viewport={{ once: true }}
            href="tel:6364212989"
            className={cardClass}
          >

            <div className="absolute -top-16 -right-16 w-44 h-44 rounded-full bg-red-600/10 blur-3xl"></div>

            <div className="relative mb-8 flex justify-center">

              <div className="absolute h-16 w-16 rounded-full bg-red-600/20 blur-xl"></div>

              <Phone
                size={38}
                className="relative z-10 text-red-500 transition duration-500 group-hover:scale-125 group-hover:rotate-6"
              />

            </div>

            <h3 className="text-2xl font-bold mb-4 text-center">
              Call Us
            </h3>

            <p className="text-gray-400 text-center">
              +91 63642 12989
            </p>

          </motion.a>

          {/* Email */}

          <motion.a
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              y: -12,
              scale: 1.02,
            }}
            viewport={{ once: true }}
            transition={{ delay: .1 }}
            href="mailto:dshutterhouse@gmail.com"
            className={cardClass}
          >

            <div className="absolute -top-16 -right-16 w-44 h-44 rounded-full bg-red-600/10 blur-3xl"></div>

            <div className="relative mb-8 flex justify-center">

              <div className="absolute h-16 w-16 rounded-full bg-red-600/20 blur-xl"></div>

              <SiGmail
                className="relative z-10 text-red-500 text-[38px] transition duration-500 group-hover:scale-125 group-hover:-rotate-6"
              />

            </div>

            <h3 className="text-2xl font-bold mb-4 text-center">
              Email
            </h3>

            <p className="text-gray-400 text-center break-all">
              dshutterhouse@gmail.com
            </p>

          </motion.a>

          {/* Location */}
                    <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              y: -12,
              scale: 1.02,
            }}
            viewport={{ once: true }}
            transition={{ delay: .2 }}
            className={cardClass}
          >

            <div className="absolute -top-16 -right-16 w-44 h-44 rounded-full bg-red-600/10 blur-3xl"></div>

            <div className="relative mb-8 flex justify-center">

              <div className="absolute h-16 w-16 rounded-full bg-red-600/20 blur-xl"></div>

              <MapPin
                size={38}
                className="relative z-10 text-red-500 transition duration-500 group-hover:scale-125 group-hover:rotate-6"
              />

            </div>

            <h3 className="text-2xl font-bold mb-4 text-center">
              Location
            </h3>

            <p className="text-gray-400 text-center">
              Mysore, Karnataka
            </p>

          </motion.div>

          {/* WhatsApp */}

          <motion.a
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              y: -12,
              scale: 1.02,
            }}
            viewport={{ once: true }}
            transition={{ delay: .3 }}
            href={`https://wa.me/916364212989?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className={cardClass}
          >

            <div className="absolute -top-16 -right-16 w-44 h-44 rounded-full bg-red-600/10 blur-3xl"></div>

            <div className="relative mb-8 flex justify-center">

              <div className="absolute h-16 w-16 rounded-full bg-red-600/20 blur-xl"></div>

              <FaWhatsapp
                className="relative z-10 text-red-500 text-[40px] transition duration-500 group-hover:scale-125 group-hover:rotate-6"
              />

            </div>

            <h3 className="text-2xl font-bold mb-4 text-center">
              WhatsApp
            </h3>

            <p className="text-gray-400 text-center">
              Chat with us instantly
            </p>

          </motion.a>

        </div>

        {/* Premium CTA */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: .2 }}
          className="mt-28"
        >

          <div className="relative overflow-hidden rounded-[36px] border border-red-500/20 bg-gradient-to-r from-neutral-900 via-neutral-950 to-neutral-900 p-12 md:p-16 text-center">

            {/* Glow */}

            <div className="absolute left-1/2 top-0 h-56 w-56 -translate-x-1/2 rounded-full bg-red-600/10 blur-[120px]"></div>

            <p className="relative text-red-500 uppercase tracking-[6px] text-sm mb-5">
              Ready to Start?
            </p>

            <h3 className="relative text-4xl md:text-5xl font-black mb-6">
              Let's Bring Your Vision To Life
            </h3>

            <p className="text-xl text-gray-400 max-w-3xl mx-auto text-center leading-9">
              Whether it's a luxury vehicle delivery,
              commercial production or social media campaign,
              D SHUTTERHOUSE is ready to create visuals that
              leave a lasting impression.
            </p>

            <motion.a
              whileHover={{
                scale: 1.05,
                y: -3,
              }}
              whileTap={{
                scale: .96,
              }}
              href={`https://wa.me/916364212989?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-red-500/40 bg-gradient-to-r from-red-600 to-red-500 px-10 py-5 font-semibold tracking-wide text-white transition-all duration-500 hover:shadow-[0_0_40px_rgba(239,68,68,.45)]"
            >

              <FaWhatsapp className="relative z-10 text-xl" />

              <span className="relative z-10">
                Start Your Project
              </span>

              <span className="relative z-10 transition-all duration-300 group-hover:translate-x-1">
                →
              </span>

              <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-700 group-hover:translate-x-full"></span>

            </motion.a>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default Contact;