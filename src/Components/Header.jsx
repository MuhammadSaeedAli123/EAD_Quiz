import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import image from '../Assets/image.PNG'
import { Link } from 'react-router-dom';

const Header = () =>  {
  return (

   <div className='row'>
            
    <div className="container col-sm-12 col-md-12 col-lg-6">

    <img height={100} src={image} alt="" />

    </div>
    <div className="container col-sm-12 col-md-12 col-lg-6">
    <Navbar expand="lg" className="  bg-white">
 
      <Container>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link style={{textDecoration: 'none'}} className={"text-black"} to={"/"}>Home</Link></Nav.Link>
            <Nav.Link><Link style={{textDecoration: 'none'}} className={"text-black"} to={"/offering"}>Menu</Link></Nav.Link>
            <Nav.Link><Link style={{textDecoration: 'none'}} className={"text-black"} to={"/aboutus"}>AboutUs</Link></Nav.Link>
            <Nav.Link ><Link style={{textDecoration: 'none'}} className={"text-black"} to={"/contactus"}>contact</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </div>

    </div> 
  );
}

export default Header;