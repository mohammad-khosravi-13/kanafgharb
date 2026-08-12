"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      dir="rtl"
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-dvh w-full max-w-full items-center justify-center overflow-hidden bg-[#080d18]"
    >
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 -z-20 h-full w-full overflow-hidden">
        <Image
          src="/kanafgharb.png"
          alt="کناف سازه غرب؛ فروش و تأمین پنل‌های کناف"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-[#080d18]/65" />

        <div className="absolute inset-0 bg-gradient-to-b from-[#080d18]/75 via-[#080d18]/50 to-[#080d18]" />

        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#080d18] to-transparent" />
      </div>

      {/* ================= LIGHT EFFECTS ================= */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -inset-[25%] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08)_0%,transparent_65%)] animate-pulse" />

        <div className="absolute left-[20%] top-[35%] h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400/5 blur-3xl animate-[float_6s_ease-in-out_infinite]" />

        <div className="absolute bottom-[25%] right-[25%] h-40 w-40 translate-x-1/2 translate-y-1/2 rounded-full bg-indigo-400/5 blur-3xl animate-[float_8s_ease-in-out_infinite_reverse]" />
      </div>

      {/* ================= QUALITY BADGE ================= */}
      <motion.div
        initial={{
          opacity: 0,
          y: -20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.6,
          duration: 0.6,
        }}
        className="absolute left-4 top-4 z-20 flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] font-medium text-white/60 backdrop-blur-md sm:left-6 sm:top-6 sm:px-4 sm:py-2 sm:text-xs"
      >
        <Sparkles className="h-3 w-3 shrink-0 text-blue-300 sm:h-4 sm:w-4" />

        <span className="whitespace-nowrap">
          فروش و تأمین محصولات کناف
        </span>
      </motion.div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="relative z-10 mx-auto w-full max-w-4xl px-4 text-center sm:px-6">
        {/* H1 */}
        <motion.h1
          id="hero-title"
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="font-black tracking-tight"
          style={{
            fontSize: "clamp(2.8rem, 10vw, 7rem)",
            lineHeight: 1.1,
          }}
        >
          <span className="bg-gradient-to-r from-blue-200 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
            کناف سازه
          </span>{" "}
          <span className="text-white">غرب</span>
        </motion.h1>

        {/* Neon line */}
        <motion.div
          initial={{
            width: 0,
            opacity: 0,
          }}
          animate={{
            width: "clamp(48px, 15vw, 80px)",
            opacity: 1,
          }}
          transition={{
            delay: 0.35,
            duration: 0.8,
          }}
          aria-hidden="true"
          className="relative mx-auto mt-4 h-[3px] max-w-[80px] rounded-full bg-gradient-to-r from-blue-400 to-indigo-400 shadow-[0_0_12px_#3b82f6]"
        >
          <div className="absolute -top-1 left-1/2 h-5 w-5 -translate-x-1/2 rounded-full bg-blue-400/30 blur-md" />
        </motion.div>

        {/* SEO Description */}
        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.2,
            duration: 0.8,
          }}
          className="mx-auto mt-5 w-full max-w-lg text-xs leading-7 text-white/70 sm:text-sm md:text-base lg:text-lg"
          style={{
            textShadow: "0 2px 20px rgba(0,0,0,0.5)",
          }}
        >
          فروش پنل های کناف، سازه و اتصالات با کیفیت مناسب و قیمت رقابتی.
          <br className="hidden sm:block" />
          تأمین محصولات کناف برای پروژه‌های ساختمانی در ملارد، تهران و کرج.
        </motion.p>

        {/* CTA */}
        <motion.a
          href="#products"
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.45,
            duration: 0.8,
          }}
          whileHover={{
            y: -3,
            scale: 1.02,
          }}
          whileTap={{
            scale: 0.97,
          }}
          className="group relative mx-auto mt-8 flex w-fit max-w-full items-center gap-3 overflow-hidden rounded-2xl border border-white/10 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur-xl transition-all duration-300 hover:bg-white/20 sm:px-8 sm:py-4 sm:text-base"
          style={{
            boxShadow:
              "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)",
          }}
        >
          <span className="pointer-events-none absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r from-blue-500 via-indigo-400 to-blue-500 bg-[length:200%_200%] opacity-40 blur-sm transition-opacity group-hover:opacity-70 animate-gradient" />

          <span className="whitespace-nowrap">
            مشاهده محصولات
          </span>

          <ArrowLeft className="h-5 w-5 shrink-0 transition-transform duration-300 group-hover:-translate-x-1" />
        </motion.a>
      </div>

      {/* ================= SCROLL INDICATOR ================= */}
      <motion.a
        href="#products"
        aria-label="مشاهده محصولات کناف"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1,
          duration: 0.8,
        }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/30 transition-colors hover:text-white/60 sm:bottom-6"
      >
        <motion.div
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative h-9 w-5 rounded-full border border-white/20 p-1.5 shadow-[inset_0_0_10px_rgba(59,130,246,0.2)]"
        >
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="mx-auto h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_12px_#3b82f6]"
          />

          <div className="absolute inset-0 rounded-full border border-blue-400/10" />
        </motion.div>
      </motion.a>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translate(0, 0);
          }

          50% {
            transform: translate(10px, -20px);
          }
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }

          50% {
            background-position: 100% 50%;
          }

          100% {
            background-position: 0% 50%;
          }
        }

        .animate-gradient {
          animation: gradient 4s ease infinite;
        }
      `}</style>
    </section>
  );
}