"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Home,
  Package,
  Wrench,
  Mail,
  Sparkles,
  Building2,
} from "lucide-react";

const navItems = [
  {
    label: "خانه",
    href: "#home",
    icon: Home,
  },
  {
    label: "محصولات کناف",
    href: "#products",
    icon: Package,
  },
  {
    label: "پروژه‌ها",
    href: "#projects",
    icon: Building2,
  },
  {
    label: "خدمات کناف",
    href: "#services",
    icon: Wrench,
  },
  {
    label: "تماس با ما",
    href: "#contact",
    icon: Mail,
  },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* =========================================================
          DESKTOP HEADER
      ========================================================= */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
        className={`fixed inset-x-0 top-0 z-50 hidden h-20 transition-all duration-500 md:block ${
          scrolled
            ? "border-b border-white/40 bg-white/75 shadow-2xl shadow-indigo-500/10 backdrop-blur-2xl"
            : "bg-black/10 backdrop-blur-[2px]"
        }`}
      >
        <div className="mx-auto flex h-full w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          {/* =====================================================
              LOGO
          ===================================================== */}
          <a
            href="#home"
            aria-label="کناف سازه غرب - صفحه اصلی"
            className="relative flex shrink-0 items-center gap-2 text-xl font-black tracking-tight sm:text-2xl"
          >
            <span
              aria-hidden="true"
              className="relative flex h-7 w-7 shrink-0 items-center justify-center"
            >
              <Sparkles className="relative z-10 h-6 w-6 text-indigo-500 drop-shadow-[0_0_8px_rgba(99,102,241,0.6)]" />

              <span className="absolute inset-0 rounded-full bg-indigo-400/20 blur-xl" />
            </span>

            <span
              className={`transition-colors duration-500 ${
                scrolled ? "text-slate-800" : "text-white"
              }`}
            >
              کناف سازه
            </span>

            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              غرب
            </span>

            <span
              aria-hidden="true"
              className="ml-1 h-2 w-2 shrink-0 animate-pulse rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 shadow-[0_0_10px_#6366f1]"
            />
          </a>

          {/* =====================================================
              DESKTOP NAVIGATION
          ===================================================== */}
          <nav
            aria-label="منوی اصلی"
            className="flex min-w-0 items-center justify-center gap-3 text-sm font-medium lg:gap-5"
          >
            {navItems.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                className={`group relative flex shrink-0 items-center gap-1.5 px-1.5 py-2 transition-colors duration-300 ${
                  scrolled
                    ? "text-slate-600 hover:text-indigo-700"
                    : "text-white/80 hover:text-white"
                }`}
              >
                <Icon
                  aria-hidden="true"
                  className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:scale-110"
                />

                <span className="whitespace-nowrap">
                  {label}
                </span>

                <span
                  aria-hidden="true"
                  className="absolute -bottom-0.5 left-0 h-[2px] w-0 bg-gradient-to-r from-indigo-500 to-purple-500 shadow-[0_0_6px_#6366f1] transition-all duration-300 group-hover:w-full"
                />
              </a>
            ))}
          </nav>

          {/* =====================================================
              CALL BUTTON
          ===================================================== */}
          <a
            href="tel:+989123480518"
            aria-label="تماس با کناف سازه غرب"
            className="group relative flex shrink-0 items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-[length:200%_200%] px-4 py-2 text-sm font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/30 animate-gradient lg:px-5"
          >
            <Phone
              aria-hidden="true"
              className="h-4 w-4 shrink-0"
            />

            <span className="whitespace-nowrap">
              تماس با ما
            </span>

            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-70"
            />
          </a>
        </div>
      </motion.header>

      {/* =========================================================
          MOBILE BOTTOM NAV
      ========================================================= */}
      <motion.header
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
        className="fixed inset-x-0 bottom-0 z-50 block w-full max-w-full overflow-hidden border-t border-white/30 bg-white/85 shadow-2xl shadow-indigo-500/5 backdrop-blur-2xl md:hidden"
      >
        <nav
          aria-label="منوی موبایل"
          className="mx-auto flex w-full max-w-full items-center justify-around px-1 py-1.5"
        >
          {navItems.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              className="group relative flex min-w-0 flex-1 flex-col items-center justify-center rounded-xl px-1 py-1 text-[10px] font-medium text-slate-600 transition-all duration-200 hover:bg-indigo-50/70 hover:text-indigo-700"
            >
              <Icon
                aria-hidden="true"
                className="h-5 w-5 shrink-0 transition-transform duration-200 group-hover:scale-110"
              />

              <span className="mt-1 whitespace-nowrap leading-none">
                {label}
              </span>

              <span
                aria-hidden="true"
                className="absolute bottom-0 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-indigo-500 opacity-0 shadow-[0_0_8px_#6366f1] transition-opacity group-hover:opacity-100"
              />
            </a>
          ))}
        </nav>
      </motion.header>

      {/* Mobile bottom-nav spacing */}
      <div className="h-16 md:hidden" />

      {/* =========================================================
          ANIMATIONS
      ========================================================= */}
      <style jsx>{`
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
          animation: gradient 3s ease infinite;
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </>
  );
}