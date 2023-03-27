import "@styles/globals.css";
import NextNProgress from "nextjs-progressbar";
import { ThemeProvider } from "next-themes";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ParallaxProvider } from "react-scroll-parallax";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <NextNProgress color="#5651e5" />
      <ParallaxProvider>
        <Component {...pageProps} />
      </ParallaxProvider>
    </ThemeProvider>
  );
}

export default MyApp;
