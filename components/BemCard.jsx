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
      <div className="relative grid items-center justify-center grid-cols-1 col-start-1 col-end-13 row-start-1 row-end-2 gap-4 nav:col-start-1 nav:col-end-5 auto-rows-fr">
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
          className="z-20 col-start-1 col-end-2 row-start-1 row-end-2 text-4xl cursor-pointer text-green hover:text-green-focus justify-self-center mr-80"
        >
          <FontAwesomeIcon icon={faChevronCircleLeft} />
        </div>
        {/* nextChevron */}
        <div
          onClick={nextSlide}
          className="z-20 col-start-1 col-end-2 row-start-1 row-end-2 text-4xl cursor-pointer text-green hover:text-green-focus justify-self-center ml-80"
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
                  className="self-center rounded animate-flash"
                />
              )}
            </div>
          ))}
        </div>
        {/* pagination */}
        <div className="z-10 col-start-1 col-end-2 row-start-1 row-end-2 pt-64 text-xl text-center text-green">
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
          className="col-start-1 col-end-13 row-start-2 row-end-3 ml-4 nav:col-start-5 nav:col-end-13 nav:row-start-1 nav:row-end-2"
        >
          <h3 className="pb-4 text-5xl font-Montserrat text-blue">{title}</h3>
          <div className="pb-4 text-2xl text-dark font-Roboto">{p}</div>
          <div>
            {bulltes.map(({ title, link }, index) => (
              <div
                className="px-2 text-2xl border-l-2 border-white text-dark font-Roboto hover:border-orange"
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
