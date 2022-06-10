import React from "react";
import { Container } from "reactstrap";
import Footer from "../components/Footer";
import HeroInnerPages from "../components/HeroInnerPages";
import Navbar1 from "../components/Navbar1";

export default function gterm() {
  return (
    <div>
      <Navbar1 />
      <HeroInnerPages heading="Terms and Conditions for the Employee" />
        <Container className="p-5">
      <ol type="A">
        <li>
          <h3>General</h3>
          <ol type="1">
            <li>
              I will have to complete a induction program (online) immediately
              after you accept the offer.
            </li>
            <li>
              A performance review will be conducted after completion of first
              months of continuous service, which may be used for the
              increments, if any.
            </li>
            <li>
              I will have to update everyday to the Marketing team and maintain
              a Excel sheet for the tasks you will be performing.
            </li>
            <li>
              If I fails to report the marketing head and or CEO in three
              consecutive days, then the service will get terminated
              automatically and I will not be able to get the payment,
              incentives and allowances for work done in that month.
            </li>
            <li>
              I will not be entitled for any leaves during the probation time.
              After successful completion of the probation period I will be
              entitled the leaves / Holidays as per company’s policy.
            </li>
            <li>
              I will be required to give 1 month notice or payment of 1 month
              total salary in lieu of a notice of my intent to leave the
              company’s service.
            </li>
            <li>
              I will prefer all such job as assigned to me to the satisfaction
              of the management . It’s also a condition of my employment that I
              will serve the company at any place designated by the company.
            </li>
            <li>
              My terms of employment will be governed by the company rules as in
              force from time to time which may change at the discretion of the
              management.
            </li>
            <li>
              I will have to required to maintain the highest order of secrecy
              with regards to the work or confidential information of the
              Company and in case of any breach of trust, my appointment may be
              terminated by the Company without any notice.
            </li>
            <li>I shall observe all rules and regulations of the company.</li>
          </ol>
        </li>

        <li>
          <h3>Standards of Conduct </h3>
          <ol type="1">
            <li>
              I agree to acknowledge and answer messages, such as but not
              limited to SMS, Electronic mail, private message, or chat which
              need replies within 36 working hours from receipt thereof.
            </li>
            <li>
              I guarantee that I will always adhere to the highest moral,
              ethical, legal and professional standards of conduct through all
              means of communication with all of 1to1Guru students and users.
            </li>
            <li>
              Should I become privy to certain personal information of 1to1Guru
              students in the course of my tutorials, I will never use any
              personal information obtained through my work in 1to1Guru for any
              illegal or immoral purposes.
            </li>
            <li>
              I agree to hold confidential all personal and other information of
              1to1Guru students.
            </li>
            <li>
              I agree not to contact any 1to1Guru student or user for any
              reasons outside my professional duties without prior written
              authorization from 1to1Guru. Should there be a violation of this
              policy, I understand that 1to1Guru reserves the right to terminate
              my services unilaterally.{" "}
            </li>
          </ol>{" "}
        </li>

        <li>
          <h3>Non Exclusivity </h3>
          <ol type="1">
            <li>
              I understand that this contract is non-exclusive and I am free to
              work for other employers while providing services to 1to1Guru.{" "}
            </li>
          </ol>{" "}
        </li>

        <li>
          <h3>Indemnity </h3>
          <ol type="1">
            <li>
              I agree to defend, indemnify, and hold 1to1Guru, its officers,
              directors, employees and agents, harmless from and against any
              claims, liabilities, damages, losses, and expenses, including,
              without limitation, reasonable legal and accounting fees, arising
              out of or in any way connected with my violation of this contract,
              my provision of the Services, and any claim made by a third party
              as a result of my provision of the Services, including any claim
              alleging my infringement upon the copyrights, trademarks, trade
              secrets, patents or other intellectual property rights of such
              third party.{" "}
            </li>
          </ol>{" "}
        </li>

        <li>
          <h3>
            Interpretation of the clauses in the contract and Jurisdiction{" "}
          </h3>
          <ol type="1">
            <li>
              I understand that in case of any ambiguity / dispute in the
              interpretation of any of the clauses in this contract, 1to1Guru’s
              interpretation of the clauses shall be final and binding on me.
            </li>
            <li>
              The disputes, legal matters, court matters, if any shall be
              subject to Pune jurisdiction only.{" "}
            </li>
          </ol>{" "}
        </li>

        <li>
          <h3>Obligations Surviving Termination of this contract </h3>
          <ol type="1">
            <li>
              All obligations to preserve the Company’s Confidential
              Information, Intellectual Property and other warranties and
              representations set forth herein shall survive the termination of
              this contract.{" "}
            </li>
          </ol>{" "}
        </li>
      </ol>
      </Container>
      <Footer />
    </div>

  );
}
