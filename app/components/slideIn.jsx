"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const heroSlides = [
  {
    title: "کناف سازه غرب",
    subtitle: "فروش و تأمین محصولات کناف",
    desc: "فروش پنل‌های کناف، صفحات گچی، سازه، پروفیل، پیچ و اتصالات کناف با کیفیت بالا و قیمت رقابتی.",
    bg: "from-cyan-50 via-blue-50 to-indigo-50",
  },
  {
    title: "اجرای تخصصی کناف",
    subtitle: "سقف کاذب و دیوار کناف",
    desc: "اجرای سقف کاذب، دیوار کناف و دکوراسیون داخلی با استفاده از مصالح استاندارد و باکیفیت.",
    bg: "from-indigo-50 via-purple-50 to-pink-50",
  },
  {
    title: "مشاوره و تأمین کناف",
    subtitle: "مشاوره تخصصی قبل از خرید",
    desc: "برای انتخاب مصالح، برآورد متریال و تأمین تجهیزات موردنیاز پروژه کناف با ما در ارتباط باشید.",
    bg: "from-purple-50 via-pink-50 to-rose-50",
  },
];

const slideIn = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function HeroSlider() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => setActiveSlide(index);

  const prevSlide = () =>
    setActiveSlide((prev) =>
      prev === 0 ? heroSlides.length - 1 : prev - 1
    );

  const nextSlide = () =>
    setActiveSlide((prev) => (prev + 1) % heroSlides.length);

  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
    >
      {/* پس‌زمینه متحرک */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-10 top-1/4 h-80 w-80 animate-pulse rounded-full bg-indigo-300/15 blur-3xl" />

        <div className="absolute bottom-1/4 right-10 h-96 w-96 animate-pulse rounded-full bg-purple-300/15 blur-3xl delay-1000" />

        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-pink-300/10 blur-3xl delay-2000" />
      </div>

      <div className="relative h-full w-full">
        <AnimatePresence mode="wait">
          {heroSlides.map((slide, index) =>
            index === activeSlide ? (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  scale: 0.98,
                  rotate: -2,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  rotate: 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 1.02,
                  rotate: 2,
                }}
                transition={{
                  duration: 0.8,
                  ease: "easeInOut",
                }}
                className={`absolute inset-0 flex items-center bg-gradient-to-br ${slide.bg}`}
              >
                <div className="mx-auto w-full max-w-7xl px-6 py-24 lg:px-8">
                  <div className="grid items-center gap-16 lg:grid-cols-2">

                    {/* متن */}
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      variants={slideIn}
                      custom={0.2}
                      className="space-y-6"
                    >
                      <div className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/70 px-5 py-2 text-sm font-medium text-indigo-700 shadow-lg shadow-indigo-500/5 backdrop-blur-sm">
                        <span className="relative flex h-2 w-2">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75" />
                          <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-600" />
                        </span>

                        {slide.subtitle}
                      </div>

                      {/*
                        فقط اسلاید اول H1 دارد.
                        اسلایدهای بعدی H2 هستند.
                      */}
                      {index === 0 ? (
                        <h1
                          id="hero-title"
                          className="text-5xl font-black leading-tight tracking-tight text-slate-800 md:text-7xl"
                        >
                          {slide.title}

                          <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                            فروش پنل‌های کناف و محصولات کناف
                          </span>
                        </h1>
                      ) : (
                        <h2 className="text-5xl font-black leading-tight tracking-tight text-slate-800 md:text-7xl">
                          {slide.title}

                          <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                            {slide.subtitle}
                          </span>
                        </h2>
                      )}

                      <p className="max-w-xl text-lg leading-8 text-slate-600">
                        {slide.desc}
                      </p>

                      <div className="flex flex-wrap gap-4 pt-2">
                        <a
                          href="#products"
                          className="group relative overflow-hidden rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 px-8 py-4 font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/30"
                        >
                          <span className="relative z-10">
                            مشاهده محصولات کناف
                          </span>

                          <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-full" />
                        </a>

                        <a
                          href="tel:09123480518"
                          aria-label="تماس با کناف سازه غرب"
                          className="group relative overflow-hidden rounded-full border border-slate-300 bg-white/60 px-8 py-4 font-bold text-slate-700 backdrop-blur-sm transition-all duration-300 hover:border-indigo-500 hover:text-indigo-700 hover:shadow-xl hover:shadow-indigo-500/10"
                        >
                          دریافت مشاوره
                        </a>
                      </div>
                    </motion.div>

                    {/* بخش گرافیکی */}
                    <motion.div
                      initial={{
                        opacity: 0,
                        scale: 0.8,
                        rotate: -6,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        rotate: 0,
                      }}
                      transition={{
                        delay: 0.3,
                        duration: 0.8,
                        type: "spring",
                        stiffness: 100,
                      }}
                      className="relative flex items-center justify-center"
                      aria-hidden="true"
                    >
                      <div className="relative aspect-square w-full max-w-md">
                        <div className="absolute inset-0 animate-pulse rounded-full bg-gradient-to-tr from-indigo-200/40 to-purple-400/20 blur-2xl" />

                        <div className="absolute inset-[6%] flex flex-col items-center justify-center rounded-[2.5rem] border border-white/30 bg-white/60 p-6 shadow-2xl shadow-indigo-500/10 backdrop-blur-2xl">
                          <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-700 text-4xl font-black text-white shadow-xl shadow-indigo-500/30">
                            کغ
                          </div>

                          <div className="text-2xl font-black tracking-tight text-slate-800">
                            کناف سازه غرب
                          </div>

                          <div className="mt-1 text-sm tracking-widest text-slate-500">
                            کیفیت • اعتماد • تخصص
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ) : null
          )}
        </AnimatePresence>
      </div>

      {/* کنترل اسلایدر */}
      <div className="absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 items-center gap-4">
        <button
          type="button"
          onClick={prevSlide}
          aria-label="اسلاید قبلی"
          className="rounded-full bg-white/80 p-2 text-slate-700 shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-indigo-600"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <div className="flex gap-2" aria-label="انتخاب اسلاید">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goToSlide(i)}
              aria-label={`نمایش اسلاید ${i + 1}`}
              aria-current={i === activeSlide ? "true" : undefined}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === activeSlide
                  ? "w-8 bg-gradient-to-r from-indigo-600 to-purple-600"
                  : "w-2 bg-slate-300"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={nextSlide}
          aria-label="اسلاید بعدی"
          className="rounded-full bg-white/80 p-2 text-slate-700 shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-indigo-600"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}