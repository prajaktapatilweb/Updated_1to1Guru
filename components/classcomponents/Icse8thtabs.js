import React, { useState } from "react";
import { Row, Col } from "reactstrap";
import { Container } from "react-bootstrap";
import Maintabs from "../Maintabs";
import Link from "next/link";
import { englishicse8, mathicse8, scienceicse8 } from "../Link";

export default function Icse8thtabs() {
    const icsesyl = {
        math: [
            "Number System",
            "	Ratio and Proportion",
            "	Algebra",
            "	Geometry",
            "	Mensuration",
            "	Data Handling,",
        ],
        science: [
            " Transportation in Plants",

            // Stem & Transportation 1
            // Stem & Transportation 2
            " Reproduction in Plants",

            // Reproduction in plants: Introduction
            // Reproduction in plants: Methods
            // Reproduction in plants: Methods 2
            // Reproduction in plants Revision
            "  Reproduction in Humans",

            // Reproduction in Humans
            // Reproduction in Humans Revision 1
            " Ecosystems",

            // Producers & Consumers
            // Food Chain
            "  Endocrine System & Adolescence",

            // Adolescence
            " Circulatory System",

            // Circulatory System Introduction
            // Circulatory System Functioning
            "  Nervous System",

            // Nervous System Introduction
            // Nervous System Types
            " Diseases & First Aid",

            // Communicable Diseases
            // Non communicable Diseases
            // Immunisation, Vaccination
            " Food Production",

            // Microorganism Introduction
            // Role of Microorganism in Food industry
            // Agriculiture-Primary Food Resources
            // Animals
            // Food Production revision 1
            " Matter",

            // Changing Matter 1
            // Changing Matter 2
            // Changing Matter 3
            "  Physical & Chemical Changes",

            // Parameters of Change & Physical Change
            // Chemical Change
            " Elements, Compounds & Mixtures",

            // States of Matter 1
            // Separation of Substances 1
            // Separation of Substances 2
            " Atomic Structure",

            // Atomic Structure 1
            // Atomic Structure 2
            // Atomic Structure 3
            // Atomic Structure Revision
            " Language of Chemistry",

            // Symbol & Formulae
            // Molecular Formula
            // Balancing of Chemical Equations
            // Chemical Formulae & equation Revision
            " Chemical Reactions",

            // Chemical Change -Parameters
            // Chemical Reactions Types
            // Chemical Reactions -Energy Change
            // Chemical Reactions Revision
            " Hydrogen",

            // Preparation & Physical Properties
            // Chemical Properties & Redox
            // Hydrogen Revision
            " Water",

            // Water & its Physical Properties
            // Water & its Chemical Properties
            // Water -Hardness & pollution
            // Water Revision 1
            // Water Revision 2
            " Carbon & Its Compounds",

            // Carbon - Allotrophy
            // Coal
            // Oxides of carbon
            // Carbon Revision 1
            // Carbon Revision 2
            " Measurement",

            // Density & Measurement
            // What floats & what sinks
            // Desnisties of all states of matter
            // Density - Revision
            " Force",

            // Rotation as effect of force & Torque
            // Balanced and unbalanced state of moments
            // Atmospheric pressure & uses of pressure
            // Force & Pressure - Revision
            " Energy",

            // The concept of Work & Energy
            // Forms of energy & conversion
            // Applications & Revision
            " Light",

            // Refraction - Concept & Laws
            // Prism & Curved Mirrors
            // Curved Mirrors - Image & its characteristics
            // Light - Revision
            " Heat Transfer",

            // Effects of heat - Boiling & Evaporation
            // Expansion - length & Surface
            // Numericals & Revision
            " Sound",

            // Sound - Wave & its characteristics
            // Frequency, Pitch & Monotone
            // Amplitude, Loudness & Decibells
            // Sound - Revision
            " Electricity",

            // Electricity as it meets us (household
            // Electrostatics & Types of Charges
            // Charging a body, detection of charge
            // Flow of charge - All about current
            // Electrostatics - Revision
            // Charging & Current - Revision,
        ],
        english: [
            ' Lord of the Flies – William Golding',
            ' A Wizard of Earth Sea – Ursula Le Guin',
            ' The Hobbit – J.R.R. Tolkien ',
            ' Watership Down – Richard Adams',
            ' To Kill a Mockingbird – Harper Lee',
            ' The Boy in the Striped Pyjamas – John Boyne',
            ' A tale of Two Cities – Charles Dickens ',
            ' Les Misérables – Victor Hugo (Abridged)',
            ' Sherlock Holmes – Sir Arthur Conan Doyle ',
            ' The Old Man and the Sea – Ernest Hemingway',
            ' The Pearl– John Steinbeck',
            ' P.G. Wodehouse (Jeeves/ Blandings Castle etc.)',
            ' The Ramayana/ Mahabharata – C. Rajagopalachari',
            ' Graphic Novels (e.g. Maus – Art Spiegelman)',
            ' David Copperfield - Charles Dickens',
        ],
    };

    return (
        <>
            <Container>
                <h5 className="text-danger"> Subjects taught in ICSE Class 8</h5>

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
                                        {icsesyl.math.map((math, i) => (
                                            <p key={i}>
                                                {" "}
                                                <li>{math}</li>
                                            </p>
                                        ))}
                                    </ol>

                                    <Link href={mathicse8}>
                                        <a target="_blank" style={{ color: "blue" }}>
                                            For More Details of Maharashtra State Board Syllabus for
                                            Class 8 Maths -
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
                                        {icsesyl.science.map((science, i) => (
                                            <p key={i}>
                                                {" "}
                                                <li>{science}</li>
                                            </p>
                                        ))}
                                    </ol>

                                    <Link href={scienceicse8}>
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

                                    {icsesyl.english.map((english, i) => (
                                        <p key={i}>{english}</p>
                                    ))}

                                    <Link href={englishicse8}>
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

