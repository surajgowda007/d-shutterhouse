import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FaInstagram } from "react-icons/fa";

function InstagramSection() {
  return (
    <section
      id="instagram"
      className="bg-neutral-950 text-white min-h-screen flex items-center py-20 px-6 md:px-20"
    >
      <div className="max-w-5xl mx-auto text-center">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >

<FaInstagram className="mx-auto text-red-500 text-6xl mb-6" />

          <p className="uppercase tracking-[6px] text-red-500 text-sm mb-4">
            Follow Our Journey
          </p>

            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 break-all px-2">
            @d_shutterhouse
          </h2>

          <p className="text-gray-400 leading-8 text-lg max-w-3xl mx-auto mb-12">
            Every delivery.
            <br />
            Every commercial.
            <br />
            Every story.
            <br />
            <br />
            Discover our latest cinematic work,
            behind-the-scenes moments,
            and premium visual storytelling on Instagram.
          </p>

          <motion.a
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            href="https://www.instagram.com/d_shutterhouse/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 px-8 py-4 rounded-full text-lg font-semibold transition-all"
          >
            Follow on Instagram
            <ArrowRight size={22} />
          </motion.a>

        </motion.div>

      </div>
    </section>
  );
}

export default InstagramSection;