import React from "react";
import { Card, Container, Row, Col } from "reactstrap";
import { Table } from "reactstrap";
import QB from "./QBStudentFormFields";

export default function Paidtestseries() {
  return (
    <div>
         <section className="section" style={{ backgroundColor:"#F5F5F5"}}>
      {/* <section className="section"
        style={{ backgroundImage: `url("/test/testbg4.jpg")`, opacity: "1" }}
      > */}
      <Container>
        {/* <Container style={{ backgroundColor: "white" }} className="py-4"> */}
          <h5 className="text-danger text-center h1 card-title">
            <b>1to1Guru – Personalized Test Series</b>
          </h5>


          <Row className="align-items-center justify-content-center">
            <Col className="text-center " lg="6">
              {/* <Card> */}
                <h3> Personalized Test Series at Affordable Price </h3>
                <h4>For NEET / IIT-JEE / MHT-CET <span className="text-success"> (Only 1 Exam)</span> </h4>
                <h6>Actual Price Rs. 5000/- 
                <h4 className="text-danger"> Offer Price <strong> Rs. 2500/- </strong></h4> </h6><br />

                <h4> For NEET / IIT-JEE / MHT-CET <span className="text-success"> (Any 2 Exams) </span> </h4>
                <h6> Actual Price Rs. 7000/-
                <h4 className="text-danger"> Offer Price <strong> Rs. 3500/- </strong></h4> </h6> <br />

                <h4> For NEET / IIT-JEE / MHT-CET <span className="text-success">  (All 3 Exams) </span> </h4>
                <h6>Actual Price Rs. 9000/-
                <h4 className="text-danger"> Offer Price <strong> Rs. 4500/- </strong></h4> </h6>
              {/* </Card> */}
            </Col>
            <Col className="" lg="6" sm="12">
              <Card
                className="card-profile shadow px-5 pb-5 pt-3"
                data-aos="fade-left"
              >
                <h2 className="py-4">
                  <b>Book for A Personalized Test Series</b>
                </h2>
                <QB />
              </Card>
            </Col>
            </Row>
            </Container>
            </section>
            <section className="section" style={{backgroundImage: "linear-gradient(to right, rgba(58,37,109,.9), rgba(23,43,77,1))"}}>
<Container>
<h3 className="h1-responsive text-center font-weight-bold text-udfc-orange ">Personalized Test Series for NEET, IIT-JEE, MHT-CET-2022</h3>
            <h2 className="text-warning text-center pb-3">Jubilant-2022</h2>
    <Card className="card-profile shadow px-5 pb-5 pt-3 card aos-init aos-animate">

            {/* <Card className="m-5 p-3"> */}
               
            <h5 className="text-center  display-4"> The Package Contains </h5>
            <h5 className="text-danger font-weight-bold">Weekly Test Series</h5>
            <h5 className="pl-5">
              <strong>20 test series</strong> developed by our expert teachers
            </h5>
            <h5 className="text-danger font-weight-bold">Question Bank</h5>
            <h5 className="pl-5">
              Question bank and Solutions for each chapter (in <strong> total 40,000+ questions </strong>)
            </h5>
            <h5 className="text-danger font-weight-bold">Analysis </h5>
            <h5 className="pl-5">
              Detailed analysis of student&rsquo;s each question solving time, Chapter wise analysis of correct and wrong questions.
            </h5>
            <h5 className="text-danger font-weight-bold">Personalized Login</h5>
            <h5 className="pl-5">
              Inidivual login for each student to take <strong> Mock Test</strong>, to monitor the student&rsquo;s progress
            </h5>
            <h5 className="text-danger font-weight-bold">Notes</h5>
            <h5 className="pl-5">
              Chapter wise notes of Physics, Chemistry, Biology &amp; Mathematics
            </h5>
            <h5 className="text-danger font-weight-bold">Feedback</h5>
            <h5 className="pl-5">
              Regular <strong>feedback</strong> and performance monitoring byexpert mentors{" "}
            </h5>
            <h5 className="text-danger font-weight-bold">
              On demand 1to1 live <strong>doubt</strong> solving sessions.&nbsp;
            </h5>
          </Card>
         
        </Container>
     </section>
    </div>
  );
}
