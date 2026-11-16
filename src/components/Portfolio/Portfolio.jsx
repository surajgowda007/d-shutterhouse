import { motion } from "framer-motion";
import VideoPlayer from "../VideoPlayer/VideoPlayer";

// Vehicle Delivery Videos
import delivery1 from "../../assets/videos/deliveries/delivery1.MOV";
import delivery2 from "../../assets/videos/deliveries/delivery2.MOV";
import delivery3 from "../../assets/videos/deliveries/delivery4.MOV";
import delivery4 from "../../assets/videos/deliveries/delivery5.MOV";
import delivery5 from "../../assets/videos/deliveries/delivery6.MOV";
import delivery6 from "../../assets/videos/deliveries/delivery7.MOV";
import delivery7 from "../../assets/videos/deliveries/delivery9.MOV";
import delivery8 from "../../assets/videos/deliveries/delivery11.MOV";

// Commercial Videos
import commercial1 from "../../assets/videos/commercial/commercial1.MOV";
import commercial2 from "../../assets/videos/commercial/commercial2.MOV";

function Portfolio() {
  return (
    <section
      id="portfolio"
      className="bg-black text-white min-h-screen flex items-center pt-40 pb-28 px-6 md:px-20"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-red-500 uppercase tracking-[6px] text-sm text-center mb-4"
        >
          Portfolio
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-bold text-center mb-20"
        >
          Featured Works
        </motion.h2>

        {/* ================= VEHICLE DELIVERIES ================= */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ y: -8 }}
          className="group relative overflow-hidden bg-neutral-900/90 backdrop-blur-xl border border-neutral-800 rounded-[35px] p-8 md:p-10 mb-24 transition-all duration-700 hover:border-red-500/40 hover:shadow-[0_0_70px_rgba(239,68,68,.15)]"
        >
          {/* Glow Overlay */}

          <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 bg-gradient-to-br from-red-500/5 via-transparent to-red-500/5"></div>

          <p className="relative z-10 text-red-500 uppercase tracking-[6px] text-sm font-semibold mb-4 text-center">
            Category 01
          </p>

          <motion.h3
            whileHover={{ x: 8 }}
            transition={{ duration: 0.3 }}
            className="relative z-10 text-4xl md:text-5xl font-bold mb-5"
          >
            Vehicle Deliveries
          </motion.h3>

          <p className="relative z-10 text-gray-400 max-w-3xl leading-8 mb-10">
            Premium cinematic vehicle delivery films crafted to transform every
            customer handover into a memorable experience.
          </p>

          <div className="relative z-10">
            <VideoPlayer
              videos={[
                delivery1,
                delivery2,
                delivery3,
                delivery4,
                delivery5,
                delivery6,
                delivery7,
                delivery8,
              ]}
            />
          </div>

        </motion.div>

        {/* ================= COMMERCIAL ================= */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ y: -8 }}
          className="group relative overflow-hidden bg-neutral-900/90 backdrop-blur-xl border border-neutral-800 rounded-[35px] p-8 md:p-10 transition-all duration-700 hover:border-red-500/40 hover:shadow-[0_0_70px_rgba(239,68,68,.15)]"
        >
          {/* Glow Overlay */}

          <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 bg-gradient-to-br from-red-500/5 via-transparent to-red-500/5"></div>

          <div className="flex justify-center mb-4">
  <span className="px-5 py-2 border border-red-500/30 rounded-full text-red-500 uppercase tracking-[6px] text-xs font-semibold bg-red-500/5">
    CATEGORY 02
  </span>
</div>

          <motion.h3
            whileHover={{ x: 8 }}
            transition={{ duration: 0.3 }}
            className="relative z-10 text-4xl md:text-5xl font-bold mb-5"
          >
            Commercial
          </motion.h3>

          <p className="relative z-10 text-gray-400 max-w-3xl leading-8 mb-10">
            Creative commercial productions with cinematic storytelling,
            premium lighting and polished visual aesthetics.
          </p>

          <div className="relative z-10">
            <VideoPlayer
              videos={[
                commercial1,
                commercial2,
              ]}
            />
          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default Portfolio;