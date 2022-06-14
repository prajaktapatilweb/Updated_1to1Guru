import React, { useEffect } from 'react'
//import { Link } from 'react-router-dom'
import { Container, Row, Col, Card } from "reactstrap";
import Navbar1 from "../../components/Navbar1";
import HeroInnerPages from '../../components/HeroInnerPages';
import Footer from '../../components/Footer';

import Aos from 'aos';

import Teammainret from '../../components/teamember/Teammainret';


export default function about() {
    // useEffect(() => {
    //     Aos.init({ duration: 2000 });

    // }, []);
    return (
        <div>

            <Navbar1 />

            <HeroInnerPages
                heading='Moto'
                textdetail=' Learn to Lead, Learn to Succeed'
            />
            <section className="section" style={{ backgroundColor: "#F5F5F5" }}>

                <Container className="">
                    <h2 className="h1-responsive text-center font-weight-bold pb-3" style={{ color: "#172b4d" }}>
                        About 1to1Guru
                    </h2>
                    <h5 className="text-justify">
                        1to1Guru, a subsidiary of AeduZEST Innovations Private Limited, is a venture by educators committed to enhancing the personalised learning experience of our students. The vision and design of 1to1Guru is to adapt proven and research based teaching-learning processes that are supported by leading academics, technocrats and mentors in India and abroad.</h5>
                    <h5 className=" text-justify "> Our dedicated team of experienced teachers strives to prepare students for their future roles in the fields of Science, Technology, Arts, and Commerce by nurturing critical thinking skills, communication, and perseverance to achieve their fullest potential. We believe in providing our students a safe and enabling space in the form of a one-to-one interaction platform with a personal mentor. </h5>
                    <h5 className=" text-justify">Our mentors have excellent pedagogical content knowledge and also an in-depth understanding of the students&apos; abilities and potentials. The unique design of our platform empowers students by providing them with the confidence to critically explore ideas, express opinions and clarify doubts. Our one-to-one teaching-learning approach has a deep-rooted vision to create a self-assured student in today’s demanding world.  </h5>
                </Container>
            </section>

            {/* <section className="section section-lg section-shaped  " style={{ backgroundImage: "linear-gradient(to right, rgba(58,37,109,.9), rgba(23,43,77,1))" }}> */}
            <section className="section events1 ">

                {/* <section className="section" style={{ backgroundImage: "linear-gradient(to right, rgba(58,37,109,.9), rgba(23,43,77,1))" }}> */}

                <Container>
                    <h3 className="h1-responsive text-center font-weight-bold text-udfc-orange pb-3">
                        OUR VISION</h3>


                    <Row className="align-items-center">

                        {/* <Col lg="5" className='' >

                            <img src="../studyart.jpg" width="100%" className='bord ' ></img>

                        </Col> */}

                        <Col lg="12" style={{ color: "#F7F7F7", }} >
                            {/* Inputs */}
                            <h5 className="text-justify  " >
                                1to1Guru envisions preparing and motivating our students for a rapidly changing and ever-evolving world by nurturing students&apos; critical thinking skills, communication, and perseverance. We understand the importance of personalised learning for student&apos;s overall growth and are fully committed to students&apos; career readiness by empowering them to meet current and future challenges.</h5>
                            <h5 className="text-justify  ">The ratio of the number of students to teachers is often used to adjudge the quality of the teaching-learning process. Research indicates that the smaller this ratio, the better is the learning. But even in the best institutions, there are crowded classrooms in which one teacher is teaching several dozen students, sometimes even hundreds of students! How can any teacher, however good, provide personalised attention to each student in such a large class? To overcome this, with the support of state-of-art technology, we have designed an individual digital classroom for each student: One Guru One Shishya (One Mentor One student)</h5>
                            <h5 className="text-justify  "> In our classroom, the ratio of teachers to students is 1-to-1; hence we maximise the student and mentor interaction and in a true sense there is a real personalised learning experience. Our dedicated mentors are subject matter experts who use proven teaching strategies, supported by state-of-art technology, to help the students bring out the best in them.</h5>
                        </Col>

                    </Row>

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
                        <polygon className="fill-white" points="2560 0 2560 100 0 100" />
                    </svg>
                </div>
            </section>
            <section>
                <section className='section'>

                    <Container>
                        <h2 className=" text-center font-weight-bold pb-3" >OUR MISSION</h2>
                        <h5 className="text-justify">
                            1to1Guru is committed to recognizing the importance of communication and encouraging a personal dialogue between students and mentors in order to promote healthy, intellectual, scholarly, social and holistic growth of our students.</h5>
                        <h5 className="text-justify"> We aim to provide a safe and supportive learning environment for our students to explore ideas and resolve their doubts in a friendly atmosphere, developing a positive self-belief.</h5>
                        <h5 className="text-justify">We recruit the best teachers, educators, and mentors to provide the finest opportunities to our students to critically think, learn and venture to achieve success in their future endeavors.</h5>
                    </Container></section>





            </section>
            <section className="section " style={{ backgroundImage: "linear-gradient(to right, rgba(58,37,109,.9), rgba(23,43,77,1))" }}>
                <Container>
                    <div className="">
                        <h2 className="text-center text-udfc-orange pb-3">Our Expert Team</h2>
                        <p className="text-white text-center pb-5">
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry
                        </p><br></br>

                    </div>
                </Container></section>
            <section className='section'><Container className=" mt--200">
                <Teammainret />
            </Container>
                {/* SVG separator */}
                {/* <div className="separator separator-top separator-skew zindex-100">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                        version="1.1"
                        viewBox="0 0 2560 100"
                        x="0"
                        y="0"
                    >
                        <polygon className="fill-white" points="2560 100 2560 0 100 0" />
                    </svg>
                </div> */}
            </section>


            {/* <ProfileCEO /> */}
            <section className="section " style={{ backgroundColor: "#F5F5F5" }}>
                <Container className="mb-5">

                    <Row className="m-2 mb-5 ">
                        <Col>
                            <h2 className=" text-center font-weight-bold p-4" >Message from the CEO</h2>
                        </Col>

                        <Col lg="12" className="">


                            <h4 className="text-justify py-3"> Dear Students and Parents, hello and Welcome to 1to1 Guru! </h4>
                            <h4 className=" text-justify "> At 1to1 Guru, we understand the importance of encouraging dialogue among students and teachers in this ever-evolving online world. This has led us to design a one-of-a-kind online platform for personalized learning to promote our students&apos; intellectual, scholarly, and social growth. In our approach, we pair one student with one mentor to give the best personal engagement for learning and self-development. </h4>
                            <h4 className=" text-justify">We use state-of-art technology for facilitating this personalized learning experience based on the unique needs of our students. All our mentors are highly qualified, verified, and trusted so that they provide a safe, personalized learning experience. Being the only student in the class, the entire focus of the mentor is on the student. Due to one-to-one engagement, the teachers know the students&apos; ability and potential and plan the teaching-learning sequences accordingly.</h4>
                            <h4 className=" text-justify "> Through our platform, students learn at their own pace. We closely monitor our students&apos; progress, and when required, the topics are repeated to make sure that no doubts or queries remain unanswered. Based on student learning analytics, our mentors and staff regularly interact and discuss with parents regarding student&apos;s progress. </h4>
                            <h4 className=" text-justify"> At One-to-One Guru, we are fully committed to students&apos; career readiness by empowering them to meet current and future challenges via deep personalized learning experiences.</h4>

                            <hr></hr>

                            <div className="user-pic">
                                <img
                                    src="../Mubarak-Mujawar.jpeg"
                                    className="img-fluid"
                                    alt="User Pic"
                                />

                            </div>
                            <div className='text-center'>

                                <h3>
                                    Dr. Mubarak A Mujawar{" "}
                                    <span className="font-weight-light"></span>
                                </h3>
                                <div className="h5 font-weight-500">
                                    <i className="ni location_pin mr-2 " />
                                    CEO, 1to1Guru
                                </div>
                                <div className="h5 mt-3">
                                    <i className="ni business_briefcase-24 mr-2" />
                                    PhD, Dublin City university, Dublin, Ireland
                                </div>
                                <div className="h5">
                                    <i className="ni  education_hat mr-2" />
                                    Former Professor, Florida International University, Miami,
                                    USA
                                </div>
                            </div>
                        </Col>
                    </Row>

                </Container>
            </section>

            <Footer />
        </div >
    )
}
