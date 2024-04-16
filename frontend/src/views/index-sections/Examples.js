import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import { Button, Container, Row } from "reactstrap";
import './examples.css'

// core components

function Examples() {
  return (
    <>
      <div className="section section-examples" data-background-color="black">
        <div className="space-50"></div>
        <Container className="text-center">
          <Row>
            <div className="col">
              <a href="examples/landing-page.html" target="_blank">
                <img
                  alt="..."
                  className="img-raised"
                  style={{height:"48%"}}
                  src={require("assets/img/header1.jpg")}
                ></img>
              </a>
              <Button
                className="btn-round"
                color="default"
                to="/aboutus"
                outline
                tag={Link}
              >
                About us
              </Button>
            </div>
            <div className="col">
              <a href="examples/profile-page.html" target="_blank">
                <img
                  alt="..."
                  className="img-raised"
                  style={{height:"47%",
                    width: "76%"}}
                  src={require("assets/img/3d_image2.jpg")}
                ></img>
              </a>
              <Button
                className="btn-round"
                color="default"
                to="/login-page"
                outline
                tag={Link}
              >
                GetStarted
              </Button>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Examples;
