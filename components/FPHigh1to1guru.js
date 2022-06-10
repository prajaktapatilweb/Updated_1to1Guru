import React from "react";
import {
  Container,
  CardBody,
  Row,
  Col,
  //    Button,
  Card,
} from "reactstrap";
import { GiSpyglass } from "react-icons/gi";
import { HiAcademicCap, HiBookOpen } from "react-icons/hi";

export default function FPHigh1to1guru() {
  return (
    <>
      <section className="section section-lg section-shaped ">
        <div className="shape shape-style-u1 shape-dark">
          <span className="span-150" />
          <span className="span-50" />
          <span className="span-50" />
          <span className="span-75" />
          <span className="span-200" />
          <span className="span-75" />
          <span className="span-50" />
          <span className="span-100" />
          <span className="span-50" />
          <span className="span-100" />
        </div>
        <Container className="pt-50 pb-50 ">
          <Row className="text-center justify-content-center">
            <Col lg="10">
              <h2 className="display-3 text-udfc-orange  ">
                Highlights of 1-to-1 Guru
              </h2>
              <h5 className="text-white">
                One to One teaching is key of 1to1Guru, which offers
                personalised learning experience for better understanding of the
                subject by eliminating crowded class.{" "}
              </h5>
              <h5 className=" text-white">
                Our 1-to-1 leaning platform opens the door for best teachers
                across the globe to reach at your end. It is a tool which helps
                our students to manage and save their time.
              </h5>
            </Col>
          </Row>
          <Row className="row-grid mt-5">
            <Col lg="4">
              <Card
                className="card-lift--hover shadow border-1"
                // style={{ height: "300px" }}
              >
                <CardBody className="py-5">
                  {/* <span className="mb-2">
                    <i className="ni ni-bullet-list-67 text-danger" />
                  </span>
                  <span className="pl-5 text-green text-uppercase">
                    <strong> Conceptual learning</strong>
                  </span> */}
                  
                  <span
                    className="mr-1 text-danger"
                    style={{ fontSize: "24px" }}
                  >
                    <HiBookOpen size="2em" />
                    {/* <i className="ni ni-bullet-list-67 " /> */}
                    <span className="btn-inner--text text-green pl-2">
                      <strong> Conceptual Learning</strong>
                    </span>
                  </span>

                  <h5 className=" text-justify text-black ">
                    Counselling & Mentoring of student in peaceful
                    environment, which helpful to excel & understand the
                    concept of each subject to expand their horizon.
                  </h5>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4">
              <Card
                className="card-lift--hover shadow border-1"
                // style={{ height: "300px" }}
              >
                <CardBody className="py-5">
                  <span
                    className="mr-1 text-danger"
                    style={{ fontSize: "24px" }}
                  >
                    {/* <i className="ni ni-check-bold" /> */}
                    <GiSpyglass size="2em" />
                    <span className="btn-inner--text text-green pl-2">
                      <strong> Correctly Monitored</strong>
                    </span>
                  </span>

                  <h5 className=" text-justify text-black ">
                    One to one teaching helps the teacher to guide and monitor
                    students&apos; progress by concentrating on a single student.
                  </h5>
                </CardBody>
              </Card>
            </Col>

            <Col lg="4">
              <Card
                className="card-lift--hover shadow border-1"
                // style={{ height: "300px" }}
              >
                <CardBody className="py-5">
                  <span
                    className="mr-1 text-danger"
                    style={{ fontSize: "24px" }}
                  >
                    {/* <i className="ni ni-atom"/> */}
                    <HiAcademicCap size="2em" />
                    <span className="btn-inner--text text-green pl-2">
                      <strong> More Attentive</strong>
                    </span>
                  </span>
                  <h5 className="text-justify text-black ">
                    It will help the student to ask a question without a fear
                    and more attention on students&apos; core strengths.
                  </h5>
                </CardBody>
              </Card>
            </Col>
          </Row>
          {/* <div className="text-center py-4">
                        <Button className="btn-1 ml-1 " color="success" type="button" ><Link to='/Aboutus'> Learn More </Link> </Button>
                    </div> */}
        </Container>
        {/* SVG separator */}
        <div className="separator separator-bottom separator-skew zindex-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon className="fill-white" points="2560 0 2560 100 0 100" />
          </svg>
        </div>
      </section>
    </>
  );
}
