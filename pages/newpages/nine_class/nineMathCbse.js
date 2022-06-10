import React from 'react'
import { Container, Card } from "reactstrap";
import HeroInnerPages from "../../../components/HeroInnerPages";
import Navbar1 from "../../../components/Navbar1";
import Footer from "../../../components/Footer";

export default function nineMathCbse() {
    return (
        <div>
            <Navbar1 />

            <HeroInnerPages heading=" CBSE Class 9 Maths" textdetail="" />
            <section className="section" style={{ backgroundColor: "#F5F5F5" }}>
                <Container>
                    <h5>
                        <span className="font-weight-bold text-warning display-7">
                            CBSE Syllabus for Class 9 Math -{" "}
                        </span>{" "}
                    </h5>
                </Container>
            </section>
            <Footer />

        </div>
    )
}
