import React from "react";
import Footer from "../../components/Footer";
import Navbar1 from "../../components/Navbar1";
import HeroInnerPages from "../../components/HeroInnerPages";
import FreeTestSeries from "../../components/FreeTestSeries";
import Popupmodal from "../../components/Popupmodal";


export default function weeklytest() {
  return (
    <div>
      <Navbar1 />
      <Popupmodal />
      <HeroInnerPages
        heading="Demo Test Series for NEET, IIT-JEE, MHT-CET "
        textdetail="We are offering free test series to all students. One can download the test paper using the link and answer key will be shared through whatsapp."
      />
    <FreeTestSeries />
      <Footer />
      {/* <Button href={`https://wa.me/${contactdetail.contactno}?text=NEET`} >NEET</Button> */}
    </div>
  );
}
