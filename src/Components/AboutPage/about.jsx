// import pakages
import React from 'react';
import Footer from '../Footer/Footer';

//import files
import Navbar from '../Navbar/Navbar';
import './about.css'
import about_1 from './images/about-1.jpg';
import about_2 from './images/about-2.jpg';

const About = () => {
    return ( 
        <div>
            {/* nevbar  */}
            <Navbar />

            {/* about page content  */}
            <section className="aboutus-welcome-part pt-20">
                <h1 className="text-3xl text-gray-200 font-bold ml-40">About Us</h1>
                <div className="about-underline"></div>
                <h3 className="text-sm text-gray-200 font-bold ml-40 tracking-widest">RESEARCH POINT</h3>
            </section>
            <section className="mb-10">
                <div className="ml-52 mt-10">
                    <h1 className="text-2xl font-bold text-indigo-900">Online Course</h1>
                    <div className="about-course-underline"></div>
                    <article className="w-80 text-justify font-semibold text-lg">
                         An online course is a way to learn a new skill or gain some new knowledge from the comfort of your own home. They can either be paid or offered for free. Some are offered by educational institutions, while others are produced by experts in their field. The most important thing for an online course is for it to be engaging and to deliver a clear outcome.
                    </article>
                    <div className="about-1-img">
                        <img src={about_1} alt="" />
                    </div>
                </div>
                <div className="about-2-part mt-14 flex justify-around">
                    <div>
                        <img src={about_2} alt=""  className="about-2-img"/>
                    </div>
                    <div className="about-2-right-part">
                        <h1 className="text-2xl font-bold text-indigo-900">Research Courses</h1>
                        <div className="about-course-underline"></div>
                        <article className="w-80 text-justify font-semibold text-lg">
                            Research has been defined in a number of different ways, and while there are similarities, there does not appear to be a single, all-encompassing definition that is embraced by all who engage in it.One definition of research is used by the OECD, "Any creative systematic activity undertaken in order to increase the stock of knowledge, including knowledge of man, culture and society, and the use of this knowledge to devise new applications.
                        </article>
                    </div>
                </div>
            </section>

            {/* footer part  */}
            <Footer />
        </div>
     );
}
 
export default About;