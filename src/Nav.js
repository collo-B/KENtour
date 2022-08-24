import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


// import EventForm from './EventForm';

function NavbarHead() {
  return (
    
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand column="lg" lg={2} href="#home">The adventure</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link to='/'>Home</Nav.Link>
            <Nav.Link to="/event-formt" onClick={addForm()}>Add Events</Nav.Link>
            {/* <Nav.Link to="pricing" href="#pricing">Pricing</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>

     
  
  );
}
function addForm(){
    console.log("clikked");
    // <EventForm/>
}

export default NavbarHead;