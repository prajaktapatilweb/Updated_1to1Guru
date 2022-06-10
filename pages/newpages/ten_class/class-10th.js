import React from 'react'
import Footer from '../../../components/Footer'
import Navbar1 from '../../../components/Navbar1'
import Othercourse from '../../../components/Othercourse'
import CourseServices from '../../../components/CourseServices'
import Neetestimonial from '../../../components/Neetestimonial'
import TenthHero from '../../../components/classcomponents/TenthHero'
import TenthDetails from '../../../components/classcomponents/TenthDetails'
import TenthAccordian from '../../../components/classcomponents/TenthAccordian'


export default function class10th() {
    return (
        <div>
            <Navbar1 />
            <TenthHero />
            <TenthDetails />
            <TenthAccordian />
            <Othercourse cname='mhtcet' />
            <CourseServices coursenm="MHT-CET Succcess 2022" title="Our MHT-CET Success 2022 Package Includes " />
            <Neetestimonial />
            <Footer />


        </div>
    )
}
