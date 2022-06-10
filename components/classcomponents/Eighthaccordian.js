import React from "react";
import { Container, Row, Col, Card, CardBody, Button } from "reactstrap";
import Accordians from "../Accordians";
import { ccet, cjee, cneet, homibhabha, olympiad } from "../Link";
import Cbse8thtabs from "./Cbse8thtabs";
import Link from "next/link";
import Msb8thtabs from "./Msb8thtabs";
import Icse8thtabs from "./Icse8thtabs";

export default function Eighthaccordian() {
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
            Step into Bright Future with starting 8th
          </h3>
          <Row>
            <Accordians
              header={
                <span
                  className="font-weight-bold"
                  style={{ fontSize: "1.25rem" }}
                >
                  {" "}
                  CBSE 8<sup>th</sup> Standard Syllabus
                </span>
              }
              body={<Cbse8thtabs />}
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
                  {" "}
                  Maharashtra State Board 8<sup>th</sup> Standard Syllabus
                </span>
              }
              body={<Msb8thtabs />}
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
                  ICSE 8<sup>th</sup> Standard Syllabus
                </span>
              }
              body={<Icse8thtabs />}
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
                  Foundations for 8<sup>th</sup> Standard
                </span>
              }
              body={
                <p>
                  <Link href={cneet}>
                    <a target="_blank" style={{ color: "blue" }}>
                      Neet Foundation Register Now
                    </a>
                  </Link>
                  ,<br></br>
                  <Link href={cjee}>
                    <a target="_blank" style={{ color: "blue" }}>
                      IIT-JEE Foundation Register Now
                    </a>
                  </Link>
                  ,<br></br>
                  <Link href={ccet}>
                    <a target="_blank" style={{ color: "blue" }}>
                      MHT-CET Foundation Register Now
                    </a>
                  </Link>
                </p>
              }
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
                  Compitative Exams for 8<sup>th</sup> Standard
                </span>
              }
              body={
                <p>
                  <Link href={homibhabha}>
                    <a target="_blank" style={{ color: "blue" }}>
                      Dr Homi Bhabha Register Now
                    </a>
                  </Link>
                  ,<br></br>
                  <Link href={olympiad}>
                    <a target="_blank" style={{ color: "blue" }}>
                      Olympiad Register Now
                    </a>
                  </Link>
                  {/* ,<br></br>
                  <Link href={ccet}>
                    <a target="_blank" style={{ color: "blue" }}>
                      MHT-CET Foundation Register Now
                    </a>
                  </Link> */}
                </p>}
            />
          </Row>
        </Container>
      </section>
    </div>
  );
}
