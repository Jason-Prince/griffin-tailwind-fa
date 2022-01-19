import AboutUsCard from '../components/AboutUsCard'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import PageTitle from '../components/PageTitle'
import React from 'react'

const david_griffin = {
  image: {
    alt: 'David Griffin II',
    src: '/david_griffin.jpg',
    width: 1726,
    height: 2400,
    layout: 'intrinsic',
  },
  text: {
    title: 'David W Griffin II',
    p1: 'Trained in both architecture and building science, I have focused my career on the integration of the built environment and energy conserving/consuming systems. A focus on whole building energy simulation allows me to provide investment grade financial analysis to all parties involved proving the business case for sustainability in both new construction and existing buildings. My experience includes healthcare, higher education, commercial, federal and municipal buildings. Applying my experience, I continue to push the envelope and diligently seek out opportunities to save the world - one building at a time.',
    credentials: 'License and Certifications: AIA | BEMP | GGA | HERS Rater',
  },
}

const header = {
  title: 'About Us',
  img: "url('/gec_banner_bg.jpg')",
}

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <PageTitle data={header} />
      <div className="mx-4">
        <AboutUsCard data={david_griffin} />
      </div>
      <Footer />
    </>
  )
}

export default AboutUs
