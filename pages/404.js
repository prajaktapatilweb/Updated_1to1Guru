import React from "react";
import Footer from "../components/Footer";
import HeroInnerPages from "../components/HeroInnerPages";
import Navbar1 from "../components/Navbar1";
import { Button, Container } from "reactstrap";
import Link from "next/link";

export default function error() {
  return (
    <div>
      <Navbar1 />
      <HeroInnerPages
        heading="404"
        textdetail=" This page could not be found."
      />
      <br />
      <br />
      <Container>
        <h4 className="text-center">
          The requested page does not exist. Please go to home page
        </h4>
        <div className="text-center">
          <Button className="btn-icon " color="default" type="button">
            <Link href="/">
              <a>Return to Homepage</a>
            </Link>
          </Button>
        </div>
        <br />
        <br />
      </Container>
      <Footer />
    </div>
  );
}
