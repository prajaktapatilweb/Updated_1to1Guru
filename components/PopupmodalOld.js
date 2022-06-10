import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { Row, Col } from "reactstrap";
import { testseries } from "./Link";
import Link from "next/link";

export default function Popupmodal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  //   const handleShow = () => setShow(true);
  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 2000);
  }, []);

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal
        show={show}
        onHide={handleClose}
        size="lg"

        // autoFocus={true}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      // className="modal-danger"
      // contentClassName="bg-gradient-danger"
      >
        <Modal.Body style={{ padding: "10px 15px 0px 15px" }}>
          <Row>
            <Col
              className=" d-flex align-items-center justify-content-center "
              lg="4"
              sm="12"
              style={{
                backgroundColor: "#512373",
                color: "white",
                marginTop: "-10px",
                padding: "-20px",
              }}
            >
              {/* <h1 className="text-center" style={{ marginTop: "30%" }}> */}
              <div>
                <h1
                  className="text-center pt-sm-4"
                  style={{ fontFamily: "Fjalla One" }}
                >
                  Offer
                </h1>
                <hr
                  style={{
                    color: "#2CC5A3",
                    height: 0.7,
                    borderColor: "#2CC5A3",
                  }}
                />
                <h1
                  className="text-center"
                  style={{
                    fontSize: "65px",
                    fontFamily: "Fjalla One",
                    lineHeight: "1",
                  }}
                >
                  50% OFF
                </h1>
                <hr
                  style={{
                    color: "#2CC5A3",
                    height: 0.7,
                    borderColor: "#2CC5A3",
                  }}
                />
              </div>
            </Col>

            <Col lg="8">
              <h5 className="text-center p-2" style={{ color: "black" }}><b> Achieve Your Rank in </b></h5>
              <h3 className="text-success text-center font-weight-bold">
                {" "}
                <span style={{ color: "#00ad48" }}> NEET</span>, <span style={{ color: "#aa60f4" }}> IIT-JEE </span> & <span style={{ color: "#ff0065" }}>MHT-CET</span>
              </h3>
              <Modal.Header className="justify-content-center">
                <Modal.Title>
                  <h2
                    className="text-center "
                  // style={{border:"1px solid red"}}
                  >
                    <h5 style={{ color: "black" }}><b> Join</b> </h5>
                    <strong style={{ color: "#bd0000" }}>Personalized Test Series </strong>
                  </h2>
                </Modal.Title>
              </Modal.Header>

              {/* <li className="text-center"> */}

              {/* </li> */}
              {/* <ul className="h5">
                <li>
                  Question bank and Solutions for each Chapter and Subject (in
                  total 40,000+ questions)
                </li>
                <li>
                  Get <span className="text-danger">Timed Mock Test </span> with
                  detailed analysis{" "}
                </li>
                <li>
                  <span className="text-danger">
                    Regular feedback and performance
                  </span>{" "}
                  monitoring by expert mentors
                </li>
                <li>
                  On demand{" "}
                  <span className="text-danger">
                    1to1 live doubt solving sessions.
                  </span>{" "}
                </li>
              </ul> */}
              <Modal.Footer>
                {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button> */}
                <Link href={testseries} passHref>
                  <Button variant="primary" style={{ backgroundColor: "#892df9", color: "yellow" }}> Yes, Enroll Me</Button>
                </Link>
                <Button variant="primary" onClick={handleClose}>Close</Button>
              </Modal.Footer>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
}
