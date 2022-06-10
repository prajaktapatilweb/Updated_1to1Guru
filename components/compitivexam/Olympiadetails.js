import React from "react";
import { Container, Row, Col, Card } from "reactstrap";
import { cnt, stureg, weektest } from "../Link";
import Link from "next/link";

export default function Olympiadetails() {
  return (
    <div>
      <section className="section" style={{ backgroundColor: "#F5F5F5" }}>
        <Container className="px-4">
          <h2
            className="h1-responsive text-center font-weight-bold pb-3"
            style={{ color: "#172b4d" }}
          >
            SCIENCE OLYMPIAD FOUNDATION (SOF)
          </h2>
          <h5>
            <span
              className="font-weight-bold text-warning"
              style={{ fontSize: "20px" }}
            >
              About SCIENCE OLYMPIAD FOUNDATION (SOF) -
            </span>{" "}
            SOF is an Educational Organization popularizing academic competition
            and assisting development of competitive spirit among school
            children.
            <br></br>
            SOF was established by leading academicians, scientists and media
            personalities with the aim of promoting Science, Mathematics,
            Computer Education, English, Social Studies, General Knowledge and
            professional courses. Science Olympiad Foundation has been striving
            for close to 25 years to promote scientific attitude and temperament
            through innovative activities and use of IT in learning process that
            involve school students across the globe.
          </h5>

          <h5 className="text-black">
            <span
              className="font-weight-bold text-warning"
              style={{ fontSize: "20px" }}
            >
              SOF Mission -
            </span>
            The key to having a large, exclusive scientific and IT talent pool
            for the future is seeking out, identifying young geniuses and
            providing them with a unique competitive platform where they can
            prove themselves. To further this cause SOF endeavors to:
            <ul>
              <li>
                Identify and nurture future scientists, technologists, IT and
                other professional talent at school level.
              </li>
              <li>
                Encourage students&apos; participation in national/international
                competitions/ programs/events
              </li>
              <li>
                Instill a feeling of belonging to national and global students
                fraternity.
              </li>
              <li>
                Infuse a healthy competitive spirit through reward based
                Olympiads/competitive exams.
              </li>
              <li>
                Bring about a transformation in the classroom approach to
                subjects to make them more interactive, practical & innovative.
              </li>
              <li>
                Disseminate knowledge and information on the latest developments
                in science and technology and other subjects.
              </li>
              <li>
                Project SOF as a Centre of Excellence that could cater to
                different schooling institutions in the areas of methodical
                research, new educational tools, special publications and expert
                advice.
              </li>
            </ul>
          </h5>

          <h5>
            <span
              className="font-weight-bold text-warning"
              style={{ fontSize: "20px" }}
            >
              Please Note:
            </span>{" "}
            The official website for this exam is{" "}
            <Link href={`https://sofworld.org/`}>
              <a target="_blank" style={{ color: "blue" }}>
                www.sofworld.org
              </a>
            </Link>
          </h5>
        </Container>
      </section>
    </div>
  );
}
