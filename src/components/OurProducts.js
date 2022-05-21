import React from 'react'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function OurProducts() {
    const settings = {
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1
    };
    return (
        <>
            <div className=' bg-[#F2F3F3] pb-10'>
                <div className='container mx-auto text-2xl font-semibold text-darkblue pt-3'>Our Products</div>

                <div className='container mx-auto mt-2'>
                    <Slider {...settings}>
                        <div className='text-center font-medium text-lg text-darkblue px-3'>
                            <div className='mt-3 h-[347px] pb-3'>
                                <img className='w-full h-full rounded-lg' src='/images/car1.jpg' alt="this is car image" />
                            </div>
                        </div>
                        <div className='text-center font-medium text-lg text-darkblue px-3'>
                            <div className='mt-3 h-[347px] pb-3'>
                                <img className='w-full h-full rounded-lg' src='/images/jeep1.jpg' alt="this is jeep image" />
                            </div>
                        </div>
                        <div className='text-center font-medium text-lg text-darkblue px-3'>
                            <div className='mt-3 h-[347px] pb-3'>
                                <img className='w-full h-full rounded-lg' src='/images/bike.jpg' alt="this is bike image" />
                            </div>
                        </div>
                        <div className='text-center font-medium text-lg text-darkblue px-3'>
                            <div className='mt-3 h-[347px] pb-3'>
                                <img className='w-full h-full rounded-lg' src='/images/SUV.jpg' alt="this is SUV image" />
                            </div>
                        </div>
                        <div className='text-center font-medium text-lg text-darkblue px-3'>
                            <div className='mt-3 h-[347px] pb-3'>
                                <img className='w-full h-full rounded-lg' src='/images/bus.jpg' alt="this is bus image" />
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default OurProducts