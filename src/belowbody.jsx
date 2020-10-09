import React from 'react'
import './belowbody.css';
import { Button } from 'react-bootstrap';
function belowbody() {
    return (
        <div className=" container-fluid  bg">
            <div className="row body">
                <div className="col-xl-10 col-sm-12 mx-auto">
              <h1>AnsibleFest 2020 </h1>
              <h1> Automate to connect</h1>
              <p>Join us as we take AnsibleFest online. Automate to connect, connect to collaborate, collaborate to innovate with more Ansible users than ever before.</p>
              <Button className="b1">
            Learn More
           </Button>
              <Button className="b2">View Session Catalog</Button>
            </div>
            </div> 
        </div>
    )
}

export default belowbody
