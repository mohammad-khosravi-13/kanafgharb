"use client";

import { useEffect, useState } from "react";
import {
  Code2,
  ExternalLink,
  Globe,
  Sparkles,
  X,
} from "lucide-react";

export default function Footer() {
  const [developerOpen, setDeveloperOpen] = useState(false);

  useEffect(() => {
    if (!developerOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [developerOpen]);

  useEffect(() => {
    if (!developerOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setDeveloperOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [developerOpen]);

  return (
    <>
     <footer
  aria-label="پاورقی سایت کناف سازه غرب"
  className="border-t border-slate-200 bg-white pb-20 md:pb-0"
>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* ================= TOP ================= */}
          <div className="flex flex-col gap-5 py-6 sm:gap-7 sm:py-8 md:flex-row md:items-center md:justify-between">

            {/* Brand */}
            <div className="text-center md:text-right">
              <div className="flex items-center justify-center gap-2 md:justify-start">
                <span className="text-lg font-extrabold text-slate-900">
                  کناف سازه غرب
                </span>

                <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
              </div>

              <p className="mt-1 text-xs text-slate-500 sm:mt-1.5 sm:text-sm">
                فروش و تأمین تخصصی محصولات کناف
              </p>
            </div>

            {/* Navigation */}
            <nav
              aria-label="لینک‌های سایت"
              className="flex items-center justify-center gap-5 text-xs text-slate-500 sm:gap-8 sm:text-sm"
            >
              <a
                href="#services"
                className="transition-colors hover:text-indigo-700"
              >
                خدمات
              </a>

              <a
                href="#products"
                className="transition-colors hover:text-indigo-700"
              >
                محصولات
              </a>

              <a
                href="#contact"
                className="transition-colors hover:text-indigo-700"
              >
                تماس با ما
              </a>
            </nav>
          </div>

          {/* ================= BOTTOM ================= */}
          <div className="border-t border-slate-100 py-4 sm:py-6">
            <div className="flex flex-col items-center gap-3 sm:gap-5">

              {/* Copyright */}
              <p className="text-center text-[10px] leading-5 text-slate-400 sm:text-xs">
                © {new Date().getFullYear()} کناف سازه غرب
                <span className="mx-1.5 text-slate-300 sm:mx-2">
                  •
                </span>
                تمامی حقوق محفوظ است.
              </p>

              {/* ================= DEVELOPER ================= */}
              <button
                type="button"
                onClick={() => setDeveloperOpen(true)}
                className="
                  group
                  flex
                  w-auto
                  max-w-full
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-indigo-100
                  bg-gradient-to-l
                  from-indigo-50
                  via-white
                  to-white
                  px-3
                  py-2
                  text-right
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-indigo-200
                  hover:shadow-md
                  sm:gap-3
                  sm:px-4
                  sm:py-2.5
                "
              >
                {/* Icon */}
                <div
                  className="
                    flex
                    h-8
                    w-8
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-white
                    text-indigo-600
                    shadow-sm
                    ring-1
                    ring-indigo-100
                    transition-transform
                    duration-300
                    group-hover:scale-105
                    sm:h-8
                    sm:w-8
                  "
                >
                  <Code2 size={15} strokeWidth={1.8} />
                </div>

                {/* Text */}
                <div className="flex min-w-0 flex-col">
                  <span className="text-[9px] leading-3 text-slate-400 sm:text-[10px]">
                    طراحی و توسعه وب
                  </span>

                  <div className="flex items-center gap-1 sm:gap-1.5">
                    <span className="text-[11px] font-bold leading-4 text-slate-800 sm:text-sm">
                      محمد خسروی
                    </span>

                    <span className="text-[10px] text-slate-300 sm:text-xs">
                      •
                    </span>

                    <span
                      dir="ltr"
                      className="text-[9px] font-medium leading-4 text-indigo-600 sm:text-xs"
                    >
                      Khosravi Developer
                    </span>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-slate-300 shadow-sm transition-colors group-hover:text-indigo-600 sm:h-7 sm:w-7">
                  <ExternalLink size={12} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* =====================================================
          DEVELOPER MODAL
      ====================================================== */}

      {developerOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-900/30 p-4 backdrop-blur-md"
          onClick={() => setDeveloperOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="developer-modal-title"
            className="
              relative
              max-h-[90vh]
              w-full
              max-w-md
              overflow-y-auto
              rounded-[28px]
              border
              border-slate-200
              bg-white
              shadow-[0_25px_80px_rgba(15,23,42,0.18)]
            "
            onClick={(event) => event.stopPropagation()}
          >

            {/* Header */}
            <div className="relative h-28 overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-violet-50">

              <div className="absolute -right-10 -top-16 h-40 w-40 rounded-full bg-indigo-100/70 blur-2xl" />

              <div className="absolute -bottom-20 -left-10 h-40 w-40 rounded-full bg-violet-100/70 blur-2xl" />

              {/* Close */}
              <button
                type="button"
                onClick={() => setDeveloperOpen(false)}
                aria-label="بستن"
                className="
                  absolute
                  left-4
                  top-4
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-slate-200
                  bg-white
                  text-slate-500
                  shadow-sm
                  transition
                  hover:text-slate-900
                "
              >
                <X size={17} />
              </button>
            </div>

            {/* Content */}
            <div className="relative px-5 pb-6 sm:px-8 sm:pb-8">

              {/* Icon */}
              <div className="-mt-12 flex justify-center">
                <div className="flex h-24 w-24 items-center justify-center rounded-[26px] border-4 border-white bg-white shadow-lg">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
                    <Code2 size={30} strokeWidth={1.7} />
                  </div>
                </div>
              </div>

              {/* Title */}
              <div className="mt-5 text-center">

                <div className="inline-flex items-center gap-1.5 rounded-full bg-indigo-50 px-3 py-1 text-[11px] font-medium text-indigo-600">
                  <Sparkles size={13} />
                  طراحی و توسعه وب
                </div>

                <h2
                  id="developer-modal-title"
                  className="mt-3 text-2xl font-extrabold text-slate-900"
                >
                  محمد خسروی
                </h2>

                <p className="mt-2 text-sm text-slate-500">
                  توسعه‌دهنده وب و طراح رابط کاربری
                </p>
              </div>

              <div className="my-6 h-px bg-slate-100" />

              {/* Website */}
              <a
                href="https://khosravideveloper.ir"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  flex
                  items-center
                  gap-3
                  rounded-2xl
                  border
                  border-slate-200
                  bg-slate-50/70
                  p-4
                  transition-all
                  hover:border-indigo-200
                  hover:bg-indigo-50/40
                "
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-indigo-600 shadow-sm">
                  <Globe size={19} />
                </div>

                <div className="min-w-0 flex-1 text-right">
                  <p className="text-[11px] text-slate-400">
                    وب‌سایت شخصی
                  </p>

                  <p
                    dir="ltr"
                    className="mt-1 truncate text-sm font-bold text-slate-700 group-hover:text-indigo-600"
                  >
                    khosravideveloper.ir
                  </p>
                </div>

                <ExternalLink
                  size={15}
                  className="text-slate-300 group-hover:text-indigo-500"
                />
              </a>

              {/* Description */}
              <div className="mt-4 rounded-2xl border border-slate-100 bg-slate-50/50 p-4 text-center">
                <p className="text-xs leading-6 text-slate-500">
                  طراحی و توسعه این وب‌سایت با تمرکز بر
                  <span className="font-semibold text-slate-700">
                    {" "}
                    تجربه کاربری، عملکرد و طراحی مدرن
                  </span>{" "}
                  انجام شده است.
                </p>
              </div>

              {/* Actions */}
              <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">

                <a
                  href="https://khosravideveloper.ir"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
                >
                  <Globe size={16} />
                  مشاهده وب‌سایت
                  <ExternalLink size={14} />
                </a>

                <button
                  type="button"
                  onClick={() => setDeveloperOpen(false)}
                  className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-50"
                >
                  بستن
                </button>
              </div>

              {/* Brand */}
              <div className="mt-6 flex items-center justify-center gap-2 text-[10px] text-slate-300">
                <span className="h-px w-8 bg-slate-200" />

                <span dir="ltr">
                  Khosravi Developer
                </span>

                <span className="h-px w-8 bg-slate-200" />
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
}