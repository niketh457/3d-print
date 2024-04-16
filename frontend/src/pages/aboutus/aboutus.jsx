import React,{useState,useRef,useEffect} from "react";
import niketh from "../../assets/img/Niketh.jpeg"
import pranav from "../../assets/img/Pranav.jpeg"
import sanjana from "../../assets/img/Sanjana.jpeg"
import saipavan from "../../assets/img/Sai Pavan.jpeg"
import havish from "../../assets/img/Havish.jpeg"
import bioprinting from "../../assets/img/bioprinting.jpeg"


import './aboutus.css'
import DarkFooter from "components/Footers/DarkFooter";
import Navbars from "views/index-sections/Navbars";


function Aboutus(){
  

  
  return (
    <>
  {/* <nav>
    <div class="nav-content">
      <div class="logo">
        <a href="#">About Us</a>
      </div>
      <ul class="nav-links">
        <li><a href="/index">Home</a></li>
        <li><a href="/aboutus">About Us</a></li>
      </ul>
    </div>
  </nav> */}
  <Navbars/>


<div class="containerxx bg-gradient-to-r from-blue-500 to-purple-600">
  <div class="section">
      <div class="content">
          <h1>Revolutionizing Bioprinting</h1>
          <h3>A Slicing-Free Approach with STL to G-code Conversion</h3>
      </div>
      {/* <img src={bioprinting} alt="Image Description"/> */}
      {/* <div className="containeri">
      <div className="image-container">
        <img src={bioprinting} alt="Image Description" className="image" />
        <div className="border-line"></div>
      </div>
     
    </div> */}
    <div class="cardam">
      <img src={bioprinting} alt="Image Description" className="image" />

</div>
  </div>
  <div class="section2">
      <div class="content">
          <h1>OUR STORY</h1>
          <h3>Welcome to the forefront of bioprinting innovation! Our story revolves around a groundbreaking approach to bioprinting that challenges traditional methodologies. We've pioneered a revolutionary solution that bypasses slicing altogether, streamlining the process from digital design to tangible reality.</h3>
      </div>
  </div>
  <div class="section2">
      <div class="content">
          <h1>Background</h1>
          <h3>Traditional bioprinting typically involves slicing 3D digital models into layers (slices) and then translating these slices into G-code instructions for the bioprinter. While effective, this process often poses limitations in terms of precision, speed, and material integrity. Additionally, slicing can be time-consuming and may compromise the fidelity of delicate biological structures.</h3>
      </div>
  </div>
  <div class="section2">
  <div class="content">
      <h1>Our Innovation</h1>
      <h3>Enter our pioneering solution: a slicing-free approach to bioprinting. By leveraging advanced algorithms and computational techniques, we've developed a method that directly converts STL files – a common format for 3D models – into G-code instructions suitable for bioprinting. This streamlined workflow eliminates the need for slicing, preserving the integrity of complex biological structures and enhancing printing efficiency.</h3>
  </div>
  </div>
  

  <div class="section2">
    <div class="content">
        <h1>Impact and Potential</h1>
        <h3>Our slicing-free approach has the potential to revolutionize the field of bioprinting, unlocking new possibilities for research, innovation, and clinical practice. By streamlining the workflow and preserving biological integrity, we empower researchers, clinicians, and biotechnologists to push the boundaries of what's possible in tissue engineering and regenerative medicine.
        </h3>
    </div>
    </div>

    <div class="section2">
      <div class="content">
          <h1>Conclusion</h1>
          <h3>Join us on this transformative journey as we reshape the landscape of bioprinting. Whether you're a researcher pushing the boundaries of science or a clinician striving to improve patient outcomes, our slicing-free approach promises to elevate your work to new heights. Together, let's redefine the future of bioprinting, one STL to G-code conversion at a time.</h3>
      </div>
      </div>

</div>
{/* </div> */}

<div class="container2">
<h1>Key Features</h1>
  <div></div>
    <div class="box box-cyan box-push">
      <h2 class="box-cyan">Preservation of Biological Integrity</h2>
      <p>Our slicing-free approach ensures that biological structures remain intact throughout the printing process, minimizing the risk of deformation or damage.</p>
    </div>

    <div class="box box-red">
      <h2 class="box-red">Enhanced Precision and Speed</h2>
      <p>By bypassing slicing, we optimize printing efficiency and achieve unparalleled precision, enabling faster turnaround times without sacrificing quality.</p>
    </div>
    
    <div class="box box-blue">
      <h2 class="box-blue">Versatility and Adaptability</h2>
      <p>Our solution accommodates a wide range of bioprinting applications, from tissue engineering to organ regeneration, offering versatility and adaptability to diverse research and clinical needs.</p>
    </div>

    <div class="box box-orange">
      <h2 class="box-orange">Preservation of Biological Integrity</h2>
      <p>Our slicing-free approach ensures that biological structures remain intact throughout the printing process, minimizing the risk of deformation or damage.</p>
    </div>

</div>

<div class="heading">

<h1>OUR TEAM</h1>
</div>

<div class="wrapper">
  <i id="left" class="fa-solid fa-angle-left"></i>
  <ul class="carousell">
    <li class="card portcard">
      <div class="img"><img src={niketh} alt="img" draggable="false" /></div>
      <h2>NIKETH</h2>
      <span>Sales Manager</span>
    </li>
    <li class="card portcard">
      <div class="img"><img src={sanjana} alt="img" draggable="false" /></div>
      <h2>SANJANA</h2>
      <span>Web Developer</span>
    </li>
    <li class="card portcard">
      <div class="img"><img src={pranav} alt="img" draggable="false" /></div>
      <h2>PRANAV</h2>
      <span>Online Teacher</span>
    </li>
    <li class="card portcard">
      <div class="img"><img src={saipavan} alt="img" draggable="false" /></div>
      <h2>SAI PAVAN</h2>
      <span>Freelancer</span>
    </li>
    <li class="card portcard">
      <div class="img"><img src={havish} alt="img" draggable="false" /></div>
      <h2>HAVISH</h2>
      <span>Bank Manager</span>
    </li>
   
  </ul>
  <i id="right" class="fa-solid fa-angle-right"></i>
</div>

<div class="info">
  <div class="section3">
    <div class="content2">
        <h1>WHAT IS BIO-PRINTING?</h1>
        <h3>Bioprinting is an emerging technology that involves  deposition of living cells, biomaterials, and bioactive molecules to create complex, three-dimensional tissues or organ-like structures. It holds great promise in various fields, including regenerative medicine, tissue engineering, drug discovery, and personalized medicine. </h3>
    </div>
  </div>

  <div class="section4">
    <div class="content3">
      <h1>Principles of Bioprinting</h1>
      <h3>Bioprinting follows similar principles to traditional 3D printing but with bioinks instead of conventional printing materials. Bioinks are formulations containing living cells, biomaterials (such as hydrogels or polymers), and growth factors.</h3>
      <h3> Bioprinters precisely deposit these bioinks layer by layer to create 3D structures, mimicking the natural architecture of tissues and organs.</h3>
      <br />
    </div>
  </div>


  <div class="section4">
    <div class="content3">
      <h1>Types of Bioprinting</h1>
      <h3>Extrusion-based Bioprinting : Uses pneumatic or mechanical forces to extrude bioinks through a nozzle, allowing for high cell densities and versatility in materials.</h3>
      <h3>Inkjet-based Bioprinting : Operates similarly to traditional inkjet printing, where droplets of bioink are ejected onto a substrate. It's suitable for high-resolution printing but may have limitations in cell viability.</h3>
      <h3>Laser-based Bioprinting : Utilizes lasers to precisely deposit cells or biomaterials onto a substrate, enabling high-resolution printing but often limited by the type of materials that can be used.</h3>
      <br />
    </div>
  </div>

  <div class="section4">
    <div class="content3">
      <h1>Applications of Bioprinting</h1>
      <h3>Tissue Engineering and Regenerative Medicine : Bioprinted tissues and organs can potentially be used for transplantation or in vitro models for drug testing and disease modeling.</h3>
      <h3>Drug Discovery and Development : Bioprinted tissues can provide more accurate representations of human physiology for drug screening, reducing reliance on animal models and improving the efficiency of drug development.</h3>
      <h3>Personalized Medicine : Bioprinting enables the creation of patient-specific tissues and organs, allowing for tailored treatments and therapies.
      </h3>
      <br />
    </div>
  </div>

  <div class="section4">
    <div class="content3">
      <h1>Challenges and Future Directions</h1>
      <h3>Cell Viability and Functionality : Maintaining cell viability and functionality throughout the bioprinting process remains a significant challenge.</h3>
      <h3>Biocompatibility and Materials Development : Developing biomaterials that are compatible with bioprinting processes and mimic the extracellular matrix of native tissues is an ongoing area of research.</h3>
      <h3>Scale-Up and Commercialization : Scaling up bioprinting processes for mass production and commercialization while ensuring regulatory compliance and safety is a key challenge for the field.</h3>
      <br />
    </div>
  </div>

  <div class="section4">
    <div class="content3">
      <h1>Distinctive Features of our Website</h1>
      <h3>Our website offers a unique solution by seamlessly converting STL files into G-code format, specifically tailored for directing the nozzle of a bioprinter. Unlike conventional methods employed by well-known platforms like Ultimaker Cura, which utilize a slicing approach performed layer by layer, our approach transcends slicing. By eschewing slicing, we streamline the process, enhancing efficiency and precision. This innovative methodology not only simplifies the workflow but also ensures optimal output quality, setting us apart as a superior choice for bioprinting endeavors.</h3>
    </div>
  </div>

</div>
<DarkFooter/>
    </>
  );
}
export default Aboutus;