import React from 'react'
import {Row,Col} from 'react-bootstrap'
import Add from '../components/Add'
import AllContact from '../components/AllContact'


function Dashboard() {
  return (
    <>
    <div className='container-fluid p-2'>
    <h2>Contact</h2>
    <Row>
      <Col md={1}>
      <Add/>
    
      </Col>
      <Col md={8}>
      <AllContact/>
      </Col>
      
    </Row>
    
    </div>
    </>
  )
}

export default Dashboard