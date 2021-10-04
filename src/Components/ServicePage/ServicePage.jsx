// import pakaged
import React from 'react';
import useCourse from '../../hook/useCourse';

// import files
import Navbar from '../Navbar/Navbar';
import AllServices from './AllServices';


const ServicePage = () => {
    const [course] = useCourse();

    return ( 
        <div>
            <Navbar></Navbar>
            
            <section className="grid grid-cols-2 gap-10 p-10">
                {
                    course.map(services=> <AllServices services={services} />)
                }
            </section>
        </div>
     );
}
 
export default ServicePage;