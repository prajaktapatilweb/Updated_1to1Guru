import React, { Component } from "react";
import { Container, Row, Col, Card, CardBody, Button } from "reactstrap";
import Accordians from "./Accordians";
import Neetbiotable from "./Neetbiotable";
import Neetbooks from "./Neetbooks";
import Neetchemtable from "./Neetchemtable";
import Neetphytable from "./Neetphytable";

export default function Neetaccordian() {

  return (
    <div>
      <section className="section" style={{ backgroundImage: "linear-gradient(to right, rgba(58,37,109,.9), rgba(23,43,77,1))" }}>
        <Container>
          <h3 className="h1-responsive text-center font-weight-bold text-udfc-orange pb-3">
            NEET Syllabus 2022 - Biology, Physics, Chemistry & Other Details </h3>
          <Row>
            <Accordians
              header={<span className="font-weight-bold" style={{ fontSize: " 1.25rem" }}> NEET Biology Syllabus </span>}
              body={<Neetbiotable />}
            />
          </Row>
          <Row>
            <Accordians
              header={<span className="font-weight-bold" style={{ fontSize: " 1.25rem" }}>NEET Physics Syllabus </span>}
              body={<Neetphytable />}
            />
          </Row>
          <Row>
            <Accordians
              header={<span className="font-weight-bold" style={{ fontSize: " 1.25rem" }}> NEET Chemistry Syllabus </span>}
              body={<Neetchemtable />}
            />
          </Row>
          <Row>
            <Accordians
              header={<span className="font-weight-bold" style={{ fontSize: " 1.25rem" }}> NEET Books for preparation </span>}
              body={<Neetbooks />}
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



