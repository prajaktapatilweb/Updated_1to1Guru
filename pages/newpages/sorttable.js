import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import { Container, Row, Col } from "reactstrap";
import ErrorBoundary from "../../components/ErrorBoundary";
import { Table } from "reactstrap";

// import "./styles.css";

const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = React.useState(config);

  const sortedItems = React.useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key) => {
    let direction = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort, sortConfig };
};

const ProductTable = (props) => {
  const { items, requestSort, sortConfig } = useSortableData(props.products);
  const getClassNamesFor = (Name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === Name ? sortConfig.direction : undefined;
  };

  return (
    <div className="pl-5 py-3">
      <Table hover className="accortable table table-striped style_table">
        <thead>
          <tr className="bg-gradient-warning text-center">
            <th colSpan={9}> Students</th>
          </tr>
          <tr>
            {/* <th>
            <button
              type="button"
              onClick={() => requestSort("ApplicationID")}
              className={getClassNamesFor("ApplicationID")}
            >
              ApplicationID
            </button>
          </th> */}
            <th>
              <button
                type="button"
                onClick={() => requestSort("Date")}
                className={getClassNamesFor("Date")}
              >
                Date
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort("Name")}
                className={getClassNamesFor("Name")}
              >
                Name
              </button>
            </th>

            <th>
              <button
                type="button"
                onClick={() => requestSort("Email")}
                className={getClassNamesFor("Email")}
              >
                Email
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort("Phone")}
                className={getClassNamesFor("Phone")}
              >
                Phone
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort("City")}
                className={getClassNamesFor("City")}
              >
                City
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort("Grade")}
                className={getClassNamesFor("Grade")}
              >
                Grade
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort("Subjects")}
                className={getClassNamesFor("Subjects")}
              >
                Subjects
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort("Examinations")}
                className={getClassNamesFor("Examinations")}
              >
                Examinations
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort("Services")}
                className={getClassNamesFor("Services")}
              >
                Services
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            //   <tr key={item.id}>
            <tr key={item.ApplicationID}>
              <td>{item.Date}</td>
              <td>${item.Name}</td>
              <td>{item.Email}</td>
              <td>${item.Phone}</td>
              <td>{item.City}</td>
              <td>${item.Grade}</td>
              <td>{item.Subjects}</td>
              <td>${item.Examinations}</td>
              <td>{item.Services}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

const ProductTables = (props) => {
  const { items, requestSort, sortConfig } = useSortableData(props.products1);
  const getClassNamesFor = (Name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === Name ? sortConfig.direction : undefined;
  };

  return (
    <div className="pl-5">
      <Table hover className="accortable table table-striped style_table">
        <thead>
          <tr className="bg-gradient-warning text-center">
            <th colSpan={15}> Teachers</th>
          </tr>
          <tr>
            {/* <th>
              <button
                type="button"
                onClick={() => requestSort("ApplicationID")}
                className={getClassNamesFor("ApplicationID")}
              >
                ApplicationID
              </button>
            </th> */}
            <th>
              <button
                type="button"
                onClick={() => requestSort("Date")}
                className={getClassNamesFor("Date")}
              >
                Date
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort("Name")}
                className={getClassNamesFor("Name")}
              >
                Name
              </button>
            </th>

            <th>
              <button
                type="button"
                onClick={() => requestSort("Email")}
                className={getClassNamesFor("Email")}
              >
                Email
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort("Phone")}
                className={getClassNamesFor("Phone")}
              >
                Phone
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort("City")}
                className={getClassNamesFor("City")}
              >
                City
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort("Pincode")}
                className={getClassNamesFor("Pincode")}
              >
                Pincode
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort("Qualification")}
                className={getClassNamesFor("Qualification")}
              >
                Qualification
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort("ONTeachExp")}
                className={getClassNamesFor("ONTeachExp")}
              >
                ONTeachExp
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort("OFFTeachExp")}
                className={getClassNamesFor("OFFTeachExp")}
              >
                OFFTeachExp
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort("Class")}
                className={getClassNamesFor("Class")}
              >
                Class
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort("Subjects")}
                className={getClassNamesFor("Subjects")}
              >
                Subjects
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort("Examinations")}
                className={getClassNamesFor("Examinations")}
              >
                Examinations
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort("Advertise")}
                className={getClassNamesFor("Advertise")}
              >
                Advertise
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort("Broadband")}
                className={getClassNamesFor("Broadband")}
              >
                Broadband
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort("Laptop")}
                className={getClassNamesFor("Laptop")}
              >
                Laptop
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            //   <tr key={item.id}>
            <tr key={item.ApplicationID}>
              <td>{item.Date}</td>
              <td>${item.Name}</td>
              <td>{item.Email}</td>
              <td>${item.Phone}</td>
              <td>{item.City}</td>
              <td>${item.Pincode}</td>
              <td>{item.Qualification}</td>
              <td>${item.ONTeachExp}</td>
              <td>{item.OFFTeachExp}</td>
              <td>${item.Class}</td>
              <td>{item.Subjects}</td>
              <td>${item.Examinations}</td>
              <td>{item.Advertise}</td>
              <td>${item.Broadband}</td>
              <td>{item.Laptop}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

