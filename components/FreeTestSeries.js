import React from "react";
import { Card, CardTitle, Container, Table, Button } from "reactstrap";
import * as contactdetail from "./Constants";
import { stureg, testseries } from "./Link";
import Link from "next/link";

export default function FreeTestSeries() {
  const Testseries = [
    {
      id: 1,
      pubdate: "07/01/2022",
    },
    {
      id: 2,
      pubdate: "14/01/2022",
    },
    {
      id: 3,
      pubdate: "21/01/2022",
    },
    {
      id: 4,
      pubdate: "28/01/2022",
    },
  ];
  const Testseriesname = [
    {
      idno: 1,
      name: "NEET-1to1guru-",
    },
    {
      idno: 2,
      name: "IIT-JEE-1to1guru-",
    },
    {
      idno: 3,
      name: "MHT-CET-1to1guru-",
    },
  ];
  const dmesg = "I want the Answers for the Test ";
  const current = new Date();
  // const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  //   const NEETname = "";
  //   const JEEname = "";
  //   const CETname = "";
  return (
    <div>
      <section style={{backgroundColor:"#F5F5F5"}}>
      {/* <section
        style={{ backgroundImage: `url("/test/testbg4.jpg")`, opacity: "1" }}
      > */}
        <Container className="py-5">
          {Testseriesname.map((itemname) => (
            <Card className="p-1 align-items-center m-2" key={itemname.id}>
              <CardTitle className="h1">
                {itemname.name.substring(0, itemname.name.indexOf("1") - 1)}
                -2022
              </CardTitle>
              <Table responsive>
                <thead>
                  <tr>
                    <th>Test Number</th>
                    <th>Test Published Date </th>
                    <th>Question Paper </th>
                    <th>Answer Key </th>
                  </tr>
                </thead>
                <tbody>
                  {Testseries.map((item) => (
                    <tr key={item.idno}>
                      <th scope="row">{`${itemname.name}${item.id}`}</th>
                      <td>{item.pubdate}</td>
                      <td>
                        <Button
                          href={`/FreeTestSeries/${itemname.name}${item.id}.pdf`}
                          // href='/Requisition_form_final.pdf'
                          alt="alt text"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-facebook"
                        >
                          Download Question Paper
                        </Button>
                      </td>
                      <td>
                        <Button
                          href={`https://wa.me/${contactdetail.contactno}?text=${dmesg}${itemname.name}${item.id}`}
                          className="btn-facebook"
                        >
                          Get Answers
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <h3>
                To Enroll for Full Test Series of{" "}
                {itemname.name.substring(0, itemname.name.indexOf("1") - 1)}
                -2022 at affordable Price {"   "}
                <Link href={testseries}>
                  <Button className="btn-instagram">click here</Button>
                </Link>
              </h3>
            </Card>
          ))}
        </Container>
      </section>
    </div>
  );
}
