import {
  Button,
  Nav,
  Navbar,
  NavDropdown,
  FormControl,
  Form,
  Container,
  Image,
} from "react-bootstrap";
import { useState, useEffect } from "react";
import logo from "../../assets/images/logo2.png";
import vetBadge from "../../assets/images/VeteranOwnedBadge.png";
import accent from "../../assets/images/accentBar.png";
import "./styles.css";

const Navigation = () => {
  const [slideIn, setSlideIn] = useState(false);
  const [user, setUser] = useState(false)
  const [isHomePage, setIsHomePage] = useState(false)



  //american family slide in  accent bar animation in css
  useEffect(() => {
    const timeout = setTimeout(() => {
      setSlideIn(true);
    }, 500); 
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (document.location.pathname === "/") {
      setIsHomePage(true)
    } else {
      setIsHomePage(false)
    }
  })

  return (
    <>
      <Navbar variant="light" className="p-2" collapseOnSelect expand="lg">
        <Navbar.Brand href="/">
          <Image className="logo img img-fluid" src={logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">Shop</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <NavDropdown title="Members" id="collasible-nav-dropdown">
              {user ?  
              <NavDropdown.Item href="/users/signout">Sign Out</NavDropdown.Item>
              :
              <NavDropdown.Item href="/users/signup">Sign Up</NavDropdown.Item>}
              <NavDropdown.Item href="/users/singin">Sign In</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Container className="searchContainer p-md-4">
            <Form className="d-flex">
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2 outline-dark"
              />
              <Button variant="outline-light">Search</Button>
            </Form>
          </Container>
          <Image className="vetBadge d-none d-lg-block" src={vetBadge} />
        </Navbar.Collapse>
      </Navbar>

      <Container className={`mt-4 mt-lg-0 image-container ${slideIn ? "slide-in" : ""}`}>
        <Image className="accentImage" src={accent} />
      </Container>
   
    </>
  );
};

export default Navigation;
