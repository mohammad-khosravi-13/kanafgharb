"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    title: "اجرای سقف کناف",
    img: "https://picsum.photos/seed/1/600/400",
    category: "سقف کاذب و کناف",
    alt: "اجرای سقف کناف و سقف کاذب",
  },
  {
    title: "اجرای دیوار کناف",
    img: "https://picsum.photos/seed/2/600/400",
    category: "دیوار کناف",
    alt: "اجرای دیوار کناف و دیوار کاذب",
  },
  {
    title: "اجرای سقف کاذب",
    img: "https://picsum.photos/seed/3/600/400",
    category: "سقف کناف",
    alt: "اجرای سقف کاذب کناف",
  },
  {
    title: "دکوراسیون داخلی با کناف",
    img: "https://picsum.photos/seed/4/600/400",
    category: "دکوراسیون کناف",
    alt: "دکوراسیون داخلی با کناف",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Projects() {
  return (
    <motion.section
      id="projects"
      aria-labelledby="projects-title"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeIn}
      className="relative bg-white/60 py-16 backdrop-blur-sm sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12 flex flex-col items-center text-center sm:mb-16">

          <span className="inline-block rounded-full border border-indigo-200/50 bg-indigo-100/80 px-4 py-1.5 text-xs font-bold text-indigo-700 backdrop-blur-sm sm:text-sm">
            نمونه‌کارها
          </span>

          <h2
            id="projects-title"
            className="mt-4 text-3xl font-black text-slate-800 sm:text-4xl md:text-5xl"
          >
            پروژه‌های{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              اجرایی کناف
            </span>
          </h2>

          <p className="mt-4 max-w-xl text-sm text-slate-600 sm:text-base">
            نمونه‌ای از خدمات و اجرای پروژه‌های کناف، سقف کاذب، دیوار کناف و
            دکوراسیون داخلی توسط کناف سازه غرب.
          </p>
        </div>

        {/* Projects */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              variants={fadeUp}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg shadow-slate-200/30 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/15"
            >
              <Image
                src={project.img}
                alt={project.alt}
                width={600}
                height={400}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="h-48 w-full object-cover transition-transform duration-700 group-hover:scale-110 sm:h-56 lg:h-64"
              />

              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100 sm:p-6">
                <h3 className="text-base font-bold text-white sm:text-lg">
                  {project.title}
                </h3>

                <p className="text-xs text-indigo-300 sm:text-sm">
                  {project.category}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* SEO / Local context */}
        <div className="mx-auto mt-10 max-w-3xl text-center sm:mt-14">
          <p className="text-sm leading-8 text-slate-600 sm:text-base">
            کناف سازه غرب در زمینه تأمین مصالح، فروش پنل‌های کناف و اجرای
            سیستم‌های کناف فعالیت می‌کند و آماده ارائه خدمات کناف در ملارد،
            تهران و کرج است.
          </p>
        </div>

      </div>
    </motion.section>
  );
}