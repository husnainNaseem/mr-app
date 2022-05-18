import React from 'react'
import Aboutus from '../images/Aboutus.jpg'

function AboutUs() {
    return (
        <div className='container mx-auto max-w-screen-lg'>
            <div className='mt-3'>
                <span className='text-2xl text-darkblue font-semibold'>About Us</span>
            </div>
            <div className='mt-3'>
                <img className='w-full' src={Aboutus} alt="this is car image" />
            </div>
            <div className='mt-3'>
                <p className='tracking-tight leading-leading-relaxed text-[17px]'>
                    Founded in 2003, PakWheels.com has become Pakistan’s #1 automotive portal. Since its inception, PakWheels.com has helped millions of Pakistanis buy & sell automobiles, read automotive reviews and news, check automotive prices and find solutions to all of their automotive needs. Today, PakWheels.com is the first name that comes to mind if anyone is looking for a solution to their automotive needs.<br /><br/>
                    PakWheels.com gets over 25 million visitors annually who view more than 250 million pages on the website. In last year alone, close to 50% of Pakistan’s internet population visited PakWheels.com to buy and sell over 400,000 vehicles.
                    This kind of success has made PakWheels.com a prominent name in the global e-commerce and classifieds sectors and helped raise USD 3.5 million in its first round of funding.<br /><br />
                    PakWheels.com is not only a hub where buyers and sellers can interact, but it is also a comprehensive automotive portal with a forum dedicated to all automotive discussions, a blog that keeps the users up to date with the latest happenings in the auto industry of Pakistan and the world at large. There is also a separate review section for all the cars and bikes available in Pakistan and much more!<br /><br />
                    At PakWheels.com, we believe that it is our duty to provide our visitors with the best online experience and this is what our mission speaks of - to revolutionize and continuously add value to the way people buy and sell vehicles online, in Pakistan. We aim to provide our users with the most comprehensive automotive knowledge with respect to Pakistan and the world alike and help them develop a sense of belonging in the automotive community. Our motto reflects our vision:<br />
                </p>
            </div>
        </div>
    )
}

export default AboutUs