import React,{useEffect} from 'react';
import { Container, Row, Col, Card } from "reactstrap";
import Navbar1 from "../components/Navbar1";
import HeroInnerPages from '../components/HeroInnerPages';
import StudentFormFields from '../components/StudentFormFields';
import Aos from 'aos';
import Footer from '../components/Footer';

export default function StudentForm() {
    useEffect(() => {
        Aos.init({duration:1500});
     
       }, []);
    return (
        <>
            <Navbar1 />
            <HeroInnerPages heading="Student Form" textdetail="If you are interested in personal coaching for your kid through the online platform, enroll your kid to get discount. The 1to1GURU is a new startup. It has been initiated to overcome the problems which students are facing in pandemic and also due to the poor student teacher ratio." />
            <section className="section pb-0 section-components">
                <Container className="mb-5">
                    <Card className="card-profile shadow mt--150" data-aos="fade-down">
                        {/* Inputs */}
                        <Row className="m-2 mb-5 py-5">
                            <Col lg="2" sm="1"></Col>
                            <Col lg="8" sm="10">
                                {/* <h3 className="h4 text-success font-weight-bold mb-4 mt-5"></h3> */}
                                <StudentFormFields />
                            </Col>
                        </Row>

                    </Card>
                </Container>

            </section>
            <Footer />
        </>



    )
}
