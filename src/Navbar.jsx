import React from 'react'
import {NavLink} from 'react-router-dom';
import './Navbar.css';
function Navbar() {
    return (
        <div>
    <div className="container-fluid ">
        <div className="row">
            <div className="col-xl-11 col-lg-12 col-sm-12 col-md-12  mx-auto">

  
    <nav className="navbar navbar-expand-xl navbar-dark bg-dark">
  <NavLink className="navbar-brand" to="#">
      <img className="img" src="https://www.ansible.com/hubfs/Logo-Red_Hat-Ansible-A-Reverse-SVG.svg" />
  </NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ">
      <li className="nav-item ">
      <a className="nav-link "  role="button" data-toggle="collapse" aria-expanded="false" data-target="#collapseExample"  aria-controls="collapseExample">
          OVERVIEW
        </a>


    
        
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="#">PRODUCTS</NavLink>
        
      </li>

      <li className="nav-item">
        <NavLink className="nav-link " to="#">LEARN</NavLink>
      </li>

      <li className="nav-item">
        <NavLink className="nav-link" to="#">COMMUNITY</NavLink>
      </li>

      <li className="nav-item d-xl-block d-none">
        <NavLink className="nav-link free" to="#">FREE TRIAL</NavLink>
      </li>



    </ul>
  </div>

  
</nav>



</div>


        </div>
    </div>

                <div className="collapse coll" id="collapseExample">
                  <div className="card card-body c">
                
                  <NavLink className="nav-link" to="#">Why Ansible?</NavLink>
              

                  <p className="nav-link">Ansible delivers simple IT automation that ends repetitive tasks and frees up DevOps teams for more strategic work.</p>
                
                  <NavLink className="nav-link" to="#">How Ansible Works</NavLink>
                  <NavLink className="nav-link" to="#">Ansible Automation Platform</NavLink>
                </div>

                <div className="v1"></div>
                <div className="card card-body c">
                      
                          <NavLink className="nav-link" to="#">Use Cases</NavLink>
                          <NavLink className="nav-link" to="#">Provisioning</NavLink>
                          <NavLink className="nav-link" to="#"> Configuration Management</NavLink>
                          <NavLink className="nav-link" to="#"> Continuous Delivery</NavLink>
                          <NavLink className="nav-link" to="#">Security Automation</NavLink>
                          <NavLink className="nav-link" to="#"> Orchestration</NavLink>
                          <NavLink className="nav-link" to="#">How Ansible Works</NavLink>
                              
                              </div>
                    <div className="v1"></div>
                <div className="card card-body c">
                  
                        <NavLink className="nav-link" to="#">Integrations</NavLink>
                        <NavLink className="nav-link" to="#">Infrastructure</NavLink>
                        <NavLink className="nav-link" to="#"> Networks</NavLink>
                        <NavLink className="nav-link" to="#"> Containers</NavLink>
                        <NavLink className="nav-link" to="#"> Cloud</NavLink>
                        <NavLink className="nav-link" to="#">DevOps Tools</NavLink>
                        <NavLink className="nav-link" to="#"> Security</NavLink>  


                </div>
                  </div>


        </div>
    )
}

export default Navbar
