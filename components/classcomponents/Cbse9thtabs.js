import React, { useState } from "react";
import { Row, Col } from "reactstrap";
import { Container } from "react-bootstrap";
import Maintabs from "../Maintabs";
import Link from "next/link";
import { englishcbse9, mathcbse9, sciencecbse9 } from "../Link";

export default function Cbse9thtabs() {
    const cbsesyl = {
        mathone: [

            '   Number System',
            '   Algebra	',
            '   Geometry	',
            '   Co - ordinate Geometry	',
            '   Mensuration'],
        mathtwo: [
            'Algebra	',
            'Geometry	',
            'Mensuration	',
            'Statistics	',
            'Probability',

        ],
        scienceone: [

            'Matter – Its Nature and Behaviour – Chapter 2',
            '	Organization in the Living World – Chapter 5 and 6',
            '	Motion, Force and Work – Chapter 8 and 9'],
        sciencetwo: [

            'Matter – Its Nature and Behaviour – Chapter 2',
            'Organization in the Living World – Chapter 5 and 6',
            'Motion, Force and Work – Chapter 8 and 9'
        ],
        englishone: ['(Moments)',
            'The Lost Child',
            'The Adventures of Toto ',
            'In the Kingdom of Fools',
            'The Happy Prince ',
            '(Beehive Prose )',
            'The Fun They Had ',
            'The Sound of Music ',
            'The Little Girl',
            ' A Truly Beautiful Mind',
            'My Childhood',
            '(Poems)',
            'The Road Not Taken',
            'Wind ',
            'Rain on The Roof',
            'A Legend of The Northland'],
        englishtwo: [
            ' ( Moments)',
            'Weathering the Storm in Ersama',
            'The Last Leaf ',
            'A House is not a Home',
            'The Beggar',
            '(Beehive Prose )',
            'Packing ',
            'Reach for The Top',
            'The Bond of Love ',
            'If I were You ',
            '(Poems )',
            'No Men Are Foreign ',
            'On killing a Tree',
            'The Snake Trying',
        ],
    }
    return (
        <>
            <Container>
                <h5 className="text-danger"> Subjects taught in CBSE Class 9th</h5>

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
                                        The CBSE Class 9 Maths Syllabus covers the following major
                                        topics :
                                    </h3>
                                    <p>
                                        I Term Units :
                                        <ol type="I">
                                            {cbsesyl.mathone.map((mathone, i) => (
                                                <p key={i}> <li>{mathone}</li></p>
                                            ))}
                                        </ol>
                                        II Term Units :
                                        <ol type="I">

                                            {cbsesyl.mathtwo.map((mathtwo, i) => (
                                                <p key={i}> <li>{mathtwo}</li></p>
                                            ))}

                                        </ol>

                                    </p>

                                    <Link href={mathcbse9}>
                                        <a target="_blank" style={{ color: "blue" }}>
                                            For More Details of CBSE Syllabus for Class 9 Maths -
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

                                    <p>
                                        I Term Units :
                                        <ol type="I">
                                            {cbsesyl.scienceone.map((scienceone, i) => (
                                                <p key={i}> <li>{scienceone}</li></p>
                                            ))}
                                        </ol>
                                        II Term Units :
                                        <ol type="I">

                                            {cbsesyl.sciencetwo.map((sciencetwo, i) => (
                                                <p key={i}> <li>{sciencetwo}</li></p>
                                            ))}

                                        </ol>

                                    </p>

                                    <Link href={sciencecbse9}>
                                        <a target="_blank" style={{ color: "blue" }}>
                                            For More Details of CBSE Syllabus for Class 9 Science -
                                        </a>
                                    </Link>
                                </p>
                            }
                            info2={
                                <p className="description">


                                    <h3 className="h6 text-info mb-2">CBSE Syllabus for Class 8 English (Honeydew &ndash; Textbook in English for Class VIII)</h3>
                                    <p>
                                        I Term Units :
                                        <ul>
                                            {cbsesyl.englishone.map((englishone, i) => (
                                                <p key={i}> <li>{englishone}</li></p>
                                            ))}
                                        </ul>
                                        II Term Units :
                                        <ul>

                                            {cbsesyl.englishtwo.map((englishtwo, i) => (
                                                <p key={i}> <li>{englishtwo}</li></p>
                                            ))}

                                        </ul>

                                    </p>
                                    <Link href={englishcbse9}>
                                        <a target="_blank" style={{ color: "blue" }}>
                                            For More Details of CBSE Syllabus for Class 9 English -
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

