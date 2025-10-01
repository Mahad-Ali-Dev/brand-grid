"use client";
import { useState } from "react";
import { Mail, MapPin, Send, CheckCircle, User, MessageSquare, Star, Zap, Award } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", project: "" });
  const [selectedService, setSelectedService] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const services = [
    { name: "Amazon Listing", icon: "🛒", color: "from-white to-gray-200", desc: "Product optimization" },
    { name: "A+ Image Editing", icon: "🎨", color: "from-white to-gray-200", desc: "Professional retouching" },
    { name: "Retouching", icon: "✨", color: "from-white to-gray-200", desc: "Photo enhancement" },
    { name: "Video Editing", icon: "🎬", color: "from-white to-gray-200", desc: "Creative production" },
    { name: "Website Development", icon: "💻", color: "from-white to-gray-200", desc: "Custom web solutions" },
    { name: "Mobile Development", icon: "📱", color: "from-white to-gray-200", desc: "iOS & Android apps" },
    { name: "Other", icon: "🔧", color: "from-white to-gray-200", desc: "Custom solutions" },
  ];

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
    if (!formData.project.trim()) newErrors.project = "Project description is required";
    if (!selectedService) newErrors.service = "Please select a service";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const handleServiceClick = (service) => {
    setSelectedService(service);
    if (errors.service) {
      setErrors({ ...errors, service: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    const payload = {
      name: formData.name,
      email: formData.email,
      project: formData.project,
      service: selectedService,
      timestamp: new Date().toISOString(),
    };

    try {
      const googleSheetUrl =
        "https://script.google.com/macros/s/AKfycby_OOIvgnwsS80wxf6pj0F2xrJYCFrNyW8Jksoee9vkvXZ4YAYextk7BVBaiwHETc2LHA/exec";

      await fetch(googleSheetUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
        mode: "no-cors",
      });

      console.log("Form data successfully sent to Google Sheets:", payload);
      setIsSubmitted(true);

      setFormData({ name: "", email: "", project: "" });
      setSelectedService("");
      setErrors({});

      setTimeout(() => {
        setIsSubmitted(false);
      }, 4000);
    } catch (error) {
      console.error("Google Sheets submission error:", error);
      alert("Message send nahi hui! Internet connection check karein aur phir try karein.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Clean Black Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black"></div>
        <div className="absolute top-20 left-20 w-32 h-32 border border-white/10 rotate-45 animate-pulse"></div>
        <div className="absolute bottom-32 right-32 w-24 h-24 border border-white/20 rounded-full animate-bounce"></div>
        <div
          className="absolute top-1/2 left-10 w-16 h-16 bg-white/5 rotate-12 animate-spin"
          style={{ animationDuration: "20s" }}
        ></div>
      </div>

      <div className="relative z-10 pt-24 p-6 md:p-8">
        {/* Premium Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-white text-black rounded-full px-8 py-4 mb-8 shadow-2xl hover:shadow-white/20 transition-all duration-300 hover:scale-105">
            <Mail className="w-6 h-6" />
            <a
              href="mailto:Brand_Grid@hotmail.com"
              className="font-bold text-lg hover:text-gray-700 transition-colors"
            >
              Brand_Grid@hotmail.com
            </a>
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          </div>

          <div className="relative">
            <h1 className="text-7xl md:text-8xl font-black mb-6 tracking-tight">
              <span className="text-white">LET'S</span>
              <br />
              <span className="bg-white text-black px-4 py-2 inline-block transform -rotate-2 shadow-2xl">
                CREATE
              </span>
            </h1>
            <Star
              className="absolute -top-4 -right-8 w-8 h-8 text-white animate-spin"
              style={{ animationDuration: "3s" }}
            />
          </div>

          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            Premium digital services that transform your vision into reality.
            <span className="text-white font-semibold"> Excellence guaranteed.</span>
          </p>

          <div className="flex justify-center items-center gap-8 mt-8 text-gray-400">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-white" />
              <span className="font-medium">5+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-white" />
              <span className="font-medium">24/7 Support</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-white" />
              <span className="font-medium">100% Satisfaction</span>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-white">CHOOSE YOUR</span>
              <span className="bg-white text-black px-4 py-1 ml-4 inline-block">SERVICE</span>
            </h2>
            <p className="text-gray-400 text-lg">Select the service that best fits your needs</p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {services.map((service, index) => (
              <button
                key={service.name}
                onClick={() => handleServiceClick(service.name)}
                className={`group relative overflow-hidden rounded-xl p-4 transition-all duration-500 transform hover:scale-105 border-2 ${
                  selectedService === service.name
                    ? "bg-white text-black border-white shadow-2xl shadow-white/30"
                    : "bg-black border-white/20 hover:border-white/60 hover:bg-white/5"
                } hover:shadow-2xl`}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {selectedService === service.name && (
                  <div className="absolute top-4 right-4">
                    <CheckCircle className="w-6 h-6 text-black" />
                  </div>
                )}

                <div className="text-center">
                  <div className="text-2xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="font-bold text-sm mb-1 leading-tight">{service.name}</h3>
                  <p
                    className={`text-xs opacity-80 ${
                      selectedService === service.name ? "text-black/70" : "text-gray-400"
                    }`}
                  >
                    {service.desc}
                  </p>
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              </button>
            ))}
          </div>

          {errors.service && <p className="text-red-400 text-center mt-4 font-medium">⚠️ {errors.service}</p>}
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white text-black rounded-3xl p-8 shadow-2xl border-4 border-white">
            {isSubmitted ? (
              <div className="text-center py-16">
                <div className="relative inline-block">
                  <CheckCircle className="w-24 h-24 text-green-500 mx-auto mb-6 animate-bounce" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full animate-ping"></div>
                </div>
                <h3 className="text-4xl font-black mb-4">MESSAGE SENT!</h3>
                <p className="text-xl text-gray-600 mb-6">
                  Thank you for choosing us. We'll get back to you within 24 hours.
                </p>
                <div className="text-sm text-gray-500">Response time: Usually under 2 hours</div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-black mb-3">
                    TELL US ABOUT YOUR
                    <span className="bg-black text-white px-3 py-1 ml-2 inline-block transform rotate-1">PROJECT</span>
                  </h3>
                  <p className="text-gray-600 text-base">Let's bring your vision to life together</p>
                </div>

                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-base font-bold text-black">
                    <User className="w-5 h-5" />
                    FULL NAME *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full bg-gray-50 border-3 rounded-xl px-5 py-3 text-black text-base font-medium placeholder-gray-500 transition-all duration-200 ${
                      errors.name ? "border-red-500" : "border-gray-200 focus:border-black"
                    } focus:outline-none focus:shadow-lg`}
                    placeholder="Enter your full name"
                  />
                  {errors.name && <p className="text-red-500 font-medium">⚠️ {errors.name}</p>}
                </div>

                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-base font-bold text-black">
                    <Mail className="w-5 h-5" />
                    EMAIL ADDRESS *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full bg-gray-50 border-3 rounded-xl px-5 py-3 text-black text-base font-medium placeholder-gray-500 transition-all duration-200 ${
                      errors.email ? "border-red-500" : "border-gray-200 focus:border-black"
                    } focus:outline-none focus:shadow-lg`}
                    placeholder="your@email.com"
                  />
                  {errors.email && <p className="text-red-500 font-medium">⚠️ {errors.email}</p>}
                </div>

                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-base font-bold text-black">
                    <MessageSquare className="w-5 h-5" />
                    PROJECT DETAILS *
                  </label>
                  <textarea
                    name="project"
                    value={formData.project}
                    onChange={handleChange}
                    rows={4}
                    className={`w-full bg-gray-50 border-3 rounded-xl px-5 py-3 text-black text-base font-medium placeholder-gray-500 transition-all duration-200 resize-none ${
                      errors.project ? "border-red-500" : "border-gray-200 focus:border-black"
                    } focus:outline-none focus:shadow-lg`}
                    placeholder="Describe your project in detail. Include your goals, timeline, budget range, and any specific requirements..."
                  />
                  {errors.project && <p className="text-red-500 font-medium">⚠️ {errors.project}</p>}
                </div>

                {selectedService && (
                  <div className="bg-black text-white rounded-xl p-6 border-2 border-black">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-300 mb-1">SELECTED SERVICE</p>
                        <p className="text-xl font-bold">{selectedService}</p>
                      </div>
                      <CheckCircle className="w-8 h-8 text-green-400" />
                    </div>
                  </div>
                )}

                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className={`w-full py-6 rounded-xl text-xl font-black flex items-center justify-center gap-4 transition-all duration-300 transform ${
                    isSubmitting
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-black text-white hover:bg-gray-800 hover:scale-105 shadow-2xl hover:shadow-black/50"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-7 h-7 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
                      SENDING MESSAGE...
                    </>
                  ) : (
                    <>
                      <Send className="w-7 h-7" />
                      SEND MESSAGE NOW
                    </>
                  )}
                </button>

                <div className="text-center text-gray-500 text-sm">
                  By submitting this form, you agree to our terms of service and privacy policy.
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer Contact Info */}
        <div className="mt-20 text-center">
          <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h4 className="text-2xl font-bold mb-6 text-white">GET IN TOUCH</h4>
            <div className="grid grid-cols-1 gap-6 text-gray-300">
              <div className="flex flex-col items-center gap-3">
                <MapPin className="w-8 h-8 text-white" />
                <span className="font-semibold">LOCATION</span>
                <span>1234 Market Street, San Francisco, CA 94103</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
