import React from 'react'
import './Courses.css'
import Navbarr from '../../components/Navbarr/Navbarr'
import Footer from '../../components/Footer/Footer'

import LKCoursesSection2 from '../../components/LK-Courses-Section2/LK-Courses-Section2'

import Section from '../../components/Section/Section6'

export default function Courses() {
  return (
    <>
    <Navbarr />

   <div className='main' id='coruses'>
    <LKCoursesSection2 />
     <Section />
    <Footer />


     

       
   </div>

   </>
  )
}
