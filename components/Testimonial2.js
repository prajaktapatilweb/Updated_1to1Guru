import React, { Component } from "react";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Col, Row, Container } from "reactstrap";
// import { Carousel } from "react-responsive-carousel";
import { FaStar, FaStarHalf } from "react-icons/fa";
import S121001 from "../public/Testimonial/Divya.jpeg";
import S121002 from "../public/Testimonial/vez.jpeg";
import S121003 from "../public/Testimonial/urvija.jpeg";
import Image from "next/image";
import { Carousel } from "react-bootstrap";

export default class Testimonial2 extends Component {
  render() {
    return (
      <section className="section section-shaped ">
        <div className="shape shape-style-u1 shape-dark"></div>
        <Container>
          <Col className="text-center" lg="12">
            <h2 className="h1-responsive font-weight-bold text-udfc-orange">
              Testimonials
            </h2>
          </Col>
          <Carousel interval="4000">
            <Carousel.Item className="p-5">
              <Row className="justify-content-center">
                <Image
                  src={S121002}
                  alt=""
                  className="rounded-circle align-contents-center "
                />
                <div className="myCarousel  ">
                  <h3>Vez Kurane</h3>
                  <h4>9th std </h4>
                  <h4 className="text-udfc-orange">
                    <FaStar /> <FaStar />
                    <FaStar />
                    <FaStar /> <FaStar />
                  </h4>

                  <p>
                    Through 1to1Guru&apos;s personal coaching I learnt a lot.
                    Especially, I was weak in English but I got an excellent
                    teacher who&apos;s explanation and clearing of concepts are
                    so much satisfying . So my english has been improved and
                    also I have no fear of the subject now. Moreover, I have
                    joined Science class too. The topic are taught in ppt, video
                    presentation and animation. Every doubt is cleared and
                    explained well.
                  </p>
                </div>
              </Row>
            </Carousel.Item>
            <Carousel.Item className="p-5">
              <Row className="justify-content-center">
                <Image src={S121003} alt="" className="rounded-circle " />
                <div className="myCarousel ">
                  <h3>Urvija Dhulgand</h3>
                  <h4>8th std </h4>
                  <h4 className="text-udfc-orange">
                    {" "}
                    <FaStar /> <FaStar />
                    <FaStar />
                    <FaStar /> <FaStarHalf />
                  </h4>
                  <p>
                    1to1Guru is very good and useful platform for student.
                    Teachers here clears all concept and explain in very proper
                    method. This is also very well developed platform for our
                    future studies. It will help us for many olympiad and
                    entrance exams. It is one of the best platform.
                  </p>
                </div>
              </Row>
            </Carousel.Item>
            <Carousel.Item className="p-5">
              <Row className="justify-content-center">
                <Image
                  src={S121001}
                  className="rounded-circle "
                  // src={require("../../src/assets/img/Divya.jpeg").default}
                  alt=""
                />
                <div className="myCarousel ">
                  <h3>Divya Patil</h3>
                  <h4>SOF-IMO Intenational Rank Holder (5th Rank)</h4>
                  <h4 className="text-udfc-orange">
                    <FaStar /> <FaStar />
                    <FaStar />
                    <FaStar /> <FaStar />
                  </h4>
                  <p>
                    I like to learn one to one. Because the teacher taught me
                    the subject at my speed. Regular followup and practice test
                    helps me a lot. The Time Management was also given by the
                    teacher.
                  </p>
                </div>
              </Row>
            </Carousel.Item>
          </Carousel>
        </Container>
      </section>
    );
  }
}
