import React from 'react';
import { Container, Row, Col, Card } from "reactstrap";
import { cnt, stureg, weektest } from "../Link";
import Link from "next/link";

export default function AboutSummerCamp() {
  return (
    <>
      <section className="section" style={{ backgroundColor: "#F5F5F5" }}>

        <Container className="px-4">
          <h2 className="h1-responsive text-center font-weight-bold pb-3" style={{ color: "#172b4d" }}>
            1to1Guru&apos;s Summer BootCamp 2022
          </h2>

          <Row >
            <h5 className="text-justify">
              1to1Guru&apos;s Mathematics and English Bootcamp focuses on empowering students by improving their maths and communication skills in a fun and interactive way. The bootcamp is specially designed by 1to1Guru’s expert teachers and mentors for students in 5th to 7th grades and 8th to 10th grades. Students can choose either English or maths bootcamp or signup for both the subjects. At the end of the bootcamp students will get opportunity to get involved into a collaborative project and demonstrate the project outcome in front of their mentors and parents.
            </h5>
            <Col className='col-2'></Col>
            <Col className='col-4'>
              <h5 className="text-black"><span className="font-weight-bold text-warning " style={{ fontSize: "20px" }}>English BootCamp </span>
                <li className='pt-2'> Public Speaking </li>
                <li> Creative Writing </li>
                <li> Grammer and Vocabulary Tricks</li>
                <li> Drama and Fun Games</li>
              </h5>
            </Col>
            <Col className='col-4'>
              <h5 className="text-black"><span className="font-weight-bold text-warning" style={{ fontSize: "20px" }}>Math BootCamp</span>
                <li className='pt-2'> Vedic Mathematics </li>
                <li> Singapore Maths </li>
                <li> Memory and Calculation Tricks </li>
                <li> Maths Fun Games </li>
              </h5>
            </Col>
            <Col className='col-2'></Col>
            <h5 className="text-black text-center py-3" >Special activities for 9th and 10th Students - &quot;Revision of 8th and 9th mathematics required for class 10th&quot;</h5>
          </Row>

        </Container>
      </section>
    </>
  )
}
