import { useRouter } from 'next/router'
import React from 'react'
import { Container } from 'reactstrap';
import AllPagesStructure from '../components/AllPagesStructure';
import Footer from '../components/Footer';
import HeroInnerPages from '../components/HeroInnerPages';
import Navbar1 from '../components/Navbar1';

export default function SubjectSyllabus() {
    const router = useRouter();
    // console.log(router)
    // const name = router.asPath.split('/')
    // console.log(name[2].split('-'))
    const str = `${router.query.subject}`;

    const queryDetails = str.split('-');
    console.log(queryDetails);
    // const grade = list.split('-');
    // console.log(grade[0])
    // console.log(router)
    return (
        <div>
            <Navbar1 />
            <HeroInnerPages heading={`${queryDetails[1]} ${queryDetails[0]}  ${queryDetails[2]}`} />

            {queryDetails ?
                <AllPagesStructure grade={queryDetails[0]} board={queryDetails[1]} subject={queryDetails[2]} />
                : null
            }
            <Footer />

        </div>
    )
}
