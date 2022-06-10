import React from "react";
import { Container, Card } from "reactstrap";
import Footer from "../../components/Footer";
import HeroInnerPages from "../../components/HeroInnerPages";
import Navbar1 from "../../components/Navbar1";
import Othercourse from "../../components/Othercourse";
import { Table } from "reactstrap";

export default function eightScienceIcse() {
    return (
        <div>
            <Navbar1 />

            <HeroInnerPages heading=" ICSE Class 8 Science" textdetail="" />
            <section className="section" style={{ backgroundColor: "#F5F5F5" }}>
                <Container>
                    <h5>
                        <span className="font-weight-bold text-warning display-7">
                            ICSE Syllabus for Class 8 Scince -{" "}
                        </span>{" "}
                    </h5>
                </Container>
            </section>
            <Footer />
        </div>
    )
}