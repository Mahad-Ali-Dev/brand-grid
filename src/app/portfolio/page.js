"use client";
import { useState, useEffect, useCallback, useMemo } from "react";

const projects = [
  {
    id: 1,
    title: "Jumble jangle",
    category: "Listing Images",
    description: "Creative product showcase with vibrant designs",
    images: [
      "/projects/01/a1.png",
      "/projects/01/a2.png",
      "/projects/01/a3.png",
    ],
  },
  {
    id: 2,
    title: "Camping mat",
    category: "Listing Images",
    description: "Outdoor gear visualization for e-commerce",
    images: [
      "/projects/02/b1.png",
      "/projects/02/b2.png",
      "/projects/02/b3.png",
      "/projects/02/b4 (2).png",
      "/projects/02/b4.png",
    ],
  },
  {
    id: 3,
    title: "Cat & Dog Food",
    category: "Listing Images",
    description: "Pet food packaging and lifestyle shots",
    images: [
      "/projects/03/q1.jpg",
      "/projects/03/q2.jpg",
      "/projects/03/q3.jpg",
      "/projects/03/q4.jpg",
      "/projects/03/q5.jpg",
    ],
  },
  {
    id: 4,
    title: "Car Dehumidifier",
    category: "Listing Images",
    description: "Automotive accessory product photography",
    images: [
      "/projects/04/w1.png",
      "/projects/04/w2.png",
      "/projects/04/w3.png",
      "/projects/04/w4.png",
      "/projects/04/w5.png",
    ],
  },
  {
    id: 5,
    title: "Garden Broom",
    category: "Listing Images",
    description: "Garden tool visualization and usage scenarios",
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
    title: "Tumbler",
    category: "Listing Images",
    description: "Drinkware product styling and lifestyle photography",
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
    title: "LED Candle",
    category: "Listing Images",
    description: "Ambient lighting product showcase",
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
    title: "Fan Heater",
    category: "Listing Images",
    description: "Home appliance product visualization",
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
    title: "Digital Weight Scale",
    category: "Listing Images",
    description: "Health and fitness product photography",
    images: [
      "/projects/10/u1.png",
      "/projects/10/u2.png",
      "/projects/10/u3.png",
      "/projects/10/u4.png",
      "/projects/10/u5.png",
      "/projects/10/u6.png",
    ],
  },
  {
    id: 10,
    title: "Premium Product A",
    category: "A+",
    description: "Professional product showcase design",
    images: ["/A+/01/1.jpg"],
  },
  {
    id: 11,
    title: "Premium Product B",
    category: "A+",
    description: "Elite marketing visual design",
    images: ["/A+/02/2.png"],
  },
  {
    id: 12,
    title: "Premium Product C",
    category: "A+",
    description: "Luxury brand presentation",
    images: ["/A+/03/3.jpg"],
  },
  {
    id: 13,
    title: "Premium Product D",
    category: "A+",
    description: "High-end product photography",
    images: ["/A+/04/4.jpg"],
  },
  {
    id: 14,
    title: "Premium Product E",
    category: "A+",
    description: "Executive design presentation",
    images: ["/A+/05/5.png"],
  },
  {
    id: 15,
    title: "Premium Product F",
    category: "A+",
    description: "Premium visual branding",
    images: ["/A+/06/6.png"],
  },
  {
    id: 16,
    title: "Premium Product G",
    category: "A+",
    description: "Sophisticated product design",
    images: ["/A+/07/7.png"],
  },
  {
    id: 17,
    title: "Premium Product H",
    category: "A+",
    description: "Deluxe marketing material",
    images: ["/A+/08/8.png"],
  },
  {
    id: 18,
    title: "Premium Product I",
    category: "A+",
    description: "Exclusive design showcase",
    images: ["/A+/09/9.jpg"],
  },
  {
    id: 19,
    title: "Premium Product J",
    category: "A+",
    description: "Ultimate product presentation",
    images: ["/A+/10/10.png"],
  },
  {
    id: 20,
    title: "Premium Product K",
    category: "A+",
    description: "Superior visual design",
    images: ["/A+/11/11.jpg"],
  },
];

