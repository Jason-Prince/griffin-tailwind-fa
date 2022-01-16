import NextImage from './NextImage'
import React from 'react'
import ZeroText from './ZeroText'

const AboutUsCard = ({ data }) => {
  const { image, text } = data
  return (
    <div className="grid items-center justify-center grid-cols-12 nav:gap-x-10 nav:gap-y-5">
      {image && (
        <div className="col-start-1 row-start-1 col-span-full nav:justify-self-center nav:col-span-5">
          <NextImage image={image} />
        </div>
      )}
      {text && (
        <div className="col-start-1 row-start-2 text-xl text-center nav:text-left col-span-full nav:col-span-7 nav:col-start-6 nav:row-start-1">
          <ZeroText data={text} />
        </div>
      )}
    </div>
  )
}

export default AboutUsCard
