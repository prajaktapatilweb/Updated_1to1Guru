import { urlObjectKeys } from "next/dist/shared/lib/utils";
import React from "react";
import { Container, Row, Col, Card } from "reactstrap";
import Image from "next/image";
import StudentFormFieldsSummer from "./StudentFormFieldsSummer";

export default function SummerHero() {
    return (
        <div >
            {/* <section className=" heroimg" style={{backgroundImage: `url("${'/subjects/'+props.imgname}")`}}> */}
            <section className="section heroimg">
                {/* <Image src="/subjects/herobg1.jpg"  layout="fill"/> */}


                <Container className="shape-container d-flex align-items-center py-md-4 py-lg-7 py-sm-1">
                    <div className="col px-0">
                        <Row className="align-items-center justify-content-center">
                            <Col className=" text-center " lg="6">
                                <Card
                                    className="card-profile shadow px-5 pb-5 pt-3"
                                    data-aos="fade-left" style={{ backgroundColor: "transparent" }}>
                                    {/* <Card
                      className="card-profile shadow px-5 pb-5 pt-3"
                      data-aos="fade-left" style={{opacity:"0.9" ,backgroundImage:"linear-gradient(to right, rgba(58,37,109,.9), rgba(23,43,77,1))"}}
                    > */}

                                    <p className="display-3 mb-0 py-3 text-udfc-orange ">
                                        Mathematics and English Bootcamp <span className="display-4"> <i></i></span></p>
                                    <Row>
                                        <Col>
                                            {/* <Col lg="3" md="3" sm="3" xl="3"> </Col>
                      <Col lg="9" sm="9" md="9" xl="9">  */}
                                            <p className="display-4" style={{ color: " #fb6340" }}> Let&apos;s Make Summer Fun</p>
                                            <p className="display-4" style={{ color: "white" }}>
                                                {/* <li> Personalized Learning </li>
                                                <li> Public Speaking </li>
                                                <li> Creative Writing </li>
                                                <li> Vedic Mathematics</li>
                                                <li> Memory Tricks</li>
                                                <li> Learning Games</li> */}
                                            </p>

                                        </Col>
                                    </Row>

                                    <p className="h3 text-white pt-3">
                                        For Std 5th to 7th <br />& 8th to 10th <br />
                                    </p>

                                    <p className="h3 text-white pt-3">
                                        May - 2022 <br />
                                    </p>

                                </Card>
                            </Col>
                            <Col className="" lg="6" sm="12">
                                <Card
                                    className="card-profile shadow px-5 pb-5 pt-3"
                                    data-aos="fade-left"
                                >
                                    < StudentFormFieldsSummer />
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </Container>

            </section>




        </div>
    );
}
