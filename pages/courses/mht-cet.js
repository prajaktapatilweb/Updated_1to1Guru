import React from 'react'
import Cetaccordian from '../../components/Cetaccordian'
import Cetdetails from '../../components/Cetdetails'
import Cethero from '../../components/Cethero'
import Footer from '../../components/Footer'
import Navbar1 from '../../components/Navbar1'
import Othercourse from '../../components/Othercourse'
import CourseServices from '../../components/CourseServices'
import Neetestimonial from '../../components/Neetestimonial'

export default function mht_cet() {
    return (
        <div>
            <Navbar1 />
            <Cethero />
            <Cetdetails />
            <Cetaccordian />
            <Othercourse cname='mhtcet' />
            <CourseServices coursenm="MHT-CET Succcess 2022" title="Our MHT-CET Success 2022 Package Includes "/>
            <Neetestimonial />
            <Footer />
            

            
        </div>
    )
}
