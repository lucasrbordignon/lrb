import "./globals.css";

// External styles
import "react-circular-progressbar/dist/styles.css";
import "react-modern-drawer/dist/index.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-creative";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import "tw-elements-react/dist/css/tw-elements-react.min.css";

import BackToTop from "@/src/components/shared/BackToTop";
import CustomCursor from "@/src/components/shared/CustomCursor";
import ModeSwitcher from "@/src/components/shared/ModeSwitcher";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "../context/theme-provider";

const poppins = Poppins({
  weight: ["200", "300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Lucas R. Bordignon",
  description: "Lucas R. Bordignon - Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true} className="scroll-smooth">
      <body
        className={`${poppins.className} relative`}
        suppressHydrationWarning={true}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main>
            {children}
            <CustomCursor />
            <BackToTop />
            <ModeSwitcher />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
