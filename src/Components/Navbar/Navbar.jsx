// import pakages
import React from 'react';
import {
  Link
} from "react-router-dom";

// import files 
import './navbar.css';
const Navbar = () => {
    return ( 
        <nav className="flex justify-between py-6 navbar-part text-gray-200">
            <div className="ml-32 text-3xl font-bold">
                <h2 className="research-title">Research Ponit</h2>
            </div>
            <div>
                <Link to="/">
                    <button className="text-xl font-semibold mr-10">Home</button>
                </Link>        
                <Link to="/about">
                    <button className="text-xl font-semibold mr-10">About</button>
                </Link>        
                <Link to="/services">
                    <button className="text-xl font-semibold mr-10">Services</button>
                </Link>        
                <Link to="/activity">
                    <button className="text-xl font-semibold mr-32">Activities</button>
                </Link>        
            </div>
        </nav>
     );
}
 
export default Navbar;