import React from 'react'
import { Container, Row, Col, Card, CardBody, Button } from "reactstrap";
import Accordians from "./Accordians";
import Jeemainbook from './Jeemainbook';
import Jeemainchemtb from './Jeemainchemtb';
import Jeemainmathtb from './Jeemainmathtb';
import Jeemainphytb from './Jeemainphytb';
import Neetbooks from "./Neetbooks";


export default function Jeeaccordians() {
    return (
        <div>
             <section className="section" style={{backgroundImage: "linear-gradient(to right, rgba(58,37,109,.9), rgba(23,43,77,1))"}}>
     <Container>
     <h3 className="h1-responsive text-center font-weight-bold text-udfc-orange pb-3">
     JEE Mains Syllabus 2022 - Mathematics, Physics, Chemistry & Other Details </h3>
        <Row>
              <Accordians
                header={<span className="font-weight-bold" style={{fontSize:"1.25rem"}}> JEE Main Mathematics Syllabus </span>}
                body={<Jeemainmathtb /> }
              />
              </Row>
              <Row>
              <Accordians
                header={<span className="font-weight-bold" style={{fontSize:" 1.25rem"}}>JEE Main Physics Syllabus </span>}
                body={<Jeemainphytb />}
              />
            </Row>
            <Row>
              <Accordians
                header={<span className="font-weight-bold" style={{fontSize:" 1.25rem"}}> JEE Main Chemistry Syllabus  </span>}
                body={<Jeemainchemtb />}
              />
            </Row>
            <Row>
              <Accordians
                header={<span className="font-weight-bold" style={{fontSize:" 1.25rem"}}> JEE Main Books for preparation </span>}
                body={<Jeemainbook />}
              />
            </Row>
            {/* <div className="text-center py-4">
                        <Button className="btn-1 ml-1 " color="success" type="button" ><Link to='/Aboutus'> Learn More </Link> </Button>
                    </div> */}
          </Container>
          {/* SVG separator */}
        </section>
        </div>
    )
}
