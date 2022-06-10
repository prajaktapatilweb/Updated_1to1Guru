import React from "react";
import { Container, Row,Col } from "reactstrap";
import Coursecard from "./Coursecard";
import { ccet, cjee, cneet, stureg } from "./Link";

export default function Othercourse(props) {
  const courses = [
    {
      id:'neet',
      course: "NEET",
      imgsrc1: "/subjects/course2.jpg",
      details:
        " NEET exam is a gateway to medical career. Achieving success in the NEET exam requires a good subject understanding and regular practice/mock tests.",
      cardlink:`${ ccet }`,
    },
    {
      id:'iitjee',
      course: "JEE-IIT",
      imgsrc1: "/subjects/course1.jpg",
      details:
        " IIT JEE is held in two stages - JEE Main and JEE Advanced. The success in JEE requires a strong foundations in Physics, Chemistry and Mathematics.",
      cardlink:`${ cjee }`,
    },
    {
      id:'mhtcet',
      course: "MHT-CET",
      imgsrc1: "/subjects/MHT_CET2.jpg",
      details:
        " MHT-CET is conducted by Government of Maharashtra on annual basis for admission to engineering, Pharmacy, Architecture and Hotel Management.",
      cardlink:`${ ccet }`,
    },

    {
      id:'class8to10',
      course: "Class 8 to 10",
      imgsrc1: "/subjects/course3.jpg",
      details:
        " Teaching, counselling and mentoring  in peaceful environment are key components for student’s scholarly development and to achieve successful career.",
      cardlink:`${ stureg }`,
    },
    {
      id:'class11to12',
      course: "Class 11 to 12",
      imgsrc1: "/subjects/course4.jpg",
      details:
        " Learning basics to develop strong conceptual understanding, regular practice and mock tests are the key components of 11th & 12th personalised course.",
      cardlink:`${ stureg }`,
    },

  ];
  return (
    <div>
      <section className="py-5 " style={{ backgroundColor: "#F5F5F5" }}>
        <Container>
          <h2 className="display-3 text-default text-center justify-content-center  ">
            Other Courses
          </h2>
          <Row className="mt-5">
            {courses.map((item) =>(
              item.id !== props.cname?
              <Col lg="3" className="py-2">
             <Coursecard
               course={`${item.course}`}
               imgsrc1={`${item.imgsrc1}`}
               imgsrc1width={200}
               imgsrc1height={100}
               details={`${item.details}`}
               cardlink={`${item.cardlink}`}
             /> </Col> :null
             
            ))}


          </Row>
          {/* <div className="text-center py-4">
                        <Button className="btn-1 ml-1 " color="success" type="button" ><Link to='/Aboutus'> Learn More </Link> </Button>
                    </div> */}
        </Container>
        {/* SVG separator */}
      </section>
    </div>
  );
}
