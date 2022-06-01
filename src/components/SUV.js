import React from 'react'

function SUV({ title, price, city, image }) {
    return (
        <>
            <a href='/product-detail'>
                <div className='container mx-auto box shadow-2xl'>
                    <div>
                        <img className='w-full h-full' src={image} alt="this is car image" />
                    </div>
                    <div className='pl-3 py-3 leading-normal bg-white'>
                        <h1>{title}</h1>
                        <h2>{price}</h2>
                        <p>{city}</p>
                    </div>
                </div>
            </a>
        </>
    )
}

export default SUV