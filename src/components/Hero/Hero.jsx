import { motion } from "framer-motion";
import owner from "../../assets/images/owner.png";

function Hero() {
  return (
  <section id="hero">
    <motion.section
      id="hero"
      initial={{
        scale: 1.1,
        opacity: 0,
      }}
      animate={{
        scale: 1,
        opacity: 1,
      }}
      transition={{
        duration: 1.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative min-h-screen bg-black overflow-hidden"
    >
      {/* Animated Background */}

      <div className="absolute inset-0 overflow-hidden">

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.18, 0.32, 0.18],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-20 right-0 w-[700px] h-[700px] rounded-full bg-red-600 blur-[220px]"
        />

        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.12, 0.22, 0.12],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-red-500 blur-[180px]"
        />

      </div>

      {/* Hero Container */}

      className="relative max-w-7xl mx-auto min-h-screen flex flex-col lg:flex-row items-center justify-center lg:justify-between px-5 sm:px-6 md:px-8 lg:px-16 pt-56 md:pt-32 lg:pt-24"
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="max-w-xl z-20 text-center lg:text-left"
        >

          {/* Badge */}

          <motion.div
  initial={{ opacity: 0, y: 25 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.2 }}
  className="inline-flex items-center gap-4 bg-neutral-900/80 backdrop-blur-md border border-red-500/30 px-7 py-3 rounded-full mb-10 shadow-[0_0_20px_rgba(239,68,68,0.12)]"
>
  <span className="w-3 h-3 rounded-full bg-red-500 animate-pulse shadow-[0_0_12px_rgba(239,68,68,0.8)]"></span>

  <p className="uppercase tracking-[8px] text-red-500 text-sm md:text-base font-semibold font-heading">
    D SHUTTERHOUSE
  </p>
</motion.div>

          {/* Heading */}

          <motion.h1
  initial={{
    opacity: 0,
    y: 70,
    filter: "blur(15px)",
  }}
  animate={{
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
  }}
  transition={{
    duration: 1.2,
    delay: 0.3,
  }}
  className="text-white text-3xl sm:text-5xl md:text-7xl lg:text-[90px] font-extrabold tracking-tight leading-tight mt-2"
>
  YOUR <span className="text-red-500">VISION.</span>
</motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .6 }}
            className="text-gray-300 text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight mt-3"
          >
            OUR CREATION.
          </motion.h2>

          {/* Description */}

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .9 }}
            className="mt-8 text-gray-400 text-lg leading-8 font-medium max-w-lg"
          >
            Premium cinematic photography and filmmaking for vehicle
            deliveries, commercial productions, events and social media.
            We transform every moment into unforgettable visual stories.
          </motion.p>

          {/* Buttons */}

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 1.1,
            }}
            className="mt-10 flex flex-wrap justify-center lg:justify-start gap-5"
          >

            <a href="#portfolio">
              <motion.button
  whileHover={{
    scale: 1.06,
    y: -3,
  }}
  whileTap={{
    scale: 0.97,
  }}
  className="group relative overflow-hidden rounded-full border border-red-500/40 bg-gradient-to-r from-red-600 to-red-500 px-8 py-4 font-semibold tracking-wide text-white transition-all duration-500 hover:shadow-[0_0_40px_rgba(239,68,68,.45)]"
>

  <span className="relative z-10 flex items-center gap-2">
    View Portfolio

    <span className="transition-all duration-300 group-hover:translate-x-1">
      →
    </span>
  </span>

  <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-700 group-hover:translate-x-full"></span>

</motion.button>
            </a>

            <a href="#contact">
              <motion.button
  whileHover={{
    scale: 1.06,
    y: -3,
  }}
  whileTap={{
    scale: 0.97,
  }}
  className="group relative overflow-hidden rounded-full border border-white/20 bg-white/5 backdrop-blur-xl px-8 py-4 font-semibold text-white transition-all duration-500 hover:border-red-500 hover:bg-red-600 hover:shadow-[0_0_35px_rgba(239,68,68,.35)]"
>

  <span className="relative z-10 flex items-center gap-2">
    Contact Us

    <span className="transition-all duration-300 group-hover:translate-x-1">
      →
    </span>
  </span>

  <span className="absolute inset-0 -translate-x-full bg-white/15 transition-transform duration-700 group-hover:translate-x-full"></span>

</motion.button>
            </a>

          </motion.div>

          {/* Stats */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
            className="flex gap-10 justify-center lg:justify-start mt-14"
          >

            <div>
              <h3 className="text-3xl font-extrabold tracking-tight text-red-500">5+</h3>
              <p className="text-gray-500 text-sm font-medium mt-2 tracking-wide">
                Years Experience
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-red-500">100+</h3>
              <p className="text-gray-500 text-sm mt-2">
                Projects
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-red-500">100%</h3>
              <p className="text-gray-500 text-sm mt-2">
                Client Satisfaction
              </p>
            </div>

          </motion.div>

        </motion.div>

        {/* RIGHT SIDE STARTS HERE */}
                <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="relative mt-16 lg:mt-0 flex justify-center items-center"
        >
          {/* Background Glow */}

          <motion.div
            animate={{
              scale: [1, 1.18, 1],
              opacity: [0.18, 0.35, 0.18],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute w-[520px] h-[520px] bg-red-600 rounded-full blur-[190px]"
          />

          {/* Rotating Ring */}

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute w-[540px] h-[540px] rounded-full border border-red-500/20"
          />

          {/* Outer Ring */}

          <motion.div
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 50,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute w-[620px] h-[620px] rounded-full border border-red-500/10"
          />

          {/* Image Container */}

          <div className="relative overflow-hidden rounded-[30px]">

            {/* Cinematic Light Sweep */}

            <motion.div
              animate={{
                x: [-450, 650],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "easeInOut",
              }}
              className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-[-25deg] z-20"
            />

            {/* Owner Image */}

            <motion.img
              src={owner}
              alt="Dheeraj H"
              animate={{
                y: [0, -16, 0],
                rotate: [0, 0.5, 0, -0.5, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.03,
              }}
              className="relative z-10 h-[78vh] lg:h-[92vh] object-contain drop-shadow-[0_35px_80px_rgba(255,0,0,0.30)]"
            />

          </div>

          {/* Floating Particles */}

          <motion.div
            animate={{
              y: [0, -25, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="absolute top-12 right-12 w-3 h-3 rounded-full bg-red-500"
          />

          <motion.div
            animate={{
              y: [0, 20, 0],
              opacity: [0.3, 0.9, 0.3],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="absolute bottom-20 left-10 w-2 h-2 rounded-full bg-white"
          />

          <motion.div
            animate={{
              y: [0, -18, 0],
              opacity: [0.2, 0.7, 0.2],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
            }}
            className="absolute top-40 left-0 w-2 h-2 rounded-full bg-red-400"
          />
        </motion.div>
      </div>

      {/* Scroll Indicator */}

      <motion.div
        animate={{
          y: [0, 12, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 tracking-[5px] text-sm"
      >
        SCROLL ↓
      </motion.div>
    </motion.section>
     </section>
  );
}

export default Hero;