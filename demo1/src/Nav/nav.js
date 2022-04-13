import React from 'react'
import './nav.css';
import {Link} from "react-router-dom";
import { Context } from "../context/Context";
import { useContext } from "react";

function Nav() {
  const {user, dispatch} = useContext(Context);
  
  const handleLogout = () => {
    console.log("0in logout")
    dispatch({type: "LOGOUT"})
  }
  return (


    <nav className="navbar navbar-expand-lg navbar-light nav-wrappp">
      <Link className="navbar-brand website-heading" href="#" style={{color: "white", fontSize: "30px", fontWeight: "bold", fontStyle: "italic", }}>GoEvents</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active light">
            <Link className="nav-link nav-linkkk" style={{color: "rgb(180, 178, 178)"}} to="/">Home <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link nav-linkkk" to="/eventlink" style={{color: "rgb(180, 178, 178)"}}>Events</Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link nav-linkkk" to="/aboutUs" style={{color: "rgb(180, 178, 178)"}}>About Us</Link>
          </li>
          <li className="nav-item active">
            {/* <Link className="nav-link" to="#footer" style={{color: "rgb(180, 178, 178)"}}>Contact Us</Link> */}
            <a className="nav-link nav-linkkk" href="#footer" style={{color: "rgb(180, 178, 178)"}}>Contact Us</a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <button className="btn btn-outline-success my-2 my-sm-0 nav-login" type="submit" style={{color: "white"}} onClick={handleLogout} to="/login">
           
            {/* LOGIN */}
            {user ?   
            <Link className="nav-login" to="/login">{user && "LOGOUT"}</Link>
            : 
              
            <Link className="nav-login" to="/login">Login</Link>
            }
            </button>
        </form>
      </div>
    </nav>
  );
}

export default Nav