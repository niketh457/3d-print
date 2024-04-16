import React from "react";
import './nav.css'
// reactstrap components
import {
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col
} from "reactstrap";

// core components

function Navbars() {
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  return (
    <>
      
            
            {/* <Navbar className="navbar-transparent" expand="lg"> */}
            <Navbar className="navv fixed-top" expand="lg" style={{marginBottom:0,position:"sticky"}}>

              <Container>
                <div className="navbar-translate">
                  <NavbarBrand
                    href="/index"
                
                  >
                   <span className="navhead"> STL2GCODE_Converter</span>
                  </NavbarBrand>
                  <button
                    onClick={() => {
                      document.documentElement.classList.toggle("nav-open");
                      setCollapseOpen(!collapseOpen);
                    }}
                    aria-expanded={collapseOpen}
                    className="navbar-toggler"
                    type="button"
                  >
                    <span className="navbar-toggler-bar bar1"></span>
                    <span className="navbar-toggler-bar bar2"></span>
                    <span className="navbar-toggler-bar bar3"></span>
                  </button>
                </div>
                <Collapse isOpen={collapseOpen} navbar>
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                      <NavLink
                        href="/fileUpload"
                       
                      >
                        {/* <i className="fab fa-facebook-square"></i> */}
                        <span className="navlk">Get started</span>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        href="/aboutus"
                       
                      >
                        {/* <i className="fab fa-twitter"></i> */}
                        <span className="navlk">About us</span>
                      </NavLink>
                    </NavItem>
                   
                    <NavItem>
                      <NavLink
                        href="/login-page"
                      
                      >
                        {/* <i className="fab fa-instagram"></i> */}
                        <span className="navlk">Login</span>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        href="/signup-page"
                      
                      >
                        {/* <i className="fab fa-instagram"></i> */}
                        <span className="navlk">Sign-up</span>
                      </NavLink>
                    </NavItem>
                  </Nav>
                </Collapse>
              </Container>
            </Navbar>
          {/* </div>
        </div>
      </div> */}
    </>
  );
}

export default Navbars;
