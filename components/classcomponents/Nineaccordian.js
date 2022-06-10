import React from "react";
import { Container, Row, Col, Card, CardBody, Button } from "reactstrap";
import Accordians from "../Accordians";
import { ccet, cjee, cneet, homibhabha, olympiad } from "../Link";
import Link from "next/link";
import Cbse9thtabs from "./Cbse9thtabs";
import Msb9thtabs from "./Msb9thtabs";
import Icse9thtabs from "./Icse9thtabs";

export default function Nineaccordian() {
    return (
        <div>
            <section
                className="section"
                style={{
                    backgroundImage:
                        "linear-gradient(to right, rgba(58,37,109,.9), rgba(23,43,77,1))",
                }}
            >
                <Container>
                    <h3 className="h1-responsive text-center font-weight-bold text-udfc-orange pb-3">
                        Step into Bright Future with starting 9th
                    </h3>
                    <Row>
                        <Accordians
                            header={
                                <span
                                    className="font-weight-bold"
                                    style={{ fontSize: "1.25rem" }}
                                >
                                    {" "}
                                    CBSE 9<sup>th</sup> Standard Syllabus
                                </span>
                            }
                            body={<Cbse9thtabs />}
                        // {<span className="font-weight-bold" style={{fontSize:" 1.25rem"}}>CBSE Syllabus For Math <br></br> CBSE Syllabus For Science </span>}

                        //   {<Cetphytb />}
                        />
                    </Row>
                    <Row>
                        <Accordians
                            header={
                                <span
                                    className="font-weight-bold"
                                    style={{ fontSize: "1.25rem" }}
                                >
                                    {" "}
                                    Maharashtra State Board 9<sup>th</sup> Standard Syllabus
                                </span>
                            }
                            body={<Msb9thtabs />}
                        />
                    </Row>
                    <Row>
                        <Accordians
                            header={
                                <span
                                    className="font-weight-bold"
                                    style={{ fontSize: "1.25rem" }}
                                >
                                    {" "}
                                    ICSE 9<sup>th</sup> Standard Syllabus
                                </span>
                            }
                            body={<Icse9thtabs />}
                        />
                    </Row>

                    <Row>
                        <Accordians
                            header={
                                <span
                                    className="font-weight-bold"
                                    style={{ fontSize: "1.25rem" }}
                                >
                                    {" "}
                                    Foundations for 9<sup>th</sup> Standard
                                </span>
                            }
                            body={
                                <p>
                                    <Link href={cneet}>
                                        <a target="_blank" style={{ color: "blue" }}>
                                            Neet Foundation Register Now
                                        </a>
                                    </Link>
                                    ,<br></br>
                                    <Link href={cjee}>
                                        <a target="_blank" style={{ color: "blue" }}>
                                            IIT-JEE Foundation Register Now
                                        </a>
                                    </Link>
                                    ,<br></br>
                                    <Link href={ccet}>
                                        <a target="_blank" style={{ color: "blue" }}>
                                            MHT-CET Foundation Register Now
                                        </a>
                                    </Link>
                                </p>
                            }
                        />
                    </Row>
                    <Row>
                        <Accordians
                            header={
                                <span
                                    className="font-weight-bold"
                                    style={{ fontSize: "1.25rem" }}
                                >
                                    {" "}
                                    Compitative Exams for 9<sup>th</sup> Standard
                                </span>
                            }
                            body={
                                <p>
                                    <Link href={homibhabha}>
                                        <a target="_blank" style={{ color: "blue" }}>
                                            Dr Homi Bhabha Register Now
                                        </a>
                                    </Link>
                                    ,<br></br>
                                    <Link href={olympiad}>
                                        <a target="_blank" style={{ color: "blue" }}>
                                            Olympiad Register Now
                                        </a>
                                    </Link>
                                    {/* ,<br></br>
                  <Link href={ccet}>
                    <a target="_blank" style={{ color: "blue" }}>
                      MHT-CET Foundation Register Now
                    </a>
                  </Link> */}
                                </p>}
                        />
                    </Row>
                </Container>
            </section>
        </div>
    );
}
