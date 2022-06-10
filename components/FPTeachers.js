import React, { useEffect } from "react";
import Link from "next/link";
import Aos from "aos";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Button,
} from "reactstrap";
// import { teachform } from "./Link";
import { teareg } from "./Link";

export default function FPTeachers() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <section className="section section-lg1 ">
        <Container style={{ opacity: 0.8 }}>
          <h2 className="display-3 text-center py-3 text-white">Join Us</h2>
          <Row className="row-grid justify-content-center">
            <Col className="text-center" lg="10">
              <Card className="shadow-lg " data-aos="zoom-in-down">
                <CardHeader className="bg-gradient-info">
                  <h3 className="display-4 ">
                    We are Hiring Qualified and Experienced Teachers
                  </h3>
                </CardHeader>
                <CardBody className="h4 py-5">
                  <li> Work at your convenience / flexible timing </li>
                  <li> Respect your experience and knowledge </li>
                  <li> Expanding towards your horizon</li>
                  <li> Healthy work environment</li>
                  <br></br>
                  <Button
                    color="info"
                    type="button"
                    className="align-content-center"
                  >
                    <Link href="{teareg}" as={`${teareg}`} passHref>
                      <h6 className="mb-0">
                        <strong> Join Our Team </strong>
                      </h6>
                    </Link>
                  </Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      <Container>
        {" "}
        <br />
      </Container>
    </div>
  );
}
