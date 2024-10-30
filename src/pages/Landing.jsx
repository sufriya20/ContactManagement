import React from 'react'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <div  className="container-fluid w-100 d-flex  justify-content-center align-items-center " style={{ height: '100vh' }}>
    <Link to={'/dash'} className='d-flex btn btn-lg text-center m-2'>
    <img className='' src="https://media.tenor.com/CQBOfwgNmjsAAAAj/new-new-post.gif" 
    alt="" />
    </Link>
   </div>
  )
}

export default Landing