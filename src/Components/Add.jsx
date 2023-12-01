import React, { useState } from 'react'
import { MDBInput } from 'mdb-react-ui-kit';
import { MDBBtn } from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';



function Add() {

  const navigate = useNavigate('')

  const [id, setId] = useState('')
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [designation, setDesignation] = useState('')
  const [salary, setSalary] = useState('')

  const handleAdd = async (e) => {
    const body = { id, name, age, designation, salary }
    const response = await axios.post('http://localhost:8000/addEmployee', body).then((response) => {

      console.log(response);

      alert(response.data.message)
      navigate('/')
      console.log(id, name, age, designation, salary);
    })
      .catch((error) => {
        alert("Enter a unique employee id")
      })

  }

  // console.log(id);
  return (
    <>
      <div className="container">
        <h3 style={{ fontFamily: ' Monoton', color: "#146EBE" }} className='text-center m-4'>Add Employee</h3>
         <div className="row">
          <div className="col-6 mt-4">
          <div className="from">
          <div className='w-55' >
            <MDBInput onChange={(e) => setId(e.target.value)} label='id' id='formControlLg' type='text' size='lg' />
            <br />
            <MDBInput onChange={(e) => setName(e.target.value)} label='Name' id='formControlLg' type='text' size='lg' />
            <br />
            <MDBInput onChange={(e) => setAge(e.target.value)} label='Age' id='formControlLg' type='text' size='lg' />
            <br />
            <MDBInput onChange={(e) => setDesignation(e.target.value)} label='Designation' id='formControlLg' type='text' size='lg' />
            <br />
            <MDBInput onChange={(e) => setSalary(e.target.value)} label='Salary' id='formControlLg' type='text' size='lg' />
            <br />
            <div className='d-flex justify-content-around my-2 mb-4'>
              <Link to={'/'}><MDBBtn>Back</MDBBtn></Link>
              <MDBBtn onClick={(e) => handleAdd(e)}>Add</MDBBtn>
            </div>
          </div>
        </div>
          </div>
          <div className="col-6">
            <img style={{width:'450px'}} src="https://assets-global.website-files.com/645e0db731041ad57de707f5/64b8f9ada313a2830641453f_grove-hr-employee-management-software-p-800.webp" alt="" />
          </div>
         </div>
      </div>
    </>
  )
}

export default Add