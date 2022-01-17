import React from "react";

import Menu from './Menu';
import Banner from './Banner';
import Services from "./Services";
import Ourstory from "./Ourstory";
import Footer from "./Footer";
import Footertop from "./Footertop";
import Aboutus from "./Aboutus";


const Home = () => {
    return (
        <>
            <Menu />
            <Banner />           
            <Services />            
            <Ourstory />
            <Footertop />
            <Footer />
        </>
    )
}

export default Home;