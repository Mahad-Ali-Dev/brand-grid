"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Mail, Phone, MapPin, ArrowUp, Sparkles } from "lucide-react";

const FooterCard = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [hoveredSocial, setHoveredSocial] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);

      const footer = document.getElementById("animated-footer");
      if (footer) {
        const rect = footer.getBoundingClientRect();
        setIsVisible(rect.top < window.innerHeight && rect.bottom > 0);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { name: "LinkedIn", href: "#", color: "hover:text-blue-400", delay: "0ms" },
    {
      name: "Instagram",
      href: "#",
      color: "hover:text-pink-400",
      delay: "100ms",
    },
    {
      name: "Upwork",
      href: "#",
      color: "hover:text-green-400",
      delay: "200ms",
    },
    { name: "Twitter", href: "#", color: "hover:text-sky-400", delay: "300ms" },
    {
      name: "Facebook",
      href: "#",
      color: "hover:text-blue-500",
      delay: "400ms",
    },
    {
      name: "Fiverr",
      href: "#",
      color: "hover:text-emerald-400",
      delay: "500ms",
    },
  ];

  const FloatingParticle = ({ delay, duration, className }) => (
    <div
      className={`absolute w-1 h-1 bg-white rounded-full opacity-30 ${className}`}
      style={{
        animation: `float ${duration}s infinite ease-in-out`,
        animationDelay: delay,
      }}
    />
  );

  return (
    <>
      <div className="flex justify-center items-center py-16 px-4 bg-white">
        <div
          id="animated-footer"
          className="relative bg-black text-white w-full max-w-7xl rounded-2xl shadow-2xl overflow-hidden p-10"
        >
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                `,
                backgroundSize: "50px 50px",
                transform: `translate(${mousePosition.x * 0.01}px, ${
                  mousePosition.y * 0.01
                }px)`,
              }}
            />

            <div
              className="absolute w-72 h-72 rounded-full opacity-20"
              style={{
                background:
                  "radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)",
                left: "10%",
                top: "20%",
                transform: `translate(${mousePosition.x * 0.02}px, ${
                  mousePosition.y * 0.02
                }px)`,
                animation: "pulse 4s infinite ease-in-out",
              }}
            />
            <div
              className="absolute w-64 h-64 rounded-full opacity-15"
              style={{
                background:
                  "radial-gradient(circle, rgba(16, 185, 129, 0.3) 0%, transparent 70%)",
                right: "10%",
                bottom: "20%",
                transform: `translate(${mousePosition.x * -0.02}px, ${
                  mousePosition.y * -0.02
                }px)`,
                animation: "pulse 6s infinite ease-in-out reverse",
              }}
            />

            {/* Floating Particles */}
            <FloatingParticle
              delay="0s"
              duration={3}
              className="top-10 left-10"
            />
            <FloatingParticle
              delay="1s"
              duration={4}
              className="top-20 right-20"
            />
            <FloatingParticle
              delay="2s"
              duration={5}
              className="bottom-20 left-20"
            />
          </div>

          {/* Content */}
          <div className="relative z-10 space-y-10">
            {/* Logo */}
            <div className="flex flex-col items-center space-y-3">
              <div className="flex items-center justify-center space-x-3 group">
                <div className="relative">
                  <div className="w-20 h-20 rounded-lg flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-white/20 overflow-hidden">
                    <Image
                      src="/icon 2.png" // <-- apna logo ka path yahan do (public folder me rakhna)
                      alt="Brand Grid Logo"
                      width={80}
                      height={80}
                      className="object-contain"
                    />
                  </div>
                  <Sparkles className="absolute -top-2 -right-2 w-4 h-4 text-yellow-400 opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold tracking-wider bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text animate-shimmer bg-[length:200%_100%]">
                    BRAND GRID
                  </h1>
                  <p className="text-sm text-gray-400 tracking-widest uppercase">
                    From Vision To Impact
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-2 text-gray-300 group cursor-pointer">
                <Mail
                  size={18}
                  className="group-hover:scale-110 group-hover:rotate-12 transition-all duration-300"
                />
                <a
                  href="mailto:hello.brandsgrid@gmail.com"
                  className="hover:text-white transition-all duration-300 relative"
                >
                  brandsgrid@gmail.com
                </a>
              </div>
            </div>

            {/* Contact + Socials */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contact */}
              <div className="space-y-3 text-left">
                <p className="text-gray-400 text-sm">Tap. Ring. Connect.</p>
                <div className="flex items-center space-x-2">
                  <Phone size={16} className="text-gray-400" />
                  <a
                    href="tel:+923157852112"
                    className="text-white hover:text-gray-300 transition-all"
                  >
                    +92 315 7852112
                  </a>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Map. Mark. Meet.</p>
                  <div className="flex items-start space-x-2">
                    <MapPin size={16} className="text-gray-400 mt-1" />
                    <p className="text-white">
                      BRAND GRID — 382 Northeast 191st Street, Miami • FL
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-3 text-right">
                <p className="text-gray-400 text-sm">Swipe. Click. Discover.</p>
                <div className="grid grid-cols-2 gap-y-2 gap-x-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className={`text-white ${link.color} transition-all duration-500 text-sm transform hover:scale-110 hover:-translate-y-1 relative`}
                      style={{ animationDelay: link.delay }}
                      onMouseEnter={() => setHoveredSocial(index)}
                      onMouseLeave={() => setHoveredSocial(null)}
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-gray-800 pt-4 text-center">
              <p className="text-gray-500 text-xs">
                ©2025 BRAND GRID All rights reserved
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-10px) rotate(90deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
          75% {
            transform: translateY(-10px) rotate(270deg);
          }
        }
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.2;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.3;
          }
        }
        .animate-shimmer {
          animation: shimmer 3s infinite linear;
        }
      `}</style>
    </>
  );
};

export default FooterCard;
