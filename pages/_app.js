import "../styles/css-resets/normalize.css";
import "../styles/css-resets/my-css-reset.css";
import "../styles/css-resets/my-font-reset.css";
import "../styles/globals.scss";

import NavBar from "../components/home/NavBar";
import ContributeCTA from "../components/home/ContributeCTA";
import Footer from "../components/home/Footer";
import NavSpace from "../components/home/NavSpace";
import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <NavSpace />
      <Component {...pageProps} />
      <ContributeCTA />
      <Footer />
    </>
  );
}

export default MyApp;
