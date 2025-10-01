"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Services from "@/components/services";
import WorldwideStats from "@/components/WorldwideStats";
import BusinessGoals from "@/components/BusinessGoals";
import ClientTestimonials from "@/components/ClientTestimonials";
import LatestProjects from "@/components/LatestProjects";
import TechStack from "@/components/TechStack";

const MotionLink = motion(Link);

const Hero = () => {
  const images = ["/main-image 2.png", "/main-image.png"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // 🔹 Animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -15, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 12, duration: 0.8 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -100, scale: 0.8 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 80, damping: 15, duration: 1 },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 120, damping: 10, delay: 0.8 },
    },
    hover: { scale: 1.05, y: -2, transition: { type: "spring", stiffness: 400, damping: 10 } },
    tap: { scale: 0.95, transition: { duration: 0.1 } },
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 h-[92vh] via-white to-blue-50 py-12 overflow-hidden relative">
        {/* Background animations */}
        <div className="absolute inset-0">
          <motion.div
            animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-xl"
          />
          <motion.div
            animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-10 left-10 w-24 h-24 bg-gradient-to-r from-pink-200/20 to-yellow-200/20 rounded-full blur-xl"
          />
        </div>

        <motion.div
          className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-10 relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {/* Left Content */}
          <motion.div variants={textVariants}>
            <motion.h1 className="text-2xl md:text-5xl font-extrabold text-black leading-tight">
              <motion.span className="whitespace-nowrap inline-block">Amazon & E-Commerce</motion.span>
              <br />
              <motion.span className="inline-block bg-gradient-to-r from-gray-700 to-gray-700 bg-clip-text text-transparent">
                Designs That Convert
              </motion.span>
            </motion.h1>

            <motion.p className="mt-4 text-lg font-semibold text-gray-700">
              Motivate to click! Inspire to purchase! Be the best in your niche!
            </motion.p>

            <motion.p className="mt-2 text-gray-600">
              High-converting Amazon Listing Images, A+ Content (EBC), Brand
              Stores & Infographics — designed to boost CTR, increase sales, and
              build brand trust. We also craft Shopify & custom e-commerce
              websites, turning browsers into loyal customers.
            </motion.p>

            {/* ✅ Fixed Buttons */}
            <motion.div
              className="mt-6 flex space-x-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <MotionLink
                href="/contact"
                className="px-6 py-3 bg-gradient-to-r from-black to-gray-800 text-white font-medium rounded-lg shadow-lg relative overflow-hidden group"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <motion.div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10">Send Request</span>
              </MotionLink>

              <MotionLink
                href="/portfolio"
                className="px-6 py-3 border-2 border-gray-400 text-gray-800 font-medium rounded-lg hover:border-gray-500 hover:text-gray-600 transition-all duration-300 relative overflow-hidden group"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <motion.div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10">Portfolio</span>
              </MotionLink>
            </motion.div>
          </motion.div>

          {/* Right Content (image slider) */}
          <motion.div
            className="relative flex justify-center w-full h-96"
            variants={itemVariants}
          >
            <AnimatePresence mode="wait">
              {images.map(
                (img, index) =>
                  index === currentIndex && (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8, rotateY: 90, x: 100 }}
                      animate={{ opacity: 1, scale: 1, rotateY: 0, x: 0 }}
                      exit={{ opacity: 0, scale: 0.8, rotateY: -90, x: -100 }}
                      transition={{ duration: 0.8, type: "spring", stiffness: 100, damping: 20 }}
                      className="absolute"
                      whileHover={{ scale: 1.05, rotateY: 5, rotateX: 5, transition: { duration: 0.3 } }}
                    >
                      <Image
                        src={img}
                        alt="Amazon Listing Example"
                        width={280}
                        height={400}
                        className="object-contain rounded-xl shadow-2xl"
                      />
                    </motion.div>
                  )
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </section>

      {/* Tech Stack Section Placeholder */}
      <section className="bg-gradient-to-br from-gray-900 via-black to-gray-900 py-16 relative overflow-hidden">
        {/* You can insert your Tech Stack code here */}
      </section>

      {/* Other Sections */}
      <TechStack />
      <WorldwideStats />
      <Services />
      <BusinessGoals />
      <ClientTestimonials />
      <LatestProjects />
    </>
  );
};

export default Hero;
