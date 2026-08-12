"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Layers3,
  Ruler,
  Wrench,
  ShieldCheck,
  ArrowLeft,
  Flame,
  Droplets,
  Volume2,
  HardHat,
  Paintbrush,
  Grid3X3,
  Lightbulb,
  DoorOpen,
  Thermometer,
  Phone,
  X,
  Clock3,
} from "lucide-react";

const PHONE_NUMBER = "09123480518";

const products = [
  {
    icon: Layers3,
    title: "صفحات گچی کناف",
    items: [
      "صفحات گچی معمولی",
      "صفحات مقاوم در برابر رطوبت",
      "صفحات مقاوم در برابر حریق",
      "صفحات آکوستیک",
      "صفحات تخصصی و دکوراتیو",
    ],
  },
  {
    icon: Ruler,
    title: "سازه و پروفیل کناف",
    items: [
      "پروفیل استاد و رانر",
      "پروفیل‌های سقفی",
      "پروفیل‌های دیواری",
      "سازه‌های F و U",
      "نبشی و سپری",
    ],
  },
  {
    icon: Wrench,
    title: "پیچ و اتصالات کناف",
    items: [
      "پیچ TN",
      "پیچ TB",
      "پیچ‌های اتصال سازه",
      "رول‌پلاک",
      "کلیپس و اتصالات",
      "آویز و قطعات سقفی",
    ],
  },
  {
    icon: Paintbrush,
    title: "درزگیری و پرداخت کناف",
    items: [
      "بتونه درزگیری",
      "نوار درزگیر کاغذی",
      "نوار فایبرگلاس",
      "گوشه محافظ",
      "مواد پرداخت نهایی",
    ],
  },
  {
    icon: Thermometer,
    title: "عایق و آکوستیک کناف",
    items: [
      "عایق صوتی",
      "عایق حرارتی",
      "پشم سنگ",
      "پشم شیشه",
      "عایق‌های تخصصی",
    ],
  },
  {
    icon: HardHat,
    title: "ابزار اجرای کناف",
    items: [
      "کاتر و ابزار برش",
      "رنده و سنباده",
      "ابزار نصب سازه",
      "ابزار اندازه‌گیری",
      "ابزار درزگیری",
    ],
  },
  {
    icon: DoorOpen,
    title: "دریچه و تجهیزات سقف کاذب",
    items: [
      "دریچه بازدید",
      "دریچه تأسیسات",
      "دریچه‌های مخفی",
      "تجهیزات دسترسی سقف",
    ],
  },
  {
    icon: Lightbulb,
    title: "نورپردازی و دکوراسیون کناف",
    items: [
      "باکس نور مخفی",
      "تجهیزات نورپردازی",
      "پروفیل‌های نور مخفی",
      "متعلقات طرح‌های دکوراتیو",
    ],
  },
  {
    icon: Flame,
    title: "محصولات مقاوم در برابر حریق",
    items: [
      "صفحات ضد حریق",
      "عایق‌های مقاوم حریق",
      "اتصالات مناسب سازه‌های ضد حریق",
      "ملزومات اجرای سیستم‌های مقاوم حریق",
    ],
  },
  {
    icon: Droplets,
    title: "محصولات مقاوم در برابر رطوبت",
    items: [
      "صفحات مقاوم رطوبت",
      "ملزومات سرویس و فضاهای مرطوب",
      "عایق‌های رطوبتی",
      "اتصالات مناسب محیط مرطوب",
    ],
  },
  {
    icon: Volume2,
    title: "سیستم‌های آکوستیک کناف",
    items: [
      "صفحات آکوستیک",
      "عایق صوتی",
      "تجهیزات کاهش انتقال صدا",
      "ملزومات اجرای دیوار آکوستیک",
    ],
  },
  {
    icon: Grid3X3,
    title: "متعلقات دکوراتیو کناف",
    items: [
      "پروفیل‌های دکوراتیو",
      "باکس و قاب کناف",
      "طرح‌های سقف دکوراتیو",
      "متعلقات اجرای طرح‌های خاص",
    ],
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },

  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.06,
      duration: 0.55,
      ease: "easeOut",
    },
  }),
};

