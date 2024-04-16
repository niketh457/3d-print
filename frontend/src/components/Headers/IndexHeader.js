/*eslint-disable*/
import React,{useEffect} from "react";
import './indexheader.css'
// reactstrap components
import { Container } from "reactstrap";
// core components
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

function IndexHeader() {
  let pageHeader = React.createRef();

  // React.useEffect(() => {
  //   if (window.innerWidth > 991) {
  //     const updateScroll = () => {
  //       let windowScrollTop = window.pageYOffset / 3;
  //       pageHeader.current.style.transform =
  //         "translate3d(0," + windowScrollTop + "px,0)";
  //     };
  //     window.addEventListener("scroll", updateScroll);
  //     return function cleanup() {
  //       window.removeEventListener("scroll", updateScroll);
  //     };
  //   }
  // });
 
  return (
    <>
      <div className="page-header clear-filter" filter-color="blue">
    
       <div className="video-background">
        <iframe
          src="https://www.youtube.com/embed/08rGK-9fIzM?autoplay=1&loop=1&mute=1&controls=0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        >
        </iframe>
      </div> 
       
        <Container>
          <div className="content-center brand">
            <img
              alt="..."
              className="n-logo"
              src={require("assets/img/iiti-logo.jpg")}
            ></img>
            <h1 className="h1-seo" style={{fontWeight:"bold",color:"white"}}>IIT Indore </h1>
            <h3 style={{fontWeight:"bold",color:"white"}}>Empower Your Bioprinting Process with Our STL to G-Code Conversion Tool</h3>
            <h5><span style={{fontWeight:"bold",color:"violet"}}>STL2GCODE_Converter </span> is free, easy-to-use 3D printing software trusted by millions of users. Fine-tune your 3D model with us for the best slicing and printing results</h5>
          </div>
          {/* <h6 className="category category-absolute">
            Designed by{" "}
            <a href="http://invisionapp.com/?ref=creativetim" target="_blank">
              <img
                alt="..."
                className="invision-logo"
                src={require("assets/img/invision-white-slim.png")}
              ></img>
            </a>
            . Coded by{" "}
            <a
              href="https://www.creative-tim.com?ref=nukr-index-header"
              target="_blank"
            >
              <img
                alt="..."
                className="creative-tim-logo"
                src={require("assets/img/creative-tim-white-slim2.png")}
              ></img>
            </a>
            .
          </h6> */}
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
