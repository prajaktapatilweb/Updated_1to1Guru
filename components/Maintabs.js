import React, { useState } from "react";
import classnames from "classnames";
// reactstrap components
import {
  Card,CardBody,NavItem,NavLink,Nav,TabContent,TabPane,Row,Col,} from "reactstrap";
import { Container } from "react-bootstrap";

export default function Maintabs(props) {
  const [iconTabs, setIconTabs] = useState(1);

  const toggleNavs = (e, index) => {
    e.preventDefault();
    setIconTabs(index);
  };
  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Col>
            <div className="nav-wrapper">
              <Nav
                className="nav-fill"
                // className="nav-fill flex-column flex-md-row"
                id="tabs-icons-text"
                pills
                role="tablist"
              >
                <NavItem>
                  <NavLink
                    aria-selected={iconTabs === 1}
                    className={classnames("mb-sm-3 mb-md-0", {
                      active: iconTabs === 1,
                    })}
                    onClick={(e) => toggleNavs(e, 1)}
                    href="#pablo"
                    role="tab"
                  >
                    <i className="ni ni-cloud-upload-96 mr-2" />
                    {props.subject1}
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    aria-selected={iconTabs === 2}
                    className={classnames("mb-sm-3 mb-md-0", {
                      active: iconTabs === 2,
                    })}
                    onClick={(e) => toggleNavs(e, 2)}
                    href="#pablo"
                    role="tab"
                  >
                    <i className="ni ni-bell-55 mr-2" />
                    {props.subject2}
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    aria-selected={iconTabs === 3}
                    className={classnames("mb-sm-3 mb-md-0", {
                      active: iconTabs === 3,
                    })}
                    onClick={(e) => toggleNavs(e, 3)}
                    href="#pablo"
                    role="tab"
                  >
                    <i className="ni ni-calendar-grid-58 mr-2" />
                    {props.subject3}
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
            <Card className="shadow">
              <CardBody>
                <TabContent activeTab={"iconTabs" + iconTabs}>
                  <TabPane tabId="iconTabs1">{props.info}</TabPane>
                  <TabPane tabId="iconTabs2">{props.info1}</TabPane>
                  <TabPane tabId="iconTabs3">{props.info2}</TabPane>
                </TabContent>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

// export default Trytab;
