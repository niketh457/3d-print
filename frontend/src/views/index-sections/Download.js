import React, { useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import './dnload.css';

function Download() {
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("download-section");
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;

      if (scrollY > sectionTop - windowHeight + sectionHeight * 0.5) {
        section.classList.add("animate-section");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className="section section-download"
        // data-background-color="black"
        id="download-section"
      >
        <Container>
          <Row className="justify-content-md-center">
            <Col className="text-center" lg="8" md="12">
              <h2 className="animate-from-left">Slicing features</h2>
              <h5 className="description animate-from-right">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fringilla urna porttitor rhoncus dolor purus non enim praesent. Phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet enim. Cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo. Facilisi cras fermentum odio eu feugiat pretium nibh ipsum consequat. Amet nisl purus in mollis. Fac
              </h5>
            </Col>
          </Row>
          <br></br>
          <br></br>
          <br></br>
          <Row className="text-center mt-5">
            <Col className="ml-auto mr-auto" md="8">
              <h2 className="animate-from-right">Easy to use</h2>
              <h5 className="description animate-from-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fringilla urna porttitor rhoncus dolor purus non enim praesent. Phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet enim. Cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo. Facilisi cras fermentum odio eu feugiat pretium nibh ipsum consequat. Amet nisl purus in mollis. Fac
              </h5>
            </Col>
          </Row>
          <br></br>
          <br></br>
          <br></br>
          <Row className="text-center mt-5">
            <Col className="ml-auto mr-auto" md="8">
              <h2 className="animate-from-left">Integrated workflow</h2>
              <h5 className="description animate-from-right">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fringilla urna porttitor rhoncus dolor purus non enim praesent. Phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet enim. Cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo. Facilisi cras fermentum odio eu feugiat pretium nibh ipsum consequat. Amet nisl purus in mollis. Fac
              </h5>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Download;
