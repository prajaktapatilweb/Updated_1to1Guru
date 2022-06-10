import React from 'react'
import Footer from '../../components/Footer'
import Navbar1 from '../../components/Navbar1'
import Othercourse from '../../components/Othercourse'
import CourseServices from '../../components/CourseServices'
import Neetestimonial from '../../components/Neetestimonial'
import Eighthhero from '../../components/classcomponents/Eighthhero'
import Eighthdetails from '../../components/classcomponents/Eighthdetails'
import Eighthaccordian from '../../components/classcomponents/Eighthaccordian'


export default function class8th() {
    return (
        <div>
            <Navbar1 />
            <Eighthhero />
            <Eighthdetails />
            <Eighthaccordian />
            <Othercourse cname='mhtcet' />
            <CourseServices coursenm="MHT-CET Succcess 2022" title="Our MHT-CET Success 2022 Package Includes " />
            <Neetestimonial />
            <Footer />


        </div>
    )
}
