import React, { useState, useEffect } from "react";
import axios from "axios";
import ErrorBoundary from "../../../../components/ErrorBoundary";
import { Container, Row, Col } from "reactstrap";

function DisplayData() {
  const [teach, setTeach] = useState([]);
  const [stud, setStud] = useState([]);
  const [cont, setCont] = useState([]);
  useEffect(() => {
    axios
      // .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      //.get(`https://jsonplaceholder.typicode.com/posts/`)
      .get(`/api/registerteacher`)
      .then((res) => {
        console.log(res);
        setTeach(res.data.data);
        console.log(teach);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(`/api/enrollstudent`)
      .then((res) => {
        console.log(res);
        setStud(res.data.data);
        console.log(stud);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(`/api/contactus`)
      .then((res) => {
        console.log(res);
        setCont(res.data.data);
        console.log(cont);
      })
      .catch((err) => {
        console.log(err);
      });
    // .get("/api/registerteacher", async (req, res) => {
    //   try {
    //     console.log(res);
    //     setPost(res.data);
    //   } catch (e) {
    //     console.log(e);
    //   }
    // });
  }, []);

  return (
    <div>
      <ErrorBoundary>
        <h1> Teachers : {teach.length} </h1>
        <h1> Students : {stud.length} </h1>
        <h1> Contact : {cont.length} </h1>
        <Container>
          <h1> Students : {stud.length} </h1>
          <Row>
            {Object.keys(stud)
              .reverse()
              .map((key) => (
                <Col lg="3" sm="6" key={key.ApplicationID}>
                  <p>
                    {key.charAt(0).toUpperCase() + key.slice(1)} <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ApplicationID:
                    {stud[key].ApplicationID} <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Date:
                    {stud[key].Date} <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Name:
                    {stud[key].Name} <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Email:
                    {stud[key].Email} <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Phone:
                    {stud[key].Phone} <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;City:
                    {stud[key].City} <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Grade:
                    {stud[key].Grade} <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Subjects:
                    {stud[key].Subjects} <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Examinations:
                    {stud[key].Examinations} <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Services:
                    {stud[key].Services} <br />
                  </p>
                </Col>
              ))}
          </Row>
          <h1> Teachers : {teach.length} </h1>
          <Row>
            {Object.keys(teach)
              .reverse()
              .map((key) => (
                <Col lg="3" sm="6" key={key.ApplicationID}>
                  <p>
                    {key.charAt(0).toUpperCase() + key.slice(1)} <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ApplicationID:{" "}
                    {teach[key].ApplicationID} <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Date: {teach[key].Date} <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Name: {teach[key].Name} <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Email: {teach[key].Email}{" "}
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Phone: {teach[key].Phone}{" "}
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;City: {teach[key].City} <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pincode: {teach[key].Pincode}
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Qualification:{" "}
                    {teach[key].Qualification} <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ONTeachExp:{" "}
                    {teach[key].ONTeachExp} <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;OFFTeachExp:{" "}
                    {teach[key].OFFTeachExp} <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Highest Class:
                    {teach[key].Class} <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Subjects:{" "}
                    {teach[key].Subjects} <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Examinations:{" "}
                    {teach[key].Examinations} <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Advertise:{" "}
                    {teach[key].Advertise} <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Broadband:{" "}
                    {teach[key].Broadband} <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Laptop: {
                      teach[key].Laptop
                    }{" "}
                    <br />
                  </p>
                </Col>
              ))}
          </Row>
          {/* <ul>
        {teach.map((item) => (
          //<li key={post.date}>{post.name}</li>
          <li key={item.ApplicationID}>
            {item.ApplicationID} 
            {item.Date} {item.Name} {item.Email}
            {item.Phone}
            {item.City}
            {item.Pincode}
            {item.Qualification}
            {item.ONTeachExp}
            {item.OFFTeachExp}
            {item.Class}
            {item.Subjects}
            {item.Examinations}
            {item.Advertise}
            {item.Laptop}
            {item.Broadband}
          </li>
        ))}
      </ul> */}

          <h1> Contact : {cont.length} </h1>
          <Row>
            {Object.keys(cont).map((key) => (
              <Col lg="3" sm="6" key={key.ContactID}>
                <p key={key.ContactID}>
                  {key.charAt(0).toUpperCase() + key.slice(1)} <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ContactID:
                  {cont[key].ContactID} <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Date:
                  {cont[key].Date} <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Name:
                  {cont[key].Name} <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Email:
                  {cont[key].Email} <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Phone:
                  {cont[key].Phone} <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Subject:
                  {cont[key].Subject} <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Message:
                  {cont[key].Message} <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Subjects:
                  {cont[key].Grade} <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Examinations:
                  {cont[key].Grade} <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Services:
                  {cont[key].Grade} <br />
                </p>
              </Col>
            ))}
          </Row>
        </Container>
      </ErrorBoundary>
    </div>
  );
}
export default DisplayData;
