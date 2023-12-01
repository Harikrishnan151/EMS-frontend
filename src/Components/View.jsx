import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardHeader,
  MDBCardFooter,
  MDBCardImage,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import { MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';
import { MDBBtn } from 'mdb-react-ui-kit';

function View() {

  const {id}=useParams()
  console.log(id);

  const [user,setUser]=useState('')




  const fetchData=async()=>{
   const response=await axios.get('http://localhost:8000/getEmployee/'+id)
    console.log(response.data.employee);
    setUser(response.data.employee)
   
  }
  console.log(user);
 
  useEffect(()=>{
    fetchData()
  },[])
  return (
    <div>

<div className="container">
        <h3 style={{fontFamily:' Monoton',color:"#146EBE"}} className='text-center m-4'>View Employee</h3>
        <div className='my-5' >

          <div className="row">
            <div  className="col-6">

            <MDBCardImage style={{width:'350px',marginLeft:'80px'}} src='https://static-00.iconduck.com/assets.00/user-icon-512x512-x23sj495.png' alt='...' fluid />

            </div>
            <div className="col-6 mt-3" style={{marginLeft:'-80px'}}>
       <MDBCard style={{width:'500px'}}>
      <MDBCardHeader>Employee Details</MDBCardHeader> <br />
      <MDBListGroup flush>
        <MDBListGroupItem>Name : {user.name}</MDBListGroupItem> <br />
        <MDBListGroupItem>Age :{user.age}</MDBListGroupItem> <br />
        <MDBListGroupItem>Designation : {user.designation}</MDBListGroupItem> <br />
        <MDBListGroupItem>Salary : {user.salary}</MDBListGroupItem><br />
      </MDBListGroup>
    </MDBCard>

            </div>
          </div>


       
    <div className='my-5' style={{marginLeft:'560px'}}>
    <Link to={'/'}><MDBBtn>Back</MDBBtn></Link> 
    </div>  
    </div>
    </div>
    </div>
  )
}

export default View

