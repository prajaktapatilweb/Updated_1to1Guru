import { urlObjectKeys } from "next/dist/shared/lib/utils";
import React from "react";
import { Container, Row, Col, Card } from "reactstrap";
import Image from "next/image";
import FPStudentFormFields from "./FPStudentFormFields";

export default function Neetheropart(props) {
  return (
    <div >
      {/* <section className=" heroimg" style={{backgroundImage: `url("${'/subjects/'+props.imgname}")`}}> */}
      <section className="section heroimg">
        {/* <Image src="/subjects/herobg1.jpg"  layout="fill"/> */}


        <Container className="shape-container d-flex align-items-center py-md-4 py-lg-7 py-sm-1">
          <div className="col px-0">
            <Row className="align-items-center justify-content-center">
              <Col className=" text-center " lg="6">
                <Card
                  className="card-profile shadow px-5 pb-5 pt-3"
                  data-aos="fade-left" style={{ backgroundColor: "transparent" }}>
                  {/* <Card
                      className="card-profile shadow px-5 pb-5 pt-3"
                      data-aos="fade-left" style={{opacity:"0.9" ,backgroundImage:"linear-gradient(to right, rgba(58,37,109,.9), rgba(23,43,77,1))"}}
                    > */}

                  <p className="display-3 mb-0 py-5 text-udfc-orange ">
                    Get Ready for NEET 2022 Exam <span className="display-4"> <i>Your Gateway to Medical Career</i></span></p>




                  <Row>
                    <Col>
                      {/* <Col lg="3" md="3" sm="3" xl="3"> </Col>
                      <Col lg="9" sm="9" md="9" xl="9">  */}
                      <p className="display-4" style={{ color: " #fb6340" }}> Achieve Success in NEET Exam Via</p>
                      <p className="display-4" style={{ color: "white" }}>

                        <li> 1:1 Personalised Attention by Mentors </li>
                        <li> Interactive Learning Material </li>
                        <li> Regular Practice and Mock Test</li>

                      </p>

                    </Col>
                  </Row>

                  <p className="h4 text-white pt-3">
                    For Std 11th & 12th <br />
                    CBSE | ICSE | State Board <br />
                    IIT-JEE | NEET | CET | KVPY | Olympiad <br />
                  </p>

                </Card>
              </Col>
              <Col className="" lg="6" sm="12">
                <Card
                  className="card-profile shadow px-5 pb-5 pt-3"
                  data-aos="fade-left"
                >
                  <FPStudentFormFields />
                </Card>
              </Col>
            </Row>
          </div>
        </Container>

      </section>




    </div>
  );
}
