"use client";
import { useEffect, useState } from "react";

function Counter({ end, label, suffix = "+", duration = 2000 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const incrementTime = 30; // ms
    const step = Math.ceil((end / duration) * incrementTime);

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(start);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [end, duration]);

  return (
    <div className="flex flex-col items-center text-center p-6">
      <h2 className="text-5xl font-bold text-gray-900">
        {count}
        {suffix}
      </h2>
      <p className="mt-2 text-lg text-gray-600">{label}</p>
    </div>
  );
}

export default function WorldwideStats() {
  return (
    <section className="relative overflow-hidden bg-gray-50 mt-4 py-20 rounded-[2rem] shadow-2xl mx-4">
      {/* Background animated map */}
      <div className="absolute inset-0 z-0 opacity-15">
        <div className="w-full h-full bg-[url('/map.jpg')] bg-cover bg-center animate-slow-zoom"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
          Worldwide company
        </h1>
        <p className="mt-2 text-center text-gray-700 font-medium">
          No-LIMITS. NO-BORDERS.
        </p>
        <p className="text-center text-gray-600">
          MySpace provides services for people all over the World
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
          <Counter end={20} label="Countries with successful cooperation" />
          <Counter end={40} label="Types of businesses work with" />
          <Counter end={2000} label="Edited and retouched images" />
        </div>
      </div>
    </section>
  );
}
