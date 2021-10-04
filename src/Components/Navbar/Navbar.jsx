// import pakages
import React from 'react';
import {
  Link
} from "react-router-dom";

// import files 
import Homepage from '../Homepage/Homepage';
import './navbar.css';
const Navbar = () => {
    return ( 
        <nav className="flex justify-between py-6 navbar-part">
            <div className="ml-32 text-3xl font-bold">
                <h2>Research Ponit</h2>
            </div>
            <div>
                <Link to="/">
                    <button className="text-xl font-semibold mr-10">Home</button>
                </Link>        
                <Link to="/about">
                    <button className="text-xl font-semibold mr-10">About</button>
                </Link>        
                <Link to="/service">
                    <button className="text-xl font-semibold mr-32">Service</button>
                </Link>        
            </div>
        </nav>
     );
}
 
export default Navbar;