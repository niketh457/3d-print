import React from "react";
import axios from "axios"
import {useNavigate} from "react-router-dom";
import Navbars from "../../views/index-sections/Navbars";
import iiti from "../../assets/img/iiti-logo.jpg"
import "./signup.css"
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Col
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import TransparentFooter from "components/Footers/TransparentFooter.js";
import DarkFooter from "components/Footers/DarkFooter";

function SignUpPage() {
  const navigate = useNavigate();
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  const [inputs,setInputs] = React.useState({
    username:"",
    email:"",
    password:""
  })
  const handleChange = (e) => {
    console.log(e.target)
    console.log(e.target.name)
    console.log(inputs)
    setInputs((prevState)=>({
      ...prevState,
      [e.target.name]: e.target.value,
      [e.target.name]:e.target.value,
      [e.target.name]: e.target.value
    }))
  }
  const handleSubmit = async(e) => {
    e.preventDefault()
    try{
     const {data} = await axios.post("http://localhost:8000/gcode/signup",{username:inputs.username,email:inputs.email,password:inputs.password});
     console.log(data);
     if(data){
       navigate("/login-page")
     }
    }catch(error){
       console.log(error)
    }
}
  React.useEffect(() => {
    document.body.classList.add("login-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("login-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <Navbars />
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/header1.jpg") + ")"
          }}
        ></div>
        <div className="content">
          <Container>
            <Col className="ml-auto mr-auto" md="4">
              <Card className="card-login card-plain">
                <form onSubmit={handleSubmit} action="" className="form" method="">
                  <CardHeader className="text-center">
                    <div className="logo-container">
                      <img
                        alt="..."
                        src={iiti}
                        
                        className="logoup"
                      ></img>
                    </div>
                    <h3 className="headup">Sign-up</h3>
                    <h6 className="headupp">To get started</h6>
                  </CardHeader>
                  <CardBody>
                    <InputGroup
                      className={
                        "no-border input-lg" +
                        (firstFocus ? " input-group-focus" : "")
                      }
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons users_circle-08"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        id = "username"
                        placeholder="Username ..."
                        type="text"
                        name="username"
                        value={inputs.username}
                        onChange={handleChange}
                        onFocus={() => setFirstFocus(true)}
                        onBlur={() => setFirstFocus(false)}
                      ></Input>
                    </InputGroup>
                    <InputGroup
                      className={
                        "no-border input-lg" +
                        (lastFocus ? " input-group-focus" : "")
                      }
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons ui-1_email-85"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Email..."
                        id="email"
                        type="email"
                        name="email"
                        value={inputs.email}
                        onChange={handleChange}
                        onFocus={() => setLastFocus(true)}
                        onBlur={() => setLastFocus(false)}
                      ></Input>
                    </InputGroup>
                    <InputGroup
                      className={
                        "no-border input-lg" +
                        (lastFocus ? " input-group-focus" : "")
                      }
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons objects_key-25"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Password"
                        type="password"
                        name="password"
                        id="password"
                        value={inputs.password}
                        onChange={handleChange}
                        onFocus={() => setLastFocus(true)}
                        onBlur={() => setLastFocus(false)}
                      ></Input>
                    </InputGroup>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      block
                      className="btn-round border "
                      color="info"
                      type="submit"
                      href="#pablo"
                      // onClick={(e) => e.preventDefault()}
                      onClick={handleSubmit}
                      size="lg"
                    >
                      Get Started
                    </Button>
                    <div className="pull-left">
                      
                    </div>
                    <div className="pull-right">
                    </div>
                  </CardFooter>
                </form>
              </Card>
            </Col>
          </Container>
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default SignUpPage;
