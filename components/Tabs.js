import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
import { Accordion } from "react-bootstrap";
// import 'bootstrap/dist/css/bootstrap.min.css';

// reactstrap components
import {
  Card,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Row,
  Col,
  Container,
} from "reactstrap";

class TabsSection extends React.Component {
  state = {
    iconTabs: 1,
    plainTabs: 1,
  };
  toggleNavs = (e, state, index) => {
    e.preventDefault();
    this.setState({
      [state]: index,
    });
  };
  render() {
    return (
      <>
        <section className="section section-lg section-shaped ">
          <div className="shape shape-style-u1 shape-dark">
            <span className="span-150" />
            <span className="span-50" />
            <span className="span-50" />
            <span className="span-75" />
            <span className="span-200" />
            <span className="span-75" />
            <span className="span-50" />
            <span className="span-100" />
            <span className="span-50" />
            <span className="span-100" />
          </div>
          <Container>
            <h3 className="display-3 text-udfc-orange text-center">
              NEET Details
            </h3>
            <Row className="justify-content-center">
              <Col lg="12">
                {/* Tabs with icons */}
                {/* <div className="mb-3">
                <small className="text-uppercase font-weight-bold">
                  With icons
                </small>
              </div> */}
                <div className="nav-wrapper">
                  <Nav
                    className="nav-fill flex-column flex-md-row  "
                    id="tabs-icons-text"
                    pills
                    role="tablist"
                  >
                    <NavItem>
                      <NavLink
                        aria-selected={this.state.iconTabs === 1}
                        className={classnames(
                          "mb-sm-3 mb-md-0 bg-gradient-warning",
                          {
                            active: this.state.iconTabs === 1,
                          }
                        )}
                        onClick={(e) => this.toggleNavs(e, "iconTabs", 1)}
                        href="#pablo"
                        role="tab"
                        style={{ fontSize: "18px" }}
                      >
                        <i className="ni ni-cloud-upload-96 mr-2" />
                        What is NEET?
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        aria-selected={this.state.iconTabs === 2}
                        className={classnames("mb-sm-3 mb-md-0", {
                          active: this.state.iconTabs === 2,
                        })}
                        onClick={(e) => this.toggleNavs(e, "iconTabs", 2)}
                        href="#pablo"
                        role="tab"
                      >
                        <i className="ni ni-bell-55 mr-2" />
                        Syllabus
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        aria-selected={this.state.iconTabs === 3}
                        className={classnames("mb-sm-3 mb-md-0", {
                          active: this.state.iconTabs === 3,
                        })}
                        onClick={(e) => this.toggleNavs(e, "iconTabs", 3)}
                        href="#pablo"
                        role="tab"
                      >
                        <i className="ni ni-calendar-grid-58 mr-2" />
                        Exam Details
                      </NavLink>
                    </NavItem>
                  </Nav>
                </div>
                <Card className="shadow">
                  <CardBody>
                    <TabContent activeTab={"iconTabs" + this.state.iconTabs}>
                      <TabPane tabId="iconTabs1">
                        <p className="description">
                          NEET or National Entrance cum Eligibility Test
                          conducted annually by the NTA (National Testing
                          Agency) is a medical entrance test carried out across
                          the country. A successful attempt at NEET enables
                          students to avail a seat in any of the medical
                          programmes such as MBBS, BDS and various AYUSH courses
                          offered in both government and private institutes of
                          India. Following the “One nation One test” policy that
                          was passed, NEET has emerged as the one-tier national
                          level entrance test scrapping all the state entrance
                          tests including AIIMS and JIPMER test. NEET 2021 took
                          place on 12th September 2021, registrations for the
                          same commenced from 13th July 2021.
                        </p>
                        <p className="description">
                          The regulatory body for NEET, the NTA supervises the
                          smooth conduction of this pen and paper test (offline
                          test), which witnesses the participation of nearly
                          15-16 lakh students. NEET assesses students’ knowledge
                          through objective-question based (MCQ) questionnaire.
                          NEET 2020 was conducted on 13th September after much
                          delay which saw the registration of nearly 15.97 lakh
                          candidates. NEET 2020 Admit cards were released on the
                          official website on 26th August 2020.
                        </p>
                      </TabPane>
                      <TabPane tabId="iconTabs2">
                        <p className="description">
                          Cosby sweater eu banh mi, qui irure terry richardson
                          ex squid. Aliquip placeat salvia cillum iphone. Seitan
                          aliquip quis cardigan american apparel, butcher
                          voluptate nisi qui.
                        </p>
                      </TabPane>
                      <TabPane tabId="iconTabs3">
                        <p className="description">
                          Raw denim you probably havent heard of them jean
                          shorts Austin. Nesciunt tofu stumptown aliqua, retro
                          synth master cleanse. Mustache cliche tempor,
                          williamsburg carles vegan helvetica. Reprehenderit
                          butcher retro keffiyeh dreamcatcher synth.
                        </p>
                      </TabPane>
                    </TabContent>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Accordion defaultActiveKey="0" >
              <Accordion.Item eventKey="0">
                <Accordion.Header>Accordion Item #1</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <br/>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Accordion Item #2</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Container>
        </section>
      </>
    );
  }
}

export default TabsSection;
