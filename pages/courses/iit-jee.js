import React from 'react'
import Navbar1 from '../../components/Navbar1'
import Jeemainhero from '../../components/Jeemainhero'
import Footer from '../../components/Footer'
import Jeemaindetails from '../../components/Jeemaindetails'
import Jeeaccordians from '../../components/Jeeaccordians'
import Othercourse from '../../components/Othercourse'
import Neetestimonial from '../../components/Neetestimonial'
import CourseServices from '../../components/CourseServices'



export default function jeemain() {
    return (
        <div>
            <Navbar1 />
            <Jeemainhero />
            <Jeemaindetails />
            <Jeeaccordians />
            <Othercourse cname='iitjee'/>
            <CourseServices coursenm="IIT-JEE Succcess 2022" title="Our IIT-JEE Success 2022 Package Includes "/>
            <Neetestimonial />

           <Footer />
           
           
        </div>
    )
}
