import React, { useState } from "react";
import { Row, Col } from "reactstrap";
import { Container } from "react-bootstrap";
import Maintabs from "../Maintabs";
import Link from "next/link";
import { englishcbse8, mathcbse8, sciencecbse8 } from "../Link";

export default function Cbse10thtabs() {
    const cbsesyl = {
        math: [
            "ALGEBRA(Cont.)",
            "GEOMETRY(Cont.)",
            "TRIGONOMETRY(Cont.)",
            "MENSURATION(Cont.)",
            "STATISTICS & PROBABILITY(Cont.)",
        ],
        science: [
            "Chemical Substances – Nature and Behaviour	",
            "World of Living",
            "Natural Phenomena	",
            "Effects of Current	",
            "Natural Resources",
        ],
        englishtermone: [
            "A Letter to God ",

            "Nelson Mandela ",

            "Two Stories About Flying ",

            "From the Diary of Anne Frank ",

            "The Hundred Dresses 1 ",

            "The Hundred Dresses 2 ",
        ],
        poemsone: [
            "Dust of Snow ",

            "Fire and Ice ",

            "A Tiger in the Zoo ",

            "The Ball Poem",
        ],

        englishtermtwo: [
            "Glimpses of India ",

            "Madam Rides the Bus ",

            "The Sermon at Benares ",

            " The Proposal (Play) ",
        ],

        poemstwo: [" Amanda ", " Animals ", " The Tale of Custard the Dragon"],
    };
    return (
        <>
            <Container>
                <h5 className="text-danger"> Subjects taught in CBSE Class 10th</h5>

                <Row className="justify-content-center">
                    <Col>
                        {/* Tabs with icons */}
                        <div className="mb-2">
                            {/* <small className="text-uppercase font-weight-bold"> */}
                            <p>
                                There are five main subjects taught in an academic year of CBSE
                                Board’s Class 10 curriculum. Student should study and pass all
                                the subject in Class 10. Therefore, to pass the 8th grade CBSE
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
                                        The CBSE Class 10 Maths Syllabus covers the following major
                                        topics : COURSE STRUCTURE CLASS 10th (2021-22) SECOND TERM:
                                    </h3>
                                    <p>
                                        <ol type="I">
                                            {cbsesyl.math.map((math, i) => (
                                                <p key={i}>
                                                    <li>{math}</li>
                                                </p>
                                            ))}
                                        </ol>
                                    </p>

                                    <Link href={mathcbse8}>
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
                                        The CBSE Class 10th Science Syllabus for 2021-22 contains
                                        the following topics :
                                    </h3>

                                    <p>
                                        <ol type="I">
                                            {cbsesyl.science.map((science, i) => (
                                                <p key={i}>
                                                    {" "}
                                                    <li>{science}</li>
                                                </p>
                                            ))}
                                        </ol>
                                    </p>

                                    <Link href={sciencecbse8}>
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
                                        CBSE Class 10 English Term-1 Syllabus 2022<br></br>
                                        Chapters:
                                        <ol type="I">
                                            {cbsesyl.englishtermone.map((englishtermone, i) => (
                                                <p key={i}>
                                                    {" "}
                                                    <li>{englishtermone}</li>
                                                </p>
                                            ))}
                                        </ol>
                                        Poems :
                                        <ol type="I">
                                            {cbsesyl.poemsone.map((poemsone, i) => (
                                                <p key={i}>
                                                    {" "}
                                                    <li>{poemsone}</li>
                                                </p>
                                            ))}
                                        </ol>
                                        CBSE Class 10 English Term-2 Syllabus 2022<br></br>
                                        Chapters:
                                        <ol type="I">
                                            {cbsesyl.englishtermtwo.map((englishtermtwo, i) => (
                                                <p key={i}>
                                                    {" "}
                                                    <li>{englishtermtwo}</li>
                                                </p>
                                            ))}
                                        </ol>
                                        Poems :
                                        <ol type="I">
                                            {cbsesyl.poemstwo.map((poemstwo, i) => (
                                                <p key={i}>
                                                    {" "}
                                                    <li>{poemstwo}</li>
                                                </p>
                                            ))}
                                        </ol>
                                    </p>

                                    <Link href={englishcbse8}>
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
