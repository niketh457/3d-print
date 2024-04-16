import React,{useRef,useEffect} from "react";
// reactstrap components

import { Button, Container, Row, Col } from "reactstrap";
import './nucleaons.css'
// core components

function NucleoIcons() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight) {
        section.classList.add('animation-triggered');
      } else {
        section.classList.remove('animation-triggered');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state on mount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div ref={sectionRef} className="section section-nucleo-icons transition-slide">
      <Container>
        <Row>
          <Col lg="6" md="12">
            <h2 className="title">Simplify Your Bioprinting Workflow with Our STL to G-Code Converter</h2>
            <h5 className="description">
            Welcome to the forefront of bioprinting innovation! Our story revolves around a groundbreaking approach to bioprinting that challenges traditional methodologies. We've pioneered a revolutionary solution that bypasses slicing altogether, streamlining the process from digital design to tangible reality.
            </h5>
            <Button
              className="btn-round mr-1 btn-lg btn-success"
              style={{ width: "35rem" }}
              color="success"
              href="/fileUpload"
              size="lg"
              target="_blank"
            >
              GET STARTED
            </Button>
          </Col>
          <Col lg="6" md="12">
            <div className="icons-container">
              <i className="now-ui-icons ui-1_send"></i>
              
              <i className="now-ui-icons design_image"></i>
              <i className="now-ui-icons ui-1_send"></i>
                <i className="now-ui-icons ui-2_like"></i>
                <i className="now-ui-icons transportation_air-baloon"></i>
                <i className="now-ui-icons text_bold"></i>
                <i className="now-ui-icons tech_headphones"></i>
                <i className="now-ui-icons emoticons_satisfied"></i>
                <i className="now-ui-icons shopping_cart-simple"></i>
                <i className="now-ui-icons objects_spaceship"></i>
                <i className="now-ui-icons media-2_note-03"></i>
                <i className="now-ui-icons ui-2_favourite-28"></i>
                <i className="now-ui-icons design_palette"></i>
                <i className="now-ui-icons clothes_tie-bow"></i>
                <i className="now-ui-icons location_pin"></i>
                <i className="now-ui-icons objects_key-25"></i>
                <i className="now-ui-icons travel_istanbul"></i>

              {/* <FontAwesomeIcon icon="fa-solid fa-face-smile" /> */}
              {/* Add more icons as needed */}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    </>
  );
}

export default NucleoIcons;
