'use client';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import {
  ChevronLeft,
  ChevronRight,
  Smartphone,
  Monitor,
  Layers,
  Zap,
  Palette,
  MousePointer
} from 'lucide-react';

const ServicesSection = () => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const services = [
    {
      title: "LISTING IMAGES",
      description:
        "We create high-converting Amazon listing images that capture attention, highlight benefits, and boost sales with clear, customer-focused visuals.",
      image: "/services/listing images.png",
      features: [
        { icon: Smartphone, text: "Hero Images" },
        { icon: Monitor, text: "Product Infographics" },
        { icon: Layers, text: "Lifestyle Images" },
        { icon: Zap, text: "Feature Highlights" },
        { icon: Palette, text: "Comparison Charts" },
        { icon: MousePointer, text: "Instructional Images" }
      ]
    },
    {
      title: "A+ CONTENT / EBC",
      description:
        "We design premium Amazon A+ Content (Enhanced Brand Content) that transforms product listings into branded shopping experiences.",
      image: "/services/EBC.png",
      features: [
        { icon: Monitor, text: "Branded Content Modules" },
        { icon: Zap, text: "Storytelling & Brand Identity Design" },
        { icon: Layers, text: "Product Comparison Modules" },
        { icon: Palette, text: "Mobile-Optimized Layouts" },
        { icon: MousePointer, text: "Premium Graphics & Visuals" },
        { icon: Smartphone, text: "Product & Image Retouching" }
      ]
    },
     {
      title: "PRODUCT & IMAGE RETOUCHING",
      description:
        "Our professional product image retouching service ensures your visuals meet Amazon and e-commerce standards while looking sharp, clean, and conversion-focused. From background removal to high-end retouching, we deliver polished product photos that grab attention, highlight details, and build buyer confidence.",
      image: "/services/Image retouching.png",
      features: [
        { icon: Monitor, text: "Amazon-Ready White Background Images" },
        { icon: Zap, text: "High-End Photo Retouching" },
        { icon: Layers, text: "Shadow, Reflection & Lighting Adjustments" },
        { icon: Palette, text: "Color Correction & Detailing" },
        { icon: MousePointer, text: "Imperfection Removal" },
        { icon: Smartphone, text: "Lifestyle Image Enhancements" }
      ]
    },
    {
      title: "OTHER E-COMMERCE DESIGNS",
      description:
        "Beyond Amazon, we design for multiple leading e-commerce platforms to help your brand shine everywhere customers shop.",
      image: "/services/listing images.png",
      features: [
        { icon: Palette, text: "eBay Storefront & Listing Designs" },
        { icon: Layers, text: "Etsy Product Graphics & Store Branding" },
        { icon: MousePointer, text: "Walmart Marketplace Content" },
        { icon: Zap, text: "BigCommerce Store Design" },
        { icon: Monitor, text: "Wix / Squarespace Online Stores" },
        { icon: Smartphone, text: "Cross-Platform Brand Consistency" }
      ]
    },
    {
      title: "WEBSITE DEVELOPMENT",
      description:
        "We build conversion-focused websites and Shopify stores that give your brand a powerful digital presence.",
      image: "/services/website designs.png",
      features: [
        { icon: Palette, text: "Shopify Store Design & Development" },
        { icon: Layers, text: "WordPress / WooCommerce Websites" },
        { icon: Monitor, text: "Custom E-Commerce Solutions" },
        { icon: Smartphone, text: "Responsive & Mobile-Optimized Design" },
        { icon: MousePointer, text: "Conversion Rate Optimization (CRO)" },
        { icon: Zap, text: "SEO-Ready Development" }
      ]
    }
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 380; // reduced scroll step
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="bg-black text-white py-16 px-4 overflow-hidden relative">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div
          className={`mb-12 text-center transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <p className="text-white/70 text-sm font-medium tracking-wide uppercase mb-3">
            • Services
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
            What We Do
          </h2>
        </div>

        {/* Navigation */}
        <div className="flex justify-end gap-3 mb-6">
          <button
            onClick={() => scroll("left")}
            className="p-2 border border-white/20 rounded-full hover:border-white hover:scale-110 transition-all duration-500 bg-white/5 hover:bg-white/10"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-2 border border-white/20 rounded-full hover:border-white hover:scale-110 transition-all duration-500 bg-white/5 hover:bg-white/10"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Cards */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-2"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="flex-none w-80 bg-gradient-to-b from-white/10 to-white/5 border border-white/20 rounded-2xl overflow-hidden hover:scale-105 transition-all duration-500 shadow-lg"
            >
              {/* Image */}
              <div className="relative w-full h-45">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed text-sm line-clamp-3">
                  {service.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-2">
                  {service.features.map((feature, featureIndex) => {
                    const Icon = feature.icon;
                    return (
                      <div
                        key={featureIndex}
                        className="flex items-center gap-2 text-xs hover:translate-x-1 transition-all duration-300"
                      >
                        <Icon className="w-4 h-4 text-white/70" />
                        <span className="text-gray-300">{feature.text}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-6">
          <div className="flex gap-2">
            {services.map((_, index) => (
              <div
                key={index}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  activeIndex === index ? "bg-white" : "bg-white/30"
                }`}
                onClick={() => setActiveIndex(index)}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
