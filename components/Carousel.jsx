import {
  faChevronCircleLeft,
  faChevronCircleRight,
  faCircle,
} from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import { faCircle as faCircle2 } from '@fortawesome/free-regular-svg-icons'
import { useState } from 'react'

export default function Carousel({ slides }) {
  const [current, setCurrent] = useState(0)
  const length = slides.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }
  console.log('current: ', current)
  console.log('length: ', length)

  return (
    <>
      <div className="flex flex-col border-4 w-1/2 border-red-400 items-center shadow-xl">
        <div className="text-slate-700 font-Montserrat uppercase text-xl tracking-wider">
          {slides.map(({ title }, index) => (
            <div key={index}>
              {index === current && <h6 className="p-2">{title}</h6>}
            </div>
          ))}
        </div>

        <div className="flex items-center">
          <div
            onClick={prevSlide}
            className="text-slate-500 hover:text-slate-700 text-4xl cursor-pointer p-2"
          >
            <FontAwesomeIcon icon={faChevronCircleLeft} />
          </div>

          <div className="">
            {slides.map(({ title, src }, index) => (
              <div key={index} className="self-center">
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

          <div
            onClick={nextSlide}
            className="text-slate-500 hover:text-slate-700 text-4xl cursor-pointer p-2"
          >
            <FontAwesomeIcon icon={faChevronCircleRight} />
          </div>
        </div>
        <div className="text-slate-700 text-xl p-2">
          {slides.map((slide, index) => (
            <FontAwesomeIcon
              key={index}
              icon={index === current ? faCircle : faCircle2}
            />
          ))}
        </div>
      </div>
    </>
  )
}
