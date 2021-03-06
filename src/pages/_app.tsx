import "../styles/global.scss";
import { AppProps } from "next/app";
// import "highlight.js/styles/tomorrow-night.css";
import { useRouter } from "next/router";
import { useEffect } from "react";
import React from "react";
import * as gtag from "../lib/gtag";
import "highlight.js/styles/atom-one-dark.css";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return <Component {...pageProps} />;
}

export default MyApp;
