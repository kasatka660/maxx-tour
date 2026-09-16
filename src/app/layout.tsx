import type { Metadata } from "next";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./globals.css";
import "./layout.css";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { ConsultationModalProvider } from "../utils/context/consultation-modal";

// FontAwesome injects its own <style> tag at import time, which double-renders
// and flashes oversized icons under SSR. Import the stylesheet above instead.
config.autoAddCss = false;

const title = "MaxxTour.by — Семейное турагентство в Минске";
const description =
  "MaxxTour — семейное турагентство в Минске. Подберём идеальный тур для вас и вашей семьи: индивидуальный подход, честные цены и поддержка на каждом этапе.";
const shortDescription =
  "Подберём идеальный тур для вас и вашей семьи: индивидуальный подход, честные цены и поддержка на каждом этапе.";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://maxxtour.by",
  ),
  title,
  description,
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    siteName: "MaxxTour.by",
    title,
    description: shortDescription,
    images: ["/og-logo.png"],
  },
  twitter: {
    card: "summary",
    title,
    description: shortDescription,
    images: ["/og-logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>
        <ConsultationModalProvider>
          <Header />
          {children}
          <Footer />
        </ConsultationModalProvider>
      </body>
    </html>
  );
}
