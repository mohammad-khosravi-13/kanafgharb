"use client";

import { motion } from "framer-motion";

const features = [
  {
    icon: "✦",
    title: "کیفیت تضمینی کناف",
    text: "تأمین پنل‌های کناف و محصولات اصلی با کیفیت و استاندارد مناسب پروژه",
  },
  {
    icon: "◈",
    title: "مشاوره تخصصی کناف",
    text: "راهنمایی برای انتخاب پنل، سازه و اتصالات مناسب بر اساس نیاز پروژه",
  },
  {
    icon: "◆",
    title: "تأمین کامل تجهیزات",
    text: "فروش پنل‌های کناف، سازه و اتصالات مورد نیاز پروژه از یک مجموعه معتبر",
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

export default function Features() {
  return (
    <motion.section
      id="services"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeIn}
      aria-label="خدمات و مزایای کناف سازه غرب"
      className="relative border-t border-slate-200/60 bg-white/70 py-20 backdrop-blur-sm"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {features.map((item, idx) => (
            <motion.div
              key={item.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={idx}
              variants={fadeUp}
              className="group relative rounded-2xl border border-slate-200/60 bg-white/80 p-8 text-center shadow-lg shadow-slate-200/20 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-indigo-300/40 hover:shadow-xl hover:shadow-indigo-500/10"
            >
              <div
                aria-hidden="true"
                className="mb-4 text-4xl text-indigo-600 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
              >
                {item.icon}
              </div>

              <h3 className="text-lg font-bold text-slate-800">
                {item.title}
              </h3>

              <p className="mt-2 text-sm leading-7 text-slate-600">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}