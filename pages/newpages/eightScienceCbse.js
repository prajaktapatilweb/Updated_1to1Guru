import React from 'react'
import HeroInnerPages from '../../components/HeroInnerPages'
import Navbar1 from '../../components/Navbar1'
import { Container, Card } from "reactstrap";

export default function eightScienceCbse() {
    return (
        <div>
            <Navbar1 />

            <HeroInnerPages heading=" CBSE Class 8 Science" textdetail="" />
            <section className="section" style={{ backgroundColor: "#F5F5F5" }}>
                <Container>
                    Science
                </Container>
            </section>
        </div>
    )
}
