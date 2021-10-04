// import pakages
import React from 'react';
import Navbar from '../Navbar/Navbar';
import {
  Link
} from "react-router-dom";

// import files 

import az_logo from "./images/az-logo.png";
import lady_1 from "./images/lady-1.png";
import boy_1 from "./images/boy-1.png";
import br_logo from "./images/br-logo.png";
import offer from "./images/offer.png";
import './activity.css';
import Footer from '../Footer/Footer';


const ActivityPage = () => {
    return ( 
        <div>
            {/* navbar  */}
            <Navbar />

            {/* activity page contents  */}
            <section className="aboutus-welcome-part pt-20">
                <h1 className="text-3xl text-gray-200 font-bold ml-40">Activities</h1>
                <div className="about-underline"></div>
                <h3 className="text-sm text-gray-200 font-bold ml-40">RESEARCH POINT</h3>
            </section>
            <section className="flex flex-col">
                <div>
                    <h1 className="text-4xl font-semibold mt-10 ml-20"> <span className="text-gray-600 font-bold">Upcomming</span> <br /> Webinar</h1>
                </div>
                    <div className="web-underline"></div>
                <div className="flex items-center justify-between web-1-cart">
                    <div className="web-left-part">
                        <h1 className="text-3xl font-bold ">Importance of Market Research and Cognitive Design</h1>
                        <h3 className="text-xl font-bold mt-5">Minsha Singel</h3>
                        <h3 className="text-lg font-semibold">SR PRODUCT MANAGER</h3>
                        <img src={az_logo} alt="" className="w-20 mt-5" />
                        <button className="get-started-btn font-semibold shadow-xl mx-auto">Registration now</button>
                    </div>
                    <div>
                        <img src={lady_1} alt=""  className="lady-1-img"/>
                    </div>
                </div>
                <div className="flex items-center justify-between web-2-cart">
                    <div className="web-left-part">
                        <h1 className="text-3xl font-bold ">Why research design matters 3 pitfalls to avoid</h1>
                        <h3 className="text-xl font-bold mt-5">Jeroan Hardon</h3>
                        <h3 className="text-lg font-semibold">SENIOR EXECUTIVE CONSULTANT</h3>
                        <img src={br_logo} alt="" className="w-52 mt-5" />
                        <button className="get-started-btn font-semibold shadow-xl mx-auto">Registration now</button>
                    </div>
                    <div>
                        <img src={boy_1} alt=""  className="boy-1-img"/>
                    </div>
                </div>
            </section>
            <section className="offer-part flex flex-col items-center mb-10">
                <h1 className="text-4xl font-bold">Offers</h1>
                <div className="service-underling"></div>
                <div className="flex offer-cart">
                    <div className="offer-left-part">
                        <img src={offer} alt="" className="w-72" />
                    </div>
                    <div className="offer-right-part ml-10 mt-10">
                        <h1 className="text-2xl font-bold">Online learining is rapidly becoming one of the most cost-effective ways to educate yourself. So Enrolled upcoming 3 courses and get 40% offer.</h1>
                        <Link to="/services">
                            <button className="get-started-btn font-semibold shadow-xl">Enrolled Now</button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* footer part  */}
            <Footer />
        </div>
     );
}
 
export default ActivityPage;