import React from "react";
import { Container, Row, Col, Card } from "reactstrap";
import { cnt, stureg, weektest } from "../Link";
import Link from "next/link";

export default function Homidetails() {
  return (
    <div>
      <section className="section" style={{ backgroundColor: "#F5F5F5" }}>
        <Container className="px-4">
          <h2
            className="h1-responsive text-center font-weight-bold pb-3"
            style={{ color: "#172b4d" }}
          >
            Dr. Homi Bhabha Balvaidnyanik Competition
          </h2>
          <h5>
            <span
              className="font-weight-bold text-warning"
              style={{ fontSize: "20px" }}
            >
              About Dr. Homi Bhabha Balvaidnyanik Competition -
            </span>{" "}
            Dr. Homi Bhabha Balvaidnyanik Competition is conducted by Greater
            Bombay Science Teachers&apos; Association since 1981. This unique four
            stage competition aims at arousing curiosity, problem solving
            attitude along with development of precision in observational and
            motor skills in young scientists. Through the competition GBSTA also
            aims at sensitizing students towards their immediate environment and
            dare to take rational initiatives whenever needed.
          </h5>
          <h5>
            <span
              className="font-weight-bold text-warning"
              style={{ fontSize: "20px" }}
            >
              Who can participate: -
            </span>
            Students studying only in 6th std. and 9th std.
          </h5>
          <h5>
            <span
              className="font-weight-bold text-warning"
              style={{ fontSize: "20px" }}
            >
              Medium :-
            </span>{" "}
            English and Marathi ( Note :- Students from Semi-English section can
            go for English or Marathi medium as per their comfort level.
            Selected medium will remain the same for ALL further stages of the
            competition. NO CHANGE IN THE SELECTED MEDIUM IS PERMITTED BY
            GBSTA).
          </h5>
          <h5>
            <span
              className="font-weight-bold text-warning"
              style={{ fontSize: "20px" }}
            >
              Boards :-
            </span>{" "}
            All Boards ( Maharashtra SSC / CBSE / ICSE / IB / OTHER STATE boards
            )
          </h5>
          <h5>
            <span
              className="font-weight-bold text-warning"
              style={{ fontSize: "20px" }}
            >
              Regions :-
            </span>
            <ul>
              <li>MUMBAI : Mumbai and Mumbai Suburban.</li>
              <li>THANE : Thane, Palghar, Raigad.</li>
              <li>PUNE : Pune, Solapur, Ahmadnagar.</li>
              <li>NASHIK : Nashik, Dhule, Jalgaon, Nandurbar.</li>
              <li>
                KOLHAPUR : Kolhapur, Satara, Sangli, Ratnagiri & Sindhudurg.
              </li>
              <li>
                AURANGABAD : Aurangabad, Jalna, Beed, Latur, Osmanabad, Nanded,
                Hingoli, Parbhani.
              </li>
              <li>
                VIDHARBH : Akola, Buldhana, Amravati, Washim, Yavatmal, Wardha,
                Nagpur, Bhandara, Gondia, Gadchiroli, Chandrapur
              </li>
              <li>OTHER THAN MAHARASHTRA : All states in India.</li>
            </ul>
          </h5>
          <h5>
            <span
              className="font-weight-bold text-warning"
              style={{ fontSize: "20px" }}
            >
              Please Note:
            </span>{" "}
            The Homi Bhabha Balvaidnyanik Exam is conducted every year by the
            Mumbai Science Teachers Association. The official website for this
            exam is{" "}
            <Link href={`https://msta.in/`}>
              <a target="_blank" style={{ color: "blue" }}>
                www.msta.in.
              </a>
            </Link>
          </h5>
        </Container>
      </section>
    </div>
  );
}
