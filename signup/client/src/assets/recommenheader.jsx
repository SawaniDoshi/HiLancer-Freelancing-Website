import React from 'react'
import './recommendation.css'
import { Navbar, Nav, Container } from 'react-bootstrap';
const Recommenheader = () => {
    // const skip=()=>{
    //     navigate('/Workerdetails');
    // }
  return (
    <>
      <Navbar className="custom-dark-blue" variant="dark"  >
    <Navbar.Brand href="/recommendation" className='text-white  ms-4'>Recommendation System</Navbar.Brand>
      <Container >
        
        <Nav className="ms-auto d-flex justify-content-between w-100">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/fetchwebdevelop">Web Development</Nav.Link>
          <Nav.Link href="/datascience">Data Science</Nav.Link>
          <Nav.Link href="/fetchmachine">Machine Learning</Nav.Link>
          <Nav.Link href="#pricing">Soft Skills</Nav.Link>

        </Nav>
       
      </Container>
    </Navbar>
    {/* <button 
  className='fixed left-1/2 transform -translate-x-1/2 bottom-4 bg-blue-500 text-black px-4 py-2 rounded' 
  onClick={skip}>
  Skip
</button> */}

    </>
  )
}

export default Recommenheader
