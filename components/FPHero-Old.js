import React from "react";
// import { Link } from "react-router-dom";
import {
  // Button,
  Container,
  Row,
  Col,
  Card,
  // UncontrolledCarousel,
} from "reactstrap";
import Socialmedia from "./Socialmedia";
// import * as links from "./Link";
import FPStudentFormFields from "./FPStudentFormFields";
// import Aos from "aos";

// {
//   src: require("../assets/img/theme/img-1-1200x1000.jpg").default,
//   altText: "",
//   caption: "",
//   header: ""
// },
// {
//   src: require("../assets/img/theme/img-2-1200x1000.jpg").default,
//   altText: "",
//   caption: "",
//   header: ""
// }
//];
class FPHero extends React.Component {
  render() {
    return (
      <>
       {/* <section className="section mainheroimg"> */}
        <div className="position-relative">
          {/* Hero for FREE version */}
          <section className="section section-hero section-shaped">
            {/* Background circles */}
            <div className="shape shape-style-1 shape-dark">
              <span className="span-150" />
              <span className="span-50" />
              <span className="span-50" />
              <span className="span-75" />
              <span className="span-100" />
              <span className="span-75" />
              <span className="span-50" />
              <span className="span-100" />
              <span className="span-50" />
              <span className="span-100" />
            </div>
            <Container className="shape-container d-flex align-items-center py-md-4 py-lg-6 py-sm-1">
              <div className="col px-0">     
                <Row className="align-items-center justify-content-center">
              
                  <Col className="order-2 text-center" lg="6">
                    {/* <img
                      alt="..."
                      className="img-fluid"
                      src={require("../../assets/img/Picture1.png").default}
                      style={{ width: "200px" }}
                    /> */}
                    <p className="display-3 mb-0 py-5 text-udfc-orange ">
                      Enhanced Online Learning Experience through Personalized
                      Teaching
                    </p>
                    {/* <p className="display-3" style={{ color: "#FF7722 " }}>
                      Learn to Lead, <br />
                      Learn to Succeed
                    </p> */}
                    {/* <Row > */}
                    {/* <Col lg="2"> </Col> */}
                    {/* <Col lg="10"> */}
                    <Row>
                      <Col lg="3" md="3" sm="3" xl="3"> </Col>
                      <Col lg="9" sm="9" md="9" xl="9"> 
                      <p className="display-4 text-justify" style={{ color: "white" }}>
                        {/* 1:1 Online Learning From India's Best Teachers <br />  */}
                        {/* <ul >  */}
                        <li> Qualified Teachers </li>
                        <li> 1 to 1 Live Sessions </li>
                        <li> Personalised Learning</li>
                        {/* </ul> */}
                      </p>
                      </Col>
                    </Row>
                    {/* <Col> */}
                    {/* <Row> */}
                    {/* <p className="display-5 text-udfc-orange">&</p> */}
                    <p className="h4 text-white pt-3">
                      For Std 8th to 12th <br />
                      CBSE | ICSE | State Board <br />
                      IIT-JEE | NEET | CET | KVPY | Olympiad <br />
                    </p>
                    {/* <div className="  mb-5  ">
                      <Button className=" rainbow " href="">
                        <Link to={links.studform} tag={Link}>
                          {" "}
                          <span className="btn-inner--text text-white">
                            Book A <b> Free</b> Demo
                          </span>{" "}
                        </Link>
                      </Button>{" "} */}
                    {/* <Button
                        className="btn-outline-warning mb-3 mb-sm-0"                        
                        href=""
                        size="lg"
                        target="_blank"
                      >
                        <span className="btn-inner--text">
                         Doubt Clearing Membership
                        </span>
                      </Button> */}
                    {/* </div> */}
                    <p className="display-4">
                      <Socialmedia />
                    </p>

                    {/*  
  
                    <div class="rainbow">

  <div className="btn-wrapper mt-5">
                      <Button
                        className="btn-outline-warning mb-3 mb-sm-0"
                        href=""
                        size="lg"
                      >
                        <Link to={links.studform} tag={Link}>
                          {" "}
                          <span className="btn-inner--text">
                            Book A <b> Free</b> Demo Lecture
                          </span>{" "}
                        </Link>
                      </Button>
</div>
</div> */}

                    {/* <div className="mt-5">
                      <small className="text-white font-weight-bold mb-0 mr-2">
                  
                      </small>
                    </div> */}
                    </Col>
                  
                  
                  <Col className="" lg="6" sm="12">
                    <Card
                      className="card-profile shadow px-5 pb-5 pt-3"
                      data-aos="fade-left" 
                    >
                      <h2 className="py-4">
                        <b>
                          {" "}
                          Book A{" "}
                          <span className="text-udfc-orange"> FREE </span>Demo
                          Lecture{" "}
                        </b>
                      </h2>
                      <FPStudentFormFields />
                    </Card>
                  </Col>
                </Row>
              </div>
            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default FPHero;
