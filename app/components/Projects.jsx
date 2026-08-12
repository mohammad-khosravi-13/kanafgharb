"use client";

import { motion } from "framer-motion";
import {
  Building2,
  CheckCircle2,
  MapPin,
  Ruler,
  ShieldCheck,
  Users,
} from "lucide-react";

const projects = [
  {
    title: "ساختمان نسترن",
    location: "چیتگر، تهران",
    description:
      "اجرای سقف کناف و دیوارهای کناف با زیرسازی اصولی و اجرای دقیق توسط تیم مجرب.",
    features: [
      "اجرای سقف کناف",
      "اجرای دیوار کناف",
      "زیرسازی اصولی",
    ],
  },

  {
    title: "مجتمع آفتاب",
    location: "چیتگر، تهران",
    description:
      "اجرای سیستم‌های کناف و سقف کاذب با تمرکز بر کیفیت اجرا و جزئیات نهایی پروژه.",
    features: [
      "سقف کاذب",
      "دیوار کناف",
      "اجرای دکوراتیو",
    ],
  },

  {
    title: "ساختمان سپهر",
    location: "غرب تهران",
    description:
      "اجرای کناف و دکوراسیون داخلی با استفاده از تیم اجرایی مجرب و رعایت اصول فنی.",
    features: [
      "سقف کناف",
      "دکوراسیون داخلی",
      "نورپردازی مخفی",
    ],
  },

  {
    title: "مجتمع پارس",
    location: "ملارد",
    description:
      "اجرای سقف و دیوار کناف در پروژه ساختمانی با دقت در زیرسازی و اجرای نهایی.",
    features: [
      "دیوار کناف",
      "سقف کاذب",
      "اجرای دقیق",
    ],
  },

  {
    title: "ساختمان ارغوان",
    location: "تجریش، تهران",
    description:
      "اجرای سقف کاذب و دکوراسیون کناف با توجه به طراحی داخلی و جزئیات معماری پروژه.",
    features: [
      "سقف کاذب",
      "دکوراتیو کناف",
      "اجرای نور مخفی",
    ],
  },

  {
    title: "مجتمع نیکان",
    location: "تجریش، تهران",
    description:
      "اجرای سیستم‌های کناف با زیرسازی دقیق و استفاده از نیروی اجرایی متخصص.",
    features: [
      "اجرای سقف کناف",
      "دیوار کناف",
      "زیرسازی تخصصی",
    ],
  },

  {
    title: "ساختمان آریا",
    location: "نیاوران، تهران",
    description:
      "اجرای سقف کناف و طراحی‌های دکوراتیو داخلی با تمرکز بر کیفیت و ظرافت اجرا.",
    features: [
      "سقف کناف",
      "دکوراسیون داخلی",
      "نورپردازی مخفی",
    ],
  },

  {
    title: "برج نیایش",
    location: "نیاوران، تهران",
    description:
      "اجرای سیستم‌های کناف و سقف کاذب توسط تیم مجرب از مرحله زیرسازی تا اجرای نهایی.",
    features: [
      "سقف کاذب",
      "دیوار کناف",
      "اجرای اصولی",
    ],
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="relative overflow-hidden bg-white py-16 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* =====================================================
            HEADER
        ===================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col items-center text-center sm:mb-16"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200/50 bg-indigo-100/80 px-4 py-1.5 text-xs font-bold text-indigo-700 backdrop-blur-sm sm:text-sm">
            <Building2 size={16} />

            پروژه‌های اجرایی
          </span>

          <h1
            id="projects-title"
            className="mt-4 text-3xl font-black text-slate-800 sm:text-4xl md:text-5xl"
          >
            پروژه‌های{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              اجرا شده
            </span>
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-8 text-slate-600 sm:text-base">
            بخشی از پروژه‌های اجرای کناف، سقف کاذب، دیوار کناف و
            دکوراسیون داخلی با اجرای تیم مجرب کناف سازه غرب.
          </p>
        </motion.div>

        {/* =====================================================
            PROJECTS GRID
        ===================================================== */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.2,
              }}
              variants={fadeUp}
              whileHover={{
                y: -8,
              }}
              className="group relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white p-6 shadow-lg shadow-slate-200/30 transition-all duration-500 hover:border-indigo-200 hover:shadow-2xl hover:shadow-indigo-500/10"
            >
              {/* PROJECT ICON */}
              <div className="mb-5 flex items-center justify-between gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 transition-transform duration-500 group-hover:scale-110">
                  <Building2 size={24} />
                </div>

                <div className="flex items-center gap-1 text-xs font-medium text-slate-500">
                  <MapPin size={14} />

                  {project.location}
                </div>
              </div>

              {/* TITLE */}
              <h2 className="text-lg font-black text-slate-800">
                {project.title}
              </h2>

              {/* DESCRIPTION */}
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {project.description}
              </p>

              {/* FEATURES */}
              <div className="mt-5 space-y-2.5 border-t border-slate-100 pt-5">
                {project.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-2 text-sm text-slate-600"
                  >
                    <CheckCircle2
                      size={16}
                      className="shrink-0 text-indigo-500"
                    />

                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* EXPERIENCED TEAM */}
              <div className="mt-6 flex items-center gap-3 rounded-2xl bg-slate-50 p-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-indigo-600 shadow-sm">
                  <Users size={18} />
                </div>

                <div>
                  <p className="text-xs font-bold text-slate-800">
                    اجرا با تیم مجرب
                  </p>

                  <p className="mt-0.5 text-[11px] text-slate-500">
                    اجرای دقیق و اصولی پروژه
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* =====================================================
            TRUST SECTION
        ===================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          className="mx-auto mt-10 max-w-5xl rounded-3xl border border-indigo-100 bg-gradient-to-r from-indigo-50/80 to-purple-50/80 p-6 sm:mt-14 sm:p-8"
        >
          <div className="grid gap-6 sm:grid-cols-3">

            {/* TEAM */}
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-indigo-600 shadow-sm">
                <Users size={21} />
              </div>

              <div>
                <p className="font-bold text-slate-800">
                  تیم اجرایی مجرب
                </p>

                <p className="text-xs text-slate-500">
                  اجرای تخصصی پروژه‌های کناف
                </p>
              </div>
            </div>

            {/* QUALITY */}
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-indigo-600 shadow-sm">
                <ShieldCheck size={21} />
              </div>

              <div>
                <p className="font-bold text-slate-800">
                  اجرای اصولی
                </p>

                <p className="text-xs text-slate-500">
                  توجه به کیفیت و زیرسازی
                </p>
              </div>
            </div>

            {/* ACCURACY */}
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-indigo-600 shadow-sm">
                <Ruler size={21} />
              </div>

              <div>
                <p className="font-bold text-slate-800">
                  دقت در اجرا
                </p>

                <p className="text-xs text-slate-500">
                  تحویل تمیز و دقیق
                </p>
              </div>
            </div>

          </div>
        </motion.div>

        {/* =====================================================
            SEO / LOCAL CONTENT
        ===================================================== */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mt-10 max-w-4xl text-center sm:mt-14"
        >
          <p className="text-sm leading-8 text-slate-600 sm:text-base">
            کناف سازه غرب در زمینه تأمین مصالح، فروش پنل‌های کناف،
            اجرای سقف کاذب، دیوار کناف و دکوراسیون داخلی فعالیت می‌کند.
            اجرای پروژه‌های کناف در چیتگر، تجریش، نیاوران، تهران،
            ملارد و کرج با استفاده از تیم اجرایی مجرب و رعایت اصول
            فنی انجام می‌شود.
          </p>
        </motion.div>

        {/* =====================================================
            CALL TO ACTION
        ===================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
          className="mt-12 flex justify-center"
        >
          <a
            href="tel:+989123480518"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 px-7 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/30"
          >
            <Users size={18} />

            مشاوره و اجرای پروژه
          </a>
        </motion.div>

      </div>
    </section>
  );
}