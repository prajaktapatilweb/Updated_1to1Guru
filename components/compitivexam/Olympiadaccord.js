import React from "react";
import { Container, Row, Col, Card, CardBody, Button } from "reactstrap";
import Accordians from "../Accordians";
import { ccet, cjee, cneet } from "../Link";
import Link from "next/link";
import Olympiadactivity from "./Olympiadactivity";
import Ncodetails from "./Ncodetails";
import Imodetails from "./Imodetails";
import Ieodetails from "./Ieodetails";
import Nsodetails from "./Nsodetails";
import Icodetails from "./Icodetails";
import Igko from "./Igko";
import Isso from "./Isso";

export default function Olympiadaccord() {
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
            Step into Bright Future with starting olympiad
          </h3>
          <Row>
            <Accordians
              header={
                <span
                  className="font-weight-bold"
                  style={{ fontSize: "1.25rem" }}
                >
                  {" "}
                  Olympiad Activities
                </span>
              }
              body={<Olympiadactivity />}
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
                  About NCO Exam
                </span>
              }
              body={<Ncodetails />}
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
                  About IMO Exam
                </span>
              }
              body={<Imodetails />}
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
                  About IEO Exam
                </span>
              }
              body={<Ieodetails />}
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
                  About NSO Exam
                </span>
              }
              body={<Nsodetails />}
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
                  About ICO Exam
                </span>
              }
              body={<Icodetails />}
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
                  About IGKO Exam
                </span>
              }
              body={<Igko />}
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
                  About ISSO Exam
                </span>
              }
              body={<Isso />}
            />
          </Row>
        </Container>
      </section>
    </div>
  );
}
