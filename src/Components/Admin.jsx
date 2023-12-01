import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { MDBBtn } from 'mdb-react-ui-kit';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

import axios from 'axios';

function Admin() {

    const [allEmployees,setEmployees]=useState([])

    const fetchData=async()=>{
        const response=await axios.get('http://localhost:8000/getEmployees')
        console.log(response.data.employee);
        setEmployees(response.data.employee)
    }
    console.log(allEmployees);

    //delete employee
    const deleteEmp=async(id)=>{
        const response=await axios.delete('http://localhost:8000/deleteEmployee/'+id)
        console.log(response);
        alert(response.data.message)
        fetchData()
    }
    useEffect(()=>{
        fetchData()
    },[])


    return (
        <div className='container'>
            <h1  style={{fontFamily:' Monoton',color:"#146EBE"}}   className='text-center m-3'>Employee Management System</h1>
            <p style={{ textAlign: 'justify' }}>Employee management is a practice that helps a manager improve employee productivity and satisfaction to help an organisation reach its goals. Human resources (HR) professionals often use an employee management system (EMS), including recruitment, offboarding and performance management. Using a dedicated EMS can help an HR manager streamline the hiring process and improve workplace efficiency. In this article, we discuss what an employee management systems is, outline its benefits and types and list some examples of employee management software tools.</p>
            <Link to={'/add'}>
                <MDBBtn className='my-3' > <i class="fa-solid fa-user-plus mx-2"></i>Add</MDBBtn>
            </Link>
            <div className="table my-5">
                <MDBTable>
                    <MDBTableHead>
                        <tr>
                            <th style={{color:"#146EBE"}}  scope='col'>No</th>
                            <th style={{color:"#146EBE"}} scope='col'>Name</th>
                            <th style={{color:"#146EBE"}} scope='col'>Age</th>
                            <th style={{color:"#146EBE"}} scope='col'>Designtion</th>
                            <th style={{color:"#146EBE"}} scope='col'>Salary</th>
                            <th style={{paddingLeft:'250px',color:"#146EBE"}}  scope='col'>Actions</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        {
                            allEmployees.map((item)=>(
                                <tr>
                                <th scope='row'>{item.id}</th>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                  
                                <td>{item.designation}</td>
                                <td>{item.salary}</td>
                                <td>
                                <div className='d-flex justify-content-around '>
                                    <Link to={'edit/'+item.id}>
                                    <button className='btn'>
                                    <i style={{color:'green'}} class="fa-solid fa-pen"></i>
                                    </button>
                                    </Link>
                                    <Link to={'view/'+item.id}>
                                    <button style={{color:'blue'}} className='btn'><i class="fa-solid fa-eye"></i></button>
                                    </Link>
                                   
                                    <button onClick={()=>deleteEmp(item.id)} className='btn'>
                                    <i style={{color:'red'}} class="fa-solid fa-trash"></i>
                                    </button>
                                </div>
                                </td>
                            </tr>
                            ))
                        }

                       
                    </MDBTableBody>
                </MDBTable>
            </div>



        </div>
    )
}

export default Admin