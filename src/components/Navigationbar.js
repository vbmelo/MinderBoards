import { Nav, Navbar, NavLink, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigationbar = () =>{
    return (
        <Navbar bg="#2cb3d3" variant="dark" expand="lg" sticky="top" className="navbar_light">
            <Container>
                <Navbar.Brand href="https://minder-pt.netlify.app/dashboard">
                    <img 
                        src="/assets/MinderM.png"
                        className='d-inline-block'
                        width={50}
                        height={40}
                        layout='fixed'
                        alt='MinderLogoM'
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Dashboard</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Logout</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Username</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#home">Username</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
                
        </Navbar>
    );
}

export default Navigationbar;