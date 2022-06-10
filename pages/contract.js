import React from "react";
import { Container } from "reactstrap";
import Footer from "../components/Footer";
import HeroInnerPages from "../components/HeroInnerPages";
import Navbar1 from "../components/Navbar1";
import Link from 'next/link'

function contract() {
  return (
    <div>
      <Navbar1 />
      <HeroInnerPages heading="Teacher Contract" />
      <Container className="p-5">
        <h1> Terms and Conditions for Online Tutoring Services</h1>

        <ol type="A">
          <li>
            <h3>Provision of Online Tutorial Services</h3>
            <ol type="1">
              <li>
                I guarantee that I can provide quality online face to face
                instruction / tutoring via 1to1Guru platform and that I am fully
                qualified to offer such services on the basis of my education,
                tutoring skills and / or work experience.{" "}
              </li>
              <li>
                I agree to work from home or any other location using my own
                computer / Laptop with a WiFi / LAN-cable providing at least 5
                Mbps Internet connection to deliver my tutoring services.
              </li>
              <li>
                I agree that each lesson I conduct should be recorded on the
                1to1Guru platform from start to finish for 1to1Guru
                Administration tracking, monitoring and remuneration purposes.
              </li>
              <li>
                I agree that 1to1Guru shall not be held liable for any cost
                directly or indirectly arising from, related to or associated
                with my use and upkeep of my computer, the Internet, video
                conferencing, hardware, software, or any other related means or
                materials related to delivery of my tutoring services.{" "}
              </li>
            </ol>
          </li>

          <li>
            <h3>Account Registration and Usage</h3>
            <ol type="1">
              <li>I must register an account on the Platform (an “Account”)</li>
              <li>
                When I register on the Platform and set up my Account, I must:
                (i) provide accurate and complete information; (ii) promptly
                update the Account information with any new information that may
                affect the operation of the Account; (iii) authorize 1to1Guru to
                make any inquiries you consider necessary or appropriate to
                verify the Account information or the information I provide to
                you related to any Services I provide via the Platform; and (iv)
                acknowledge and accept any applicable student/user policies,
                including but not limited to those pertaining to service
                quality, confidentiality, tutor integrity, anti-harassment and
                conflict of interest. I will not use false identities or
                impersonate any other person or use another account that I am
                not authorized to use.{" "}
              </li>
              <li>
                I am responsible for safeguarding and maintaining the
                confidentiality of my Account information. I agree not to
                disclose the Account information to any third party and that I
                am entirely and solely responsible for any and all activities or
                actions that occur pursuant to the use of the Account on the
                Platform, whether or not I have authorized such activities or
                actions. I will immediately notify 1to1Guru of any unauthorized
                use of your Account.
              </li>
              <li>
                I agree that I will not permit, enable, introduce or facilitate
                other persons to participate in providing tutoring services from
                my Account, including others who may be subject to an contract
                that is the same or similar to this contract.{" "}
              </li>
            </ol>
          </li>

          <li>
            <h3>Contractual Service contract</h3>
            <ol type="1">
              <li>
                {" "}
                I understand that this is a contract service and that this
                contract will not result in a full-time nor a part-time staff
                position nor will it constitute an employee-employer
                relationship with 1to1Guru.
              </li>
              <li>
                As such, no Health Insurance, no Provident Fund and or Social
                Security System deductions will be done on my account.
              </li>
              <li>
                This contract will last for SIX months and will automatically be
                renewed on a rolling basis unless explicitly specified in
                writing by the Teacher or 1to1Guru.{" "}
              </li>
            </ol>{" "}
          </li>

          <li>
            <h3>Interactions with Users and Provision of Services </h3>
            <ol type="1">
              <li>
                {" "}
                I am solely responsible for the interactions with users of the
                Platform. My use of the Platform and the provision of the
                Services is at my own risk and discretion and I therefore agree
                to take reasonable precautions in all interactions with
                Students/users of the Platform and that I am solely responsible
                for, and agree to exercise caution, discretion, common sense and
                judgment in, using the Platform or providing the Services and
                disclosing information, including any personal information to
                users of the Platform, the provision of which is not required by
                my provision of the Services.
              </li>
              <li>
                {" "}
                1to1Guru reserves the right to evaluate my compliance with
                1to1Guru’s rules and policies and this contract. If I believe
                that a user of the Platform or another tutor has violated the
                law or is defrauding, threatening or otherwise endangering
                anyone, I should immediately notify 1to1Guru for assistance.
              </li>
              <li>
                {" "}
                I will comply with all applicable local, provincial, federal and
                Indian/foreign laws, treatises and regulations in connection
                with my provision of the Services. I am solely responsible for
                the content of the communications, assistance and direction that
                I provide as part of the Services.
              </li>
              <li>
                {" "}
                I will not record or otherwise store any tutor session that I
                provide through the Platform.
              </li>
              <li>
                {" "}
                I will not use the Platform or provide the Services in any
                manner that harasses a user of the Platform or another tutor or
                could otherwise interfere with any other party’s use or
                enjoyment of the Platform. I will respect the privacy of users
                of the Platform and will not use the Platform for unwelcome,
                rude or abusive communications or in any other disrespectful or
                detrimental manner, as determined by 1to1Guru in its sole
                discretion.
              </li>
              <li>
                {" "}
                I will neither use the Platform to invite a user to meet in
                person nor may I provide the Services to a user of the Platform
                outside of the Platform or pursuant to my provision of the
                Services.{" "}
              </li>
            </ol>{" "}
          </li>

          <li>
            <h3>Teacher Level and Remuneration </h3>
            <ol type="1">
              <li>
                I understand that the remuneration for my services will be as
                per the Offer letter, which may be revised at the end of each
                quarter/month based on my performance.{" "}
              </li>
              <li>
                {" "}
                I understand that given the fluency, subject knowledge level,
                teaching experience, Students reflections, and certification,
                teachers will be categorized in different levels/groups, which
                may be used for the increments, if any.{" "}
              </li>
              <li>
                I agree that I will be compensated if a first-time student joins
                the 60 minute Free Trial class. I also agree that I will not be
                compensated for a free trial lesson if the student does not join
                the Free Trial class. The rate of a Free Trial class is Rs. 100
                regardless of the teacher’s tier.
              </li>
              <li>
                {" "}
                I agree that if I accept an Open Booking class, I will be paid
                the equivalent rate of the student’s subscription, not my rate
                per lesson.
              </li>
              <li>
                I understand that the remunerations are inclusive of any and all
                applicable taxes for which I may be responsible.{" "}
              </li>
            </ol>{" "}
          </li>

          <li>
            <h3>Online Teaching Modules </h3>
            <ol type="1">
              <li>
                I agree to use online teaching modules prepared by 1to1Guru.
              </li>
              <li>
                I agree not to use 1to1Guru’s teaching modules outside of
                1to1Guru online teaching school unless explicitly authorized by
                1to1Guru.
              </li>
              <li>
                I agree that 1to1Guru reserves the right to make changes to its
                website, its services and the terms and conditions that shall
                govern its services at any time, and I hereby fully accept these
                and any future terms and conditions.{" "}
              </li>
            </ol>{" "}
          </li>

          <li>
            <h3>Appearance and Setting </h3>
            <ol type="1">
              <li>
                The appearance of the 1to1Guru tutor during the session is to
                reflect the professional nature and quality of the services
                1to1Guru offers to 1to1Guru’s Students/user(s).
              </li>
              <li>
                Background - The background of the session (visible area behind
                tutor) should be a simple wall or drape that is light in color
                and located in a brightly lit environment.
              </li>
              <li>
                Curtains that will move or shift, patterns, or dark colors are
                not permitted.
              </li>
              <li>
                There should be nothing else visible behind 1to1Guru tutor that
                could distract 1to1Guru’s student/user(s), including without
                limitation artwork, people walking behind 1to1Guru tutor,
                windows, views of 1to1Guru tutor’s immediate environment, other
                distractions, etc.
              </li>
              <li>
                Lighting shall be bright enough for 1to1Guru’s student/user(s)
                to see and view 1to1Guru tutor’s face clearly. The lighting
                shall be of natural color and not distort or discolor the
                natural look of the video image.
              </li>
              <li>
                Sound - There should be no ambient noise or other sounds that
                could distract 1to1Guru’s student/user(s) or detract from the
                quality of the session.
              </li>
              <li>
                Noise - 1to1Guru’s student/user(s) should enjoy a session free
                of 1to1Guru tutor’s background noise, including, without
                limitation, people, telephones, music, or other distracting
                sounds.
              </li>
              <li>
                Video and Audio – 1to1Guru offers a unique, live, online
                teaching environment, and 1to1Guru’s student/user(s) expects to
                be able to see and hear 1to1Guru tutor clearly.
              </li>
              <li>
                Pausing the video/muting the audio - If 1to1Guru tutor needs to
                sneeze, cough, or anything else unavoidable and potentially
                distracting during the session, 1to1Guru tutor should pause the
                video and/or mute the audio (whichever is applicable) for no
                more than thirty (30) seconds. If 1to1Guru tutor pauses the
                video or mutes the audio for more than one (1) minute, 1to1Guru
                tutor is subject to a written warning.
              </li>
              <li>
                1to1Guru tutor shall adhere to login protocols and log into
                1to1Guru’s internal messenger (Chat) as well as enter the
                session room corresponding with his or her schedule a minimum of
                five (5) minutes prior to session start time. Failure to comply
                with the login protocols may result in a record of tardiness or
                absent.{" "}
              </li>
            </ol>{" "}
          </li>

          <li>
            <h3>Conducting Tutorial Sessions</h3>
            <ol type="1">
              <li>
                {" "}
                I agree to be fully prepared to conduct regular sixty minute
                (60-min.) video conferencing tutoring one-to-one sessions for
                registered 1to1Guru students.
              </li>
              <li>
                I agree that the number of lessons I can conduct per day shall
                be based on an open teaching schedule I make available to
                1to1Guru from which students can book a time slot. The open
                schedule can be offered as early as one month prior to a target
                tutoring date.
              </li>
              <li>
                I agree that I cannot cancel a scheduled lesson once it is
                booked, without incurring a penalty.{" "}
              </li>
            </ol>{" "}
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
                Should I become privy to certain personal information of
                1to1Guru students in the course of my tutorials, I will never
                use any personal information obtained through my work in
                1to1Guru for any illegal or immoral purposes.
              </li>
              <li>
                I agree to hold confidential all personal and other information
                of 1to1Guru students.
              </li>
              <li>
                I agree not to contact any 1to1Guru student or user for any
                reasons outside my professional duties without prior written
                authorization from 1to1Guru. Should there be a violation of this
                policy, I understand that 1to1Guru reserves the right to
                terminate my services unilaterally.{" "}
              </li>
            </ol>{" "}
          </li>

          <li>
            <h3>Teacher Evaluation </h3>
            <ol type="1">
              <li>
                I agree to be subject to a Teacher Evaluation by 1to1Guru
                students and 1to1Guru Quality Assurance Team. I understand
                1to1Guru reserves the right to terminate my services
                unilaterally should I consistently be rated poorly.
              </li>
              <li>
                I agree to have my lessons monitored and recorded for quality
                assurance purposes.
              </li>
              <li>
                1to1Guru will provide online training and conduct live training
                sessions for the teachers to equip us with the appropriate
                skills and techniques used in conducting online lessons. I agree
                to participate in all such teacher training programs conducted
                by 1to1Guru on time to time. I agree that these training
                programs will be non-remunerative and mandatory. Further, accept
                to implement the contents of such training for teaching from my
                side on the 1to1Guru platform.
              </li>
              <li>
                1to1Guru will conduct regular standard lesson checks to ensure
                that the 1to1Guru teaching standards are met.{" "}
              </li>
            </ol>{" "}
          </li>

          <li>
            <h3>Cancelled and Missed Classes </h3>
            <ol type="1">
              <li>
                I agree to always be on time for my scheduled classes. I agree
                that if I am 2 minutes late for my class, I will be considered
                absent and the class will be considered missed.{" "}
              </li>
              <li>
                {" "}
                I agree to the following 1to1Guru guidelines on cancellation of
                and missed classes:
                <ol type="a">
                  <li>
                    {" "}
                    If I cancel a booked Private/Group/Level Check/Open
                    Booking/Free Trial class, I will incur 1 deduction
                    equivalent to my rate per lesson and 1 strike on my 1to1Guru
                    account. I agree that I will incur this penalty regardless
                    of:
                    <ol type="i">
                      <li>
                        {" "}
                        the number of days or hours I cancel the booked class{" "}
                      </li>
                      <li>the reason I canceled the booked class </li>
                    </ol>
                  </li>
                  <li>
                    If I cancel an unbooked Private/Group/Level Check
                    availability, I will incur no deduction and no strike on my
                    1to1Guru account. I agree that I will incur no deduction and
                    no strike regardless of:
                    <ol type="i">
                      <li>
                        the number of days or hours I removed my availability
                      </li>
                      <li>the reason I removed my availability</li>
                    </ol>
                  </li>
                  <li>
                    If I miss a booked Private/Group/Level Check/Free Trial
                    class, I will incur 1 deduction equivalent to my rate per
                    lesson and 1 strike on my 1to1Guru account. I agree that I
                    will incur this penalty regardless of:
                    <ol type="i">
                      <li> the reason I missed the booked class </li>
                    </ol>
                  </li>
                  <li>
                    {" "}
                    If a student cancels a booked class with me within 24 hours
                    before the scheduled class, I will be compensated for that
                    class.{" "}
                  </li>
                  <li>
                    If a student cancels a booked class with me more than 24
                    hours before the scheduled class, I will not be compensated
                    for that class.
                  </li>
                </ol>
              </li>
            </ol>{" "}
          </li>

          <li>
            <h3>Account Suspension </h3>
            <ol type="1">
              <li>
                Upon reaching 3 strikes on my 1to1Guru account, my 1to1Guru
                account will be locked to prevent further missed lessons and all
                of my remaining booked classes will automatically be transferred
                to other teachers. I will be paid based on the number of classes
                I serviced before my suspension date. I agree to the account
                suspension protocol below:
                <ol type="a">
                  <li>
                    1<sup>st</sup> suspension – My account will be unlocked 1
                    week after the suspension date.
                  </li>
                  <li>
                    2<sup>nd</sup> suspension – My account will be unlocked 1
                    month after the suspension date.
                  </li>
                  <li>
                    3<sup>rd</sup> suspension – My account will be deactivated
                    and my online tutoring contract will automatically be
                    canceled.{" "}
                  </li>
                </ol>{" "}
              </li>
            </ol>{" "}
          </li>

          <li>
            <h3>Non Exclusivity </h3>
            <ol type="1">
              <li>
                I understand that this contract is non-exclusive and I am free
                to work for other employers while providing online tutoring
                services for 1to1Guru students.{" "}
              </li>
            </ol>{" "}
          </li>

          <li>
            <h3>Consideration </h3>
            <ol type="1">
              <li>
                For the services I render, I agree that payout is being
                conducted manually at the end of each month for the billing
                period of 21<sup>st</sup> of previous month to 20<sup>th</sup>{" "}
                of current month, at the rate according to the category I was
                assigned in for every successfully completed sixty minute
                (60-min) tutoring session.
              </li>
              <li>I agree to be paid through NEFT only.</li>
              <li>
                If I incur any Penalty Costs without any remuneration against
                which to offset such Penalty Costs, I will remain liable to
                1to1Guru for the full amount of such Penalty Costs until such
                time that any earned remuneration payable to me exceed any
                accumulated Penalty Costs, failing which I will remain
                responsible to reimburse 1to1Guru for such Penalty Costs.{" "}
              </li>
            </ol>{" "}
          </li>

          <li>
            <h3>Termination of Services </h3>
            <ol type="1">
              <li>
                Both parties are entitled to the termination of this contract by
                written notice.
              </li>
              <li>
                1to1Guru may terminate the contract of each teacher unilaterally
                with immediate effect.
              </li>
              <li>
                All 1to1Guru Teachers are required to give a 30-day prior notice
                in writing to terminate the contract to take effect, unless
                otherwise specified in writing by 1to1Guru management.
              </li>
              <li>
                During this time, they are required to continue teaching their
                scheduled classes however they may close out unbooked remaining
                availabilities on the platform.
              </li>
              <li>
                {" "}
                Prior to finally ending their contract, it is the teacher’s
                responsibility to have no more availabilities listed on the
                platform, beyond their date of termination. The teacher’s
                account will be deactivated on the termination date and all
                future booked class will be automatically transferred.{" "}
              </li>
              <h4>
                Failure to do any of the above points will result in the
                withholding of outstanding payments.
              </h4>

              <li>
                {" "}
                1to1Guru retains the right to terminate the services of a
                teacher unilaterally on the following grounds (although not
                limited to the following):
                <ol type="a">
                  <li>
                    Teaching or communicating directly to 1to1Guru students
                    outside posted schedule{" "}
                  </li>
                  <li>
                    Inappropriate moral behavior to students and other parties
                  </li>
                  <li>Three (3) counts of “strikes”</li>
                  <li>Severe complaint from student</li>
                  <li>Poor average student evaluation ratings and reviews</li>
                  <li>
                    Poor performance in internal quality assurance reviews
                  </li>
                  <li>Passing on student information to other parties</li>
                  <li>
                    Giving my personal information or asking for the student’s
                    personal information for any personal gain such as asking
                    for the student’s email address or phone number or home
                    address without any written consent from 1to1Guru Management
                    and using this information to conduct classes outside of
                    1to1Guru
                  </li>
                  <li>
                    Letting another person teach my class using my account
                    without any written consent from 1to1Guru Operations
                  </li>
                  <li>Business reasons</li>
                </ol>
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
                without limitation, reasonable legal and accounting fees,
                arising out of or in any way connected with my violation of this
                contract, my provision of the Services, and any claim made by a
                third party as a result of my provision of the Services,
                including any claim alleging my infringement upon the
                copyrights, trademarks, trade secrets, patents or other
                intellectual property rights of such third party.{" "}
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
                interpretation of any of the clauses in this contract,
                1to1Guru’s interpretation of the clauses shall be final and
                binding on me.
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
                representations set forth herein shall survive the termination
                of this contract.{" "}
              </li>
            </ol>{" "}
          </li>
          <li>
            <h3>List of Holidays </h3>
            <ol type="1">
              <li>    
                  <a
				   href="/2022-holidays.pdf"
                    alt="alt text"
                    target="_blank"
                    rel="noopener noreferrer"
					style={{color:"red"}}
                  >
               Please click here for the list of Holidays of the current year
                  </a>
              </li>
            </ol>{" "}
          </li>
        </ol>
      </Container>
      <Footer />
    </div>
  );
}

export default contract;
