import React from 'react'
import { Button, Card, Container, Row, Col } from "reactstrap";
import HeroInnerPages from '../HeroInnerPages';
import { mubainfo } from './Teamconstants';
import { mubaresearchInterest } from './Teamconstants';
import { mubateachingSubject } from './Teamconstants';
import { mubapublication } from './Teamconstants';

// core components

export default function Demodetails(props) {

    return (

        < div >
            <main className="profile-page " >
                <HeroInnerPages className="section-profile-cover section-shaped my-0" />
                <section className="section">
                    <Container>
                        <Card className="card-profile shadow ">
                            <div className="px-4">
                                <Row className="justify-content-center">
                                    <Col className="order-lg-2" lg="3">
                                        <div className="card-profile-image">
                                            {/* {props.img} */}
                                            {/* <a href="#pablo" onClick={e => e.preventDefault()}> */}
                                            <img
                                                alt="..."
                                                className="rounded-circle"
                                                src="/Mubarak-Mujawar.jpeg"
                                                style={{ border: "2px solid white" }}
                                            // src={require("../../assets/img/theme/team-4-800x800.jpg").default}
                                            />
                                            {/* </a> */}
                                        </div>
                                    </Col>
                                    <Col
                                        className="order-lg-3 text-lg-right align-self-lg-center"
                                        lg="4"
                                    >
                                        <div className="card-profile-actions py-4 mt-lg-0">
                                            <Button
                                                className="mr-4"
                                                color="info"
                                                href="#pablo"
                                                onClick={e => e.preventDefault()}
                                                size="sm"
                                            >
                                                kjjkl
                                                {props.facebook}
                                            </Button>
                                            <Button
                                                className="float-right"
                                                color="default"
                                                href="#pablo"
                                                onClick={e => e.preventDefault()}
                                                size="sm"
                                            >
                                                {props.linkedin}
                                            </Button>
                                        </div>
                                    </Col>
                                    <Col className="order-lg-1" lg="4">
                                        <div className="card-profile-stats d-flex justify-content-center">
                                            <div>
                                                <span className="heading">22</span>
                                                <span className="description">Publications</span>
                                            </div>
                                            <div>
                                                <span className="heading">10</span>
                                                <span className="description">Phd Students</span>
                                            </div>
                                            <div>
                                                <span className="heading">89</span>
                                                <span className="description">Comments</span>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                                <div className="text-center mt-5 font-weight-500">
                                    <h3 style={{ color: "#20247b" }}>
                                        Dr. Mubarak A Mujawar


                                        {/* <span className="font-weight-light">, 27</span> */}
                                    </h3>
                                    <div className="" style={{ color: "#f5365c" }}>
                                        {/* <i className="ni location_pin mr-2" /> */}
                                        Founder Director and CEO, 1to1 Guru
                                    </div>
                                    <div className="h6 mt-2">

                                        PHD In Physics
                                    </div>
                                    <div>

                                        University of Computer Science Pune
                                    </div>
                                </div>
                                <div className="mt-5 py-5 border-top">
                                    <Row className='mx-5 text-justify' >
                                        <Col>
                                            <p>
                                                {mubainfo}
                                                {/* {MubarakData.info} */}
                                            </p>
                                            <h3 className='display-5 text-center text-info'>Current Research Interests</h3>
                                            <p>
                                                <ul>
                                                    {mubaresearchInterest.map((name, i) => (
                                                        <li key={i}>{name}</li>
                                                    ))}</ul>


                                                <h3 className='display-5 text-center' style={{ color: "#fb6340" }}>Recent Teaching</h3>
                                                <ul>
                                                    {mubateachingSubject.map((name, i) => (
                                                        <li key={i}>{name}</li>
                                                    ))}</ul>


                                                <h3 className='display-5 text-center text-info'>Recent Publications</h3>
                                                <ol type='1'>
                                                    {mubapublication.map((name, i) => (
                                                        <li key={i}>{name}</li>
                                                    ))}</ol>
                                                {/* {mubapublication.map((name) => (
                                                        <li>{name}</li>
                                                    ))}</ol> */}


                                            </p>
                                            {/* <a href="#pablo" onClick={e => e.preventDefault()}>
                                                Show more
                                            </a> */}
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Card>
                    </Container>
                </section>
            </main>


        </div >
    )
}
