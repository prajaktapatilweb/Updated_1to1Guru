import React, {useEffect} from "react";
// import Navbar1 from "./Navbar1";
// import { MDBRow, MDBCol, MDBCard, MDBCardBody } from "mdbreact";
import { Container } from "reactstrap";
import {Row, Col} from 'reactstrap';
import Aos from 'aos';
//import 'mdbreact/dist/css/mdb-free.css';
import T121035 from '../public/teachers/121035.jpg'
import T121036 from '../public/teachers/121036.jpeg'
import T121037 from '../public/teachers/121037.jpg'
import T121041 from '../public/teachers/121041.jpg'

import Image from 'next/image'

export default function Ourteam() {
  useEffect(() => {
    Aos.init({duration:2000});
 
   }, []);
  return (
    <div>
        <Container data-aos="fade-up-right">
      {/* <Navbar1 />        */}
      <div className="my-5 px-5 pb-1 text-center">
        <>
          <h2 className="h1-responsive font-weight-bold my-5">
            Our amazing Teachers
          </h2>
          <h5 className="grey-text w-responsive mx-auto mb-3">
          At 1to1 Guru, we have dedicated teams of teachers, educators, and mentors who strives to prepare students for their future roles in the fields of Science, Technology, Arts, and Commerce by nurturing critical thinking skills, communication, and perseverance to achieve their fullest potential. </h5>
           <h5 className="display-4 text-udfc-orange pb-3"> Top Teachers of the Month </h5>
      
          <Row>
            <Col lg="3" md="6" className="mb-lg-0 mb-5">
              {/* <MDBAvatar
                tag="img"
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg"
                className="rounded-circle z-depth-1 img-fluid"
                alt="Sample avatar"
              /> */}
              <Image
                alt="..."
                className="rounded-circle"
                src={T121037}
                // {require("../assets/img/teachers/121037.jpg").default} 
              />
              <h5 className="font-weight-bold mt-4 mb-3">Dr. Priyank Sharad Nimje</h5>
              <p className=" blue-text">M.Sc.(Biotechnology) Ph.D.(Ecology) </p>
              {/* <p className="grey-text">
              Aim to be associated with a progressive organisation that provides me scope to update my
knowledge and skills in accordance with latest trends and be a part of team that dynamically work
towards betterment of society
              </p> */}
              {/* <ul className="list-unstyled mb-0">
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="facebook-f" className="blue-text" />
                </a>
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="twitter" className="blue-text" />
                </a>
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="instagram" className="blue-text" />
                </a>
              </ul> */}
            </Col>

            <Col lg="3" md="6" className="mb-lg-0 mb-5">
              {/* <MDBAvatar
                tag="img"
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(3).jpg"
                className="rounded-circle z-depth-1 img-fluid"
                alt="Sample avatar"
              /> */}
              <Image
                alt="..."
                className="rounded-circle"
                src={T121036}
                // {require("../assets/img/teachers/121036.jpeg").default}
                // src={
                //   require("../../src/assets/img/Mubarak-Mujawar.jpeg").default
                // }
              />
              <h5 className="font-weight-bold mt-4 mb-3">Prof. Bhanumati Sunil Patil</h5>
              <p className="blue-text">M.Sc.(Chem), MBA </p>
              {/* <p className="grey-text">
              Make use of my teaching experience for the benefit of wider student community and add 
additional dimension to it through online teaching platforms.

              </p> */}
              {/* <ul className="list-unstyled mb-0">
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="facebook-f" className="blue-text" />
                </a>
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="instagram" className="blue-text" />
                </a>
              </ul> */}
            </Col>

            <Col lg="3" md="6" className="mb-lg-0 mb-5">
              {/* <MDBAvatar
                tag="img"
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
                className="rounded-circle z-depth-1 img-fluid"
                alt="Sample avatar"
              /> */}
              <Image
                alt="..."
                className="rounded-circle"
                src={T121041}
                // {require("../assets/img/teachers/121041.jpg").default}
              />
              <h5 className="font-weight-bold mt-4 mb-3">Prof. Shital Satpute</h5>
              <p className="blue-text">M.Sc. (Phys)</p>
              {/* <p className="grey-text">
              To be a part of progressive institute that gives me an 
opportunity to enhance my knowledge & teaching skills. 
              </p> */}
              {/* <ul className="list-unstyled mb-0">
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="facebook-f" className="blue-text" />
                </a>
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="instagram" className="blue-text" />
                </a>
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="dribbble" className="blue-text" />
                </a>
              </ul> */}
            </Col>

            <Col lg="3" md="6" className="mb-lg-0 mb-5">
              {/* <MDBAvatar
                tag="img"
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(32).jpg"
                className="rounded-circle z-depth-1 img-fluid"
                alt="Sample avatar"
              /> */}
              <Image
                alt="..."
                className="rounded-circle"
                src={T121035}
                // {require("../assets/img/teachers/121035.jpg").default}
              />
              <h5 className="font-weight-bold mt-4 mb-3">Prof. Manali Mehendale</h5>
              <p className="blue-text">M.Sc.(Chem), B.Ed.</p>
              {/* <p className="grey-text">
                Teaching experience of 7 Yrs at college level.
              </p> */}
              {/* <ul className="list-unstyled mb-0">
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="facebook-f" className="blue-text" />
                </a>
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="github" className="blue-text" />
                </a>
              </ul> */}
            </Col>
          </Row>
        </>
      </div>
      </Container>
    </div>
  );
}
