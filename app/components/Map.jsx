export default function Map() {
  return (
    <section
      id="location"
      aria-labelledby="location-title"
      className="relative"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 text-center">
          <h2
            id="location-title"
            className="text-2xl font-black text-slate-900 sm:text-3xl"
          >
            آدرس کناف سازه غرب در ملارد
          </h2>

          <p className="mt-2 text-sm leading-7 text-slate-600 sm:text-base">
            کناف سازه غرب در ملارد، سه‌راه مارلیک، بلوار ولایت، کوچه ولیعصر
            آماده ارائه خدمات و فروش پنل‌های کناف است.
          </p>
        </div>

        <div className="h-64 w-full overflow-hidden sm:h-80">
          <iframe
            src="https://www.google.com/maps?q=35.6978016,50.9939935&z=18&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="موقعیت کناف سازه غرب در ملارد، سه‌راه مارلیک، بلوار ولایت، کوچه ولیعصر"
            className="grayscale transition-all duration-700 hover:grayscale-0"
          />
        </div>
      </div>
    </section>
  );
}