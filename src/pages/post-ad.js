import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/navbar'
import PostAnAd from '../components/PostAnAd'

function PostAd() {
    return (
        <>
            <Navbar />
            <div className='bg-[#F2F3F3]'>
                <div className='container mx-auto'>
                    <h1 className='text-2xl text-darkblue font-semibold py-3 text-center'>Car Information</h1>
                    <PostAnAd />
                </div>
            </div>
            <Footer/>
        </>

    )
}

export default PostAd