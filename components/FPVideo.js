import React from "react";
import ReactPlayer from "react-player/youtube";
import { Row, Col } from "reactstrap";

export default function FPVideo() {
  return (
    <div>
      <section className="section events ">
        <Row >
          <Col lg="2" sm="1">
            {" "}
          </Col>
          <Col className="py-5" lg="8" sm="10" >
            <ReactPlayer
              width="100%"
              url=
              // "https://www.youtube.com/watch?v=1BPZNcmFi6I"
              "https://www.youtube.com/watch?v=ztZWh0FDqq4"
              style={{ border: '2px solid yellow' }}
            />
          </Col>
        </Row>
      </section>
    </div>
  );
}
