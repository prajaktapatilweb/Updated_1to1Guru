import React, { useState } from "react";
import { Row, Col } from "reactstrap";
import { Container } from "react-bootstrap";
import Maintabs from "../Maintabs";
import Link from "next/link";
import { englishmsb8, mathmsb8, sciencemsb8 } from "../Link";
import eightMathMsb from "../../pages/newpages/eightMathMsb";



export default function Msb8thtabs() {
    const mathsyl = {
        math: [
            'Irrational and Real Numbers',
            'Square and Square Root',
            '	Quadrilateral',
            '	Parallel Lines',
            '	Area',
            '	The Circle',
            '	The Circumference and Area Of A Circle',
            '	Statistics',
            '	Identities',
            '	Variation and Proportion',
            '	Equations in One Variable',
            '	Indices',
            '	Cubes and Cube Roots',
            '	Construction of Quadrilaterals',
            '	Arc of a Circle',
            '	Compound Interest',
            '	Polynomials',
            '	Joint Bar Graphs',
            '	Discount and Commission',
            '	Volume and Surface Area',
            '	Factors of polynomials',
            '	Division of Polynomials',

        ],
        science: [
            'Living World and Classification of Microbes',
            '	Health and Diseases',
            '	Force and Pressure',
            '	Current Electricity and Magnetism',
            '	Inside the Atom',
            '	Composition of Matter',
            '	Metals and Nonmetals',
            '	Pollution',
            '	Disaster Management',
            '	Cell and Cell Organelles',
            '	Human Body and Organ System',
            '	Introduction to Acid and Base',
            '	Chemical Change and Chemical Bond',
            '	Measurement and Effects of Heat',
            '	Sound',
            '	Reflection of Light',
            '	Man made Materials',
            '	Ecosystems',
            '	Life Cycle of Stars',
        ],
        english: [
            ' 1.1 A Time To Believe ',
            '1.2 Dick Whittington and his Cat ',
            '1.3 The Pilgrim ',
            '1.4 Revathi’s Musical Plants ',
            '2.1 Vocation ',
            '2.2 Nature Created Man and Woman as Equals ',
            '2.3 The Worm ',
            '2.4 Three Visions for India ',
            '2.5 The Happy Prince ',
            '3.1 The Plate of Gold ',
            '3.2 The Kite Festival ',
            '3.3 The Last Leaf ',
            '3.4 Leisure ',

            '4.1 The Vet ',
            '4.2 Revolutionary Steps In Surgery ',
            '4.3 The Bees ',
            '4.4 Ramanujan ',
            '4.5 A Battle to Baffle',
        ],
    }

    return (

        <>

            <Container>
                <h5 className="text-danger"> Subjects taught in Maharashtra State Board Class 8</h5>

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
                                    <ol>
                                        {mathsyl.math.map((math, i) => (
                                            <p key={i}> <li>{math}</li></p>
                                        ))}
                                    </ol>


                                    <Link href={mathmsb8}>
                                        <a target="_blank" style={{ color: "blue" }}>
                                            For More Details of Maharashtra State Board Syllabus for Class 8 Maths -
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
                                    <ol>
                                        {mathsyl.science.map((science, i) => (
                                            <p key={i}> <li>{science}</li></p>
                                        ))}
                                    </ol>


                                    <Link href={sciencemsb8}>
                                        <a target="_blank" style={{ color: "blue" }}>
                                            For More Details of CBSE Syllabus for Class 8 Science -
                                        </a>
                                    </Link>
                                </p>
                            }
                            info2={
                                <p className="description">


                                    <h3 className="h6 text-info mb-2">CBSE Syllabus for Class 8 English (Honeydew &ndash; Textbook in English for Class VIII)</h3>


                                    {mathsyl.english.map((english, i) => (
                                        <p key={i}>{english}</p>
                                    ))}



                                    <Link href={englishmsb8}>
                                        <a target="_blank" style={{ color: "blue" }}>
                                            For More Details of CBSE Syllabus for Class 8 English -
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

// export default Trytab;
