import React from 'react'
import Navbar1 from '../../components/Navbar1'
import FPServices from "../../components/FPServices";
import Footer from "../../components/Footer";
import Neetaccordian from '../../components/Neetaccordian'
import Neetform from '../../components/Neetform'
import Othercourse from '../../components/Othercourse'
import Neetestimonial from '../../components/Neetestimonial';
import Neetheropart from '../../components/Neetheropart';
import CourseServices from '../../components/CourseServices';

export default function neetmain() {
    return (
        <div>
            <Navbar1 />
            <Neetheropart />
            <Neetform />
            <Neetaccordian />
            <Othercourse cname="neet" />
            <CourseServices coursenm="Neet Succcess 2022" title="Our NEET Success 2022 Package Includes "/>
            <Neetestimonial/>
            <Footer /> 
            
        </div>
    )
}
