// import pakages
import React from 'react';
import Rating from 'react-rating';

// import files 
import './servicePage.css'

const AllServices = (props) => {
    // distructuring service data from props 
    const { img, title , rating, start_date, content_no, duration, enrolled, price} = props.services;
    return ( 
        <div className="flex items-center shadow-lg service-cart">
            <div>
                <img src={img} alt="" className="servicepage-img"/>
            </div>
            <div className="service-right-part ml-4 mr-4">
                <h1 className="text-xl font-bold text-gray-800 service-title" title={title}>{title}</h1>
                <h3 className="text-md text-indigo-900 font-semibold"><i className="fas fa-calendar-alt"></i> {start_date}</h3>
                <h3 className="text-md text-indigo-900 font-semibold"><i className="fas fa-clock"></i> {duration}</h3>
                <h3 className="text-md text-indigo-900 font-semibold"><i className="fas fa-video"></i> {content_no}</h3>
                <h3 className="text-md text-indigo-900 font-semibold"><i className="fas fa-users"></i> {enrolled}</h3>
                <h3 className="text-md font-semibold">
                    {/* crate rating part  */}
                    <Rating
                        readonly
                        placeholderRating={rating}
                        emptySymbol={<i className="far fa-star"></i>}
                        placeholderSymbol={<i className="fas fa-star"></i>}
                        fullSymbol={<i className="fas fa-star"></i>}
                    /><span className="text-indigo-900">({rating})</span>
                </h3>
                <div className="flex justify-between items-center">
                    <h3 className="text-md font-semibold price-part rounded-full">Fee <span className="price-digit rounded-full">$ {price}</span></h3>
                    <button className="service-enroll-btn font-semibold shadow-xl">Enroll</button>
                </div>
            </div>
        </div>
     );
}
 
export default AllServices;