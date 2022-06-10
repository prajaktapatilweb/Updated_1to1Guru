import React from 'react'
import { Button, Card, Container, Row, Col } from "reactstrap";
import HeroInnerPages from '../HeroInnerPages';

// core components

export default function Expertdetails(props) {
    const expertdata = props.data

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

                                            <img
                                                alt="..."
                                                className="rounded-circle"
                                                src={expertdata.photo}
                                                style={{ border: "2px solid white" }}
                                            // src={require("../../assets/img/theme/team-4-800x800.jpg").default}
                                            />

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
                                                Facebook
                                            </Button>
                                            <Button
                                                className="float-right"
                                                color="default"
                                                href="#pablo"
                                                onClick={e => e.preventDefault()}
                                                size="sm"
                                            >
                                                Linkedin
                                            </Button>
                                        </div>
                                    </Col>
                                    <Col className="order-lg-1" lg="4">
                                        <div className="card-profile-stats d-flex justify-content-center">
                                            <div>
                                                <span className="heading">{expertdata.numVariable1}</span>
                                                <span className="description">{expertdata.nameVariable1}</span>
                                            </div>
                                            <div>
                                                <span className="heading">{expertdata.numVariable2}</span>
                                                <span className="description">{expertdata.nameVariable2}</span>
                                            </div>
                                            <div>
                                                <span className="heading">{expertdata.numVariable3}</span>
                                                <span className="description">{expertdata.nameVariable3}</span>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                                <div className="text-center mt-5 font-weight-500">
                                    <h3 style={{ color: "#20247b" }}>
                                        {expertdata.name}

                                        {/* <span className="font-weight-light">, 27</span> */}
                                    </h3>
                                    <div className="" style={{ color: "#f5365c" }}>
                                        {/* <i className="ni location_pin mr-2" /> */}
                                        {expertdata.position}
                                    </div>
                                    <div className="h6 mt-2">

                                        {expertdata.education[0]}
                                    </div>
                                    <div>
                                        {expertdata.education[1]}


                                    </div>
                                </div>
                                <div className="mt-5 py-5 border-top">
                                    <Row className='mx-5 text-justify' >
                                        <Col>
                                            <p>
                                                {props.data.info}
                                                {/* {MubarakData.info} */}
                                            </p>
                                            <h3 className='display-5 text-center text-info'>Current Research Interests</h3>
                                            <p>
                                                <ul>
                                                    {props.data.researchInterest.map((name, i) => (
                                                        <li key={i}>{name}</li>
                                                    ))}</ul>


                                                <h3 className='display-5 text-center' style={{ color: "#fb6340" }}>Recent Teaching Subjects</h3>
                                                <ul>
                                                    {props.data.teachingSubject.map((name, i) => (
                                                        <li key={i}>{name}</li>
                                                    ))}</ul>


                                                <h3 className='display-5 text-center text-info'>Recent Publications</h3>
                                                <ol type='1'>
                                                    {props.data.publication.map((name, i) => (
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
