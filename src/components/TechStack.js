"use client";

import Image from "next/image";

const techStack = [
  { name: "Amazon", src: "/tech/amazon.png" },
  { name: "AI", src: "/tech/artificial-intelligence.png" },
  { name: "Canva", src: "/tech/canva.png" },
  { name: "Django", src: "/tech/django.png" },
  { name: "Ebay", src: "/tech/ebay.png" },
  { name: "Figma", src: "/tech/figma.png" },
  { name: "Helium", src: "/tech/Helium.png" },
  { name: "Illustrator", src: "/tech/illustrator.png" },
  { name: "Meta", src: "/tech/meta.png" },
  { name: "Microsoft", src: "/tech/microsoft.png" },
  { name: "Next.js", src: "/tech/next.js.png" },
  { name: "Photoshop", src: "/tech/photoshop.png" },
  { name: "Premiere", src: "/tech/premiere.png" },
  { name: "React.js", src: "/tech/react.js.png" },
  { name: "Shopify", src: "/tech/shopify.png" },
  { name: "Wix", src: "/tech/wix.png" },
  { name: "WooCommerce", src: "/tech/woo commerce.png" },
  { name: "WordPress", src: "/tech/wordpress.png" },
];

export default function TechStack() {
  return (
    <section className="bg-black py-20 relative overflow-hidden">
      {/* Animated gradient orbs in background */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      
      <div className="relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-white mb-4 tracking-tight">
            Our Tech Stack
          </h2>
          <p className="text-gray-400 mt-3 text-lg max-w-2xl mx-auto">
            Modern. Modular. Made to scale. <br />
            Our toolkit evolves with every build.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-7xl mx-auto px-6">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl p-8 flex items-center justify-center border border-cyan-500/20 hover:border-cyan-400/60 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-cyan-500/30"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/20 group-hover:to-blue-500/20 rounded-2xl transition-all duration-300"></div>
              
              <Image
                src={tech.src}
                alt={tech.name}
                width={70}
                height={70}
                className="object-contain relative z-10 filter grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}