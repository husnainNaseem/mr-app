import React from 'react'
import About from '../components/About'
import Footer from '../components/Footer'
import Navbar from '../components/navbar'

function AboutPage() {
  return (
    <>
      <Navbar />
      <div className='bg-[#F2F3F3]'>
        <About />
      </div>
      <Footer />
    </>
  )
}

export default AboutPage