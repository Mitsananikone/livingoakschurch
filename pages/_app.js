import { useState } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/next";
import "@/styles/globals.css";

// Modal and News components
import Modal from "@/components/modal/Modal";
import NewsPopup from "@/components/News/newspopup";
import RibbonCutting from "@/components/News/articles/ribbonCutting"; // default article
import OpeningDay from "@/components/News/articles/openingDay";

// Navbar dynamic import (client-only)
const Navbar = dynamic(() => import("@/components/nav/nav"), { ssr: false });

export default function App({ Component, pageProps }) {
  const [isNewsOpen, setIsNewsOpen] = useState(false);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000000" />
        <title>Living Oaks Church | Real Hope in Jesus</title>
        <meta
          name="description"
          content="Leading REAL people with REAL hurts to find REAL hope in Jesus Christ."
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </Head>

      {/* Navbar with callback to open news modal */}
      <Navbar onOpenNews={() => setIsNewsOpen(true)} />

      {/* Main page content */}
      <Component {...pageProps} />

      {/* Modal displaying NewsPopup with the RibbonCutting article */}
      <Modal isOpen={isNewsOpen} onClose={() => setIsNewsOpen(false)}>
         <NewsPopup article={OpeningDay} />
         <NewsPopup article={RibbonCutting} />
      </Modal>

      <Analytics mode="production" />
    </>
  );
}
