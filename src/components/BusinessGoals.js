"use client";

import { ShieldCheck, Clock, CheckCircle, Cog } from "lucide-react";
import Link from "next/link";

export default function BusinessGoals() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Grow up fast and reach your business goals
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Content is a key to Boost Your Sales. <br />
          Choose the service you need.
        </p>

        {/* Features */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="flex flex-col items-center text-center">
            <ShieldCheck className="w-12 h-12 text-gray-900 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900">
              Security payment
            </h3>
            <p className="mt-2 text-gray-600 text-sm">
              Pay via only a verified and secured payment system
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <CheckCircle className="w-12 h-12 text-gray-900 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900">
              High-quality result
            </h3>
            <p className="mt-2 text-gray-600 text-sm">
              Professionals and creatives with 10+ years of experience
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <Cog className="w-12 h-12 text-gray-900 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900">
              Innovative solution
            </h3>
            <p className="mt-2 text-gray-600 text-sm">
              Modern, competitive ideas and solutions for all kind of businesses
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <Clock className="w-12 h-12 text-gray-900 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900">
              Fast turnaround
            </h3>
            <p className="mt-2 text-gray-600 text-sm">
              MySpace works 24/7 and provides the best quality in the shortest
              time
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-12 flex justify-center gap-6">
          <Link
            href="/portfolio"
            className="px-8 py-3 bg-gray-900 text-white font-semibold rounded-md shadow hover:bg-gray-800 transition"
          >
            Portfolio
          </Link>
          <Link
            href="/contact"
            className="px-8 py-3 border border-gray-300 font-semibold rounded-md shadow hover:bg-gray-100 transition"
          >
            Send Request
          </Link>
        </div>
      </div>
    </section>
  );
}
