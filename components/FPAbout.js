import React,{useEffect} from "react";
import { Container, Row, Button, Col, Card } from "reactstrap";
import Link from 'next/link'
import Aos from 'aos';
import {abt} from './Link'

export default function FPAbout() {
  useEffect(() => {
    Aos.init({duration:2000});
 
   }, []);
  return (
    <div>
      <section className="section section-lg1">
        <Container data-aos="flip-up"  style={{ opacity: 0.8 }}>
          <Card className="p-5">
          <Row className="row-grid justify-content-center">
            <Col className="text-center" lg="10">
              <h2 className="display-3">About Us</h2>
              <p className="lead text-justify">
                1to1Guru, a subsidiary of AeduZEST Innovations Private Limited,
                is a venture by like-minded educationalists committed to
                enhancing the student&apos;s personalised learning process by
                adapting the well-researched and proven educational practices.
                1to1Guru team is backed by leading scientists, educationalists,
                professors, technocrats in India and Abroad. Our dedicated team
                of experienced education professionals strives to prepare our
                students for future demanding roles in Science, Technology,
                Arts, and Commerce by stimulating their fullest potential. We
                believe in igniting our students&apos; voice by providing the
                confidence to express their ideas and opinions by one-to-one
                teaching, so they are heard and taken into account in any
                situation.
              </p>
              <div className="btn-wrapper">
                <Button className="mb-3 mb-sm-0 btn-usrd">
                  <Link href={abt} as="{`${abt}`}" passHref>
                    <h6
                      className="nav-link-inner--text ml-1"
                      style={{ color: "black" }}
                    >
                      Learn More
                    </h6>
                  </Link>
                </Button>
              </div>
            </Col>
          </Row>
          </Card>
        </Container>
      </section>
    </div>
  );
}
