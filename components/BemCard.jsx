import React, { useState } from 'react'
import {
  faChevronCircleLeft,
  faChevronCircleRight,
  faCircle,
} from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import { faCircle as faCircle2 } from '@fortawesome/free-regular-svg-icons'

const slides = [
  { title: 'Huntsman', src: '/Huntsman.jpg' },
  { title: 'Impact Prosperity Epicenter', src: '/ImpactProsperityEpicenter.jpg' },
  { title: 'KoZo House', src: '/KoZoHouse.jpg' },
  { title: 'Public Safety Building', src: '/PublicSafetyBuilding.jpg' },
]
const bem = [
  {
    title: 'Building Energy Modeling',
    p: 'A whole building energy model affords both the design team and the owner guidance on where financial assets are best spent to yield a better product. This guidance can be in the form of utility incentive quantification, operational cost reduction, simple payback and/or life-cycle cost analysis. Additional benefits include code compliance ',
    bulltes: [
      { title: 'Zero Net Energy Design', link: '#zeronetenergy' },
      { title: 'Third Party Certifications', link: '#buildingcertification' },
      { title: 'Latitude Study', link: '' },
      { title: 'Life-Cycle Cost Analysis', link: '' },
      {
        title: 'Utility Incentive | Rocky Mountain Power | Wattsmart',
        link: 'https://www.rockymountainpower.net/savings-energy-choices/business/wattsmart-efficiency-incentives-utah.html',
      },
      {
        title: 'Utility Incentive | Dominion | ThermWise',
        link: 'https://www.dominionenergy.com/utah/save-energy/thermwise',
      },
      { title: 'HVAC Size Reduction', link: '' },
      { title: 'Energy Code Performance Compliance', link: '' },
    ],
  },
]

const BemCard = () => {
  const [current, setCurrent] = useState(0)
  const length = slides.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }
  return (
    <div className="grid grid-cols-12 m-4 mb-20">
      {/* carousel */}
      <div className="col-start-1 col-end-13 row-start-1 row-end-2 nav:col-start-1 nav:col-end-5 grid grid-cols-1 auto-rows-fr relative justify-center items-center gap-4">
        {/* title */}
        <div className="w-[350px] justify-self-center text-center text-light font-Montserrat uppercase text-2xl tracking-wider col-start-1 col-end-2 row-start-1 row-end-2 pb-64 z-10">
          {slides.map(({ title }, index) => (
            <div key={index}>
              {index === current && <h6 className="p-2">{title}</h6>}
            </div>
          ))}
        </div>
        {/* prevChevron */}
        <div
          onClick={prevSlide}
          className=" text-green hover:text-green-focus text-4xl cursor-pointer col-start-1 col-end-2 row-start-1 row-end-2 justify-self-center mr-80 z-20"
        >
          <FontAwesomeIcon icon={faChevronCircleLeft} />
        </div>
        {/* nextChevron */}
        <div
          onClick={nextSlide}
          className="text-green hover:text-green-focus text-4xl cursor-pointer col-start-1 col-end-2 row-start-1 row-end-2 justify-self-center ml-80 z-20"
        >
          <FontAwesomeIcon icon={faChevronCircleRight} />
        </div>
        {/* slides */}
        <div className="col-start-1 col-end-2 row-start-1 row-end-2 justify-self-center">
          {slides.map(({ title, src }, index) => (
            <div key={index} className="self-center w-[380px]">
              {index === current && (
                <Image
                  src={src}
                  width={380}
                  height={313}
                  alt={title}
                  layout="intrinsic"
                  className="rounded self-center animate-flash"
                />
              )}
            </div>
          ))}
        </div>
        {/* pagination */}
        <div className="text-green text-center text-xl col-start-1 col-end-2 row-start-1 row-end-2 pt-64 z-10">
          {slides.map((slide, index) => (
            <FontAwesomeIcon
              key={index}
              icon={index === current ? faCircle : faCircle2}
            />
          ))}
        </div>
      </div>
      {/* content */}
      {bem.map(({ title, p, bulltes }, index) => (
        <div
          key={index}
          className="col-start-1 col-end-13 row-start-2 row-end-3  nav:col-start-5 nav:col-end-13 nav:row-start-1 nav:row-end-2 ml-4"
        >
          <h3 className="font-Montserrat text-5xl text-blue pb-4">{title}</h3>
          <div className="text-dark font-Roboto text-2xl pb-4">{p}</div>
          <div>
            {bulltes.map(({ title, link }, index) => (
              <div
                className="text-dark px-2 border-l-2 border-white font-Roboto text-2xl hover:border-orange"
                key={index}
              >
                <a href={link}>{title}</a>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default BemCard
