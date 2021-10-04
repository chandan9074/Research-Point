// import pakaged
import React from 'react';
import useCourse from '../../hook/useCourse';
import Navbar from '../Navbar/Navbar';


const ServicePage = () => {
    const [course] = useCourse();
    
    return ( 
        <div>
            <Navbar></Navbar>
            
            <section>

            </section>
        </div>
     );
}
 
export default ServicePage;