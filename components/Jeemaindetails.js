import React from 'react'
import { Container, Row, Col, Card } from "reactstrap";
import { cnt, stureg, weektest } from "./Link";
import Link from "next/link";

export default function Jeemaindetails() {
    return (
        <>
            <section className="py-5" style={{ backgroundColor: "#F5F5F5" }}>

                <Container className="px-4">
                    <h2 className="h1-responsive text-center font-weight-bold pb-3" style={{ color: "#172b4d" }}>
                        All About JEE IIT Mains
                    </h2>
                    <Row className=" ">

                        <h5 className="text-black"><span className="font-weight-bold text-warning" style={{ fontSize: "20px" }}> Joint Entrance Examination [JEE] - </span> The Ministry of Human Resource Development, Government of India and Central Board of Secondary education (CBSE), New Delhi introduced the national level common entrance exam called Joint Entrance Examination (JEE) conducted for admission to various engineering colleges in India. </h5>
                        <h5 className="text-black">JEE Main examination was being conducted by the Central Board of Secondary Education (CBSE) till 2018. From 2019 onwards, the National Testing Agency (NTA) is vested with the authority to conduct the Joint Entrance Examination (JEE) Main examination. The major development in JEE Main is the exam will be held twice a year for admission to Undergraduate Engineering Programmes in IITs, NIT&apos;s, IIIT&apos;s and other Centrally Funded Technical Institutions.</h5>
                        <h5 className="text-black">The Joint Entrance Exam will be conducted in two stages - JEE Main and JEE Advanced. JEE (Main) replaced the AIEEE entrance exam and JEE (Advanced) replaced the IIT-JEE entrance exam. Every year, over 25,000 Engineering and Architecture seats will be filled through the JEE Main score.</h5>
                        <h5 className="text-black">The aim of the common entrance test has been mooted to reduce stress on students, who have to appear for multiple entrance examinations and to give greater relevance to the school education, especially the class 12 board examinations.</h5>
                        <h5 className="text-black"><span className="font-weight-bold text-warning" style={{ fontSize: "20px" }}> Let&apos;s Prepare -</span> Start your JEE IIT Mains Preparation with 1to1Guru Online JEE Mains Coaching  LIVE Classes, 24*7 Faculty Support & Much more.  <Link href={stureg}>
                            <a target="_blank" style={{ color: "blue" }}>Register Now</a>
                        </Link></h5>

                        <h5 className="text-black pb-2"><span className="font-weight-bold text-warning" style={{ fontSize: "20px" }}>Online Mock Test -</span> Take a free JEE IIT Mains Mock test with Solutions & Performance report <Link href={weektest}>
                            <a target="_blank" style={{ color: "blue" }}>Start Now</a>
                        </Link></h5>      </Row>

                </Container>
            </section>
        </>
    )
}
