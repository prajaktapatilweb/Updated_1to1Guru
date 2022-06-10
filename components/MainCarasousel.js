import React from "react";
import { Container, CardBody, Row, Col, Button, Card } from "reactstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ccet, cjee, cneet, stureg } from "./Link";
import Link from "next/link";
import { useMediaQuery } from 'react-responsive'


const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function MainCarasousel(props) {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' })
  const courses = [
    {
      id: "neet",
      course: "NEET",
      imgsrc1: "/subjects/course2.jpg",
      details:
        " NEET exam is a gateway to medical career. Achieving success in the NEET exam requires a good subject understanding and regular practice/mock tests.",
      cardlink: `${ccet}`,
    },
    {
      id: "iitjee",
      course: "JEE-IIT",
      imgsrc1: "/subjects/course1.jpg",
      details:
        " IIT JEE is held in two stages - IIT-JEE Main and IIT-JEE Advanced. The success in JEE requires a strong foundations in Physics, Chemistry and Mathematics.",
      cardlink: `${cjee}`,
    },
    {
      id: "mhtcet",
      course: "MHT-CET",
      imgsrc1: "/subjects/MHT_CET2.jpg",
      details:
        " MHT-CET is conducted by Government of Maharashtra on annual basis for admission to engineering, Pharmacy, Architecture and Hotel Management.",
      cardlink: `${ccet}`,
    },

    {
      id: "class8to10",
      course: "Class 8 to 10",
      imgsrc1: "/subjects/course3.jpg",
      details:
        " Teaching, counselling and mentoring  in peaceful environment are key components for student’s scholarly development and to achieve successful career.",
      cardlink: `${stureg}`,
    },
    {
      id: "class11to12",
      course: "Class 11 to 12",
      imgsrc1: "/subjects/course4.jpg",
      details:
        " Learning basics to develop strong conceptual understanding, regular practice and mock tests are the key components of 11th & 12th personalised course.",
      cardlink: `${stureg}`,
    },
  ];
  return (
    <>
      <section className="py-5 " style={{ backgroundColor: "#F5F5F5" }}>
        <h2 className="display-3 text-default text-center justify-content-center  ">
          Our Courses
        </h2>
        <Container>
          <div className="my-own-custom-container">
            <Carousel
             centerMode={isTabletOrMobile? false : true } 
              swipeable={true}
              draggable={true}
              showDots={true}
              responsive={responsive}
              // ssr={true} // means to render carousel on server-side.
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={4000}
              keyBoardControl={true}
              customTransition="transform 300ms ease-in-out"
              transitionDuration={500}
              renderButtonGroupOutside={true}
              // containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              // deviceType={props.deviceType}
              // dotListClass="custom-dot-list-style"
              // itemClass="carousel-item-padding-40-px"
            >
              {courses.map((item) => (
                <div className="p-sm-1 p-lg-2 p-md-3" key={item.id}>
                  <Card
                    className="shadow"
                    style={{
                      borderRadius: "10px",
                      marginBottom: "30px",
                      padding: "5px",
                    }}
                  >
                    <img
                      src={item.imgsrc1}
                      alt=""
                      style={{
                        borderRadius: "10px 10px 0px 0px",
                        width: "100%",
                        height: "270px",
                      }}
                    />
                    {/* <Image src= {props.imgname} width={100} height={200} alt="" /> */}
                    <Button
                      className="btn-icon btn-3 bg-gradient-cyan"
                      type="button"
                      style={{
                        width: "100%",
                        border: "0px",
                        borderRadius: "0px",
                      }}
                    >
                      <span
                        className="btn-inner--text text-black"
                        style={{ fontSize: "16px" }}
                      >
                        {item.course}
                      </span>
                    </Button>
                    <CardBody>
                      <h5 className=" text-black pb-2">{item.details}</h5>
                      <div className="text-center py-2">
                        <Button className="btn-danger">
                          <Link href={`${item.cardlink}`}>
                            <a>Know More</a>
                          </Link>
                        </Button>
                      </div>
                    </CardBody>
                  </Card>
                </div>
              ))}
            </Carousel>
          </div>
        </Container>
      </section>
    </>
  );
}
