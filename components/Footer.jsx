import { faEnvelope, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Footer = () => {
  return (
    <div className="grid grid-cols-12 gap-4 p-4 text-xl nav:text-2xl bg-dark font-Roboto text-white whitespace-nowrap">
      <h3 className="col-start-1 col-span-full justify-self-center text-3xl nav:text-4xl font-Montserrat ">
        Contact
      </h3>
      <div className="col-start-1 col-span-full justify-self-center nav:col-start-1 nav:col-end-5 flex items-center gap-3">
        <FontAwesomeIcon icon={faPhone} />
        <p className="col-start-6">801.872.9786</p>
      </div>
      <div className="col-start-1 col-span-full justify-self-center nav:col-start-5 nav:col-end-8 flex items-center gap-3">
        <FontAwesomeIcon icon={faEnvelope} />
        <p className="col-start-6">info@griffinec.com</p>
      </div>
      <div className="col-start-1 col-span-full justify-self-center nav:col-start-8 nav:col-end-13 flex items-center gap-3">
        <FontAwesomeIcon icon={faMapMarker} />
        <p className="col-start-6">303 N 350 W Bountiful, UT 84010</p>
      </div>
    </div>
  )
}

export default Footer
