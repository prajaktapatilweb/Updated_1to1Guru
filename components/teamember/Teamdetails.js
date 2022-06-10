import React from 'react'
import Footer from '../Footer'
import Navbar1 from '../Navbar1'
import { bhushan, mubarak, adinath } from './Teamconstants'
import { useRouter } from 'next/router'
import Expertdetails from './Expertdetails'


export default function Teamdetails() {

    const router = useRouter()
    console.log({ router })
    const { name } = router.query
    console.log(name)

    return (
        <div>
            <Navbar1 />
            {/* <Demodetails facebook='asdfs' linkedin='link' /> */}
            {(() => {
                switch (name) {
                    case 'mubarak':
                        return (<Expertdetails data={mubarak} />)
                    case 'bhushan':
                        return (<Expertdetails data={bhushan} />)
                    case 'adinath':
                        return (<Expertdetails data={adinath} />)
                }
            })()}

            {/* <Mubadetails data={bhushaninfo} /> */}

            <Footer />
        </div>
    )
}
