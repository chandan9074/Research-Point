// import pakages
import React from 'react';

// import files
import './footer.css';

const Footer = () => {
    return ( 
        // footer part 
        <div className='footer flex flex-col items-center py-16'>
            <h1 className="text-gray-200 font-bold text-3xl footer-title">Research Point</h1>
            <h3 className="text-xs text-gray-300 font-bold mt-2">Copyright © 2021 Research point</h3>
            <h3 className="text-lg text-gray-300 font-bold mt-2">“No research without action, no action without research”</h3>
        </div>
     );
}
 
export default Footer;