import React from 'react'
import Footer from '../../components/Footer'
import Navbar1 from '../../components/Navbar1'
import Othercourse from '../../components/Othercourse'
import CourseServices from '../../components/CourseServices'
import Neetestimonial from '../../components/Neetestimonial'
import Olympiadhero from '../../components/compitivexam/Olympiadhero'
import Olympiadetails from '../../components/compitivexam/Olympiadetails'
import Olympiadaccord from '../../components/compitivexam/Olympiadaccord'


export default function olympiad() {
  return (
    <div> 
     <Navbar1 />
     <Olympiadhero />
     <Olympiadetails />
     <Olympiadaccord />
     
    
 
  
    <Othercourse cname='mhtcet' />
    <CourseServices coursenm="MHT-CET Succcess 2022" title="Our MHT-CET Success 2022 Package Includes "/>
    <Neetestimonial />
    <Footer />
    </div>
  )
}
