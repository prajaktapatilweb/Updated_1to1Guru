import React, { useState } from "react";
import { Row, Col } from "reactstrap";
import { Container } from "react-bootstrap";
import Maintabs from "../Maintabs";
import Link from "next/link";
import { englishmsb9, mathmsb9, sciencemsb9 } from "../Link";
import { Field } from "formik";


export default function Msb10thtabs() {
    const msbsyl = {
        algebra: [
            'Linear Equations in Two Variables',
            'Quadratic Equations',
            'Arithmetic progression',
            'Financial planning',
            'Probability',
            'Statistics',
        ],

        geometry: [
            'Similarity',
            'Pythagoras Theorem',
            'Circle',
            'Geometric Constructions',
            'Coordinate geometry',
            'Trigonometry',
            'Mensuration',
        ],
        science: [
            'Laws of Motion',
            'Work and Energy',
            'Current Electricity',
            'Measurment of Matter',
            'Acids, Bases and Salts',
            'Classification of Plants',
            'Energy Flow in Ecosystem',
            'Useful and Harmful Microbes',
            'Envionmental Management',
            'Information Communication Technology',
            'Reflection of Light',
            'Study of Sound',
            'Carbon : An Important Element ',
            'Substances in Common Use',
            'Life Process in Living Organism',
            'Heredity and Variation',
            'Introduction to Biotechnology',
            'Observing Space : Telescope',

        ],
        english: [

            '1.1 Life',
            '1.2 A Synopsis-The Swiss Family Robinson ',
            '1.3 Have you ever seen ... ? ',
            '1.4 Have you thought of the verb ‘have’... ',
            '1.5 The Necklace ',
            '2.1 Invictus  ',
            '2.2 A True Story of Sea Turtles  ',
            '2.3 Somebody’s Mother ',
            '2.4 The Fall of Troy ',
            '2.5 Autumn ',
            '2.6 The Past in the Present ',
            '3.1 Silver ',
            '3.2 Reading Works of Art ',
            '3.3 The Road Not Taken ',
            '3.4 How the First Letter was Written ',
            '4.1 Please Listen! ',
            '4.2 The Storyteller ',
            '4.3 Intellectual Rubbish ',
            '4.4 My Financial Career ',
            '4.5 Tansen',
        ],


    };

    return (
        <>
            <Container>
                <h5 className="text-danger"> Subjects taught in Msb Class 9th</h5>

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
                                        {Object.keys(msbsyl).map(itemfield =>
                                            <>
                                                <p >{itemfield}</p>
                                                <ol type="I">
                                                    {msbsyl[itemfield].map((item, i) => (
                                                        <p key={i}>
                                                            <li>{item}</li>
                                                        </p>
                                                    ))}
                                                </ol>
                                            </>
                                        )

                                        }

                                        Algebra :
                                        <ol type="I">
                                            {msbsyl.algebra.map((algebra, i) => (
                                                <p key={i}>
                                                    {" "}
                                                    <li>{algebra}</li>
                                                </p>
                                            ))}
                                        </ol>
                                        Geometry :
                                        <ol type="I">
                                            {msbsyl.geometry.map((geometry, i) => (
                                                <p key={i}>
                                                    {" "}
                                                    <li>{geometry}</li>
                                                </p>
                                            ))}
                                        </ol>
                                        <Link href={mathmsb9}>
                                            <a target="_blank" style={{ color: "blue" }}>
                                                For More Details of CBSE Syllabus for Class 8 Maths -
                                            </a>
                                        </Link>
                                    </p>
                                </p>
                            }
                            info1={
                                <p className="description">
                                    <h3 className="h6 text-info mb-2">
                                        {" "}
                                        The CBSE Class 8 Science Syllabus for 2021-22 contains the
                                        following topics and sub topics.
                                    </h3>
                                    <p>
                                        <ol type="I">
                                            {msbsyl.science.map((science, i) => (
                                                <p key={i}>
                                                    {" "}
                                                    <li>{science}</li>
                                                </p>
                                            ))}
                                        </ol>
                                    </p>
                                    <Link href={sciencemsb9}>
                                        <a target="_blank" style={{ color: "blue" }}>
                                            For More Details of CBSE Syllabus for Class 8 Science -
                                        </a>
                                    </Link>
                                </p>
                            }
                            info2={
                                <p className="description">
                                    <h3 className="h6 text-info mb-2">
                                        CBSE Syllabus for Class 8 English (Honeydew &ndash; Textbook
                                        in English for Class VIII)
                                    </h3>
                                    <p>
                                        English (Kumarbharti) Syllabus :

                                        <ul>
                                            {msbsyl.english.map((english, i) => (
                                                <p key={i}>
                                                    {" "}
                                                    <li>{english}</li>
                                                </p>
                                            ))}
                                        </ul>

                                    </p>

                                    <Link href={englishmsb9}>
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
