import React from 'react'
import Footer from '../../components/Footer'
import HeroInnerPages from '../../components/HeroInnerPages'
import Navbar1 from '../../components/Navbar1'
import Paidtestseries from '../../components/Paidtestseries'


export default function onlinetest() {
    return (
        <div>
            <Navbar1 />
      <HeroInnerPages 
        heading="Personalised Test Series  "
        textdetail="Accelerate Your Preprations With 1to1Guru Personlised Test Series for NEET, IIT-JEE, MHT-CET"
      />
      <Paidtestseries />
      <br></br>
      <Footer />
        </div>
    )
}
