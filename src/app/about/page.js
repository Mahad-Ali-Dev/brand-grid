"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import WorldwideStats from "@/components/WorldwideStats";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.3 } },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-16">

        {/* Page Title */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center text-white mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          MySpace Executives
        </motion.h1>

        {/* Executives Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Husnain Hanif */}
          <motion.div
            className="bg-white text-black rounded-2xl p-8 shadow-lg text-center hover:shadow-2xl transition transform hover:scale-105"
            variants={fadeInUp}
          >
            <div className="flex justify-center mb-6">
              <div className="w-40 h-40 rounded-full overflow-hidden">
                <Image
                  src="/Husnain-profile.png"
                  alt="Husnain Hanif"
                  width={160}
                  height={160}
                  className="object-cover"
                />
              </div>
            </div>
            <h2 className="text-2xl font-semibold">Husnain Hanif</h2>
            <p className="text-indigo-600 mb-4">Founder & CEO</p>
            <p className="text-gray-700 leading-relaxed">
              Hi, I’m Husnain — the creative mind behind Brand Grid. As the founder and lead designer, 
              I manage every project with a focus on high-converting Amazon listing images, A+ content, 
              and brand visuals.
            </p>
          </motion.div>

          {/* Shahbaz Khan */}
          <motion.div
            className="bg-white text-black rounded-2xl p-8 shadow-lg text-center hover:shadow-2xl transition transform hover:scale-105"
            variants={fadeInUp}
          >
            <div className="flex justify-center mb-6">
              <div className="w-40 h-40 rounded-full overflow-hidden">
                <Image
                  src="/shabaz-profile.png"
                  alt="Shahbaz Khan"
                  width={160}
                  height={160}
                  className="object-cover"
                />
              </div>
            </div>
            <h2 className="text-2xl font-semibold">Shahbaz Khan</h2>
            <p className="text-pink-600 mb-4">Lead Developer</p>
            <p className="text-gray-700 leading-relaxed">
              Hi, I’m Shahbaz Khan — the tech backbone of Brand Grid. I specialize in building Shopify stores,
              custom e-commerce websites, and scalable solutions.
            </p>
          </motion.div>
        </motion.div>

        <WorldwideStats />

        {/* Section 1 */}
        <motion.section
          className="bg-white text-black rounded-2xl p-10 shadow-lg"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="max-w-4xl mx-auto">
            <div className="flex items-baseline space-x-2">
              <h2 className="text-4xl font-light text-gray-500">01</h2>
              <span className="text-4xl font-light text-gray-500">the</span>
              <h2 className="text-6xl font-extrabold text-black">beginning.</h2>
            </div>

            <p className="mt-6 text-lg leading-relaxed text-gray-700">
              In 2021, we started our journey as a dedicated Amazon design specialist, 
              helping brands establish a strong visual presence...
            </p>
          </div>

          {/* Images Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 w-full max-w-5xl mx-auto"
            variants={staggerContainer}
          >
            <motion.div
              className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden"
              variants={fadeInUp}
            >
              <Image src="/image 3.png" alt="Team working" fill className="object-cover" />
            </motion.div>
            <motion.div
              className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden"
              variants={fadeInUp}
            >
              <Image src="/image 4.png" alt="Workspace" fill className="object-cover" />
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Section 2 */}
        <motion.section
          className="bg-white text-black rounded-2xl p-10 shadow-lg"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="max-w-4xl mx-auto">
            <div className="flex items-baseline space-x-2">
              <h2 className="text-4xl font-light text-gray-500">02</h2>
              <span className="text-4xl font-light text-gray-500">the</span>
              <h2 className="text-6xl font-extrabold text-black">rhythm.</h2>
            </div>

            <div className="mt-6 space-y-5 text-lg leading-relaxed text-gray-700">
              <p>With hands-on experience of working with 50+ Amazon brands globally...</p>
              <p>Some of our best ideas come after midnight...</p>
              <p>From UK-based private labels to US multinational brands...</p>
              <p>It's not just a culture. It's the rhythm that keeps us creating.</p>
            </div>
          </div>

          <motion.div
            className="relative w-full max-w-5xl h-72 md:h-96 mt-12 mx-auto rounded-xl overflow-hidden"
            variants={fadeInUp}
          >
            <Image src="/our vision 2.png" alt="Office space" fill className="object-cover" />
          </motion.div>
        </motion.section>

        {/* Section 3 */}
        <motion.section
          className="bg-white text-black rounded-2xl p-10 shadow-lg"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="max-w-4xl mx-auto">
            <div className="flex items-baseline space-x-2">
              <h2 className="text-4xl font-light text-gray-500">03</h2>
              <span className="text-4xl font-light text-gray-500">the</span>
              <h2 className="text-6xl font-extrabold text-black">process.</h2>
            </div>

            <div className="mt-6 space-y-5 text-lg leading-relaxed text-gray-700">
              <p>Our Amazon design process is structured, research-driven, and results-focused:</p>
              <p>Competitor & Market Research – We analyze top-performing listings...</p>
              <p>Creative EBC & Listing Design – Hero images, infographics, lifestyle visuals...</p>
              <p>Conversion Optimization – Every design crafted based on buyer psychology...</p>
            </div>
          </div>
        </motion.section>

      </div>
    </div>
  );
}
