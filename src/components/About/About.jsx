import { motion } from "framer-motion";
import ownerImg from "../../assets/images/about-owner.jpg";

function About() {
  return (

    <section
      id="about"
      className="bg-black py-24 md:py-32 scroll-mt-24"
    >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center w-full">

        {/* LEFT IMAGE */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative">

            {/* Red Glow */}
            <div className="absolute inset-0 bg-red-600/20 blur-[90px] rounded-[40px] scale-105"></div>

            {/* Border */}
            <div className="absolute -inset-2 rounded-[36px] border border-red-500/20"></div>

            {/* Image */}
            <motion.img
              src={ownerImg}
              alt="Dheeraj H"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
              className="relative z-10 w-full max-w-md rounded-[30px] object-cover border border-neutral-800 shadow-2xl"
            />

          </div>
        </motion.div>

        {/* RIGHT CONTENT */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <p className="uppercase tracking-[0.4em] text-red-500 text-sm font-semibold mb-4">
            Meet The Creator
          </p>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-4">
            DHEERAJ.H
          </h2>

          <div className="w-24 h-1 bg-red-500 rounded-full mb-6"></div>

          <p className="text-red-500 text-2xl font-semibold mb-8">
            Founder & Cinematic Visual Creator
          </p>

          <p className="text-gray-300 text-lg leading-9 mb-8">
            Every vehicle delivery deserves more than just a photograph—it
            deserves a cinematic memory. My passion is transforming ordinary
            handovers into unforgettable visual stories through creative
            filmmaking, premium photography and storytelling.
          </p>

          <p className="text-gray-400 leading-8 mb-10">
            With{" "}
            <span className="text-white font-semibold">
              5+ years of experience
            </span>
            , D SHUTTERHOUSE has partnered with dealerships, businesses and
            brands to create luxury vehicle delivery films, commercial
            advertisements, event coverage and social media content that leaves
            a lasting impression.
          </p>

          {/* Stats */}

          <div className="grid grid-cols-3 gap-6">

            <motion.div
              whileHover={{ y: -6 }}
              className="bg-neutral-900 border border-neutral-800 rounded-2xl py-6 text-center transition-all duration-300 hover:border-red-500"
            >
              <h3 className="text-4xl font-black text-red-500">
                5+
              </h3>

              <p className="text-gray-400 text-sm mt-2">
                Years
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -6 }}
              className="bg-neutral-900 border border-neutral-800 rounded-2xl py-6 text-center transition-all duration-300 hover:border-red-500"
            >
              <h3 className="text-4xl font-black text-red-500">
                100+
              </h3>

              <p className="text-gray-400 text-sm mt-2">
                Projects
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -6 }}
              className="bg-neutral-900 border border-neutral-800 rounded-2xl py-6 text-center transition-all duration-300 hover:border-red-500"
            >
              <h3 className="text-4xl font-black text-red-500">
                100%
              </h3>

              <p className="text-gray-400 text-sm mt-2">
                Passion
              </p>
            </motion.div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default About;