import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { MDBInput } from 'mdb-react-ui-kit';
import { MDBBtn } from 'mdb-react-ui-kit';
import axios from 'axios';


function Edit() {

  const navigate = useNavigate()
  const [anEmployee, setAnEmployee] = useState()
  //create a state for all items in employee object
  const [empid, setEmpId] = useState('')
  const [empName, setName] = useState('')
  const [empAge, setAge] = useState('')
  const [empDesignation, setDesignation] = useState('')
  const [empSalary, setSalary] = useState('')

  const { id } = useParams()
  console.log(id);

  //Api call to fetch particular employee details
  const fetchEmployee = async () => {
    const response = await axios.get('http://localhost:8000/getEmployee/' + id)
    console.log(response.data.employee);
    setAnEmployee(response.data.employee)
    setEmpId(response.data.employee.id)
    setName(response.data.employee.name)
    setAge(response.data.employee.age)
    setDesignation(response.data.employee.designation)
    setSalary(response.data.employee.salary)
  }

  const handleUpdate = async () => {
    //api call to edit particular employee details
    const body = {
      id: empid,
      name: empName,
      age: empAge,
      designation: empDesignation,
      salary: empSalary
    }
    const result = await axios.post('http://localhost:8000/editEmployee/' + id, body)
    console.log(result);
    alert(result.data.message)
    navigate('/')
  }
  console.log(anEmployee);
  console.log(empid, empName, empAge, empDesignation, empSalary);
  useEffect(() => {
    fetchEmployee()
  }, [])
  return (
    <>
      <div className="container">
        <h3 style={{ fontFamily: ' Monoton', color: "#146EBE" }} className='text-center m-4'>Edit Employee</h3>
        <div className="row">

          <div className="col-6">
            <div className="from">
              <div className='w-55' >
                <MDBInput value={empid} onChange={(e) => setEmpId(e.target.value)} label='id' id='formControlLg' type='text' size='lg' />
                <br />
                <MDBInput value={empName} onChange={(e) => setName(e.target.value)} label='Name' id='formControlLg' type='text' size='lg' />
                <br />
                <MDBInput value={empAge} onChange={(e) => setAge(e.target.value)} label='Age' id='formControlLg' type='text' size='lg' />
                <br />
                <MDBInput value={empDesignation} onChange={(e) => setDesignation(e.target.value)} label='Designation' id='formControlLg' type='text' size='lg' />
                <br />
                <MDBInput value={empSalary} onChange={(e) => setSalary(e.target.value)} label='Salary' id='formControlLg' type='text' size='lg' />
                <br />
                <div className='d-flex justify-content-around my-2 mb-4'>
                  <Link to={'/'}><MDBBtn>Back</MDBBtn></Link>
                  <MDBBtn onClick={(e) => handleUpdate(e)} >Update</MDBBtn>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
          <img style={{width:'550px'}} src="https://assets-global.website-files.com/645e0db731041ad57de707f5/64b8f9ae7d93133c39e8596b_grove-hr-employee-records-p-1080.webp" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Edit