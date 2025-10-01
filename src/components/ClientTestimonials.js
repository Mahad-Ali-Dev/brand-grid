"use client";

import { Star } from "lucide-react";

function Stars({ rating }) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;

  return (
    <div className="flex items-center text-yellow-500">
      {Array(fullStars)
        .fill(0)
        .map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-yellow-500" />
        ))}
      {halfStar && (
        <Star className="w-5 h-5 fill-yellow-500 opacity-70" />
      )}
    </div>
  );
}

export default function ClientTestimonials() {
  const testimonials = [
    {
      title: "⭐ Review 1 – 500 Product Listing Images",
      rating: 5,
      review:
        "Working with BrandsGrid was an excellent experience. Deep research, creative visuals, and premium design quality went into every one of the 500 product listing images. Their team understands Amazon buyer psychology and delivered on time without compromising quality. These images not only matched our brand guidelines but also improved our conversion rates significantly.",
      author: "— Deepak Mansukhani",
    },
    {
      title: "⭐ Review 2 – 500 EBCs",
      rating: 5,
      review:
        "BrandsGrid designed 500 EBC modules for our Amazon brands, and the results were outstanding. Each module was well-structured, keyword-focused, and visually engaging. They balanced creativity with professionalism, ensuring that our products stood out in a competitive market. Their expertise in A+ Content is unmatched, and they have become a reliable long-term partner for us.",
      author: "— Deepak Mansukhani",
    },
    {
      title: "⭐ Review 3 – Wholesale 25 Brands Holding Website",
      rating: 5,
      review:
        "We trusted BrandsGrid with building a wholesale website for 25 brands under one holding company, and they delivered beyond expectations. From sleek UI/UX to smooth functionality, the website was professional, fast, and SEO-ready. Their team handled everything from planning to execution, giving us a platform that showcases our brands in the best way possible. I highly recommend them for web development and automation solutions.",
      author: "— Deepak Mansukhani",
    },
    {
      title: "BARF Pet Foods",
      rating: 5,
      review:
        "We first hired BrandsGrid to design our BARF Pet Foods website, and the results were excellent. The site looked professional, modern, and perfectly represented our brand values. Because we were so satisfied with their work, we trusted them with our Amazon listings and A+ Content. Once again, they delivered beyond expectations — the designs were creative, customer-focused, and aligned with our pet food brand identity. Their work helped us build trust with pet owners and improve our online presence across platforms.",
      author: "— Michael, BARF Pet Foods",
    },
    {
      title: "Boss Projector (Canada)",
      rating: 5,
      review:
        "We approached BrandsGrid to develop our Boss Projector website, and they exceeded our expectations with a sleek, professional, and user-friendly design. Impressed by the quality and attention to detail, we later assigned them our Amazon listings and A+ Content. The results were equally impressive — creative visuals, keyword-rich layouts, and designs that built strong customer trust. BrandsGrid has proven to be a reliable digital partner for both web development and Amazon brand growth.",
      author: "— Jagmohan Kapoor, Boss Projector Canada",
    },
    {
      title: "PakCart",
      rating: 5,
      review:
        "Working with the BrandsGrid team on our PakCart website was an excellent experience. Their team beauty truly shows in the way they combine creativity, professionalism, and technical expertise. The website they delivered was clean, modern, and responsive, perfectly reflecting our business goals. Every step of the process was smooth, and the team’s attention to detail stood out. I would highly recommend BrandsGrid for businesses looking for a premium and scalable website.",
      author: "— Oun Ahmar, PakCart",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Clients experience of Brand Grid services
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-white shadow-lg rounded-xl p-8 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
                <div className="flex items-center mt-2">
                  <Stars rating={item.rating} />
                </div>
                <hr className="my-4" />
                <p className="text-gray-700 italic">“{item.review}”</p>
                <p className="mt-4 text-gray-900 font-medium">
                  {item.author}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
