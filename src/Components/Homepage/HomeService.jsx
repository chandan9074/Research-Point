// import pakages
import React from 'react';
import Rating from 'react-rating';

const HomeService = (props) => {
    // distructurign service data from props 
    const { img, title , rating, start_date, content_no, duration, enrolled, price} = props.service;

    return ( 
        <div className="py-10 px-10 home-service-card">
            <div>
                <img src={img} alt="" className="w-40 h-40 mx-auto rounded-xl" />
            </div>
            <div>
                <h1 className="text-2xl font-bold service-title" title={title}>{title}</h1>
                <h3 className="text-lg font-semibold"><i className="fas fa-calendar-alt"></i> {start_date}</h3>
                <h3 className="text-lg font-semibold"><i className="fas fa-clock"></i> {duration}</h3>
                <h3 className="text-lg font-semibold"><i className="fas fa-video"></i> {content_no}</h3>
                <h3 className="text-lg font-semibold"><i className="fas fa-users"></i> {enrolled}</h3>
                <div className="flex justify-between">
                    <h3 className="text-lg font-semibold">
                        {/* create rating part by react rating  */}
                        <Rating
                            placeholderRating={rating}
                            emptySymbol={<i className="far fa-star"></i>}
                            placeholderSymbol={<i className="fas fa-star"></i>}
                            fullSymbol={<i className="fas fa-star"></i>}
                        /> ({rating})
                    </h3>
                    <h3 className="text-lg font-semibold price-part rounded-full">Fee <span className="price-digit rounded-full">$ {price}</span></h3>
                </div>
                <div className="flex justify-center">
                    <button className="get-started-btn font-semibold shadow-xl mx-auto">Enroll</button>
                </div>
            </div>
        </div>
     );
}
 
export default HomeService;