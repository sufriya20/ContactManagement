import React from 'react'
import AllContactCard from './AllContactCard'
import { getContactApi } from '../../allApi'
import { useState,useEffect } from 'react'


function AllContact({result}) {

  const[data,setData]=useState([])
  const[resp,setResp]=useState({})
  useEffect(()=>{
 getData()
  },[result,resp])

  const getData=async()=>{
    const result=await getContactApi()
    console.log(result)
    if(result.status==200){
      setData(result.data)
    }
  }
  return (
    <>
      <div className='container-fluid border p-2 border-3 border-info shadow m-3 d-flex ' >
    {
      data.length>0 ?
    <div className='row p-2 d-flex justify-content-around m-2 gap-5 '>
      {
        data?.map(item=>(
      <AllContactCard contact={item} res={setResp}/>
        ))
  }
      </div>
      :
      
      <h4 className='text-danger text-center'>No contact available</h4>
    }
      </div>

    </>
  )
}

export default AllContact