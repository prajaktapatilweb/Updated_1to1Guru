import React, { useState } from "react";
import { Row, Col } from "reactstrap";
import { Container } from "react-bootstrap";
import Maintabs from "../Maintabs";
import Link from "next/link";
import { englishcbse8, mathcbse8, mathcbse8n, sciencecbse8 } from "../Link";

export default function Cbse8thtabs() {
  return (
    <>
      <Container>
        <h5 className="text-danger"> Subjects taught in CBSE Class 8</h5>

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
                    Number System
                    <ol type="I">
                      <li>Rational Numbers</li>
                      <li>Powers</li>
                      <li>Squares, Square roots, Cubes, Cube roots</li>
                      <li>Playing with numbers</li>
                    </ol>
                    Algebra
                    <ol type="I">
                      <li>Algebraic Expressions</li>
                    </ol>
                    Ratio and Proportion<br></br>
                    Geometry
                    <ol type="I">
                      <li>i) Understanding shapes</li>
                      <li>ii) Representing 3-D in 2-D</li>
                      <li>iii) Construction</li>
                    </ol>
                    Mensuration<br></br>
                    Data handling<br></br>
                    Introduction to graphs
                  </p>
                  <Link href={mathcbse8n}>
                    <a target="_blank" style={{ color: "blue" }}>
                      For More Details of CBSE Syllabus for Class 8 Maths -
                    </a>
                  </Link>

                  {/* <Link href={mathcbse8}>
                    <a target="_blank" style={{ color: "blue" }}>
                      For More Details of CBSE Syllabus for Class 8 Maths -
                    </a>
                  </Link> */}
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
                    Food
                    <ol>
                      <li>Crop production</li>
                      <li>Micro-organisms</li>
                    </ol>
                    Materials
                    <ol>
                      <li> Materials in daily life</li>
                      <li>Different kinds of materials and their reactions</li>
                      <li>How things change/ react with one another</li>
                    </ol>
                    The World of the Living
                    <ol>
                      <li> Why conserve</li>
                      <li>The cell</li>
                      <li>How babies are formed</li>
                    </ol>
                    Moving things, People and Ideas
                    <ol>
                      <li>Idea of force</li>
                      <li>Friction</li>
                      <li>Pressure</li>
                      <li>Sound</li>
                    </ol>
                    How Things Work
                    <ol>
                      <li>Electric current and circuits</li>
                    </ol>
                    Natural Phenomena
                    <ol>
                      <li>Rain, thunder and lightning</li>
                      <li>Light</li>
                      <li>Night sky</li>
                      <li>Earthquakes</li>
                    </ol>
                    Natural Resources
                    <ol>
                      <li>Man’s intervention in phenomena of nature</li>
                      <li>Pollution of air and water</li>
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


                  <h3 className="h6 text-info mb-2">CBSE Syllabus for Class 8 English (Honeydew &ndash; Textbook in English for Class VIII)</h3>
                  <p style={{ color: "black" }}><strong>Chapter 1:</strong><span > The Best Christmas Present in the World</span></p>
                  <p><em><span >Poem:</span></em><span > The Ant and the Cricket</span></p>
                  <p style={{ color: "black" }}><strong>Chapter 2:</strong><span > The Tsunami</span></p>
                  <p><em><span >Poem:</span></em><span > Geography Lesson</span></p>
                  <p style={{ color: "black" }}><strong>Chapter 3:</strong><span > Glimpses of the Past</span></p>
                  <p><em><span >Poem:</span></em><span > Macavity -The Mystery Cat</span></p>
                  <p style={{ color: "black" }}><strong>Chapter 4:</strong><span > Bepin Choudhury&rsquo;s Lapse of Memory</span></p>
                  <p><em><span >Poem:</span></em><span > The Last Bargain</span></p>
                  <p style={{ color: "black" }}><strong>Chapter 5:</strong><span > The Summit Within</span></p>
                  <p><em><span >Poem:</span></em><span > The School Boy</span></p>
                  <p style={{ color: "black" }}><strong>Chapter 6:</strong><span > This is Jody&rsquo;s Fawn</span></p>
                  <p><em><span >Poem:</span></em><span > The Duck and the Kangaroo</span></p>
                  <p style={{ color: "black" }}><strong>Chapter 7:</strong><span > A Visit to Cambridge</span></p>
                  <p><em><span >Poem:</span></em><span > When I set out for Lyonnesse</span></p>
                  <p style={{ color: "black" }}><strong>Chapter 8:</strong><span > A Short Monsoon Diary</span></p>
                  <p><em><span >Poem:</span></em><span > On the Grasshopper and Cricket</span></p>
                  <p style={{ color: "black" }}><strong>Chapter 9:</strong><span > The Great Stone Face- I</span></p>
                  <p style={{ color: "black" }}><strong>Chapter 10:</strong><span > The Great Stone Face- II</span></p>
                  <h3 className="h6 text-info mb-2">CBSE Syllabus for Class 8 English (It So Happened &ndash; Supplementary Reader in English for Class VIII)</h3>
                  <p><strong>Chapter 1:</strong><span > How the Camel got his Hump</span></p>
                  <p><strong>Chapter 2:</strong><span > Children at work</span></p>
                  <p><strong>Chapter 3:</strong><span > The Selfish Giant</span></p>
                  <p><strong>Chapter 4:</strong><span > The Treasure within</span></p>
                  <p><strong>Chapter 5:</strong><span > Princess September</span></p>
                  <p><strong>Chapter 6:</strong><span > The Fight</span></p>
                  <p><strong>Chapter 7:</strong><span > The Open Window</span></p>
                  <p><strong>Chapter 8:</strong><span > Jalebis</span></p>
                  <p><strong>Chapter 9:</strong><span > The Comet- I</span></p>
                  <p><strong>Chapter 10:</strong><span > The Comet- II</span></p>
                  <p><strong>Chapter 11:</strong><span > Ancient Education System of India</span></p>

                  <Link href={englishcbse8}>
                    <a target="_blank" style={{ color: "blue" }}>
                      For More Details of CBSE Syllabus for Class 8 English -
                    </a>
                  </Link>
                  {/* <h3><strong>&nbsp;</strong></h3>
                  <h3><strong>CBSE Syllabus for Class 8 English Grammar</strong></h3>
                  <p><span >The English Grammar syllabus for CBSE Class 8 has the following topics:</span></p>
                  <ol>
                    <li><span > Order of Words and Clauses</span></li>
                    <li><span > Direct and Indirect Speech</span></li>
                    <li><span > Active and Passive Voice</span></li>
                    <li><span > Tenses</span></li>
                    <li><span > Noun</span></li>
                    <li><span > Pronoun</span></li>
                    <li><span > Verb</span></li>
                    <li><span > Adverb</span></li>
                    <li><span > Prepositions</span></li>
                    <li><span > Conjunction</span></li>
                    <li><span > Phrases and Idioms</span></li>
                    <li><span > Vocabulary</span></li>
                    <li><span > Comprehension Reading</span></li>
                  </ol>
                  <h3><strong>&nbsp;</strong></h3>
                  <h3 className="h6 text-info mb-2">CBSE Syllabus for Class 8 English Composition (Writing)</h3>
                  <p><span >This section tests your writing skills in English. The English Composition syllabus for CBSE Class 8 has the following topics:</span></p>
                  <ol>
                    <li><span > Notice</span></li>
                    <li><span > Story</span></li>
                    <li><span > Formal and Informal Letters</span></li>
                    <li><span > Diary Entry</span></li>
                    <li><span > Essay</span></li>
                  </ol> */}






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
