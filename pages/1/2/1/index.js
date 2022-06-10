import { Component } from "react";
import {
  Form,
  FormFeedback,
  FormGroup,
  FormText,
  Label,
  Input,
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";
import HeroInnerPages from "../../../../components/HeroInnerPages";
import Navbar1 from "../../../../components/Navbar1";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      validate: {
        emailState: "",
      },
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    const { target } = event;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const { name } = target;

    this.setState({
      [name]: value,
    });
  };

  validateEmail(e) {
    const emailRex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const { validate } = this.state;

    if (emailRex.test(e.target.value)) {
      validate.emailState = "has-success";
    } else {
      validate.emailState = "has-danger";
    }

    this.setState({ validate });
  }

  submitForm(e) {
    e.preventDefault();
    console.log(`Email: ${this.state.email}`);
    console.log(`Passwd: ${this.state.password}`);
    // console.log(req.body);
  }

  render() {
    const { email, password } = this.state;

    return (
      <div>
        <Navbar1 />
        <HeroInnerPages />
        <Row>
          {/* <Col lg="2" sm="2"> </Col> */}
          <Col lg="4" md="4" sm="4" xl="4">
            {" "}
          </Col>
          <Col lg="4" md="4" sm="4" xl="4">
            <Container className="py-5">
              <h2>Sign In</h2>
              <Form className="form" action="/1/2/1/page1" 
            //   onSubmit={(e) => this.submitForm(e)} 
              >
                <FormGroup>
                  <Label>Username</Label>
                  <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="example@example.com"
                    valid={this.state.validate.emailState === "has-success"}
                    invalid={this.state.validate.emailState === "has-danger"}
                    value={email}
                    onChange={(e) => {
                      this.validateEmail(e);
                      this.handleChange(e);
                    }}
                  />
                  <FormFeedback>
                    Uh oh! Looks like there is an issue with your email. Please
                    input a correct email.
                  </FormFeedback>
                  <FormFeedback valid>
                    Yes, it is correct email id.
                  </FormFeedback>
                  <FormText>Your username is most likely your email.</FormText>
                </FormGroup>
                <FormGroup>
                  <Label for="examplePassword">Password</Label>
                  <Input
                    type="password"
                    name="password"
                    id="examplePassword"
                    placeholder="********"
                    value={password}
                    onChange={(e) => this.handleChange(e)}
                  />
                </FormGroup>
                <Button><Input type="submit" value="login" /> </Button>
              </Form>
            </Container>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
