import { motion } from "framer-motion";
import owner from "../../assets/images/owner.png";

function Hero() {
  return (
    <motion.section
      id="hero"
      initial={{ opacity: 0, scale: 1.05 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="relative min-h-screen overflow-hidden bg-black"
    >
      {/* Background Glow */}

      <div className="absolute inset-0 overflow-hidden">

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.18, 0.3, 0.18],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-32 right-0 h-[700px] w-[700px] rounded-full bg-red-600 blur-[220px]"
        />

        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.1, 0.22, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-red-500 blur-[180px]"
        />

      </div>

      {/* Hero Container */}

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 pt-32 pb-12 sm:px-8 md:px-12 lg:flex-row lg:justify-between lg:px-16 lg:pt-24">

        {/* LEFT SIDE */}

        <motion.div
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full max-w-xl text-center lg:text-left"
        >

          {/* Badge */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .2 }}
            className="mb-8 inline-flex items-center gap-3 rounded-full border border-red-500/30 bg-neutral-900/80 px-6 py-3 backdrop-blur-md"
          >

            <span className="h-3 w-3 rounded-full bg-red-500 animate-pulse" />

            <p className="text-xs font-semibold uppercase tracking-[6px] text-red-500 sm:text-sm">
              D SHUTTERHOUSE
            </p>

          </motion.div>

          {/* Heading */}

          <motion.h1
            initial={{
              opacity: 0,
              y: 60,
              filter: "blur(15px)",
            }}
            animate={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 1,
              delay: .3,
            }}
            className="font-heading font-extrabold leading-[1.05] tracking-tight text-white
            text-[38px]
            sm:text-[56px]
            md:text-[72px]
            lg:text-[90px]"
          >
            YOUR{" "}
            <span className="text-red-500">
              VISION.
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .6 }}
            className="mt-2 font-heading font-medium text-gray-300
            text-[28px]
            sm:text-[40px]
            md:text-[52px]
            lg:text-[62px]"
          >
            OUR CREATION.
          </motion.h2>

          {/* Description */}

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .8 }}
            className="mx-auto mt-8 max-w-lg text-base leading-8 text-gray-400 lg:mx-0"
          >
            Premium cinematic photography and filmmaking
            for vehicle deliveries, commercial productions,
            events and social media.
            We transform every moment into unforgettable
            visual stories.
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
              delay: 1,
            }}
            className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start"
          >

            <a href="#portfolio">
              <button className="rounded-full bg-red-600 px-8 py-4 font-semibold transition hover:bg-red-700">
                View Portfolio
              </button>
            </a>

            <a href="#contact">
              <button className="rounded-full border border-white/20 px-8 py-4 font-semibold transition hover:border-red-500 hover:bg-red-600">
                Contact Us
              </button>
            </a>

          </motion.div>

          {/* Stats */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-14 flex justify-center gap-10 lg:justify-start"
          >

            <div>
              <h3 className="text-3xl font-bold text-red-500">
                5+
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Years Experience
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-red-500">
                100+
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Projects
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-red-500">
                100%
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Client Satisfaction
              </p>
            </div>

          </motion.div>

        </motion.div>

        {/* RIGHT SIDE STARTS HERE */}
                {/* RIGHT SIDE */}

        <motion.div
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative mt-16 flex w-full justify-center lg:mt-0 lg:w-auto"
        >
          {/* Outer Glow */}

          <motion.div
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.25, 0.4, 0.25],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute h-[320px] w-[320px] rounded-full bg-red-600 blur-[120px] sm:h-[420px] sm:w-[420px] lg:h-[520px] lg:w-[520px]"
          />

          {/* Ring */}

          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute h-[320px] w-[320px] rounded-full border border-red-500/20 sm:h-[420px] sm:w-[420px] lg:h-[520px] lg:w-[520px]"
          />

          {/* Image */}

          <motion.img
            src={owner}
            alt="Owner"
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative z-20 w-[260px] sm:w-[360px] md:w-[420px] lg:w-[500px] object-contain drop-shadow-[0_0_70px_rgba(239,68,68,.45)]"
          />

          {/* Floating Particles */}

          {[...Array(12)].map((_, i) => (
            <motion.span
              key={i}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 1, 0.2],
              }}
              transition={{
                duration: 2 + Math.random() * 3,
                repeat: Infinity,
                delay: i * 0.25,
              }}
              className="absolute h-2 w-2 rounded-full bg-red-500"
              style={{
                top: `${15 + Math.random() * 70}%`,
                left: `${10 + Math.random() * 80}%`,
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}

      <motion.div
        animate={{
          y: [0, 12, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-12 w-7 justify-center rounded-full border border-white/30">
          <motion.div
            animate={{
              y: [6, 24, 6],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
            className="mt-2 h-2 w-2 rounded-full bg-red-500"
          />
        </div>
      </motion.div>
    </motion.section>
  );
}

export default Hero;