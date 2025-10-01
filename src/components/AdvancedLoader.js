'use client';

import React, { useState, useEffect } from 'react';

const BasicLoader = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState(0);

  const loadingTexts = [
    "Initializing...",
    "Loading Assets...",
    "Preparing Experience...",
    "Almost Ready...",
    "Welcome!"
  ];

  useEffect(() => {
    if (sessionStorage.getItem("loaderShown")) {
      setLoading(false);
      return;
    }

    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => {
            setLoading(false);
            sessionStorage.setItem("loaderShown", "true");
          }, 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);

    const textInterval = setInterval(() => {
      setCurrentText(prev => (prev + 1) % loadingTexts.length);
    }, 800);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
    };
  }, []);

  if (!loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-black mb-4 animate-pulse">
            BRAND GRID
          </h1>
          <p className="text-gray-700 text-xl">
            Welcome to my digital space
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 bg-white flex flex-col items-center justify-center">
      {/* Logo/Brand Loader */}
      <div className="mb-12">
        <div className="relative">
          <div className="w-24 h-24 border-4 border-black rounded-full mx-auto mb-6 animate-spin">
            <div
              className="w-16 h-16 border-4 border-transparent border-t-black rounded-full animate-spin absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              style={{ animationDirection: 'reverse', animationDuration: '0.8s' }}
            />
          </div>
        </div>
      </div>

      {/* Brand Name */}
      <h1 className="text-4xl font-bold text-black mb-6 tracking-wider">
        BRAND GRID
      </h1>

      {/* Loading Text */}
      <h2 className="text-xl text-gray-700 mb-6">
        {loadingTexts[currentText]}
        <span className="animate-pulse ml-1">|</span>
      </h2>

      {/* Progress Bar */}
      <div className="w-80 mx-auto">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-600">Progress</span>
          <span className="text-sm text-black font-mono">
            {Math.round(progress)}%
          </span>
        </div>

        <div className="w-full bg-gray-300 rounded-full h-2 overflow-hidden">
          <div
            className="h-full bg-black rounded-full transition-all duration-300 ease-out relative"
            style={{ width: `${Math.min(progress, 100)}%` }}
          >
            <div className="absolute inset-0 bg-gray-500 opacity-50 animate-pulse rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicLoader;
