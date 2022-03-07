import React from 'react';
import logo from '../../image/logo-2.png';
import profile from '../../image/rc.png';


export default function Navbar() {
  return <div>
    <nav class="sb-topnav navbar navbar-expand navbar-light bg-dark">
      <img style={{ width: "200px", padding: "10px" }} src={logo} alt="" />
      <button className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><i className="fas fa-bars navbar-logo"></i></button>
      <form class="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
        <div class="input-group">

        </div>
      </form>
      <div class="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
        <img className="profile" style={{ width: "50px", padding: "10px", borderRadius:'50%' }} src={profile} alt="" />
        <button type="button" class="btn btn-light"> Gulshan</button>
      </div>
    </nav>
  </div>;
}
