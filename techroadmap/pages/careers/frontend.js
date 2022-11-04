import React, { useRef, useState, useEffect } from "react";
import SideBar from "../../components/SideBar";
import FrontendNav from "../../components/frontendPageContent/FrontendNav";
import Banner from "../../components/Banner";
import Intro from "../../components/frontendPageContent/Intro";
import WhatIs from "../../components/frontendPageContent/WhatIs";
import Roadmap from "../../components/frontendPageContent/Roadmap";
import Networking from "../../components/Networking";
import CodeEditors from "../../components/frontendPageContent/CodeEditors";
import HtmlAndCssBasic from "../../components/frontendPageContent/HtmlAndCssBasic";
import HtmlAndCssAdvanced from "../../components/frontendPageContent/HtmlAndCssAdvanced";
import VersionControl from "../../components/VersionControl";
import DeploymentServices from "../../components/frontendPageContent/DeploymentServices";
import Debugging from "../../components/frontendPageContent/Debugging";
import JsBasics from "../../components/frontendPageContent/JsBasics";
import JsAdvanced from "../../components/frontendPageContent/JsAdvanced";
import CssFrameworks from "../../components/frontendPageContent/CssFrameworks";
import CssProcessors from "../../components/frontendPageContent/CssProcessors";
import Json from "../../components/frontendPageContent/Json";
import Apis from "../../components/frontendPageContent/Apis";
import JsFrameworks from "../../components/frontendPageContent/JsFrameworks";
import DesignResources from "../../components/frontendPageContent/DesignResources";
import OtherResources from "../../components/frontendPageContent/OtherResources";
import WhatNext from "../../components/frontendPageContent/WhatNext";
import Head from "next/head";

const Frontend = () => {
  const title = "";
  const quote =
    '"Websites promote you 24/7: No employee will do that." – Paul Cookson';
  const image = "https://source.unsplash.com/600x360/?education";

  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (openMenu && menuRef.current && !menuRef.current.contains(e.target)) {
        setOpenMenu(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [openMenu]);

  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className="frontendPage">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#21394f" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <title>Arts Roadmap.</title>
      </Head>
      {/* <SideBar handleMenu={handleMenu} openMenu={openMenu} ref={menuRef}>
        <FrontendNav handleMenu={handleMenu} openMenu={openMenu} />
      </SideBar> */}
      <Banner title={title} quote={quote} image={image} />
      <main>
        <Intro />
        <WhatIs />
        {/* <Roadmap />
        <Networking />
        <CodeEditors />
        <HtmlAndCssBasic />
        <HtmlAndCssAdvanced />
        <VersionControl />
        <DeploymentServices />
        <Debugging />
        <JsBasics />
        <JsAdvanced />
        <CssFrameworks />
        <CssProcessors />
        <Json />
        <Apis />
        <JsFrameworks />
        <DesignResources />
        <OtherResources />
        <WhatNext /> */}
      </main>
    </div>
  );
};

export default Frontend;
