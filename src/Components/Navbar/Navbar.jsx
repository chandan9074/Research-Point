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
            <div className="flex">
                <Link to="/" className="flex flex-col items-center mr-10 ">
                    <button className="text-xl font-semibold">Home</button>
                </Link>        
                <Link to="/about" className="flex flex-col items-center mr-10">
                    <button className="text-xl font-semibold">About</button>
                </Link>        
                <Link to="/services" className="flex flex-col items-center mr-10">
                    <button className="text-xl font-semibold">Services</button>
                </Link>        
                <Link to="/activity" className="flex flex-col items-center mr-10">
                    <button className="text-xl font-semibold">Activities</button>
                </Link>        
            </div>
        </nav>
     );
}
 
export default Navbar;