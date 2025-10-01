// components/ProjectsGallery.jsx
"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Perfect Sleep Pillow",
    category: "Comfort",
    description: "Premium comfort for perfect rest",
    images: [
      "/projects/01/infographics.png",
      "/projects/01/lifesrtyle image.png",
      "/projects/01/main image.png",
    ],
  },
  {
    id: 2,
    title: "Beard Growth Oil",
    category: "Beauty",
    description: "Natural oils for healthy growth",
    images: [
      "/projects/02/1.png",
      "/projects/02/2.png",
      "/projects/02/3.png",
      "/projects/02/8.png",
      "/projects/02/9.png",
    ],
  },
  {
    id: 3,
    title: "Color Bottles",
    category: "Design",
    description: "Vibrant packaging solutions",
    images: [
      "/projects/03/1.jpg",
      "/projects/03/2.jpg",
      "/projects/03/3.jpg",
      "/projects/03/4.jpg",
      "/projects/03/6.jpg",
    ],
  },
  {
    id: 4,
    title: "Hydration Serum",
    category: "Skincare",
    description: "Deep moisturizing formula",
    images: [
      "/projects/04/01 1000 G.png",
      "/projects/04/3.png",
      "/projects/04/4.png",
      "/projects/04/7.png",
      "/projects/04/8.png",
    ],
  },
  {
    id: 5,
    title: "Hydration Serum Variant",
    category: "Skincare",
    description: "Advanced hydration technology",
    images: [
      "/projects/06/e1.png",
      "/projects/06/e2.png",
      "/projects/06/e3.png",
      "/projects/06/e4.png",
      "/projects/06/e5.png",
      "/projects/06/e6.png",
    ],
  },
  {
    id: 6,
    title: "Hydration Serum Extra",
    category: "Skincare",
    description: "Extra strength moisture boost",
    images: [
      "/projects/07/r1.jpeg",
      "/projects/07/r2.jpg",
      "/projects/07/r3.jpg",
      "/projects/07/r4.jpg",
      "/projects/07/r5.jpg",
      "/projects/07/r6.jpg",
      "/projects/07/r7.jpg",
    ],
  },
  {
    id: 7,
    title: "Hydration Serum Premium",
    category: "Skincare",
    description: "Luxury skincare experience",
    images: [
      "/projects/08/t1.jpg",
      "/projects/08/t2.jpg",
      "/projects/08/t3.jpg",
      "/projects/08/t4.jpg",
      "/projects/08/t5.jpg",
    ],
  },
  {
    id: 8,
    title: "Hydration Serum Deluxe",
    category: "Skincare",
    description: "Ultimate hydration solution",
    images: [
      "/projects/09/y1.png",
      "/projects/09/y2.png",
      "/projects/09/y3.png",
      "/projects/09/y4.png",
      "/projects/09/y5.png",
    ],
  },
   {
    id: 9,
    title: "Hydration Serum Deluxe",
    category: "Skincare",
    description: "Ultimate hydration solution",
    images: [
      "/projects/10/u1.png",
      "/projects/10/u2.png",
      "/projects/10/u3.png",
      "/projects/10/u4.png",
      "/projects/10/u5.png",
      "/projects/10/u6.png",
    ],
  },
];

const categoryColors = {
  "Comfort": "from-gray-800 to-black",
  "Beauty": "from-gray-700 to-gray-900",
  "Design": "from-black to-gray-800",
  "Skincare": "from-gray-900 to-black"
};

