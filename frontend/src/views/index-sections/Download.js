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
        className="section section111 section-download"
        // data-background-color="black"
        id="download-section"
      >
        <Container>
          <Row className="justify-content-md-center">
            <Col className="text-center" lg="8" md="12">
              <h2 className="animate-from-left" style={{color:"white",fontSize:"2rem"}}>Slicing features</h2>
              <h5 className="description animate-from-right">
              Our slicing-free approach has the potential to revolutionize the field of bioprinting, unlocking new possibilities for research, innovation, and clinical practice. By streamlining the workflow and preserving biological integrity, we empower researchers, clinicians, and biotechnologists to push the boundaries of what's possible in tissue engineering and regenerative medicine.
              </h5>
            </Col>
          </Row>
          <br></br>
          <br></br>
          <br></br>
          <Row className="text-center mt-5">
            <Col className="ml-auto mr-auto" md="8">
              <h2 className="animate-from-right" style={{color:"white",fontSize:"2rem"}}>Background</h2>
              <h5 className="description animate-from-left">
              Traditional bioprinting typically involves slicing 3D digital models into layers (slices) and then translating these slices into G-code instructions for the bioprinter. While effective, this process often poses limitations in terms of precision, speed, and material integrity. Additionally, slicing can be time-consuming and may compromise the fidelity of delicate biological structures.
              </h5>
            </Col>
          </Row>
          <br></br>
          <br></br>
          <br></br>
          <Row className="text-center mt-5">
            <Col className="ml-auto mr-auto" md="8">
              <h2 className="animate-from-left" style={{color:"white",fontSize:"2rem"}}>Our Innovation</h2>
              <h5 className="description animate-from-right">
              Enter our pioneering solution: a slicing-free approach to bioprinting. By leveraging advanced algorithms and computational techniques, we've developed a method that directly converts STL files – a common format for 3D models – into G-code instructions suitable for bioprinting. This streamlined workflow eliminates the need for slicing, preserving the integrity of complex biological structures and enhancing printing efficiency.
              </h5>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Download;
