import React, { useState } from "react";
import { Row, Col } from "reactstrap";
import { Container } from "react-bootstrap";
import Maintabs from "../Maintabs";
import Link from "next/link";
import { englishcbse8, englishicse9, mathcbse8, mathicse9, sciencecbse8, scienceicse9 } from "../Link";

export default function Icse9thtabs() {
    const icsesyl = {
        math: [
            "Pure Arithmetic",
            "Commercial Mathematics",
            "Algebra",
            "Geometry",
            "Statistics",
            "Mensuration",
            "Trigonometry",
            "Coordinate Geometry",
        ],
        biology: [
            " Basic Biology",

            " Flowering Plants",

            " Plant Physiology",

            " Diversity in living organisms / Ecosystems",

            "Human Anatomy and Physiology",

            "Health and Hygiene",

            "Waste generation and management",
        ],
        physics: [

            'Measurements and Experimentation',
            'Motion in one dimension',
            'Laws of Motion',
            'Fluids',
            'Heat and Energy',
            'Light',
            'Sound',
            'Electricity and Magnetism',
        ],
        chemistry: [
            ' The language of Chemistry',
            ' Chemical changes and reactions',
            ' Water',
            ' Atomic Structure and Chemical bonding',
            ' The Periodic Table',
            ' Study of the First Element – Hydrogen',
            'Study of Gas Laws',

        ],


        english:
            [
                'The Merchant of Venice',
                'Treasure Trove',
                'Poetry',
                'Prose (Short Stories)',
            ],
    };
    return (
        <>
            <Container>
                <h5 className="text-danger"> Subjects taught in ICSE Class 9th</h5>

                <Row className="justify-content-center">
                    <Col>
                        {/* Tabs with icons */}
                        <div className="mb-2">
                            {/* <small className="text-uppercase font-weight-bold"> */}
                            <p>
                                There are five main subjects taught in an academic year of CBSE
                                Board’s Class 8 curriculum. Student should study and pass all
                                the subject in Class 8. Therefore, to pass the 8th grade CBSE
                                and to get promoted to next Class, thorough insights of the
                                Class 8 syllabus of all subjects help the students for flying
                                colors. Following are the subjects of class 8 CBSE board and
                                Link to the Syllabus of Class 8 CBSE Science and Mathematics
                                subjects contained therein. Students are strongly encouraged to
                                undergo coaching classes with 1to1Guru in one-on-one format for
                                their performance upgradation.
                            </p>

                            {/* </small> */}
                        </div>
                        <Maintabs
                            subject1="Math"
                            subject2="Science"
                            subject3="English"
                            info={
                                <p className="description">
                                    <h3 className="h6 text-info mb-2">
                                        The CBSE Class 8 Maths Syllabus covers the following major
                                        topics :
                                    </h3>
                                    <p>
                                        <ol type="I">
                                            {icsesyl.math.map((math, i) => (
                                                <p key={i}>
                                                    {" "}
                                                    <li>{math}</li>
                                                </p>
                                            ))}
                                        </ol>
                                    </p>

                                    <Link href={mathicse9}>
                                        <a target="_blank" style={{ color: "blue" }}>
                                            For More Details of CBSE Syllabus for Class 8 Maths -
                                        </a>
                                    </Link>
                                </p>
                            }
                            info1={
                                <p className="description">
                                    <h3 className="h6 text-info mb-2">
                                        {" "}
                                        The CBSE Class 8 Science Syllabus for 2021-22 contains the
                                        following topics and sub topics.
                                    </h3>
                                    <h6 className="text-danger"> Biology Main Topics :</h6>
                                    <p>
                                        <ol type="I">
                                            {icsesyl.biology.map((biology, i) => (
                                                <p key={i}>
                                                    {" "}
                                                    <li>{biology}</li>
                                                </p>
                                            ))}
                                        </ol>
                                    </p>
                                    <h6 className="text-danger">Physics Main Topics :</h6>
                                    <p>
                                        <ol type="I">
                                            {icsesyl.physics.map((physics, i) => (
                                                <p key={i}>
                                                    {" "}
                                                    <li>{physics}</li>
                                                </p>
                                            ))}
                                        </ol>
                                    </p>
                                    <h6 className="text-danger">Chemistry Main Topics :</h6>
                                    <p>
                                        <ol type="I">
                                            {icsesyl.chemistry.map((chemistry, i) => (
                                                <p key={i}>
                                                    {" "}
                                                    <li>{chemistry}</li>
                                                </p>
                                            ))}
                                        </ol>
                                    </p>



                                    <Link href={scienceicse9}>
                                        <a target="_blank" style={{ color: "blue" }}>
                                            For More Details of CBSE Syllabus for Class 8 Science -
                                        </a>
                                    </Link>
                                </p>
                            }
                            info2={
                                <p className="description">
                                    <h3 className="h6 text-info mb-2">
                                        {" "}
                                        The CBSE Class 8 English Syllabus for 2021-22 contains the
                                        following topics and sub topics.
                                    </h3>
                                    <p>
                                        <ol type="I">
                                            {icsesyl.english.map((english, i) => (
                                                <p key={i}>
                                                    {" "}
                                                    <li>{english}</li>
                                                </p>
                                            ))}
                                        </ol>
                                    </p>
                                    <Link href={englishicse9}>
                                        <a target="_blank" style={{ color: "blue" }}>
                                            For More Details of CBSE Syllabus for Class 8 Science -
                                        </a>
                                    </Link>
                                </p>


                            }
                        />
                    </Col>
                </Row>
            </Container>
        </>
    );
}