export default function ProjectsGallery() {
  const [selected, setSelected] = useState(null);
  const [currentImg, setCurrentImg] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [visibleProjects, setVisibleProjects] = useState([]);

  // Staggered animation on mount
  useEffect(() => {
    setVisibleProjects([]);
    const timer = setTimeout(() => {
      projects.forEach((_, index) => {
        setTimeout(() => {
          setVisibleProjects(prev => [...prev, index]);
        }, index * 150);
      });
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  // Keyboard navigation for modal
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!selected) return;
      
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'Escape') closeModal();
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selected]);

  const openModal = (project) => {
    setIsLoading(true);
    setSelected(project);
    setCurrentImg(0);
    document.body.style.overflow = 'hidden';
    
    setTimeout(() => setIsLoading(false), 400);
  };

  const closeModal = () => {
    setSelected(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    if (!selected) return;
    setCurrentImg((prev) => (prev + 1) % selected.images.length);
  };

  const prevImage = () => {
    if (!selected) return;
    setCurrentImg(
      (prev) => (prev - 1 + selected.images.length) % selected.images.length
    );
  };

  return (
    <section className="min-h-screen bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Animated Header */}
        <div className="text-center mb-16 opacity-0 animate-[fadeInDown_1s_ease-out_0.2s_forwards]">
          <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              Latest
            </span>
            <br />
            <span className="bg-gradient-to-r from-gray-100 via-white to-gray-100 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="flex justify-center items-center space-x-4 mb-6">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-white"></div>
            <div className="w-3 h-3 rounded-full bg-white animate-pulse"></div>
            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-white"></div>
          </div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Discover our creative portfolio showcasing innovative designs and cutting-edge solutions
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              onClick={() => openModal(project)}
              className={`group cursor-pointer transform transition-all duration-700 hover:scale-105 hover:-translate-y-2 ${
                visibleProjects.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden rounded-3xl bg-white border border-gray-300 shadow-xl hover:shadow-2xl transition-all duration-500">
                
                {/* Image Container */}
                <div className="relative overflow-hidden">
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                    width={400}
                    height={320}
                    className="w-full h-64 object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                  />
                  
                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-500 delay-200">
                        <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`inline-block px-4 py-2 bg-gradient-to-r ${categoryColors[project.category]} text-white text-sm font-bold rounded-full shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500`}>
                      {project.category}
                    </span>
                  </div>

                  {/* Image Count */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/90 backdrop-blur-md text-black px-3 py-1 rounded-full text-sm font-medium border">
                      {project.images.length}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-black group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-gray-800 group-hover:to-black group-hover:bg-clip-text transition-all duration-500">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {project.description}
                    </p>
                  </div>

                  {/* Bottom decoration */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-300">
                    <span className="text-xs text-gray-500 uppercase tracking-wider">
                      View Project
                    </span>
                    <div className="w-6 h-6 rounded-full border-2 border-gray-400 group-hover:border-black group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                      <svg className="w-3 h-3 text-gray-400 group-hover:text-black transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Animated border */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-gray-800/20 via-black/20 to-gray-800/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Modal */}
        {selected && (
          <div className={`fixed inset-0 bg-black/95 backdrop-blur-xl flex items-center justify-center z-50 p-4 transition-all duration-500 ${selected ? 'opacity-100' : 'opacity-0'}`}>
            <div className={`bg-white border border-gray-300 rounded-3xl shadow-2xl max-w-6xl w-full relative transform transition-all duration-700 ${isLoading ? 'scale-90 opacity-50' : 'scale-100 opacity-100'}`}>
              
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-6 right-6 z-20 w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-2xl flex items-center justify-center transition-all duration-300 group border border-gray-300"
              >
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Header */}
              <div className="p-8 border-b border-gray-300">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-3xl font-bold text-black mb-2">{selected.title}</h3>
                    <p className="text-gray-600 mb-3">{selected.description}</p>
                    <div className="flex items-center space-x-4">
                      <span className={`px-4 py-2 bg-gradient-to-r ${categoryColors[selected.category]} text-white text-sm font-bold rounded-full`}>
                        {selected.category}
                      </span>
                      <span className="text-gray-500 text-sm">
                        {selected.images.length} images
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Image Viewer - Scrollable */}
              <div className="relative p-8 max-h-[80vh] overflow-y-auto">
                <div className="flex items-center justify-center">
                  {/* Previous Button */}
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-14 h-14 bg-gray-100 hover:bg-gray-200 rounded-2xl shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 border border-gray-300"
                  >
                    <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  {/* Main Image */}
                  <div className="flex-1 mx-20">
                    <div className="relative w-full overflow-hidden rounded-2xl shadow-2xl border border-gray-300">
                      <Image
                        src={selected.images[currentImg]}
                        alt={selected.title}
                        width={900}
                        height={700}
                        className="w-full h-auto object-contain bg-gray-100"
                      />
                    </div>
                  </div>

                  {/* Next Button */}
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-14 h-14 bg-gray-100 hover:bg-gray-200 rounded-2xl shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 border border-gray-300"
                  >
                    <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

                {/* Image Counter & Thumbnails */}
                <div className="mt-8">
                  <div className="text-center text-gray-600 mb-6 text-lg">
                    <span className="text-black font-bold">{currentImg + 1}</span> of {selected.images.length}
                  </div>
                  
                  {/* Thumbnail Navigation */}
                  <div className="flex justify-center space-x-3 overflow-x-auto pb-4">
                    {selected.images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImg(idx)}
                        className={`flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                          idx === currentImg 
                            ? 'border-black scale-110 shadow-lg' 
                            : 'border-gray-400 hover:border-gray-600 opacity-70 hover:opacity-100'
                        }`}
                      >
                        <Image
                          src={img}
                          alt={`${selected.title} ${idx + 1}`}
                          width={80}
                          height={80}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}