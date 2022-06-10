import React from "react";
import {
  Button,
  NavItem,
  Nav,
  Container,
  Row,
  NavbarBrand,
  Col,
  UncontrolledTooltip,
  NavLink,
} from "reactstrap";
import * as contactdetail from "./Constants";
import Socialmedia from "./Socialmedia";
import Link from "next/link";
import ScrollToTop from "./ScrollToTop";
import { hom, abt, cnt, stureg, teareg } from '../components/Link'
// import  Whatsapp from "./Whatsapp";
// import Trial2 from "./Trial2"
import Whatsappnew from "./Whatsappnew";
import { FaEnvelope, FaPhoneSquareAlt } from "react-icons/fa";
import logo from "../public/new-logo11.png";
import Image from "next/image";

export default function Footer() {
  return (
    <div>
      <footer className=" footer" style={{ backgroundColor: "#172b4d" }}>
        <Container>
          {/* <Whatsapp /> */}
          <Whatsappnew />
          <ScrollToTop />
          <Row className=" row-grid align-items-center mb-5">
            <Col lg="8">
              <NavbarBrand className="mr-lg-5" href="/">
                1to1Guru
                {/* <Image
                  alt="..."
                  src={logo}
                  // {require("../assets/img/new-logo11.png").default}
                /> */}
              </NavbarBrand>
              {/* <h3 className=" text-danger font-weight-dark mb-2"></h3> */}
              <h4 className="display-5 text-white   ">
                A Project of AEDUZEST INNOVATIONS PVT LTD, Pune-17
              </h4>
              <div className="h5 text-white">
                <b> Mob:</b> {"  "}
                <Link href={`tel:${contactdetail.contactno}`} target="_blank">
                  <a className="nav-link-inner--text">
                    {contactdetail.contactno}
                  </a>
                </Link>{" "}
                <br />
                <b> Email: </b>
                <Link href={`tel:${contactdetail.emailid}`} target="_blank">
                  <a className="nav-link-inner--text">
                    {contactdetail.emailid}
                  </a>
                </Link>{" "}
              </div>
              <div className="py-4">
                <h4 className="text-udfc-orange">
                  {" "}
                  <b> Connect with US </b>
                </h4>
                <Socialmedia />
                {/* <Button
                  className="btn-icon-only rounded-circle ml-1"
                  color="pinterest"
                  href={`mailto:${contactdetail.emailid}`}
                  id="tooltip829810203"
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <FaEnvelope />
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip829810203">
                  Email us @ : {contactdetail.emailid}
                </UncontrolledTooltip>
                <Button
                  className="btn-icon-only rounded-circle ml-1"
                  color="slack"
                  href={`tel:${contactdetail.contactno}`}
                  id="tooltip829810232"
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <FaPhoneSquareAlt />
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip829810232">
                  Call us @ {contactdetail.contactno}
                </UncontrolledTooltip> */}
              </div>
            </Col>
            <Col className="text-lg btn-wrapper " lg="4">
              <h4 className="text-udfc-orange">
                {" "}
                <b>  Useful Links </b>
              </h4>
              <Link href="/">
                <a className="nav-link-inner--text">Home</a>
              </Link>{" "}
              <br />
              <Link href={stureg}>
                <a className="nav-link-inner--text ">Students</a>
              </Link>{" "}
              <br />
              <Link href={teareg}>
                <a className="nav-link-inner--text">Teachers</a>
              </Link>{" "}
              <br />
              <Link href={abt}>
                <a className="nav-link-inner--text">About Us</a>
              </Link>{" "}
              <br />
              <Link href={cnt}>
                <a className="nav-link-inner--text">Contact Us</a>
              </Link>{" "}
              <br />

              <br />

              {/* <Link href="/termsofservice">
                <a className="nav-link-inner--text">Terms of Service</a>
              </Link>{" "}
              <br />
              <Link href="privacypolicy">
                <a className="nav-link-inner--text">Privacy Policy</a>
              </Link> */}
            </Col>
          </Row>

          {/* <Row className=" align-items-center text-neutral justify-content-md-between">
            <Col md="5"></Col>
          </Row> */}
        </Container>
      </footer>
      <footer className="py-3" style={{ background: "black" }}>
        <Container>
          <Row>
            <Col md="1"> </Col>
            <Col md="10">
              <div className=" text-white text-center h4">
                © {new Date().getFullYear()} Content Copyright 1to1Guru. All
                Rights Reserved. Designed by {"   "}
                {/* <a
                  href="https://www.creative-tim.com?ref=adsr-footer"
                  target="_blank"
                  rel="noreferrer"
                >
                  Creative Tim{" "}
                </a>
                &{" "} */}
                <a
                  href="https://www.aeduzest.com"
                  target="_blank"
                  rel="noreferrer"
                  className="h4"
                >
                  {" "}
                  AEDUZEST Web Services
                </a>

              </div>
              <div className="text-center"> <a href="https://www.freepik.com/vectors/background">
                Background Images created by freepik - www.freepik.com
              </a></div>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}
