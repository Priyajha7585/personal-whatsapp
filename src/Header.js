import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import "@innovaccer/design-system/css";
import Typing from './Typing';

function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <div className="fixed-top" style={{backgroundColor:"purple" }}>
        <div className='mx-auto' style={{backgroundColor:"green", width: "calc(100vmin)", height:"55px", display:"flex"}}>
            <Image variant="primary" onClick={handleShow}
            id="image" src='https://cdn5.vectorstock.com/i/1000x1000/01/69/businesswoman-character-avatar-icon-vector-12800169.jpg' 
                className='h-100 rounded-circle px-2'
            >
            </Image>
      
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Priya Jha</Modal.Title>
              </Modal.Header>
              <Modal.Body>

              <img variant="primary"
              src='https://cdn5.vectorstock.com/i/1000x1000/01/69/businesswoman-character-avatar-icon-vector-12800169.jpg' 
              className='h-100 w-100'
              />

              </Modal.Body>
            </Modal>
            <div className="d-flex flex-column">
            <h4 className='pb-0 mb-0'>Priya Jha</h4>
            <Typing />
            </div>
        </div>
    </div>
    </>
    
  )
}

export default Header