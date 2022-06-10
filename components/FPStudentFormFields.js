import React, { useState, useEffect } from "react";
import { Formik, Form, FormikContext } from "formik";
//import FormikControl from './FormComponents/FormikControl'
import Input from "./FormComponents/Input";
import Select from "./FormComponents/Select";
import Checkboxgroup from "./FormComponents/CheckboxGroup";
//import Toast from "react-bootstrap/Toast";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Row,
  Col,
} from "reactstrap";
import {
  dropdownClass,
  studsubjectList,
  checkboxExams,
} from "./FormComponents/FormConstants";
import Axios from "axios";
import * as Yup from "yup";
// import ReCAPTCHA from "react-google-recaptcha";
//import { ToastContainer, toast } from "react-toastify";
//import "react-toastify/dist/ReactToastify.css";
// import FormSubmitModals from '../components/FormSubmitModals';
// import { Checkbox } from '@chakra-ui/checkbox';
//import Trial from './Trial';

function FPStudentFormFields() {
  const initialValues = {
    name: "",
    mobileno: "",
    city: "",
    services: ["Free demo lecture FP"],
    grade: "12",
    subjects: [],
    examinations: [],
    OTP: ''
  };
  // const [generatedOTP, setGeneratedOTP] = useState(Math.floor(1000 + Math.random() * 9000))
  const [generatedOTP, setGeneratedOTP] = useState()
  const [counter, setCounter] = useState(0)
  const [disabled, setDisabled] = useState({ btnDisable: true, OTPsent: false });
  const [remainseconds, setRemainseconds] = useState(29);
  // console.log({ remainseconds })

  const OTPValidation = (mobileno) => {
    setCounter(prevCounter => prevCounter + 1)
    console.log({ counter })
    if (counter >= 1) {
      setGeneratedOTP('0121')
      alert('We are facing technical Difficulties in sending OTP on time. You can use 0121 as Temporary OTP ti submit the form')
    } else {
      const delay = 30000
      // flagOTPsent = 1;
      setDisabled({ btnDisable: true, OTPsent: true });
      var startTime = Date.now()
      console.log('start Time', startTime)
      const newOTP = Math.floor(1000 + Math.random() * 9000)
      const SMSTextnew = `${newOTP} is OTP for registering at 1to1Guru - 1:1 live personalised online tutoring for grades 8 to 12 by AeduZEST Innovations Pvt Ltd.`
      // console.log('new', SMSTextnew)
      setTimeout(() => {
        // console.log('Executing')
        setDisabled({ ...disabled, btnDisable: false });
        // setDisabled(false);
        clearInterval(interval);
      }, delay)
      const calRemainSeconds = () => {
        // console.log(`${delay - (Date.now() - startTime)} ms left`);
        setRemainseconds(Math.floor((delay - (Date.now() - startTime)) / 1000))
      }
      const interval = setInterval(calRemainSeconds, 1000)
      console.log(newOTP)
      setGeneratedOTP(newOTP)
      const finalSMS = `https://www.smsgatewayhub.com/api/mt/SendSMS?APIKey=fBOSKOX4lkq4FtB6DbDzHg&senderid=ONEGRU&channel=2&DCS=0&flashsms=0&number=${mobileno}&text=${SMSTextnew}&route=31&EntityId=1301163167976170817&dlttemplateid=1307165056330161255`
      // console.log(finalSMS)
      //       // Send OTP to user through SMS Gatway hub 
      // Axios.post(finalSMS)
      // Axios.post("/api/otp", { text: finalSMS })
      //   .then(function (response) {
      //     console.log(response)
      //   })
      //   .catch(function (response) {
      //     console.log(response)
      //   })
    }
  }
  // console.log('OTP Generated is ', generatedOTP)
  const validationSchema = Yup.object().shape({
    // name: Yup.string().required("Required"),
    name: Yup.string()
      .required("Required")
      .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
    mobileno: Yup.number()
      .min(1000000000, "Please enter only 10 digit number")
      .max(9999999999, "Please enter only 10 digit number")
      .required("Required"),
    // mobileno: Yup.string()
    //   .required("Required")
    //   .matches(/^[0-9\d]+$/, "Only Numbers are allowed for this field ")
    //   .length(10, "The mobile number of 10 digit is allowed"),
    city: Yup.string().required("Required"),
    //services: Yup.array().min(1, 'Please select at least select one service').required('Required'),
    grade: Yup.string().required("Required"),
    subjects: Yup.array()
      .min(1, "Please select at least one subject")
      .required("Required"),
    //examinations: Yup.array().required('Required'),
    OTP: Yup.string().required('Required').length(4, 'OTP is of 4 digit only')
      .matches(generatedOTP, 'OTP is not Correct')
  });
  //Modal variables
  const [modal, setModal] = useState(false);
  const [studname, setStudname] = useState('');
  const toggle = () => setModal(!modal);

  //   const notify = () =>
  //    toast.success("Thank you We will contact you!");
  //, {
  //position: "top-center",
  //   autoClose: 5000,
  //   hideProgressBar: false,
  //   closeOnClick: true,
  //   pauseOnHover: true,
  //   draggable: true,
  //   progress: undefined,    }

  const onSubmit = async (values, submitProps) => {
    // console.log('CAptche', captchcode);
    // console.log("Form data", values);
    Axios.post("/api/enrollstudent", {
      name: values.name,
      mobileno: values.mobileno,
      city: values.city,
      grade: values.grade,
      subjects: values.subjects,
      examinations: values.examinations,
      services: values.services,
    })
      .then(function (response) {
        //handle success
        console.log('Success')
        setModal(true);
        setStudname(values.name);
        //notify();
        //return( <ToastContainer />);
        //alert("Thank you");
        //return(<Trial2 />)
        submitProps.setSubmitting(false);
        submitProps.resetForm();
      })
      .catch(function (response) {
        //handle error
        alert("Error in submission. Please resubmit");
      });
  };

  return (
    <div>
      <h3 className="py-4">
        <b> Book A <span className="text-udfc-orange"> FREE </span>Demo Lecture  / Test series </b>
      </h3>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        validateOnChange={true}
        onSubmit={onSubmit}
      >
        {(formik, isSubmitting) => {
          return (
            <Form noValidate>
              {/* <pre>{JSON.stringify(formik.values.mobileno, null, 2)}</pre> */}
              <Row>
                <Col lg="6" sm="6">
                  <Input
                    type="text"
                    label="Student Name"
                    name="name"
                    placeholder="Enter Your Name"
                  />
                </Col>
                <Col lg="6" sm="6">
                  <Input
                    type="number"
                    label="Mobile Number"
                    name="mobileno"
                    placeholder="Enter your 10 digit Mobile Number"
                  />
                </Col>
                <Col lg="6" sm="6">
                  <Input
                    type="text"
                    label="Address"
                    name="city"
                    placeholder="Enter city of current location"
                  />
                </Col>
                <Col lg="6" sm="6" className='mb-4'>
                  <Select
                    type="select"
                    name="grade"
                    label="Class/Grade"
                    options={dropdownClass}
                    onChange={(e) => {
                      if (formik.values.subjects.length !== 0) {
                        alert(
                          "You are changing the higest class of teaching so the subjects selected earlier will be cleared"
                        );
                        formik.values.subjects = [];
                      }
                      if (formik.values.examinations.length !== 0) {
                        alert(
                          "You are changing the higest class of teaching so the examinations selected earlier will be cleared"
                        );
                        formik.values.examinations = [];
                      }
                      formik.handleChange(e);
                      console.log(formik.values.grade);
                    }}
                  />
                </Col>
                <Col lg="6" sm="6" >
                  <Input
                    type="text"
                    label="OTP"
                    name="OTP"
                    placeholder="Enter 4 digit OTP received through SMS"
                  />
                </Col>
                <Col lg="6" sm="6">
                  <Button onClick={() => { OTPValidation(formik.values.mobileno); }} disabled={formik.touched.mobileno && !formik.errors.mobileno ? disabled.OTPsent : disabled.btnDisable} >
                    {
                      formik.touched.mobileno && !formik.errors.mobileno ?
                        disabled.OTPsent ? `Resend OTP in ${remainseconds} seconds` : 'Get OTP' : 'Get OTP'
                    }
                  </Button>
                </Col>
              </Row>

              {/* <div className="form-control label" style={{ border: "none", height: "auto" }}>Select the Class / Grade you are studying.
                            </div> */}

              {/* <pre>{JSON.stringify(formik.values, null, 2)}</pre> */}
              <Checkboxgroup
                label="Select the Subject/s"
                name="subjects"
                options={studsubjectList[formik.values.grade]}
              />
              <Checkboxgroup
                label="Select the competative exam "
                name="examinations"
                options={checkboxExams[formik.values.grade]}
              />
              {/* <Checkboxgroup
                                label='I am interested in '
                                name='services'
                                options={studentFacility}
                            />
                            <ReCAPTCHA sitekey="" onChange={googleRecaptcha} /> */}
              <div className="text-center pt-4">
                {/* <button type='reset' className="btn btn-warning"> Reset</button> */}
                {/* <button type="submit" className="btn-success">
                  Submit
                </button> */}
                <Button className=" rainbow " href="" type='submit' disabled={isSubmitting}>
                  {/* <Link to={links.studform} tag={Link}> */}
                  {" "}
                  <span className="btn-inner--text text-white">
                    Book A <b> Free</b> Demo
                  </span>{" "}
                  {/* </Link> */}
                </Button>

              </div>
            </Form>
          );
        }}
      </Formik>
      {/* <FormSubmitModals /> */}
      <Modal
        isOpen={modal}
        toggle={toggle}
        className="modal-dialog-centered modal-info"
      >
        <ModalHeader toggle={toggle}>Form Submission</ModalHeader>
        <ModalBody>Thank you for your submission {studname}</ModalBody>
        <ModalFooter>
          <Button color="white" onClick={toggle}>
            OK
          </Button>{" "}
        </ModalFooter>
      </Modal>
    </div >
  );
}

export default FPStudentFormFields;
