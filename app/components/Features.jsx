"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  Boxes,
  HardHat,
  Ruler,
  Truck,
  Wrench,
  ArrowLeft,
} from "lucide-react";

const services = [
  {
    icon: Boxes,
    title: "فروش پنل های کناف",
    text: "فروش و تأمین انواع پنل‌های گچی کناف، سازه‌ها و تجهیزات موردنیاز پروژه با کیفیت مناسب.",
  },
  {
    icon: Wrench,
    title: "سازه و اتصالات کناف",
    text: "تأمین انواع پروفیل، پیچ، اتصالات و متعلقات کناف برای اجرای اصولی و استاندارد پروژه.",
  },
  {
    icon: HardHat,
    title: "اجرای تخصصی کناف",
    text: "اجرای سقف کاذب، دیوار کاذب و طرح‌های دکوراتیو کناف با استفاده از متریال مناسب و اجرای حرفه‌ای.",
  },
  {
    icon: Ruler,
    title: "مشاوره و برآورد پروژه",
    text: "بررسی نیاز پروژه، محاسبه متریال موردنیاز و ارائه راهکار مناسب برای انتخاب تجهیزات کناف.",
  },
  {
    icon: Truck,
    title: "تأمین و ارسال کناف",
    text: "آماده‌سازی سفارش و ارسال پنل، سازه و تجهیزات کناف برای پروژه‌های مختلف در محدوده خدمات.",
  },
  {
    icon: BadgeCheck,
    title: "تأمین محصولات باکیفیت",
    text: "ارائه محصولات کناف با کیفیت مناسب برای اجرای مطمئن، بادوام و حرفه‌ای پروژه‌های ساختمانی.",
  },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.08,
      duration: 0.55,
      ease: "easeOut",
    },
  }),
};

export default function Features() {
  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="relative overflow-hidden border-t border-slate-200/70 bg-slate-50 py-16 sm:py-24"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-indigo-100/40 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-blue-100/40 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-2xl text-center sm:mb-16"
        >
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-xs font-bold text-indigo-700 sm:text-sm">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-indigo-600"
            />

            خدمات تخصصی کناف
          </span>

          <h2
            id="services-title"
            className="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl lg:text-4xl"
          >
            فروش و تأمین کناف برای پروژه‌های ساختمانی
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            کناف سازه غرب، ارائه‌دهنده خدمات فروش و تأمین پنل‌های کناف،
            سازه و اتصالات موردنیاز پروژه‌های ساختمانی در ملارد، تهران و کرج.
          </p>
        </motion.div>

        {/* Services */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={cardVariants}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-500/10 sm:p-7"
              >
                <div className="absolute -right-12 -top-12 h-28 w-28 rounded-full bg-indigo-100/50 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative">
                  {/* Icon */}
                  <div
                    aria-hidden="true"
                    className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white"
                  >
                    <Icon size={27} strokeWidth={1.8} />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-extrabold text-slate-900">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {service.text}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-10 overflow-hidden rounded-2xl bg-slate-900 p-7 text-center sm:mt-14 sm:p-10"
        >
          <div className="mx-auto max-w-2xl">
            <h3 className="text-xl font-black text-white sm:text-2xl">
              برای پروژه کناف خود مشاوره می‌خواهید؟
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
              برای فروش پنل های کناف، تأمین مصالح، برآورد متریال یا اجرای
              پروژه با کناف سازه غرب در ارتباط باشید.
            </p>

            <a
              href="tel:09123480518"
              aria-label="تماس با کناف سازه غرب برای دریافت مشاوره"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-slate-900 transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-50"
            >
              دریافت مشاوره
              <ArrowLeft size={17} aria-hidden="true" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}