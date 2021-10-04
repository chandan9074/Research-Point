// import pakages
import React from 'react';

// import components
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import hp_img_1 from './images/hp-img-1.png';
import hp_img_2 from './images/hp-img-2.png';
import hp_img_3 from './images/hp-img-3.png';
import './homePage.css';
import useCourse from '../../hook/useCourse';
import HomeService from './HomeService';
import { Link } from 'react-router-dom';

const Homepage = () => {

    // create image slider for homepage welcome part 
    window.onload = function() {
        let image=document.getElementById("hp-slide");
        let img_array = [`${hp_img_2}`, `${hp_img_3}`, `${hp_img_1}`];
        let index=0;
        let interval = 4000;
        function slide() {
            image.src = img_array[index++%img_array.length];
        }
        setInterval(slide, interval);
    }

    // get data from custom hook 
    const [courses] = useCourse();
    const home_service = courses.slice(0, 6);

    return ( 
        <div>
            {/* navbar  */}
            <Navbar />
            {/* welcome part  */}
            <section className="flex justify-around items-center py-8 hp-welcome-part">
                <div className="w-9/12 hp-welcome-left-part">
                    <h1 className="text-5xl font-bold text-gray-200">Research point</h1>
                    <h3 className="text-lg font-semibold text-gray-300 mt-8">Research is a process of systematic inquiry that entails collection of data; documentation of critical information; and analysis and interpretation of that data/information, in accordance with suitable methodologies set by specific professional fields and academic disciplines.</h3>
                    <button className="get-started-btn font-semibold shadow-xl">Get Started</button>
                </div>
                <div className="hp-welcome-right-part">
                    <img id="hp-slide" src={hp_img_1} alt="" className=" " />
                </div>
            </section>
            {/* service part  */}

            <section className="flex flex-col items-center mb-10">
                <div>
                    <h1  className="text-4xl font-bold mt-8">Services</h1>
                </div>
                    <div className="service-underling"></div>
                <div className="grid grid-cols-3 gap-4">
                    {
                        home_service.map(service => <HomeService service={service} />)
                    }
                </div>
                <Link to="/services">
                    <button className="enroll-btn font-semibold shadow-xl">See More</button>
                </Link>
            </section>

            {/* footer part  */}
            <Footer />
        </div>
     );
}
 
export default Homepage;