const ProductTabless = (props) => {
  const { items, requestSort, sortConfig } = useSortableData(props.products2);
  const getClassNamesFor = (Name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === Name ? sortConfig.direction : undefined;
  };

  return (
    <div className="pl-5">
      <Table hover className="accortable table table-striped style_table">
        <thead>
          <tr className="bg-gradient-warning text-center">
            <th colSpan="9"> Contact</th>
          </tr>
          <tr>
            {/* <th>
                <button
                  type="button"
                  onClick={() => requestSort("ApplicationID")}
                  className={getClassNamesFor("ApplicationID")}
                >
                  ApplicationID
                </button>
              </th> */}

            {/* <th>
            <button
              type="button"
              onClick={() => requestSort("ContactID")}
              className={getClassNamesFor("ContactID")}
            >
              Date
            </button>
          </th> */}
            <th>
              <button
                type="button"
                onClick={() => requestSort("Date")}
                className={getClassNamesFor("Date")}
              >
                Date
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort("Name")}
                className={getClassNamesFor("Name")}
              >
                Name
              </button>
            </th>

            <th>
              <button
                type="button"
                onClick={() => requestSort("Email")}
                className={getClassNamesFor("Email")}
              >
                Email
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort("Phone")}
                className={getClassNamesFor("Phone")}
              >
                Phone
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort("Subject")}
                className={getClassNamesFor("Subject")}
              >
                Subject
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort("Message")}
                className={getClassNamesFor("Message")}
              >
                Message
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort("Grade")}
                className={getClassNamesFor("Grade")}
              >
                Grade
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort("Grade")}
                className={getClassNamesFor("Grade")}
              >
                Grade
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort("Grade")}
                className={getClassNamesFor("Grade")}
              >
                Grade
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            //   <tr key={item.id}>
            <tr key={item.ContactID}>
              <td>{item.Date}</td>
              <td>${item.Name}</td>
              <td>{item.Email}</td>
              <td>${item.Phone}</td>
              <td>{item.Subject}</td>
              <td>${item.Message}</td>
              <td>{item.Grade}</td>
              <td>${item.Grade}</td>
              <td>{item.Grade}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default function App() {
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
    <div className="App">
      <div>
        <ErrorBoundary>
          <section className="section section-lg section-shaped">
            <div className="shape shape-style-u1 shape-darks">
              <span className="span-75" />
              <span className="span-150" />
              <span className="span-50" />
              <span className="span-75" />
              <span className="span-200" />
              <span className="span-75" />
              <span className="span-50" />
              <span className="span-100" />
              <span className="span-50" />
              <span className="span-100" />
            </div>

            <Container>
              <Row>
                <Col lg="4">
                  <h1 className="text-white"> Teachers : {teach.length} </h1>
                </Col>
                <Col lg="4">
                  <h1 className="text-white"> Students : {stud.length} </h1>
                </Col>
                <Col lg="4">
                  <h1 className="text-white"> Contact : {cont.length} </h1>
                </Col>
              </Row>
            </Container>
          </section>

          <ProductTable products={stud} />
          <ProductTables products1={teach} />
          <ProductTabless products2={cont} />
          {/* <ProductTable
        products={[
          { id: 1, Name: "Cheese", price: 4.9, stock: 20 },
          { id: 2, Name: "Milk", price: 1.9, stock: 32 },
          { id: 3, Name: "Yoghurt", price: 2.4, stock: 12 },
          { id: 4, Name: "Heavy Cream", price: 3.9, stock: 9 },
          { id: 5, Name: "Butter", price: 0.9, stock: 99 },
          { id: 6, Name: "Sour Cream ", price: 2.9, stock: 86 },
          { id: 7, Name: "Fancy French Cheese 🇫🇷", price: 99, stock: 12 },
        ]}
      /> */}
        </ErrorBoundary>
      </div>
    </div>
  );
}
