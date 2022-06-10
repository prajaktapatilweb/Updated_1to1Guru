import React from "react";
import Footer from "../../components/Footer";
import Navbar1 from "../../components/Navbar1";
import Othercourse from "../../components/Othercourse";
import CourseServices from "../../components/CourseServices";
import Neetestimonial from "../../components/Neetestimonial";
import Homihero from "../../components/compitivexam/Homihero";
import Homidetails from "../../components/compitivexam/Homidetails";
import Homiaccord from "../../components/compitivexam/Homiaccord";

export default function homibhaba() {
  return (
    <div>
      <Navbar1 />
      <Homihero />
      <Homidetails />
      <Homiaccord />



      <Othercourse cname="mhtcet" />
      <CourseServices
        coursenm="MHT-CET Succcess 2022"
        title="Our MHT-CET Success 2022 Package Includes "
      />
      <Neetestimonial />
      <Footer />
    </div>
  );
}