export default function Products() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [countdown, setCountdown] = useState(5);

  const openCallModal = () => {
    setCountdown(5);
    setIsModalOpen(true);
  };

  const closeCallModal = () => {
    setIsModalOpen(false);
    setCountdown(5);
  };

  useEffect(() => {
    if (!isModalOpen) return;

    if (countdown === 0) {
      window.location.href = `tel:${PHONE_NUMBER}`;
      return;
    }

    const timer = setTimeout(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [isModalOpen, countdown]);

  return (
    <>
      <section
        id="products"
        aria-labelledby="products-title"
        className="relative overflow-hidden bg-white py-16 sm:py-24"
      >
        {/* Background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-indigo-50/60 blur-3xl" />

          <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-purple-50/50 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* SEO Header */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-12 max-w-3xl text-center sm:mb-16"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-xs font-bold text-indigo-700 sm:text-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
              فروش و تأمین تجهیزات کناف
            </span>

            <h2
              id="products-title"
              className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl md:text-5xl"
            >
              فروش پنل های کناف و تجهیزات اجرای کناف
              <span className="mt-2 block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                کناف سازه غرب
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-slate-600 sm:text-base">
              کناف سازه غرب تأمین‌کننده انواع پنل‌های گچی کناف، سازه و پروفیل،
              پیچ و اتصالات، عایق، تجهیزات سقف کاذب و متعلقات دکوراتیو است.
              برای خرید و استعلام قیمت محصولات کناف با ما در ارتباط باشید.
            </p>
          </motion.div>

          {/* Products */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => {
              const Icon = product.icon;

              return (
                <motion.article
                  key={product.title}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  variants={fadeUp}
                  whileHover={{ y: -7 }}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-500 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-500/10 sm:p-7"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/70 via-white to-purple-50/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative z-10">
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 transition-all duration-500 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white">
                      <Icon size={27} strokeWidth={1.8} />
                    </div>

                    <h3 className="text-lg font-extrabold text-slate-900">
                      {product.title}
                    </h3>

                    <ul className="mt-4 space-y-2">
                      {product.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 text-sm leading-6 text-slate-600"
                        >
                          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <button
                      type="button"
                      onClick={openCallModal}
                      className="mt-6 flex items-center gap-2 text-sm font-bold text-indigo-600 transition-colors hover:text-indigo-700"
                    >
                      استعلام قیمت
                      <ArrowLeft
                        size={16}
                        className="transition-transform duration-300 group-hover:-translate-x-1"
                      />
                    </button>
                  </div>
                </motion.article>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="mt-10 rounded-2xl bg-slate-900 p-7 sm:mt-14 sm:p-10"
          >
            <div className="flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-right">
              <div className="flex items-center gap-4">
                <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white/10 text-indigo-300 sm:flex">
                  <ShieldCheck size={28} />
                </div>

                <div>
                  <h3 className="text-lg font-black text-white sm:text-xl">
                    برای پروژه‌تان مصالح کناف می‌خواهید؟
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-slate-400">
                    لیست مصالح موردنیاز پروژه را ارسال کنید تا برای تأمین و
                    برآورد هزینه راهنمایی‌تان کنیم.
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={openCallModal}
                className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-500 hover:shadow-lg hover:shadow-indigo-500/20"
              >
                تماس برای استعلام قیمت
                <Phone size={17} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] flex items-center justify-center bg-slate-950/60 px-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-sm overflow-hidden rounded-3xl bg-white p-7 text-center shadow-2xl"
            >
              <button
                type="button"
                onClick={closeCallModal}
                aria-label="بستن پنجره تماس"
                className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-colors hover:bg-slate-200 hover:text-slate-800"
              >
                <X size={18} />
              </button>

              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
                <Phone size={34} />
              </div>

              <h3 className="mt-6 text-xl font-black text-slate-900">
                آماده تماس هستیم
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                تا چند لحظه دیگر تماس با شماره زیر آغاز می‌شود.
              </p>

              <div className="mt-4 rounded-xl bg-slate-50 px-4 py-3 font-bold tracking-wider text-slate-800">
                {PHONE_NUMBER}
              </div>

              <div className="mt-6">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border-4 border-indigo-100">
                  <span className="text-3xl font-black text-indigo-600">
                    {countdown}
                  </span>
                </div>

                <div className="mt-3 flex items-center justify-center gap-2 text-sm font-medium text-slate-500">
                  <Clock3 size={16} />
                  تا {countdown} ثانیه دیگر تماس گرفته می‌شود
                </div>
              </div>

              <button
                type="button"
                onClick={closeCallModal}
                className="mt-6 w-full rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-600 transition-all hover:bg-slate-50"
              >
                لغو تماس
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}