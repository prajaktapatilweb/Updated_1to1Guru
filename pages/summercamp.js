import React from 'react'
import Navbar1 from '../components/Navbar1'
import FPServices from "../components/FPServices";
import Footer from "../components/Footer";
import Neetaccordian from '../components/Neetaccordian'
import Neetform from '../components/Neetform'
import Othercourse from '../components/Othercourse'
import Neetestimonial from '../components/Neetestimonial';
import CourseServices from '../components/CourseServices';
import SummerHero from '../components/summer/SummerHero';
import Summeraccordian from '../components/summer/Summeraccordian';
import FPVideo from '../components/FPVideo';
import AboutSummerCamp from '../components/summer/AboutSummerCamp';

export default function summercamp() {
    return (
        <div>
            <Navbar1 />
            <SummerHero />
            <AboutSummerCamp />
            <FPVideo />
            {/* <Summeraccordian /> */}



            <Othercourse cname="neet" />
            {/* <CourseServices coursenm="Neet Succcess 2022" title="Our NEET Success 2022 Package Includes " /> */}
            {/* <Neetestimonial /> */}
            <Footer />

        </div>
    )
}
