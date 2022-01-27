import React from 'react';
import { useNavigate } from 'react-router-dom';
import { removeUserSession, getUser } from '../Utils/Common';
import { Button, Card, Modal } from 'react-bootstrap';

const AppointmentList = () => {
    const navigate = useNavigate();
    const user = getUser(); 
  
    const handleLogout = () => {
      removeUserSession();
      navigate('/login');
    }
  
  
    const renderPosts = async (term) => {
      let container = document.querySelector('#appointments');
      let uri = 'http://localhost:8000/appointments';
      if (term) {
        uri += `&q=${term}`
      }
  
      const res = await fetch(uri);
      const posts = await res.json();
  
  
      let template = '';
      posts.forEach(post => {
        template += `
          <div className="post">
            <h2>${post.name} </h2>
            
            <a href="/appointments?id=${post.id}">View Complete Details</a>
          </div>
        `
      });
  
      container.innerHTML = template;
  
    }
  
    const handleSearch = async (e) => {
      e.preventDefault();
      const searchForm = document.querySelector('.search');
      renderPosts(searchForm.term.value.trim());
    }
  
    window.addEventListener("DOMContentLoaded", () => renderPosts());
  
  
  
    return (
      <div>
        Welcome to the AppointmentList, {user.name}! <br /><br />
  
        <Modal.Dialog>
  <Modal.Header >
    <Modal.Title>Appointments details</Modal.Title>
  </Modal.Header>

  <Modal.Body>
    <p>Ravi </p>
    <p>Cardiologist</p>
    <p>10.30 am</p>
    <p>fees paid</p>
  </Modal.Body>

  <Modal.Footer>
    <Button variant="danger">Cancel</Button>
    <Button variant="primary">View</Button>
  </Modal.Footer>
</Modal.Dialog>
  
      </div>
    );
  }
  
  export default AppointmentList;
  