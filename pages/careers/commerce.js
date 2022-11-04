import React, { useRef, useState, useEffect } from "react";
//import SideBar from "../../components/SideBar";
//import FrontendNav from "../../components/frontendPageContent/FrontendNav";
import Banner from "../../components/Banner";
import Intro from "../../components/commercePageContent/Intro";
import WhatIs from "../../components/commercePageContent/WhatIs";
//import WhatIs from "../../components/frontendPageContent/WhatIs";

const Commerce = () =>{
    const title = "";
    const quote =
    '"Websites promote you 24/7: No employee will do that." – Paul Cookson';
const image =
    "https://source.unsplash.com/600x360/?education";

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

return(
<div className="backendPage">
    {/* <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#21394f" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <title>Commerce Roadmap.</title>
    </Head> */}
    {/* <SideBar handleMenu={handleMenu} openMenu={openMenu} ref={menuRef}>
        <FrontendNav handleMenu={handleMenu} openMenu={openMenu} />
      </SideBar> */}
    <Banner title={title} quote={quote} image={image} />
    <main>
        <Intro />
        <WhatIs />
    </main>
    </div>
);
};

export default Commerce;