import React from "react";
import {
  hom,
  abt,
  cnt,
  stureg,
  teareg,
  cneet,
  cjee,
  ccet,
  weektest,
  testseries, summercamp
} from "../components/Link";
import Link from "next/link";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";
//import * as contactdetail from "../Constants"
import logo from "../public/new-logo11.png";
import Image from "next/image";
import Head from "next/head";
import { HiChevronDown } from 'react-icons/hi'

class Navbar1 extends React.Component {
  componentDidMount() {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
  }
  state = {
    collapseClasses: "",
    collapseOpen: false,
  };

  onExiting = () => {
    this.setState({
      collapseClasses: "collapsing-out",
    });
  };

  onExited = () => {
    this.setState({
      collapseClasses: "",
    });
  };
  render() {
    return (
      <>
        <Head>
          {/* Google Tag Manager  */}
          <title>
            1to1 Live Online Tutoring for Grade 8th to 12th - 1to1 Guru
          </title>
          <link rel="icon" href="/favicon.ico" />
          <meta
            content="1to1 Guru offers personalized online tutoring for 8th-12th Grades. We have verified and trusted teachers who provide personalised learning experience."
            name="description"
          />
          <meta
            content="1to1 Tutor, 1:1 tutor, 1:1 teacher, 1to1 teacher, online teacher, online tutor"
            name="keywords"
          />
          <link rel="canonical" href="https://1to1guru.com" />
        </Head>

        <header className="header-global">
          <Navbar
            className="navbar-main navbar-transparent navbar-light headroom"
            expand="lg"
            id="navbar-main"
          >
            <Container>
              <button className="navbar-toggler" id="navbar_global">
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse
                toggler="#navbar_global"
                navbar
                className={this.state.collapseClasses}
                onExiting={this.onExiting}
                onExited={this.onExited}
              >
                {/* <div className="navbar-collapse-header">
                  <Row>
                    <Col
                      className="collapse-brand"
                      xs="6"
                      style={{ fontSize: "30px" }}
                    >
                      <Link href="/" passHref>
                        <Image alt="..." src={logo} />
                      </Link>
                    </Col>
                    <Col className="collapse-close" xs="6">
                      <button className="navbar-toggler" id="navbar_global">
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div> */}
                {/* <NavbarBrand className="" href="/" > */}
                <Link href="/" passHref >
                  <Image
                    alt="..."
                    src={logo}
                    layout="intrinsic"
                    width={250}
                    height={60}
                  />
                  {/* <a >1to1GURU </a> */}

                </Link>
                {/* </NavbarBrand> */}
                <Nav className="navbar-nav-hover align-items-lg-center" navbar>

                  <Link href="/">
                    {/* <i className="ni ni-ui-04 d-lg-none mr-1" /> */}
                    <a className="nav-link-inner--text">Home</a>
                  </Link>
                  <Link href={stureg}>
                    {/* <i className="ni ni-ui-04 d-lg-none mr-1" /> */}
                    <a className="nav-link-inner--text">Students </a>
                  </Link>
                  {/* <a className="nav-link-inner--text"style={{color:"white"}}>Courses </a> */}
                  <UncontrolledDropdown inNavbar nav>
                    <DropdownToggle nav caret style={{ paddingRight: "0px" }}>
                      {/* Courses */}
                      <span className="text-white"
                      // href="#"
                      // className="nav-link-inner--text"
                      // style={{ border: "0px" ,padding:"0px",margin:"0px" }}
                      >
                        Courses <HiChevronDown size="1.5em" className="d-lg-none" />
                      </span>
                    </DropdownToggle>
                    <DropdownMenu end>
                      <Link href={cneet} passHref>
                        <DropdownItem style={{ marginLeft: "0px" }}>
                          {" "}
                          <a
                            className="nav-link-inner--text"
                            style={{ color: "black", border: "0px" }}
                          >
                            NEET{" "}
                          </a>
                        </DropdownItem>
                      </Link>{" "}
                      <Link href={cjee} passHref>
                        <DropdownItem style={{ marginLeft: "0px" }}>
                          <a
                            className="nav-link-inner--text"
                            style={{ color: "black", border: "0px" }}
                          >
                            IIT-JEE
                          </a>
                        </DropdownItem>
                      </Link>
                      {/* <DropdownItem divider /> */}{" "}
                      <Link href={ccet} passHref>
                        <DropdownItem style={{ marginLeft: "0px" }}>
                          <a
                            className="nav-link-inner--text"
                            style={{ color: "black", border: "0px" }}
                          >
                            MHT-CET
                          </a>
                        </DropdownItem>
                      </Link>
                      <Link href={summercamp} passHref>
                        <DropdownItem style={{ marginLeft: "0px" }}>
                          <a
                            className="nav-link-inner--text"
                            style={{ color: "black", border: "0px" }}
                          >
                            Summer Bootcamp
                          </a>
                        </DropdownItem>
                      </Link>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret style={{ paddingRight: "0px" }} >
                      <span className="text-white" >
                        Resources <HiChevronDown size="1.5em" className="d-lg-none" />
                      </span>
                    </DropdownToggle>
                    <DropdownMenu end>
                      <Link href={weektest} passHref>
                        <DropdownItem style={{ marginLeft: "0px" }}>
                          <a
                            className="nav-link-inner--text"
                            style={{ color: "black", border: "0px" }}
                          >
                            Free Test Series
                          </a>
                        </DropdownItem>
                      </Link>
                      <Link href={testseries} passHref>
                        <DropdownItem style={{ marginLeft: "0px" }}>
                          <a
                            className="nav-link-inner--text"
                            style={{ color: "black", border: "0px" }}
                          >
                            Online Test Series
                          </a>
                        </DropdownItem>
                      </Link>
                    </DropdownMenu>
                  </UncontrolledDropdown>

                  <Link href={teareg}>
                    {/* <i className="ni ni-ui-04 d-lg-none mr-1" /> */}
                    <a className="nav-link-inner--text">Teachers </a>
                  </Link>
                  <Link href={abt}>
                    {/* <i className="ni ni-ui-04 d-lg-none mr-1" /> */}
                    <a className="nav-link-inner--text">About</a>
                  </Link>
                  <Link href={cnt}>
                    {/* <i className="ni ni-ui-04 d-lg-none mr-1" /> */}
                    <a className="nav-link-inner--text">Contact</a>
                  </Link>
                </Nav>
                <Nav className="align-items-lg-center ml-lg-auto" navbar>
                  <NavItem className="d-none d-lg-block ml-lg-4">
                    <Button
                      className="btn-usrd btn-icon"
                      color="default"
                      type="button"
                    >
                      <Link href={stureg} passHref>
                        <span
                          className="nav-link-inner--text ml-1"
                          style={{ color: "white" }}
                        >
                          Book a Free Demo
                        </span>
                      </Link>
                    </Button>
                  </NavItem>
                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </header>
      </>
    );
  }
}

export default Navbar1;
