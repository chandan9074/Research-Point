// import pakages
import React from 'react';
import Rating from 'react-rating';

const HomeService = (props) => {
    const { img, title , rating, start_date, content_no, duration, enrolled, price} = props.service;
    return ( 
        <div className="py-10 px-10 home-service-card">
            <div>
                <img src={img} alt="" className="w-40 h-40 mx-auto rounded-xl" />
            </div>
            <div>
                <h1 className="text-2xl font-bold service-title" title={title}>{title}</h1>
                <h3 className="text-lg font-semibold"><i class="fas fa-calendar-alt"></i> {start_date}</h3>
                <h3 className="text-lg font-semibold"><i class="fas fa-clock"></i> {duration}</h3>
                <h3 className="text-lg font-semibold"><i class="fas fa-video"></i> {content_no}</h3>
                <h3 className="text-lg font-semibold"><i class="fas fa-users"></i> {enrolled}</h3>
                <div className="flex justify-between">
                    <h3 className="text-lg font-semibold">
                        <Rating
                            placeholderRating={rating}
                            emptySymbol={<i class="far fa-star"></i>}
                            placeholderSymbol={<i class="fas fa-star"></i>}
                            fullSymbol={<i class="fas fa-star"></i>}
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