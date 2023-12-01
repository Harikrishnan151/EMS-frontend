import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
    <MDBNavbar light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
       <Link to={'main'} style={{textDecoration:'none'}}>
        <h2 style={{fontFamily:' Monoton',color:"#146EBE",textDecoration:'none'}}> <i class="fa-solid fa-handshake fa-xl mx-2"></i>EMS</h2>
        </Link>
          </MDBNavbarBrand>
          <Link style={{textDecoration:'none'}}  to={'/'}>
          <span style={{textDecoration:'none'}} className='mx-5'><i class="fa-solid fa-user-tie mx-2"></i>Admin</span>
          </Link>
    
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header