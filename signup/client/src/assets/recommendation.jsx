

import React from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './recommendation.css'
const Recommendation = () => {
  const navigate=useNavigate();
const skip=()=>{
    navigate('/Workerdetails');
}
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
    <button className='fixed  left-1/2 transform -translate-x-1/2 bg-white-500 text-black px-4 py-2 rounded' onClick={skip}>Skip</button>
    <div className='jobvideos'>
    <img src=" https://img.freepik.com/free-vector/blue-green-patterned-background-vector_53876-77850.jpg?w=740&t=st=1727810424~exp=1727811024~hmac=3c3074d588faa6249b078b8117707e94c5669e767428d327b2c01cb950aa0901
  " alt="" />
  </div>
   
  </>
);
}
export default Recommendation;
