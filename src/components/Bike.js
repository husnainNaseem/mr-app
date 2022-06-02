import React from 'react'
import { Link } from 'react-router-dom'

function Bike({ title, price, city, img, id }) {
    return (
        <>
        <Link to={`/product-detail/${id}`}>
                <div className='container mx-auto box shadow-2xl'>
                    <div>
                        <img className='w-full h-full' src={img} alt="this is car image" />
                    </div>
                    <div className='pl-3 py-3 leading-normal bg-white'>
                        <h1>{title}</h1>
                        <h2>{price}</h2>
                        <p>{city}</p>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default Bike