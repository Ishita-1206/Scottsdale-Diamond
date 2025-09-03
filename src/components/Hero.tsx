import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center md:justify-start overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://pub-fcbdfa5d08884a7fb45a0457f296badb.r2.dev/video/b/1713940466054.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-background/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center md:text-left px-4 sm:px-8 md:px-12 lg:px-16 max-w-2xl md:ml-4 lg:ml-16">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-playfair font-bold text-foreground mb-6 leading-tight"
        >
          Timeless
          <span className="block text-primary">Elegance</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl font-inter mb-8 max-w-xl md:max-w-2xl mx-auto md:mx-0 leading-relaxed"
        >
          <span className="text-white">
            Discover our exquisite collection of handcrafted jewelry, 
            where every piece tells a story of sophistication and grace.
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center md:justify-start items-center"
        >
          <Link to="/shop">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-luxury text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-5 text-black"
            >
              Shop Collection
            </motion.button>
          </Link>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 1, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="hidden md:block absolute top-20 left-10 w-16 h-16 bg-primary/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{ 
            y: [0, 10, 0],
            rotate: [0, -1, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="hidden md:block absolute bottom-20 right-10 w-24 h-24 bg-primary/10 rounded-full blur-2xl"
        />
      </div>


    </section>
  );
};

export default Hero;