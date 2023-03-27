import Head from "next/head";
import Navbar from "./Navbar";
import NavDown from "./NavDown";
import { useEffect } from "react";
import Footer from "./Footer";

export default function Layout(props) {
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.title = "Come Back 😥";
      } else {
        document.title = "refresh ⟳";
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta
          property="Custom"
          name="description"
          content="Portfolio Mardian Suherman"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col lg:max-w-7xl mx-auto">
        <Navbar />
        <div className="flex-grow bg-slate-100 dark:bg-slate-800 text-secondary dark:text-light font-overpass ">
          {props.children}
        </div>
        <NavDown />
        <Footer />
      </div>
    </>
  );
}
