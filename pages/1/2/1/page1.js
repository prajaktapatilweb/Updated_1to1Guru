import React from "react";
import Navbar1 from "../../../../components/Navbar1";
import HeroInnerPages from "../../../../components/HeroInnerPages";
import { Col, Row } from "reactstrap";
import Link from "next/link";
// import file1 from '../../../../public/Requisition_form_final.pdf'

function index() {
  // console.log(req.body);
  // console.log(var);
  return (
    <div>
      <Navbar1 />
      <HeroInnerPages />
      <br />
      <div className="container">
        <div className="card bg-gradient-success p-3 ">
          {/* <table class="table responsive text-center" width="100%" cellspacing="0" style="color:black; padding:"100px" border="1" >  */}
          <h1> Meetings</h1>
          <Row>
            <Col lg="1"> </Col>
            <Col lg="3">
              <h2>
                <a href="https://meet.google.com/umo-gdgd-egd">Weekly Meet </a>{" "}
              </h2>
            </Col>
            <Col lg="8">
              <h3>Monday meeting link (Google Meet) </h3>
            </Col>
          </Row>
          <Row>
            <Col lg="1"> </Col>
            <Col lg="3">
              <h2>
                <a href="https://meet.google.com/mhi-fhuv-hrr">
                  Demo Lecture Meet
                </a>{" "}
              </h2>
            </Col>
            <Col lg="8">
              <h3>
                To be given to the student and teacher for demo lecture (Google
                Meet)
              </h3>
            </Col>
          </Row>
          <h1> Genral</h1>
          <Row>
            <Col lg="1"> </Col>
            <Col lg="3">
              <h2>
                <a href="https://docs.google.com/spreadsheets/d/1sHgic9sTdCJmGVoPjR9cfdwi59N_XN3okRQeQMhpcl4/edit?usp=sharing">
                  Inward Outward Register{" "}
                </a>{" "}
              </h2>
            </Col>
            <Col lg="8">
              <h3>To maintain Inward and outward letters </h3>
            </Col>
          </Row>
          <h1> Teaching Department</h1>
          <Row>
            <Col lg="1"> </Col>
            <Col lg="3">
              <h2>
                <a href="https://docs.google.com/spreadsheets/d/1-QVIOmoxVroYcg5YaCH3zgNY0A2T5mfHuTXycNzJb7U/edit?usp=sharing">
                  Teacher Registration Data
                </a>{" "}
              </h2>
            </Col>
            <Col lg="8">
              <h3>
                To get all the information about teacher interview, selection
                and joining
              </h3>
            </Col>
          </Row>
          <Row>
            <Col lg="1"> </Col>
            <Col lg="3">
              <h2>
                <Link href="/1/2/1/getdata">
                  <a> Collected Data </a>
                  </Link>
              </h2>
            </Col>
            <Col lg="8">
              <h3>
                To get all the information about the applied teacher students and contacts
              </h3>
            </Col>
          </Row>
          <h1> Finance Department</h1>
          <Row>
            <Col lg="1"> </Col>
            <Col lg="3">
              <h2>
                <a href="https://docs.google.com/spreadsheets/d/1jV83L8dhCTFzsNitYNW0tgaNKscVeGTQ/edit?usp=sharing&ouid=100045772390046992830&rtpof=true&sd=true">
                  Expenditure Data{" "}
                </a>{" "}
              </h2>
            </Col>
            <Col lg="8">
              <h3>
                To get all the information about Bill submitted and expenditure
                incurred so far{" "}
              </h3>
            </Col>
          </Row>

          <h1> HR Department</h1>
          <Row>
            <Col lg="1"> </Col>
            <Col lg="3">
              <h2>
                <a
                  href="/Requisition_form_final.pdf"
                  alt="alt text"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Requisition Form
                </a>
              </h2>
            </Col>
            <Col lg="8">
              <h3>Requisition form for requesting new post. </h3>
            </Col>
          </Row>
          <Row>
            <Col lg="1"> </Col>
            <Col lg="3">
              <h2>
                <a
                  href="https://docs.google.com/spreadsheets/d/1dHzkSAWcGWR4FjbgZ2wYFyL5P26kInlf/edit?usp=sharing&ouid=106730213705035931939&rtpof=true&sd=true"
                  alt="alt text"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Employee data Google Sheet 
                </a>
              </h2>
            </Col>
            <Col lg="8">
              <h3>Information of Employess working with 1to1guru. </h3>
            </Col>
          </Row>
          <Row>
            <Col lg="1"> </Col>
            <Col lg="3">
              <h2>
                <a
                  href="/2022-holidays.pdf"
                  alt="alt text"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Holidays
                </a>
              </h2>
            </Col>
            <Col lg="8">
              <h3>1to1guru Holidays List for the year 2022. </h3>
            </Col>
          </Row>
          {/* </table> */}
        </div>
      </div>
    </div>
  );
}

export default index;
