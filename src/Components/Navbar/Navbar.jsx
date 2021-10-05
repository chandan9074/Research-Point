// import pakages
import React from 'react';
import {
  Link
} from "react-router-dom";

// import files 
import './navbar.css';
const Navbar = () => {
    return ( 
        <nav className="flex justify-between items-center py-6 navbar-part text-gray-200">
            <div className="ml-32 text-5xl font-bold">
                <Link to="/">
                    <h2 className="research-title">Research Point</h2>
                </Link>
            </div>
            <div className="flex items-center">
                <Link to="/" className="flex flex-col items-center mr-10 ">
                    <button className="text-xl font-semibold nav-btn">Home</button>
                </Link>        
                <Link to="/about" className="flex flex-col items-center mr-10">
                    <button className="text-xl font-semibold nav-btn">About</button>
                </Link>        
                <Link to="/services" className="flex flex-col items-center mr-10">
                    <button className="text-xl font-semibold nav-btn">Services</button>
                </Link>        
                <Link to="/activity" className="flex flex-col items-center mr-10">
                    <button className="text-xl font-semibold nav-btn">Activities</button>
                </Link>        
            </div>
        </nav>
     );
}
 
export default Navbar;