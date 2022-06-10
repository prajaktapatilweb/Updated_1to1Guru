
import React from 'react'
import Footer from '../../components/Footer'
import HeroInnerPages from '../../components/HeroInnerPages'
import Navbar1 from '../../components/Navbar1'
import Teammainret from '../../components/teamember/Teammainret'


export default function teamember() {
    return (
        <div>

            <Navbar1 />
            <HeroInnerPages
                heading='Team Member'
                textdetail=''
            />

            <Teammainret />


            <Footer />
        </div>
    )
}
