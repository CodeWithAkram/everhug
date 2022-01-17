import React from 'react';
import { Navbar, Container, Nav, NavDropdown, Figure } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';

const Menu = () => {
    return (
        <>
            <section className="navbar-bg">
                <Navbar expand="lg">
                    <Container>
                        <Navbar.Brand as={Link} to={"/"}>
                            <Figure>
                                <Figure.Image
                                    width={180}
                                    height={60}
                                    alt="171x180"
                                    src="images/logo1.png"
                                />
                            </Figure>
                        </Navbar.Brand>

                        <section>
                            <span className='facebook'><a href="#"><i className="fab fa-facebook"></i></a></span>
                            <span className='linkedin'><a href="#"><i class="fab fa-linkedin"></i></a></span>
                            <span className='youtube'><a href="#"><i class="fab fa-youtube"></i></a></span>
                            <span className='twitter'><a href="#"><i class="fab fa-twitter"></i></a></span>
                            <span className='skype'><a href="#"><i class="fab fa-skype"></i></a></span>
                            <span className='gplus'><a href="#"><i class="fab fa-google-plus"></i></a></span>
                            <span className='pinterest'><a href="#"><i class="fab fa-pinterest"></i></a></span>
                        </section>

                        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto">
                                <Nav.Link as={NavLink} to={"/"}>Home</Nav.Link>
                                <Nav.Link as={NavLink} to={"/about"}>About Us</Nav.Link>

                                <NavDropdown title="Global Destinations" id="basic-nav-dropdown">
                                    <NavDropdown.Item as={NavLink} to={"/india"}>India</NavDropdown.Item>
                                    <NavDropdown.Item as={NavLink} to={"/nepal"}>Nepal</NavDropdown.Item>
                                    <NavDropdown.Item as={NavLink} to={"/bhutan"}>Bhutan</NavDropdown.Item>
                                    
                                    <NavDropdown.Item as={NavLink} to={"/dubai"}>Dubai</NavDropdown.Item>
                                    <NavDropdown.Item as={NavLink} to={"/srilanka"}>Sri Lanka</NavDropdown.Item>
                                    <NavDropdown.Item as={NavLink} to={"/bangladesh"}>Bangladesh</NavDropdown.Item>
                                </NavDropdown>

                                <Nav.Link as={NavLink} to={"/ourservices"}>Services</Nav.Link>
                                <Nav.Link as={NavLink} to={"/contact"}>Contact Us</Nav.Link>
                            </Nav>
                        </Navbar.Collapse> */}
                    </Container>
                </Navbar>
            </section>
        </>
    );
}

export default Menu;