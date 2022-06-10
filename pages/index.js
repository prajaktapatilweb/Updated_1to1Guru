import React from "react";
import FPLearn from "../components/FPLearn";
import FPAbout from "../components/FPAbout";
import Footer from "../components/Footer";
import FPServices from "../components/FPServices";
import FPHero from "../components/FPHero";
import FPHigh1to1guru from "../components/FPHigh1to1guru";
import Navbar1 from "../components/Navbar1";
import Ourteam from "../components/Ourteam";
import Testimonial3 from "../components/Testimonial3";
import MainCarasousel from "../components/MainCarasousel";
import Popupmodal from "../components/Popupmodal";

//import Carouseltest from "./Carouseltest";
// import App from "../App"
// import Trial from "./Trial"
// import TeacherFormFields from "./TeacherFormFields";

class Index extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    //this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>

        <Navbar1 />
        {/* <Newnav /> */}

        <FPHero />
        {/* <Popupmodal /> */}

        {/* <Othercourse /> */}

        <MainCarasousel />

        <FPLearn />

        <FPHigh1to1guru />
        {/* <FPVideo /> */}
        <FPServices />

        <FPAbout />
        <Ourteam />
        {/* <Testimonial /> */}
        <Testimonial3 />
        <br />
        {/* <FPTeachers />  */}
        {/* <Carouseltest /> */}
        <Footer />
        {/* <App /> */}
      </>
    );
  }
}

export default Index;
