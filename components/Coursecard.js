import React from "react";
import { Container, Row, Col, Card, CardBody, Button } from "reactstrap";
import Image from "next/image";
import Link from "next/link";
// import tutor1 from "../public/subjects/tutor1.jpg";
// import abc from "../public/subjects/tutor1.jpg";

export default function Coursecard(props) {
  console.log("Course", props.imgsrc1);
  return (
    <>
      {/* <Col lg="3" className="py-3"> */}
        <Card
          className="card-lift--hover shadow border-1"
          style={{ borderRadius: "0px" }}
        >
          <Image
            src={props.imgsrc1}
            width={200}
            height={200}
            layout="responsive"
            alt=""
          />
          {/* <Image src= {props.imgname} width={100} height={200} alt="" /> */}
          <Button
            className="btn-icon btn-3 bg-gradient-cyan"
            type="button"
            style={{ width: "100%", border: "0px" }}
          >
            <span
              className="btn-inner--text text-black"
              style={{ fontSize: "16px" }}
            >
              {props.course}
            </span>
          </Button>
          <CardBody>
            <h5 className=" text-black pb-2">{props.details}</h5>
            <div className="text-center py-2">
              <Button className="btn-danger">
                <Link href={`${props.cardlink}`}>
                  <a>Know More</a>
                </Link>
              </Button>
            </div>
          </CardBody>
        </Card>
      {/* </Col> */}
    </>
  );
}
