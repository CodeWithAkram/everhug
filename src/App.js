import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from './Home';
import Aboutus from './Aboutus';
import OurServices from './OurServices';
import Contactus from './Contactus';
import { Helmet } from "react-helmet";

const App = () => {
  return (
    <>
      <Helmet>
        <title>Welcome to Everhug</title>
        <meta name="description" content="this is for Everhug" />
      </Helmet>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<Aboutus />} />
        <Route exact path="/ourservices" element={<OurServices />} />
        <Route exact path="/contact" element={<Contactus />} />
      </Routes>



    </>
  );
}

export default App;
