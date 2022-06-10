import React from "react";
import { Container, Row, Col, Card, CardBody, Button } from "reactstrap";
import Accordians from "./Accordians";
import Cetchemtb from "./Cetchemtb";
import Cetmathtb from "./Cetmathtb";
import Cetphytb from "./Cetphytb";
import Cetquest from "./Cetquest";

export default function Cetaccordian() {
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
            MHT-CET Syllabus 2022 - Physics, Chemistry,Mathematics,Biology &
            Other Details{" "}
          </h3>
          <Row>
            <Accordians
              header={
                <span className="font-weight-bold" style={{ fontSize: "1.25rem" }}>
                  {" "}
                  MHT CET Syllabus Physics
                </span>
              }
              body={<Cetphytb />}
            />
          </Row>
          <Row>
            <Accordians
              header={
                <span className="font-weight-bold" style={{ fontSize: "1.25rem" }}>
                  {" "}
                  MHT CET Syllabus Chemistry
                </span>
              }
              body={<Cetchemtb />}
            />
          </Row>
          <Row>
            <Accordians
              header={
                <span className="font-weight-bold" style={{ fontSize: "1.25rem" }}>
                  {" "}
                  MHT CET Syllabus Mathematics
                </span>
              }
              body={<Cetmathtb />}
            />
          </Row>
          <Row>
            <Accordians
              header={
                <span className="font-weight-bold" style={{ fontSize: "1.25rem" }}>
                  {" "}
                  MHT CET Previous Year Question Papers
                </span>
              }
              body={<Cetquest />}
            />
          </Row>
        </Container>
      </section>
    </div>
  );
}
