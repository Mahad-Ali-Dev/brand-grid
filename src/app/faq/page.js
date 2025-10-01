"use client";

import { useState, useEffect } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";

const faqs = [
  {
    question: "What services does Brand Grid provide for Amazon sellers?",
    answer:
      "We provide Amazon Listing Images, A+ Content (EBC), Brand Stores, Infographics, and Product Retouching — designed to increase conversions and build trust."
  },
  {
    question: "Can you create a full Amazon Brand Store?",
    answer:
      "Yes. We design conversion-driven Brand Stores with professional layouts, product showcases, and brand storytelling that maximize customer engagement."
  },
  {
    question: "What is Amazon A+ Content (EBC), and how can it help my sales?",
    answer:
      "A+ Content allows sellers to add premium visuals, brand modules, and comparison charts. This improves brand credibility, keeps customers engaged, and boosts sales significantly."
  },
  {
    question: "How do you make sure designs comply with Amazon guidelines?",
    answer:
      "We strictly follow Amazon's image and content policies to ensure your listings remain compliant and never risk being flagged or removed."
  },
  {
    question: "Can you create both images and text modules for A+ Content?",
    answer:
      "Yes. Our team designs custom graphics and professional copywriting for A+ modules, ensuring they are visually appealing and conversion-focused."
  },
  {
    question: "Can you design comparison charts and infographics?",
    answer:
      "Absolutely. We create comparison tables, feature highlights, and callout graphics to make your product's value clear at a glance."
  },
  {
    question: "Do you also handle copywriting for Amazon listings?",
    answer:
      "Yes. We provide SEO-optimized titles, bullet points, and descriptions alongside visuals to improve search ranking and conversions."
  },
  {
    question: "Can you redesign existing Amazon content for better results?",
    answer:
      "Yes. We frequently audit and revamp existing listings to boost CTR, enhance product appeal, and increase conversions."
  },
  {
    question: "Do you provide multi-language A+ Content or store designs?",
    answer:
      "Yes. We can create localized content for Amazon UK, Germany, France, and other marketplaces, ensuring global reach."
  },
  {
    question: "Do you provide product photography as well, or only design work?",
    answer:
      "We focus on retouching and designing with client-provided photos, but we can guide you on best practices for photography."
  },
  {
    question: "Can you retouch existing product photos to meet Amazon standards?",
    answer:
      "Yes. We specialize in white background edits, color correction, shadow effects, and high-end retouching for Amazon-ready photos."
  },
  {
    question: "How do you ensure that images are mobile-friendly?",
    answer:
      "All images are optimized for desktop and mobile, ensuring clear visibility on small screens where most Amazon shoppers browse."
  },
  {
    question: "What makes your Amazon designs different from others?",
    answer:
      "Our designs are conversion-focused, keyword-rich, and psychology-driven. They don't just look good — they are built to sell more products."
  },
  {
    question: "Do you only work with Amazon, or other platforms as well?",
    answer:
      "We also design for Shopify, eBay, Etsy, Walmart, WooCommerce, BigCommerce, and Wix, ensuring your brand looks strong everywhere."
  },
  {
    question: "Do you also develop Shopify and WooCommerce websites from scratch?",
    answer:
      "Yes. We build custom Shopify and WooCommerce stores that are mobile-friendly, SEO-ready, and designed to drive conversions."
  },
  {
    question: "What industries or product categories do you specialize in?",
    answer:
      "We've worked across Home & Kitchen, Beauty, Fashion, Electronics, Health & Wellness, and more. Our design approach adapts to your niche."
  },
  {
    question: "How fast can you deliver a project?",
    answer:
      "Listing Images & A+ Content: 5–7 business days\nBrand Store Design: 7–10 business days\nWebsites: 3–4 weeks (depending on scope)."
  },
  {
    question: "Do you accept bulk or long-term projects?",
    answer:
      "Yes. We work with individual sellers, growing brands, and agencies — handling both one-off and ongoing design support."
  },
  {
    question: "How do you manage revisions if I want changes?",
    answer:
      "We include multiple revision rounds to ensure final delivery matches your brand vision perfectly."
  },
  {
    question: "How can I get started with Brand Grid?",
    answer:
      "Simply contact us or request a free design audit. We'll review your listings or website and provide a tailored solution to grow your sales."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = entry.target.getAttribute('data-index');
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [index]: true }));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    const faqElements = document.querySelectorAll('.faq-item');
    faqElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full mx-auto p-8 pt-24 bg-gradient-to-br from-white via-gray-50 to-white min-h-screen relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-5 -z-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-black rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gray-800 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gray-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gray-400 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          25% { transform: translateY(-10px) translateX(5px) rotate(90deg); }
          50% { transform: translateY(-5px) translateX(-5px) rotate(180deg); }
          75% { transform: translateY(-15px) translateX(10px) rotate(270deg); }
        }
        
        .absolute.w-1 {
          animation: float linear infinite;
        }

        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-100px) scale(0.8);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        @keyframes glowPulse {
          0%, 100% {
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
          }
          50% {
            box-shadow: 0 0 40px rgba(0, 0, 0, 0.2), 0 0 80px rgba(0, 0, 0, 0.1);
          }
        }

        @keyframes textShimmer {
          0% {
            background-position: -200px 0;
          }
          100% {
            background-position: 200px 0;
          }
        }

        .animate-slide-in {
          animation: slideInFromLeft 0.8s ease-out forwards;
        }

        .animate-glow-pulse {
          animation: glowPulse 3s ease-in-out infinite;
        }

        .text-shimmer {
          background: linear-gradient(90deg, #000000 25%, #333333 50%, #000000 75%);
          background-size: 200px 100%;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: textShimmer 3s ease-in-out infinite;
        }
      `}</style>

      <div className="relative z-0">
        <h1 className="text-4xl md:text-6xl font-extrabold text-center text-gray-900 mb-16 text-shimmer transform hover:scale-105 transition-transform duration-500">
          Frequently Asked Questions
        </h1>
        
        <div className="space-y-8 max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              data-index={index}
              className={`faq-item border-2 border-gray-300 rounded-2xl shadow-2xl overflow-hidden bg-white backdrop-blur-sm transform transition-all duration-700 hover:scale-[1.02] hover:shadow-3xl relative z-0 ${
                isVisible[index] ? 'animate-slide-in' : 'opacity-0 translate-x-[-100px]'
              } animate-glow-pulse`}
              style={{ 
                animationDelay: `${index * 0.1}s`,
                background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)'
              }}
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center p-8 text-left bg-gradient-to-r from-black via-gray-900 to-black hover:from-gray-900 hover:via-gray-800 hover:to-gray-900 transition-all duration-500 focus:outline-none focus:ring-4 focus:ring-gray-300 group relative overflow-hidden"
              >
                {/* Button Background Animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-all duration-1000"></div>
                
                <span className="font-bold text-xl md:text-2xl text-white relative z-10 group-hover:text-gray-100 transition-colors duration-300">
                  {faq.question}
                </span>
                
                <div className="relative z-10 transform group-hover:rotate-180 transition-transform duration-500">
                  {openIndex === index ? (
                    <ChevronUpIcon className="w-8 h-8 md:w-10 md:h-10 text-white group-hover:text-gray-200 transition-colors duration-300 animate-bounce" />
                  ) : (
                    <ChevronDownIcon className="w-8 h-8 md:w-10 md:h-10 text-white group-hover:text-gray-200 transition-colors duration-300" />
                  )}
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-700 ease-in-out ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="p-8 bg-gradient-to-br from-gray-50 to-white text-gray-800 text-xl md:text-2xl leading-relaxed border-t-2 border-gray-200 transform transition-all duration-500">
                  <div className="animate-slide-in" style={{ animationDelay: '0.2s' }}>
                    {faq.answer.split("\n").map((line, idx) => (
                      <p 
                        key={idx} 
                        className="mb-3 transform transition-all duration-300 hover:translate-x-2 hover:text-black"
                        style={{ animationDelay: `${idx * 0.1}s` }}
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}