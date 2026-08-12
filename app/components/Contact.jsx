"use client";

import { motion } from "framer-motion";
import {
  Phone,
  ArrowLeft,
  Send,
  MessageCircle,
  HardHat,
  Layers3,
  Clock3,
  MapPin,
} from "lucide-react";

const slideIn = {
  hidden: {
    opacity: 0,
    x: -50,
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const slideInRight = {
  hidden: {
    opacity: 0,
    x: 50,
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const fadeIn = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Contact() {
  // ==========================================
  // Telegram
  // فقط تلگرام خود کاربر
  // بدون شماره و بدون username
  // ==========================================

  const openTelegram = () => {
    const newTab = window.open("about:blank", "_blank");

    if (!newTab) {
      return;
    }

    newTab.document.write(`
      <!DOCTYPE html>
      <html lang="fa" dir="rtl">
        <head>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>تلگرام</title>
        </head>

        <body
          style="
            margin: 0;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #f8fafc;
            font-family: Arial, sans-serif;
            color: #334155;
          "
        >
          <div style="text-align: center;">
            <div
              style="
                font-size: 18px;
                font-weight: bold;
              "
            >
              در حال باز کردن تلگرام...
            </div>

            <div
              style="
                margin-top: 10px;
                font-size: 14px;
                color: #64748b;
              "
            >
              لطفاً چند لحظه صبر کنید
            </div>
          </div>
        </body>
      </html>
    `);

    newTab.document.close();

    // تلاش برای باز کردن اپ تلگرام
    newTab.location.href = "tg://";

    // اگر اپ باز نشد، نسخه وب تلگرام
    setTimeout(() => {
      try {
        if (!newTab.closed) {
          newTab.location.href = "https://web.telegram.org/";
        }
      } catch (error) {
        console.log(error);
      }
    }, 1500);
  };

  // ==========================================
  // Bale
  // فقط اپ بله کاربر
  // ==========================================

  const openBale = () => {
    const newTab = window.open("about:blank", "_blank");

    if (!newTab) {
      return;
    }

    newTab.document.write(`
      <!DOCTYPE html>
      <html lang="fa" dir="rtl">
        <head>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>بله</title>
        </head>

        <body
          style="
            margin: 0;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #f8fafc;
            font-family: Arial, sans-serif;
            color: #334155;
          "
        >
          <div style="text-align: center;">
            <div
              style="
                font-size: 18px;
                font-weight: bold;
              "
            >
              در حال باز کردن بله...
            </div>

            <div
              style="
                margin-top: 10px;
                font-size: 14px;
                color: #64748b;
              "
            >
              لطفاً چند لحظه صبر کنید
            </div>
          </div>
        </body>
      </html>
    `);

    newTab.document.close();

    // تلاش برای باز کردن اپ بله
    newTab.location.href = "bale://";

    // اگر اپ باز نشد، نسخه وب بله
    setTimeout(() => {
      try {
        if (!newTab.closed) {
          newTab.location.href = "https://web.bale.ai/";
        }
      } catch (error) {
        console.log(error);
      }
    }, 1500);
  };

  return (
    <motion.section
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.15,
      }}
      variants={fadeIn}
      className="relative overflow-hidden bg-slate-50 py-16 sm:py-24"
    >
      {/* ==========================================
          Background
      ========================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full bg-indigo-100/60 blur-3xl" />

        <div className="absolute -bottom-32 -right-32 h-[420px] w-[420px] rounded-full bg-purple-100/50 blur-3xl" />
      </div>

      {/* ==========================================
          Container
      ========================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ==========================================
            Header
        ========================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mx-auto mb-12 max-w-3xl text-center sm:mb-16"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-xs font-bold text-indigo-700 sm:text-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />

            ارتباط با ما
          </span>

          <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            آماده شروع پروژه
            <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              کناف شما هستیم
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-slate-600 sm:text-base">
            برای استعلام قیمت مصالح، مشاوره تخصصی، برآورد متریال
            یا هماهنگی اجرای پروژه کناف، از طریق تماس یا
            پیام‌رسان‌ها با ما در ارتباط باشید.
          </p>
        </motion.div>

        {/* ==========================================
            Main Content
        ========================================== */}

        <div className="grid gap-6 lg:grid-cols-5 lg:gap-8">

          {/* ========================================
              Contact Information
          ======================================== */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
            }}
            variants={slideIn}
            className="lg:col-span-3"
          >
            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">

              {/* Header */}

              <div className="mb-7">
                <h3 className="text-xl font-black text-slate-900">
                  راه‌های ارتباطی
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  برای دریافت مشاوره، استعلام قیمت و هماهنگی
                  پروژه با ما در ارتباط باشید.
                </p>
              </div>

              {/* ====================================
                  Phone Numbers
              ==================================== */}

              <div>
                <p className="mb-3 text-sm font-bold text-slate-700">
                  تماس مستقیم
                </p>

                <div className="grid gap-3 sm:grid-cols-2">

                  {/* Phone 1 */}

                  <a
                    href="tel:09123112684"
                    className="group flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:bg-white hover:shadow-lg hover:shadow-indigo-500/10"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-indigo-600 shadow-sm transition-all duration-300 group-hover:bg-indigo-600 group-hover:text-white">
                      <Phone size={20} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-xs text-slate-500">
                        شماره تماس اول
                      </p>

                      <p
                        dir="ltr"
                        className="mt-1 text-base font-black tracking-wide text-slate-900"
                      >
                        ۰۹۱۲۳۱۱۲۶۸۴
                      </p>
                    </div>

                    <ArrowLeft
                      size={17}
                      className="shrink-0 text-slate-400 transition-transform duration-300 group-hover:-translate-x-1 group-hover:text-indigo-600"
                    />
                  </a>

                  {/* Phone 2 */}

                  <a
                    href="tel:09123480518"
                    className="group flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:bg-white hover:shadow-lg hover:shadow-indigo-500/10"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-indigo-600 shadow-sm transition-all duration-300 group-hover:bg-indigo-600 group-hover:text-white">
                      <Phone size={20} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-xs text-slate-500">
                        شماره تماس دوم
                      </p>

                      <p
                        dir="ltr"
                        className="mt-1 text-base font-black tracking-wide text-slate-900"
                      >
                        ۰۹۱۲۳۴۸۰۵۱۸
                      </p>
                    </div>

                    <ArrowLeft
                      size={17}
                      className="shrink-0 text-slate-400 transition-transform duration-300 group-hover:-translate-x-1 group-hover:text-indigo-600"
                    />
                  </a>

                </div>
              </div>

              {/* ====================================
                  Address
              ==================================== */}

              <div className="mt-6">
                <p className="mb-3 text-sm font-bold text-slate-700">
                  آدرس
                </p>

                <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-indigo-600 shadow-sm">
                    <MapPin size={20} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs text-slate-500">
                      محل فعالیت
                    </p>

                    <p className="mt-1 text-sm font-bold leading-7 text-slate-900">
                      ملارد، سه‌راه مارلیک،بلوار ولایت کوچه ولیعصر
                    </p>
                  </div>
                </div>
              </div>

              {/* ====================================
                  Messengers
              ==================================== */}

              <div className="mt-7">
                <div className="mb-3">
                  <p className="text-sm font-bold text-slate-700">
                    پیام‌رسان‌ها
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    برای ارتباط سریع‌تر، پیام‌رسان موردنظر خود را انتخاب کنید.
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">

                  {/* Telegram */}

                  <button
                    type="button"
                    onClick={openTelegram}
                    className="group flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 text-right transition-all duration-300 hover:-translate-y-1 hover:border-indigo-300 hover:shadow-lg hover:shadow-indigo-500/10"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 transition-all duration-300 group-hover:bg-indigo-600 group-hover:text-white">
                      <Send size={20} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-black text-slate-900">
                        تلگرام
                      </p>

                      <p className="mt-1 text-xs text-slate-500">
                        باز کردن تلگرام
                      </p>
                    </div>

                    <ArrowLeft
                      size={17}
                      className="shrink-0 text-slate-400 transition-transform duration-300 group-hover:-translate-x-1 group-hover:text-indigo-600"
                    />
                  </button>

                  {/* Bale */}

                  <button
                    type="button"
                    onClick={openBale}
                    className="group flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 text-right transition-all duration-300 hover:-translate-y-1 hover:border-indigo-300 hover:shadow-lg hover:shadow-indigo-500/10"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 transition-all duration-300 group-hover:bg-indigo-600 group-hover:text-white">
                      <MessageCircle size={20} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-black text-slate-900">
                        بله
                      </p>

                      <p className="mt-1 text-xs text-slate-500">
                        باز کردن اپلیکیشن بله
                      </p>
                    </div>

                    <ArrowLeft
                      size={17}
                      className="shrink-0 text-slate-400 transition-transform duration-300 group-hover:-translate-x-1 group-hover:text-indigo-600"
                    />
                  </button>

                </div>
              </div>

            </div>
          </motion.div>

          {/* ========================================
              Project CTA
          ======================================== */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
            }}
            variants={slideInRight}
            className="lg:col-span-2"
          >
            <div className="relative h-full overflow-hidden rounded-3xl bg-slate-900 p-6 shadow-xl sm:p-8">

              {/* Decorative Background */}

              <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-indigo-600/20 blur-3xl" />

              <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-purple-600/20 blur-3xl" />

              <div className="relative z-10">

                {/* Icon */}

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-indigo-300">
                  <HardHat size={27} />
                </div>

                {/* Title */}

                <h3 className="mt-6 text-2xl font-black leading-relaxed text-white sm:text-3xl">
                  برای پروژه کناف
                  <br />
                  مصالح یا اجرا می‌خواهید؟
                </h3>

                {/* Description */}

                <p className="mt-4 text-sm leading-8 text-slate-400">
                  از تأمین صفحات گچی و پروفیل تا پیچ و اتصالات
                  و اجرای کامل سقف و دیوار کناف، برای پروژه خود
                  از ما مشاوره بگیرید.
                </p>

                {/* Services */}

                <div className="mt-7 space-y-3">

                  {/* Service 1 */}

                  <div className="flex items-center gap-3 rounded-xl bg-white/5 p-3">
                    <Layers3
                      size={18}
                      className="shrink-0 text-indigo-300"
                    />

                    <span className="text-sm text-slate-300">
                      تأمین مصالح و تجهیزات کناف
                    </span>
                  </div>

                  {/* Service 2 */}

                  <div className="flex items-center gap-3 rounded-xl bg-white/5 p-3">
                    <HardHat
                      size={18}
                      className="shrink-0 text-indigo-300"
                    />

                    <span className="text-sm text-slate-300">
                      اجرای سقف و دیوار کناف
                    </span>
                  </div>

                  {/* Service 3 */}

                  <div className="flex items-center gap-3 rounded-xl bg-white/5 p-3">
                    <Clock3
                      size={18}
                      className="shrink-0 text-indigo-300"
                    />

                    <span className="text-sm text-slate-300">
                      مشاوره و برآورد پروژه
                    </span>
                  </div>

                </div>

                {/* Call CTA */}

                <a
                  href="tel:09123112684"
                  className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-4 text-sm font-black text-white transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-500 hover:shadow-lg hover:shadow-indigo-500/20"
                >
                  تماس برای مشاوره

                  <Phone size={18} />
                </a>

                {/* Numbers */}

                <div className="mt-5 flex flex-col items-center gap-1 text-center">

                  <a
                    href="tel:09123112684"
                    dir="ltr"
                    className="text-sm font-bold text-slate-300 transition-colors hover:text-white"
                  >
                    ۰۹۱۲۳۱۱۲۶۸۴
                  </a>

                  <a
                    href="tel:09123480518"
                    dir="ltr"
                    className="text-sm font-bold text-slate-300 transition-colors hover:text-white"
                  >
                    ۰۹۱۲۳۴۸۰۵۱۸
                  </a>

                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}