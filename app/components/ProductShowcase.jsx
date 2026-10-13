const ProductShowcase = () => {
  const products = [
    {
      title: "پنل کناف ساده",
      image: "/images/products/simple-panel.jpg",
      description:
        "پنل گچی استاندارد مناسب برای اجرای دیوار و سقف‌های داخلی",
      specs: [
        ["ضخامت", "12.5 میلی‌متر"],
        ["ابعاد", "120 × 240 سانتی‌متر"],
        ["نوع", "استاندارد"],
        ["کاربرد", "دیوار و سقف"],
      ],
    },
    {
      title: "پنل کناف ضد رطوبت",
      image: "/images/products/moisture-panel.jpg",
      description:
        "مناسب برای محیط‌های مرطوب مانند سرویس بهداشتی و آشپزخانه",
      specs: [
        ["ضخامت", "12.5 میلی‌متر"],
        ["ابعاد", "120 × 240 سانتی‌متر"],
        ["نوع", "ضد رطوبت"],
        ["کاربرد", "محیط‌های مرطوب"],
      ],
    },
    {
      title: "پنل کناف ضد حریق",
      image: "/images/products/fire-panel.jpg",
      description:
        "پنل مقاوم در برابر حرارت و آتش، مناسب برای فضاهای حساس",
      specs: [
        ["ضخامت", "15 میلی‌متر"],
        ["ابعاد", "120 × 240 سانتی‌متر"],
        ["نوع", "ضد حریق"],
        ["کاربرد", "فضاهای حساس"],
      ],
    },
  ];

  return (
    <section
      dir="rtl"
      className="w-full overflow-hidden bg-white py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* عنوان */}
        <div className="mx-auto mb-8 max-w-2xl text-center sm:mb-12">
          <span className="mb-3 inline-block rounded-full bg-slate-100 px-4 py-1.5 text-xs font-medium text-slate-600 sm:text-sm">
            محصولات ما
          </span>

          <h2 className="text-2xl font-extrabold leading-tight text-slate-900 sm:text-3xl lg:text-4xl">
            محصولات کناف
          </h2>

          <p className="mt-3 text-sm leading-7 text-slate-500 sm:text-base">
            مجموعه‌ای از محصولات باکیفیت کناف برای اجرای پروژه‌های ساختمانی
          </p>
        </div>

        {/* محصولات */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
          {products.map((product) => (
            <article
              key={product.title}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* تصویر */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* محتوا */}
              <div className="p-4 sm:p-5">
                <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
                  {product.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {product.description}
                </p>

                {/* مشخصات */}
                <div className="mt-4 divide-y divide-slate-100 rounded-xl bg-slate-50 px-3">
                  {product.specs.map(([label, value]) => (
                    <div
                      key={label}
                      className="flex items-center justify-between gap-3 py-2.5 text-sm"
                    >
                      <span className="shrink-0 text-slate-500">
                        {label}
                      </span>

                      <span className="text-left font-medium text-slate-800">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* دکمه */}
                <button
                  type="button"
                  className="mt-4 w-full rounded-xl bg-slate-900 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-slate-700 active:scale-[0.98]"
                >
                  مشاهده جزئیات
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;