import { Fragment } from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import "./global.css";
import AnimatedCursor from "react-animated-cursor"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <title>Shubham Parkhi · Web / UI / UX Developer · Personal Portfolio</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta name="description" content="Shubham Parkhi&#039;s showcase of his projects and some thoughts as a Front-End Developer from Pune, India. A self-taught front-end developer, who loves intuitive clean and modern User Interface (UI) design as well as user experience (UX). He makes meaningful and delightful digital products that create an equilibrium between user needs and business goals." />
        <meta name="google-site-verification" content="y4cspBWZ4tL7NJduqiPuDcMf-0sRMM3VKgVA8alDeM0" />
      </Head>
      <AnimatedCursor 
      innerSize={10}
      outerSize={30}
      color='50, 120, 200'
      outerAlpha={0.2}
      innerScale={0.75}
      outerScale={2}/>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
