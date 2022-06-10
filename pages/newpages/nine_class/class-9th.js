import React from 'react'
import Navbar1 from '../../../components/Navbar1'
import Othercourse from '../../../components/Othercourse'
import CourseServices from '../../../components/CourseServices'
import Neetestimonial from '../../../components/Neetestimonial'
import Ninehero from '../../../components/classcomponents/NineHero'
import Footer from '../../../components/Footer'
import Ninedetails from '../../../components/classcomponents/Ninedetails'
import Nineaccordian from '../../../components/classcomponents/Nineaccordian'


export default function class9th() {
    return (
        <div>
            <Navbar1 />
            <Ninehero />
            <Ninedetails />
            <Nineaccordian />



            <Othercourse cname='mhtcet' />
            <CourseServices coursenm="MHT-CET Succcess 2022" title="Our MHT-CET Success 2022 Package Includes " />
            <Neetestimonial />
            <Footer />





        </div>
    )
}
