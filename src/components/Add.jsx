import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addContactApi } from '../../allApi';
import { toast } from 'react-toastify';

function Add() {
  const [show, setShow] = useState(false);
 const [contact,setContact]=useState({
  name:"",mobilenumber:"",email:""
  
})

const handleAdd=async()=>{
  console.log(contact)
  const {name,mobilenumber,email}=contact
  if(!name || !mobilenumber || !email){
    toast.warning("enter valid input!!")
  }
  else{
    const result=await addContactApi(contact)
    if(result.status==201){
      toast.success("Uploaded Succeccfully!!")
      setContact({
        name:"",mobilenumber:"",email:""
      })
      handleClose()
    }
    else{
      toast.error("Uploading failed!!")
      console.log(result)
    }
   
    
  }
}
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <button className='btn' onClick={handleShow}>
        <i className="fa-solid fa-user-plus fa-2xl " style={{ color: "#fcfcfd", }} />
      </button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className='btn btn-light'>
        <Modal.Header closeButton>
          <Modal.Title>Add New Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body className='btn btn-light'>
          <div>
            <FloatingLabel controlId="floatingtitle" label="Conatct Name " className="mb-3" >
              <Form.Control type="text" onChange={(e)=>(setContact({...contact,name:e.target.value}))} placeholder="Enter the Name" />
            </FloatingLabel>
            <FloatingLabel controlId="floatinginput" label="Conatct Number" className="mb-3" >
              <Form.Control type="text"  onChange={(e)=>(setContact({...contact,mobilenumber:e.target.value}))} placeholder="Enter the Number" />
            </FloatingLabel>
            <FloatingLabel controlId="floatinginput" label="Email adress" className="mb-3" >
              <Form.Control type="text"  onChange={(e)=>(setContact({...contact,email:e.target.value}))}  placeholder="Enter the Email" />
            </FloatingLabel>
           

          </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={(handleAdd)}>ADD</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add