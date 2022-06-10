import React from "react";
import { Container, Row, Col, Card } from "reactstrap";
import { cnt, stureg, weektest } from "./Link";
import Link from "next/link";

export default function Cetdetails() {
  return (
    <div>
      <section className="section" style={{ backgroundColor: "#F5F5F5" }}>
        <Container className="px-4">
          <h2
            className="h1-responsive text-center font-weight-bold pb-3"
            style={{ color: "#172b4d" }}
          >
            All About MHT-CET
          </h2>
          <h5>
            <span
              className="font-weight-bold text-warning"
              style={{ fontSize: "20px" }}
            >
              Maharashtra Common Entrance Test (MHT-CET or MHCET) -{" "}
            </span>{" "}
            is a common state level entrance exam conducted by the State Common
            Entrance Test Cell (SCET), Government of Maharashtra every year for
            admission to undergraduate engineering, pharmacy and agriculture
            courses such as B.Tech / B.E, Pharma D and B. Pharma. offered at
            colleges in Maharashtra. The SCET, Maharashtra will release the call
            for application to MHT CET 2022 examination on their official
            website:{" "}
            <a href="https://cetcell.mahacet.org/" style={{ color: "blue" }}>
              https://cetcell.mahacet.org/
            </a>
            . The examination is conducted at various centers across the
            Maharashtra as well as outside Maharashtra State.
            <br></br> The MHT-CET is conducted separately for PCM and PCB
            groups. The exam comprises three papers.
            <ul>
              <li> Paper 1: Mathematics</li>
              <li>Paper 2: Physics and Chemistry</li>
              <li> Paper 3: Zoology and Botany.</li>
            </ul>
            Questions in the MHT-CET examination are of MCQ type and the
            duration is 90 minutes for each paper.
            {/* MHT-CET is a state-level test conducted by State Common Entrance
            Test Cell, Mumbai for admission to B.Tech/B.E, B.Pharm and Pharm D
            in the state of Maharashtra. The State Common Entrance Test Cell
            (SCETC), Maharashtra will release the MHT CET 2022 application form
            at the official website - cetcell.mahacet.org. Candidates must check
            the eligibility criteria of MHT CET 2022 before filling the
            application form.{" "} */}
          </h5>
          <h5>
            <span
              className="font-weight-bold text-warning"
              style={{ fontSize: "20px" }}
            >
              MHT-CET Syllabus 2022 -
            </span>{" "}
            MHT CET exam syllabus 2022 consists of the 11th and 12th standard
            Maharashtra State board syllabus. MHT CET 2022 syllabus includes 20%
            of questions from the 11th standard and 80% of questions from the
            12th standard syllabus.
          </h5>

          <h5 className="text-black">
            <span
              className="font-weight-bold text-warning"
              style={{ fontSize: "20px" }}
            >
              {" "}
              Get Ready for MHT-CET 2022 with CRASH COURSE -
            </span>{" "}
            Brighten your preparation for MHT-CET 2022 with 1to1Guru! We provide
            LIVE online coaching classes for all subjects of MHT-CET in bundle
            or individual subjects. What’s more important is that we provide
            24*7 Faculty Support & Much more. Register Now for spectacular
            success in MHT-CET 2022.
            <Link href={stureg}>
              <a target="_blank" style={{ color: "blue" }}>
                Register Now
              </a>
            </Link>
          </h5>

          <h5 className="text-black pb-2">
            <span
              className="font-weight-bold text-warning"
              style={{ fontSize: "20px" }}
            >
              Examine your preparation with MOCK TEST SERIES for MHT-CET 2022 -
            </span>{" "}
            We offer a package of online Test Series for preparation of
            MHT-CET-22. Analyze your preparation and plan strategy for success
            in MHT-CET 2022. We provide detail analysis of your attempt at the
            end of every test to plan your time and approach to secure a better
            score.<br></br> Take a free MHT-CET Mock test with solutions and
            performance report. Start Now
            <Link href={weektest}>
              <a target="_blank" style={{ color: "blue" }}>
                Start Now
              </a>
            </Link>
          </h5>
        </Container>
      </section>
    </div>
  );
}
