import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { deleteContactApi } from '../../allApi';
import { toast } from 'react-toastify';
import { editContactApi } from '../../allApi';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';



function Contactcard({contact,res}) {

  const [show, setShow] = useState(false);
  const [updatedContact, setUpdatedContact] = useState({ ...contact });


  const handleDelete = async()=>{
    const result = await deleteContactApi(contact.id)
    if (result.status==200){
      res()
      toast.success("contact removed")
      
  }
}

    const handleEdit = async()=>{
      const result = await editContactApi(contact.id,updatedContact)
      if (result.status==200){
        toast.success("Contact updated");
      
        handleClose()
      }
      else{
        toast.error("Failed to update ");
      }
    }

const handleClose = () => setShow(false);
const handleShow = () => {
    setUpdatedContact({ ...contact });
    setShow(true);
  }

  return (
   <>
   <div className=' d-flex '>
   <Card style={{ width: '18rem' }} className='mb-4' >
     
       
      <Card.Body>
      <ul className='list-group '>
<li className='list-group-item list-group-item-action'>
  Name : <span className='fw-bold'>{contact.name}</span>
</li>
<li className='list-group-item list-group-item-action'>
  Mobile Number : <span className='fw-bold'>{contact.mobilenumber}</span>
</li>
<li className='list-group-item list-group-item-action'>
  Email : <span className='fw-bold'>{contact.email}</span>
</li>
  </ul>



        <Button className='btn btn-light ' onClick={handleDelete}><i className="fa-solid fa-trash-can" style={{color: "#ed071e",}} /></Button>
        <Button  className='btn btn-info ms-3' onClick={handleShow}><i className="fa-solid fa-pen-to-square" style={{color: "#02052c",}} /></Button>
      </Card.Body>
    </Card>
   



    
   <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Contact Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel controlId="floatingname" label="name" className="mb-3">
            <Form.Control
              type="text"
              value={updatedContact.name}
              onChange={(e) => setUpdatedContact({ ...updatedContact, name: e.target.value })}
              placeholder="jerry"
            />
          </FloatingLabel>
          <FloatingLabel controlId="floatingnumber" label=" mobilenumber" className="mb-3">
            <Form.Control
              type="tel"
              value={updatedContact.phone}
              onChange={(e) => setUpdatedContact({ ...updatedContact, phone: e.target.value })}
              placeholder="9876555555"
            />
          </FloatingLabel>
          <FloatingLabel controlId="floatingemial" label="email" className="mb-3">
            <Form.Control
              type="tel"
              value={updatedContact.phone}
              onChange={(e) => setUpdatedContact({ ...updatedContact, emial: e.target.value })}
              placeholder="9876555555"
            />
          </FloatingLabel>
       
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
</div>


   </>
  )
}

export default Contactcard