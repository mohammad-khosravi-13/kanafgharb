export default function Footer() {
  return (
    <footer
      aria-label="پاورقی سایت کناف سازه غرب"
      className="relative border-t border-slate-200/60 bg-white/80 backdrop-blur-sm"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 text-xs sm:gap-6 sm:px-6 sm:py-10 sm:text-sm md:flex-row md:items-center md:justify-between lg:px-8">
        {/* Brand */}
        <div className="flex flex-col items-center gap-1 sm:flex-row sm:gap-2">
          <span className="text-base font-bold text-slate-800 sm:text-lg">
            کناف سازه غرب
          </span>

          <span className="hidden h-4 w-px bg-slate-300 sm:inline" />

          <span className="text-center text-slate-500">
            فروش و تأمین محصولات کناف
          </span>
        </div>

        {/* Navigation */}
        <nav
          aria-label="لینک‌های سایت"
          className="flex items-center gap-4 text-slate-500 sm:gap-6"
        >
          <a
            href="#services"
            className="transition-colors hover:text-indigo-700"
          >
            خدمات کناف
          </a>

          <a
            href="#contact"
            className="transition-colors hover:text-indigo-700"
          >
            تماس با ما
          </a>

          <a
            href="#products"
            className="transition-colors hover:text-indigo-700"
          >
            محصولات کناف
          </a>
        </nav>

        {/* Copyright */}
        <div className="text-center text-slate-400">
          © {new Date().getFullYear()} کناف سازه غرب؛ تمامی حقوق محفوظ است.
        </div>
      </div>
    </footer>
  );
}