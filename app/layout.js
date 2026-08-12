import localFont from "next/font/local";
import "./globals.css";

const vazirmatn = localFont({
  src: [
    {
      path: "../node_modules/vazirmatn/fonts/webfonts/Vazirmatn-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../node_modules/vazirmatn/fonts/webfonts/Vazirmatn-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../node_modules/vazirmatn/fonts/webfonts/Vazirmatn-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../node_modules/vazirmatn/fonts/webfonts/Vazirmatn-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../node_modules/vazirmatn/fonts/webfonts/Vazirmatn-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-vazirmatn",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://kanafgharb.ir"),

  title: {
    default: "کناف سازه غرب | فروش پنل های کناف در تهران، ملارد و کرج",
    template: "%s | کناف سازه غرب",
  },

  description:
    "کناف سازه غرب؛ فروش پنل های کناف، سازه و تجهیزات کناف با کیفیت بالا در ملارد، تهران و کرج.",

  keywords: [
    "کناف سازه غرب",
    "کناف تهران",
    "کناف ملارد",
    "کناف کرج",
    "فروش پنل های کناف",
  ],

  applicationName: "کناف سازه غرب",

  authors: [
    {
      name: "کناف سازه غرب",
    },
  ],

  creator: "کناف سازه غرب",
  publisher: "کناف سازه غرب",

  alternates: {
    canonical: "https://kanafgharb.ir",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "fa_IR",
    url: "https://kanafgharb.ir",
    siteName: "کناف سازه غرب",

    title: "کناف سازه غرب | فروش پنل های کناف",

    description:
      "فروش پنل های کناف، سازه و تجهیزات کناف در ملارد، تهران و کرج.",

    images: [
      {
        url: "/kanafgharb.png",
        width: 1200,
        height: 630,
        alt: "کناف سازه غرب | فروش پنل های کناف",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "کناف سازه غرب | فروش پنل های کناف",

    description:
      "فروش پنل های کناف و تجهیزات کناف در ملارد، تهران و کرج.",

    images: ["/kanafgharb.png"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${vazirmatn.variable} min-h-full`}
    >
      <body className="min-h-screen w-full max-w-full overflow-x-clip bg-slate-50 font-vazirmatn antialiased">
        {children}
      </body>
    </html>
  );
}