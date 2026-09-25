import React from 'react'
import Navbar from '../../components/student/Navbar'
import Hero from '../../components/student/hero'
import Companies from '../../components/student/companies'
import CourseSection from '../../components/student/courseSection'
import CallToAction from '../../components/student/CallToAction'
import Footer from '../../components/student/footer'
const Home = () => {
  return (
    <div className='flex flex-col items-center space-y-7'>
     <Hero/>
     <Companies/>
     <CourseSection/>
     <CallToAction/>
     <Footer/>
    </div>
  )
}

export default Home
