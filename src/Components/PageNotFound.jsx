import React from 'react'
import { MDBBtn } from 'mdb-react-ui-kit';
function PageNotFound() {
  return (
    <div>
        <div className="container">
            <div className="row">
                <img style={{width:'100%', height:'500px'}} src="https://cdn.dribbble.com/users/1175431/screenshots/6188233/404-error-dribbble-800x600.gif" alt="" />
                 <div >
                 <MDBBtn to=''>Home</MDBBtn>
                 </div>
            </div>
        </div>
    </div>
  )
}

export default PageNotFound