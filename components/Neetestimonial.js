import React, { Component } from "react";
import { Col, Row, Container, Card } from "reactstrap";
import S121001 from "../public/testimonial/Divya.jpeg";
import S121002 from "../public/testimonial/vez.jpeg";
import S121003 from "../public/testimonial/urvija.jpeg";
import S121004 from "../public/testimonial/arnav.jpeg";
import Image from "next/image";
import { Carousel } from "react-bootstrap";
import { FaStar, FaStarHalf } from "react-icons/fa";

export default function Neetestimonial() {
  const testim = [
    {
      name: "Vez Kurane",
      // img: "/Testimonial/vez.jpeg",
      grade: "9th std",
      feedbacktext:
        "Through 1to1Guru&apos;s personal coaching I learnt a lot. Especially, I was weak in English but I got an excellent teacher who&apos;s explanation and clearing of concepts are so  much satisfying . So my english has been improved and also I have no fear of the subject now. Moreover, I have joined Science className too. The topic are taught in ppt, video presentation and animation. Every doubt is cleared and explained well."
    },
    {
      name: "Urvija Dhulgand",
      // img: "/Testimonial/urvija.jpeg",
      grade: "8th std",
      feedbacktext:
        "1to1Guru is very good and useful platform for student. Teachers here clears all concept and explain in very proper method. This is also very well developed platform for our future studies. It will help us for many olympiad and entrance exams. It is one of the best platform."
    },
    {
      name: "Divya Patil",
      // img: "/Testimonial/Divya11.jpeg",
      grade: "SOF-IMO Intenational Rank Holder (5th Rank)",
      feedbacktext:
        "I like to learn one to one. Because the teacher taught me the subject at my speed. Regular followup and practice test helps me a lot. The Time Management was also given by the teacher."
    },
    {
      name: "Arnav Mandhare",
      // img: "/Testimonial/arnav.jpeg",
      grade: "8th std",
      feedbacktext:
        "Personalised learning help me to understand better and incresed my speed in studies. Learning at 1to1guru is very usefule for me to attend national examinations. Due to personal teacher I got good confidence in study. Also, the doubt clearing sessions in 1to1guru are amazing experience and useful to think"
    }
    ];

  function carouselitmes(n1,img1) {
    return (
      <>
        <Row className="align-items-center">
          <Col md="4" lg="4" sm="12" className="p-3 text-center">
            <div className="img-box">
              <div className="circle"></div>
              <div className="img-box-inner py-2">
              {/* {im1=} */}
                <Image
                  src={img1}
                  alt=""
                  className="rounded-circle align-contents-center "
                  width="280%" height="280%"
                  // width={100}
                  // height={100}
                  // objectFit='contain'
                  // layout='cover'
                />
              </div>
            </div>
          </Col>
          <Col md="8" lg="8" sm="12">
            <div className="myCarousel  ">
              <h3 className="text-udfc-orange text-bold">
                <b>{testim[n1].name}</b>
              </h3>
              <h4> {testim[n1].grade}</h4>
              <h4 className="text-udfc-orange">
                <FaStar /> <FaStar />
                <FaStar /> <FaStar /> <FaStar />
              </h4>
              <p>{testim[n1].feedbacktext}</p>
            </div>
          </Col>
        </Row>
      </>
    );
  }
  return (
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
      <Container>
        <Col className="text-center pb-3" lg="12">
          <h2 className="h1-responsive font-weight-bold text-udfc-orange">
            Testimonials
          </h2>
        </Col>
        <Card className="">
          <Carousel variant="dark"  interval="4000">
            <Carousel.Item className="p-5">{carouselitmes(0,S121002)}</Carousel.Item>
            <Carousel.Item className="p-5">{carouselitmes(1,S121003)}</Carousel.Item>
            <Carousel.Item className="p-5">{carouselitmes(2,S121001)}</Carousel.Item>
            <Carousel.Item className="p-5">{carouselitmes(3,S121004)}</Carousel.Item>
          </Carousel>
        </Card>
      </Container>
    </section>
  );
}

