//import pakages
import React from 'react';

//import files
import not_found from './images/not-f.png'

const Notfound = () => {
    return ( 
        // not found img 
        <div className=" bg-white w-full flex justify-center items-center">
            <img src={not_found} alt="" />
        </div>
     );
}
 
export default Notfound;