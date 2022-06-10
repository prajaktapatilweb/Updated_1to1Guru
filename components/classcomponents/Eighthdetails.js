import React from "react";
import { Container, Row, Col, Card } from "reactstrap";
import { cnt, stureg, weektest } from "../Link";
import Link from "next/link";

export default function Eighthdetails() {
  return (
    <div>
      <section className="section" style={{ backgroundColor: "#F5F5F5" }}>
        <Container className="px-4">
          <h2
            className="h1-responsive text-center font-weight-bold pb-3"
            style={{ color: "#172b4d" }}
          >
            Importance of 8th Standard
          </h2>
          <h5>
            <span
              className="font-weight-bold text-warning"
              style={{ fontSize: "20px" }}
            >
              Class 8<sup>th</sup> Importance -
            </span>{" "}
            The Class 8 is a crucial step of the students’ academic progression.
            Fundamentals covered in class 8 syllabus lay the foundation for the next
            levels. The concepts covered in this class are basic introductions
            for most of the elaborate syllabus taught in the next higher classes
            of Syllabus. Therefore, students should understand the concepts in
            the class 8 syllabus for each subject for quick understanding and
            scoring in the next levels. For Science and Mathematics subjects,
            this is most important and thus learning the class 8th Science and
            Mathematics with extra coaching will certainly help the students to
            achieve their academic goal.
          </h5>

          <h5 className="text-black">
            <span
              className="font-weight-bold text-warning"
              style={{ fontSize: "20px" }}
            >
              {" "}
              Success Mantra for Study in Class 8<sup>th</sup> -{" "}
            </span>
            The syllabus for the examination should be known before starting
            preparation and prepare according to the syllabus mentioned in the
            respective subject. Practicing the previous year’s questions gives a
            fair idea of the structure of the examination pattern. So, make a
            habit of browsing through the previous year’s question paper and
            sample question papers. There is no match to the clarity of concepts
            and detailed understanding of the concepts. Make most of the learning
            in the respective class and follow your self study and coaching
            schedule for further improvement in the grades. Thorough
            understanding of concepts with clarity in mind makes the better
            picture during writing examination, so study all concepts and
            practice for  better results in the examination. Enhance your
            learning experience with one-to-one personalized teaching and
            achieve success in examination. We at 1to1Guru offer one-to-one
            classes for covering CBSE / ICSE / State Board Syllabus for Class 8.
            We also provide coaching for NTSE, Olympiad, Scholarship etc.
            Competitive Examinations.
            <Link href={stureg}>
              <a target="_blank" style={{ color: "blue" }}>
                Register Now
              </a>
            </Link>
          </h5>

          {/* <h5 className="text-black pb-2">
            <span
              className="font-weight-bold text-warning"
              style={{ fontSize: "20px" }}
            >
              Online Mock Test -
            </span>{" "}
            Take a free MHT-CET Mock test with Solutions & Performance report
            <Link href={weektest}>
              <a target="_blank" style={{ color: "blue" }}>
                Start Now
              </a>
            </Link>
          </h5> */}
        </Container>
      </section>
    </div>
  );
}
