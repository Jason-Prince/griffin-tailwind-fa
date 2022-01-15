import NextImage from './NextImage'
import React from 'react'

const ZeroEnergyCert = ({ data }) => {
  const { image, paragraph } = data
  return (
    <div className="grid grid-cols-12 col-start-1 col-end-13 gap-10 row-start-8 row-end-9">
      <div className="col-start-1 col-end-6 row-start-1 row-end-2">
        <NextImage image={image} />

        <div className="grid grid-cols-12 col-start-6 col-end-13 row-start-1 row-end-2 py-10 font-Roboto">
          <p className="self-center col-start-1 col-end-13 row-start-1 row-end-2 nav:text-2xl font-Roboto">
            {paragraph}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ZeroEnergyCert
