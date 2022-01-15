import React from 'react'

const Footer = () => {
  return (
    <div className="grid grid-cols-12 col-start-1 col-end-13 p-6 nav:text-xl bg-dark">
      <h3 className="col-start-1 col-end-13 pb-6 text-center text-white nav:text-4xl font-Roboto">
        Contact
      </h3>
      <p className="col-start-1 col-end-13 text-center text-white font-Roboto">
        801.872.9786
      </p>
      <p className="col-start-1 col-end-13 text-center text-white font-Roboto">
        info@griffinec.com
      </p>
      <p className="col-start-1 col-end-13 text-center text-white font-Roboto">
        303 N 350 W
      </p>
      <p className="col-start-1 col-end-13 text-center text-white font-Roboto">
        Bountiful, UT 84010
      </p>
    </div>
  )
}

export default Footer
