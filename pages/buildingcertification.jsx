import BuildingCertificationCard from '../components/BuildingCertificationCard'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import PageTitle from '../components/PageTitle'
import React from 'react'
import Section from '../components/Section'
import ZeroEnergyCard from '../components/ZeroEnergyCard'

const leed_certification = {
  image: {
    alt: 'LEED Certification Logo',
    src: '/LEED.jpg',
    width: 834,
    height: 551,
    layout: 'intrinsic',
  },
  text: {
    title: 'LEED® Certification',
    p1: 'LEED is the most widely used green building rating system in the world. Available for virtually all building types, LEED provides a framework for healthy, highly efficient, and cost-saving green buildings. LEED certification is a globally recognized symbol of sustainability achievement and leadership.',
  },
}
const green_globes = {
  image: {
    alt: 'Green Globe Logo',
    src: '/GBI_Logo_Main.png',
    width: 1903,
    height: 560,
    layout: 'intrinsic',
  },
  text: {
    title: 'Green Globes®',
    p1: 'Green Globes is a comprehensive, science-based building rating system that supports a wide range of new construction and existing building project types. Designed to allow building owners and managers to select which sustainability features best fit their building and occupants, Green Globes certifies projects that meet at least 35% of the 1,000 points that are deemed applicable to the project. Our custom-tailored approach helps you produce the most sustainable outcomes based on your building’s type and purpose. The Green Globes user-friendly software allows project teams to import and monitor performance for individual buildings through entire portfolios.',
  },
}
const zero_energy = {
  image: {
    alt: 'Zero Energy Certification Logo',
    src: '/Zero_Energy_Logo.png',
    width: 1285,
    height: 658,
    layout: 'intrinsic',
  },
  text: {
    title: 'ILFI Zero Energy®',
    p1: 'Some of the most efficient buildings in the world, reducing their energy use by as much as 90% from average, go unnoticed. Reveal is an elegant, third party tool that highlights your high-performance projects and shows off your leadership in creating climate solutions.',
  },
}
const energy_star = {
  image: {
    alt: 'Energy Star Certification Logo',
    src: '/energy_star_certification_logo.jpg',
    width: 297,
    height: 304,
    layout: 'intrinsic',
  },
  text: {
    title: 'ENERGY STAR®',
    p1: 'ENERGY STAR certified buildings save energy, save money, and help protect the environment by generating fewer greenhouse gas emissions than typical buildings. To be certified as ENERGY STAR, a building must meet strict energy performance standards set by EPA.',
    p2: 'Specifically, to be eligible for ENERGY STAR certification, a building must earn an ENERGY STAR score of 75 or higher on EPA’s 1 – 100 scale, indicating that it performs better than at least 75 percent of similar buildings nationwide. This 1 – 100 ENERGY STAR score is based on the actual, measured energy use of a building and is calculated within EPA’s ENERGY STAR Portfolio Manager tool. The score accounts for differences in operating conditions, regional weather data, and other important considerations.',
    p3: 'Certification is given on an annual basis, so a building must maintain its high performance to be certified year to year. And the information submitted in the certification application must be verified by a licensed Professional Engineer (PE) or Registered Architect (RA) to be eligible for approval.',
  },
}

const header = {
  title: 'Building Certification',
  img: "url('/gec_banner_bg.jpg')",
}

const BuildingCertification = () => {
  return (
    <>
      <Navbar />
      <PageTitle data={header} />
      <BuildingCertificationCard data={leed_certification} />
      <BuildingCertificationCard data={green_globes} />
      <BuildingCertificationCard data={zero_energy} />
      <BuildingCertificationCard data={energy_star} />
      <Footer />
    </>
  )
}

export default BuildingCertification
