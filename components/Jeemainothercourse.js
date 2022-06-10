import React from "react";
import { Container, Row } from "reactstrap";
import Coursecard from "./Coursecard";

export default function Jeemainothercourse() {
  return (
    <div>
      <section className="py-5 " style={{ backgroundColor: "#F5F5F5" }}>
        <Container>
          <h2 className="display-3 text-default text-center justify-content-center  ">
            Other Courses
          </h2>
          <Row className="mt-5">
            <Coursecard
              course="NEET"
              imgsrc1="/subjects/IIT_JEE.jpg"
              details=" NEET exam is a gateway to medical career. Achieving success in the NEET exam requires a good subject understanding and regular practice/mock tests."
            />

            <Coursecard
              course="MHT-CET"
              imgsrc1="/subjects/MHT_CET2.jpg"
              details=" MHT-CET is conducted by Government of Maharashtra on annual basis for admission to engineering, Pharmacy, Architecture and Hotel Management.
"
            />

            <Coursecard
              course={
                <span>
                  8 to 10 <sup>th</sup>
                </span>
              }
              imgsrc1="/subjects/OIP.jpg"
              details=" Teaching, counselling and mentoring  in peaceful environment are key components for student’s scholarly development and to achieve successful career."
            />

            <Coursecard
              course={
                <span>
                  11 to 12 <sup>th</sup>
                </span>
              }
              imgsrc1="/subjects/stud.jpg"
              details=" Learning basics to develop strong conceptual understanding, regular practice and mock tests are the key components of 11th & 12th personalised course. 
"
            />
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
