// import pakages
import React from 'react';
import Rating from 'react-rating';

const HomeService = (props) => {
    // distructurign service data from props 
    const { img, title , rating, start_date, content_no, duration, enrolled, price} = props.service;

    return ( 
        <div className="py-6 px-6 home-service-card">
            <div>
                <img src={img} alt="" className="w-40 h-40 mx-auto mb-4 rounded-xl" />
            </div>
            <div>
                <h1 className="text-xl text-gray-800 font-bold service-title" title={title}>{title}</h1>
                <h3 className="text-md mt-1 text-indigo-900 font-semibold"><i className="fas fa-calendar-alt"></i> {start_date}</h3>
                <h3 className="text-md text-indigo-900 font-semibold"><i className="fas fa-clock"></i> {duration}</h3>
                <h3 className="text-md text-indigo-900 font-semibold"><i className="fas fa-video"></i> {content_no}</h3>
                <h3 className="text-md text-indigo-900 font-semibold"><i className="fas fa-users"></i> {enrolled}</h3>
                <div className="flex justify-between items-center">
                    <h3 className="text-md font-semibold">
                        {/* create rating part by react rating  */}
                        <Rating
                            readonly
                            placeholderRating={rating}
                            emptySymbol={<i className="far fa-star"></i>}
                            placeholderSymbol={<i className="fas fa-star"></i>}
                            fullSymbol={<i className="fas fa-star"></i>}
                        /> <span className="text-indigo-900">({rating})</span>
                    </h3>
                    <h3 className="text-md font-semibold price-part rounded-full">Fee <span className="price-digit rounded-full">$ {price}</span></h3>
                </div>
                <div className="flex justify-center">
                    <button className="get-started-btn font-semibold hover:shadow-xl mx-auto">Enroll</button>
                </div>
            </div>
        </div>
     );
}
 
export default HomeService;