export default function CompletePortfolio() {
  const [selected, setSelected] = useState(null);
  const [currentImg, setCurrentImg] = useState(0);
  const [visibleProjects, setVisibleProjects] = useState([]);
  const [filter, setFilter] = useState("All");
  const [imageLoaded, setImageLoaded] = useState({});
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [preloadedImages, setPreloadedImages] = useState(new Set());
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalAnimation, setModalAnimation] = useState("");

  const categories = ["All", ...new Set(projects.map((p) => p.category))];

  // Memoize filteredProjects to avoid infinite render loop
  const filteredProjects = useMemo(() => {
    return filter === "All" ? projects : projects.filter((p) => p.category === filter);
  }, [filter]);

  const preloadImage = useCallback(
    (src) => {
      if (preloadedImages.has(src)) return Promise.resolve();
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
          setPreloadedImages((prev) => new Set([...prev, src]));
          resolve();
        };
        img.onerror = resolve;
        img.src = src;
      });
    },
    [preloadedImages]
  );

  useEffect(() => {
    if (selected) {
      selected.images.forEach((img) => preloadImage(img));
    }
  }, [selected, preloadImage]);

  useEffect(() => {
    setVisibleProjects([]);
    const timer = setTimeout(() => {
      filteredProjects.forEach((_, index) => {
        setTimeout(() => {
          setVisibleProjects((prev) => [...prev, index]);
        }, index * 60);
      });
    }, 100);

    return () => clearTimeout(timer);
  }, [filteredProjects]);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!selected) return;
      switch (e.key) {
        case "ArrowRight":
        case " ":
          e.preventDefault();
          nextImage();
          break;
        case "ArrowLeft":
          e.preventDefault();
          prevImage();
          break;
        case "Escape":
          e.preventDefault();
          closeModal();
          break;
        default:
          break;
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [selected, currentImg, isTransitioning]);

  const openModal = (project) => {
    setModalAnimation("opening");
    setSelected(project);
    setCurrentImg(0);
    setImageLoaded({});
    setIsModalVisible(true);
    document.body.style.overflow = "hidden";

    setTimeout(() => {
      setModalAnimation("open");
    }, 50);
  };

  const closeModal = () => {
    setModalAnimation("closing");
    setTimeout(() => {
      setSelected(null);
      setIsModalVisible(false);
      setModalAnimation("");
      document.body.style.overflow = "auto";
    }, 300);
  };

  const changeImage = (direction) => {
    if (!selected || isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      const newIndex =
        direction > 0
          ? (currentImg + 1) % selected.images.length
          : (currentImg - 1 + selected.images.length) % selected.images.length;
      setCurrentImg(newIndex);
      setTimeout(() => setIsTransitioning(false), 100);
    }, 150);
  };

  const nextImage = () => changeImage(1);
  const prevImage = () => changeImage(-1);

  const handleImageLoad = (key) => setImageLoaded((prev) => ({ ...prev, [key]: true }));

  const jumpToImage = (index) => {
    if (isTransitioning || index === currentImg) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImg(index);
      setTimeout(() => setIsTransitioning(false), 100);
    }, 100);
  };

  // Check if current project is A+ category
  const isAPlusProject = selected && selected.category === "A+";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      {/* Header */}
      <div className="text-center py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-50/20 to-transparent"></div>
          <div className="absolute top-10 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-1/4 w-40 h-40 bg-gradient-to-r from-purple-200/20 to-pink-200/20 rounded-full blur-3xl"></div>
        </div>
        <div className="relative">
          <h1 className="text-7xl md:text-9xl font-extralight text-slate-900 mb-4 tracking-widest">PORTFOLIO</h1>
          <p className="text-slate-600 text-xl font-light max-w-2xl mx-auto leading-relaxed">
            A curated showcase of visual excellence and creative innovation
          </p>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="flex justify-center mb-20 px-4">
        <div className="flex flex-wrap gap-2 bg-white/90 backdrop-blur-xl rounded-3xl p-2 shadow-xl border border-slate-200/30">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-4 rounded-2xl font-medium transition-all duration-500 transform hover:scale-105 ${
                filter === cat
                  ? "bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white shadow-xl"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Portfolio Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              onClick={() => openModal(project)}
              className={`group cursor-pointer transform transition-all duration-700 hover:scale-105 hover:-translate-y-3 ${
                visibleProjects.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
              }`}
              style={{ transitionDelay: `${index * 60}ms`, transformOrigin: "center bottom" }}
            >
              <div className="relative overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-700 border border-slate-200/40 aspect-[4/5]">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  onLoad={() => handleImageLoad(`${project.id}-0`)}
                  className={`w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 ${
                    imageLoaded[`${project.id}-0`] ? "opacity-100" : "opacity-0"
                  }`}
                />
              </div>
              <h3 className="mt-2 text-lg font-bold">{project.title}</h3>
              <p className="text-sm text-slate-500 line-clamp-2">{project.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalVisible && selected && (
        <div
          className={`fixed inset-0 bg-black/95 backdrop-blur-xl flex items-center justify-center z-50 p-4 transition-all duration-300 ${
            modalAnimation === "opening"
              ? "opacity-0"
              : modalAnimation === "open"
              ? "opacity-100"
              : modalAnimation === "closing"
              ? "opacity-0"
              : "opacity-100"
          }`}
        >
          <div className={`bg-white rounded-3xl shadow-2xl w-full overflow-hidden transition-all duration-500 ${
            isAPlusProject ? "max-w-[95vw] max-h-[95vh]" : "max-w-7xl max-h-[95vh]"
          }`}>
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-white sticky top-0 z-10">
              <h3 className="text-2xl md:text-4xl font-bold text-slate-900 truncate pr-4">{selected.title}</h3>
              <button 
                onClick={closeModal} 
                className="text-slate-400 hover:text-slate-800 flex-shrink-0 p-2 hover:bg-slate-100 rounded-full transition-colors"
              >
                <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Image Container - Special handling for A+ images */}
            <div className={`relative bg-black/5 flex items-center justify-center ${
              isAPlusProject 
                ? "max-h-[60vh] overflow-y-auto" 
                : "max-h-[70vh] overflow-hidden"
            }`}>
              <div className={`${isAPlusProject ? "w-full" : "flex items-center justify-center"}`}>
                <img
                  src={selected.images[currentImg]}
                  alt={`${selected.title} image ${currentImg + 1}`}
                  className={`transition-transform duration-500 ${
                    isTransitioning ? "scale-105 opacity-0" : "scale-100 opacity-100"
                  } ${
                    isAPlusProject 
                      ? "w-full h-auto max-w-none" 
                      : "max-h-[70vh] max-w-full object-contain"
                  }`}
                />
              </div>

              {/* Navigation Buttons */}
              {selected.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/50 hover:bg-black/70 p-3 rounded-full transition-all z-10"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/50 hover:bg-black/70 p-3 rounded-full transition-all z-10"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}
            </div>

            {/* Thumbnail Navigation */}
            {selected.images.length > 1 && (
              <div className="flex overflow-x-auto p-4 space-x-2 bg-white border-t border-slate-100 scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-slate-100">
                {selected.images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    onClick={() => jumpToImage(idx)}
                    className={`h-16 w-16 md:h-24 md:w-24 object-cover rounded-xl cursor-pointer border-4 transition-all flex-shrink-0 ${
                      currentImg === idx ? "border-slate-900 scale-105" : "border-transparent hover:border-slate-300"
                    }`}
                  />
                ))}
              </div>
            )}

            {/* Image Counter */}
            {selected.images.length > 1 && (
              <div className="absolute top-20 right-6 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                {currentImg + 1} / {selected.images.length}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}