"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  HardHat,
  Headset,
  Layers3,
  Ruler,
  Truck,
  ArrowLeft,
} from "lucide-react";

const benefits = [
  {
    icon: BadgeCheck,
    title: "کیفیت و اصالت مصالح",
    text: "تلاش ما ارائه مصالح و تجهیزات مناسب برای اجرای باکیفیت و اصولی پروژه‌های کناف است.",
  },
  {
    icon: HardHat,
    title: "اجرای تخصصی کناف",
    text: "اجرای سقف کاذب، دیوار کاذب و طرح‌های دکوراتیو با توجه به نیاز و شرایط پروژه.",
  },
  {
    icon: Ruler,
    title: "مشاوره و برآورد",
    text: "قبل از خرید یا اجرا، برای انتخاب مصالح و برآورد متریال موردنیاز پروژه راهنمایی دریافت کنید.",
  },
  {
    icon: Truck,
    title: "تأمین و ارسال پروژه",
    text: "تأمین تجهیزات موردنیاز پروژه و هماهنگی برای ارسال سفارش در سریع‌ترین زمان ممکن.",
  },
  {
    icon: Layers3,
    title: "تأمین کامل کناف",
    text: "صفحات، پروفیل، پیچ، اتصالات، عایق، متعلقات درزگیری و سایر تجهیزات موردنیاز.",
  },
  {
    icon: Headset,
    title: "پشتیبانی و پاسخگویی",
    text: "برای انتخاب محصول، برآورد مصالح یا هماهنگی اجرای پروژه می‌توانید با ما در ارتباط باشید.",
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
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

export default function Testimonials() {
  return (
    <section
      id="trust"
      className="relative overflow-hidden bg-slate-50 py-16 sm:py-24"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-0 h-[450px] w-[450px] rounded-full bg-indigo-100/50 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-blue-100/40 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-3xl text-center sm:mb-16"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-xs font-bold text-indigo-700 sm:text-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
            چرا کناف ما؟
          </span>

          <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            یک انتخاب مطمئن برای{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              پروژه کناف
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-slate-600 sm:text-base">
            از انتخاب و تأمین مصالح تا اجرای نهایی، تلاش می‌کنیم روند اجرای
            پروژه برای شما ساده‌تر، دقیق‌تر و مطمئن‌تر باشد.
          </p>
        </motion.div>

        {/* Benefits */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                variants={fadeUp}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-500/10 sm:p-7"
              >
                {/* Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/60 via-transparent to-purple-50/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative z-10">

                  {/* Icon */}
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 transition-all duration-500 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white">
                    <Icon size={27} strokeWidth={1.8} />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-extrabold text-slate-900">
                    {item.title}
                  </h3>

                  {/* Text */}
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25, duration: 0.6 }}
          className="mt-10 overflow-hidden rounded-2xl bg-slate-900 p-7 sm:mt-14 sm:p-10"
        >
          <div className="flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-right">

            <div>
              <p className="text-sm font-medium text-indigo-300">
                آماده شروع پروژه هستید؟
              </p>

              <h3 className="mt-2 text-xl font-black text-white sm:text-2xl">
                برای تأمین یا اجرای کناف با ما در ارتباط باشید.
              </h3>

              <p className="mt-2 text-sm leading-7 text-slate-400">
                برای دریافت مشاوره و استعلام قیمت با ما تماس بگیرید.
              </p>
            </div>

            <a
              href="tel:09123480518"
              className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-500 hover:shadow-lg hover:shadow-indigo-500/20"
            >
              تماس با ما
              <ArrowLeft size={17} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}