import React from "react";

// components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
// import DarkFooter from "components/Footers/DarkFooter.js";

// sections 
import Texto from "./index-sections/Texto.js";
import Carousel from "./index-sections/Carousel.js";
import CadastrarHospital from "./index-sections/CadastrarHospital.js";

import Quedoa from "./index-sections/Quedoa.js";

function Index() {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <IndexHeader />
        <div className="main">
          <Carousel />
          <Texto />
          <Quedoa />
          <CadastrarHospital />
          {/* <DarkFooter /> */}
        </div>
      </div>
    </>
  );
}

export default Index;
