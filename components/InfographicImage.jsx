import NextImage from './NextImage'
import React from 'react'

const InfographicImage = ({ data }) => {
  const { image, title } = data
  return (
    <>
      <NextImage image={image} />
      <div className="text-2xl text-center nav:col-start-1 nav:col-end-7 nav:row-start-3 nav:row-end-4 font-Montserrat nav:text-3xl text-blue">
        <h3>{title}</h3>
      </div>
    </>
  )
}

export default InfographicImage
