// import pakaged
import React from 'react';
import useCourse from '../../hook/useCourse';
import Footer from '../Footer/Footer';

// import files
import Navbar from '../Navbar/Navbar';
import AllServices from './AllServices';


const ServicePage = () => {
    // get data from custom hooks 
    const [course] = useCourse();

    return ( 
        <div>
            {/* navbar  */}
            <Navbar></Navbar>
            {/* service page content  */}
            <section className="aboutus-welcome-part pt-20">
                <h1 className="text-3xl text-gray-200 font-bold ml-40">Services</h1>
                <div className="about-underline"></div>
                <h3 className="text-sm text-gray-200 font-bold ml-40">RESEARCH POINT</h3>
            </section>
            
            <section className="grid grid-cols-2 gap-10 p-10 allservice-part">
                {
                    course.map(services=> <AllServices services={services} />)
                }
            </section>

            {/* footer part  */}
            <section className="footer-align">
                <Footer />
            </section>
        </div>
     );
}
 
export default ServicePage;