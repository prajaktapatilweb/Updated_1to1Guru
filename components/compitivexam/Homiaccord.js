import React from "react";
import { Container, Row, Col, Card, CardBody, Button } from "reactstrap";
import Accordians from "../Accordians";
import Syllabushomi from "./Syllabushomi";
import Stageshomi from "./Stageshomi";
import Registerhomi from "./Registerhomi";

export default function Homiaccord() {
  return (
    <div>
      <section
        className="section"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(58,37,109,.9), rgba(23,43,77,1))",
        }}
      >
        <Container>
          <h3 className="h1-responsive text-center font-weight-bold text-udfc-orange pb-3">
            Step into Bright Future with starting homibhaba
          </h3>
          <Row>
            <Accordians
              header={
                <span
                  className="font-weight-bold"
                  style={{ fontSize: "1.25rem" }}
                >
                  {" "}
                  Syllabus
                </span>
              }
              body={<Syllabushomi />}
            // {<span className="font-weight-bold" style={{fontSize:" 1.25rem"}}>CBSE Syllabus For Math <br></br> CBSE Syllabus For Science </span>}

            //   {<Cetphytb />}
            />
          </Row>
          <Row>
            <Accordians
              header={
                <span
                  className="font-weight-bold"
                  style={{ fontSize: "1.25rem" }}
                >
                  Stages of Competition
                </span>
              }
              body={<Stageshomi />}
            />
          </Row>
          <Row>
            <Accordians
              header={
                <span
                  className="font-weight-bold"
                  style={{ fontSize: "1.25rem" }}
                >
                  {" "}
                  Registration Process
                </span>
              }
              body={<Registerhomi />}
            />
          </Row>

        </Container>
      </section>
    </div>
  );
}
