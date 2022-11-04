import Head from "next/head";
import Banner from "../components/home/Banner";
import CareersList from "../components/home/CareersList";
import HomeDescription from "../components/home/HomeDescription";

export default function Home() {
  const title = "Career Growth";
  const quote =
    "Roadmaps, articles, and useful resources to help you choose a career path, start your journey and grow in future.";
  const image = "https://source.unsplash.com/600x360/?education";

  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#21394f" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        <title>Career Growth Roadmap</title>

        {/** Seo Tags */}
        {/* Primary Meta Tags */}
        {/* <meta name="type" content="website" />
        <meta name="author" content="Pelumi Akintokun, Timonwa" />
        <meta name="title" content="Tech Roadmap" />
        <meta
          name="description"
          content="Begin your career in Tech. Roadmaps, articles, and resources to help you choose a career path, start your journey and grow in tech."
        /> */}

        {/* Open Graph / Facebook Meta Tags */}
        {/* <meta property="og:type" content="website" />
        <meta property="og:image" content="/seo-image.png" />
        <meta property="og:url" content="https://techroadmap.xyz" />
        <meta property="og:title" content="Tech Roadmap" />
        <meta
          property="og:description"
          content="Begin your career in Tech. Roadmaps, articles, and resources to help you choose a career path, start your journey and grow in tech."
        /> */}

        {/* Twitter Meta Tags */}
        {/* <meta property="twitter:careers__card" content="summary_large_image" />
        <meta property="twitter:image" content="/seo-image.png" />
        <meta property="twitter:url" content="https://techroadmap.xyz" />
        <meta property="twitter:title" content="Tech Roadmap" />
        <meta
          property="twitter:description"
          content="Begin your career in Tech. Roadmaps, articles, and resources to help you choose a career path, start your journey and grow in tech."
        /> */}
      </Head>
      <Banner title={title} quote={quote} image={image} />
      <main>
        <HomeDescription />
        <CareersList />
      </main>
    </div>
  );
}
