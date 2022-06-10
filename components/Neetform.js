import React from 'react';
import { Container, Row, Col, Card } from "reactstrap";
import { cnt, stureg, weektest } from "./Link";
import Link from "next/link";

export default function Neetform() {
  return (
    <>
      <section className="section" style={{ backgroundColor: "#F5F5F5" }}>

        <Container className="px-4">
          <h2 className="h1-responsive text-center font-weight-bold pb-3" style={{ color: "#172b4d" }}>
            All About NEET
          </h2>
          <Row className=" ">
            <h5 className="text-black"><span className="font-weight-bold text-warning" style={{ fontSize: "20px" }}>NATIONAL ELIGIBILITY CUM ENTRANCE TEST  [NEET] - </span> NEET will be conducted by National Testing Agency (NTA) as a uniform entrance examination for admission to MBBS/BDS/BAMS/BSMS/BUMS/BHMS and other undergraduate medical courses in approved/recognized Medical/Dental /AYUSH and other Colleges/ Deemed Universities /Institutes (AIIMS & JIPMER) in India, as per Section 14 of The National Medical Commission (NMC) Act, 2019 and relevant Graduate Medical Education Regulations (GMER) 1997, as amended from time to time. </h5>
            <h5 className="text-black">The languages in which the NEET (UG) 2022 would be conducted are - English, Hindi, Assamese, Bengali, Gujarati, Kannada, Malayalam, Marathi, Odia, Punjabi, Tamil, Telugu, and Urdu.</h5>
            <h5 className="text-black"><span className="font-weight-bold text-warning" style={{ fontSize: "20px" }}>NEET Syllabus 2022 -</span> The National Medical Commission (NMC) recommends the syllabus for NEET-UG for all aspiring candidates. Candidates appearing for NEET 2022, should be aware of the syllabus, to ace the exam with ease. NEET syllabus 2022 includes topics from Physics, Chemistry, and Biology Class 11 and 12 curricula. Download the NEET syllabus PDF below.</h5>

            <h5 className="text-black"><span className="font-weight-bold text-warning" style={{ fontSize: "20px" }}> Let&apos;s Prepare -</span> Start your NEET Preparation with 1to1Guru Online NEET Coaching  LIVE Classes, 24*7 Faculty Support & Much more.  <Link href={stureg}>
              <a target="_blank" style={{ color: "blue" }}>Register Now</a>
            </Link></h5>

            <h5 className="text-black pb-2"><span className="font-weight-bold text-warning" style={{ fontSize: "20px" }}>Online Mock Test -</span> Take a free NEET Mock test with Solutions & Performance report
              <Link href={weektest}><a target="_blank" style={{ color: "blue" }}>Start Now</a></Link></h5>
          </Row>

        </Container>
      </section>
    </>
  )
}
