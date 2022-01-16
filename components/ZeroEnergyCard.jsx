import NextImage from './NextImage'
import React from 'react'
import ZeroText from './ZeroText'

const ZeroEnergyCard = ({ data }) => {
  const { image, image_2, text } = data
  return (
    <div className="grid items-center justify-center grid-cols-12 nav:gap-x-10 nav:gap-y-5">
      {image && (
        <div
          className={`${
            text.paragraph
              ? 'col-span-full nav:col-span-5 col-start-1 row-start-1'
              : !image_2
              ? 'col-span-full nav:col-span-7 col-start-1 row-start-1'
              : 'col-span-full nav:col-span-5 col-start-1 row-start-1'
          }`}
        >
          <NextImage image={image} />
        </div>
      )}
      {text && (
        <div
          className={`${
            text.paragraph && image && image_2
              ? 'nav:col-span-7 col-span-full col-start-1 nav:col-start-6 row-start-2 nav:row-start-1'
              : text.paragraph && image && !image_2
              ? 'col-span-full col-start-1 nav:col-start-6 row-start-2 nav:row-start-1'
              : !text.paragraph && image && !image_2
              ? 'col-span-full col-start-1 text-center nav:text-left nav:col-start-8 row-start-2 nav:row-start-1'
              : text.paragraph && !image && !image_2
              ? 'col-end-12 col-start-2 row-start-2 nav:row-start-1'
              : text.credits
              ? 'col-end-12 col-start-2 row-start-1'
              : 'text-center nav:text-left col-span-full nav:col-span-4 col-start-1 nav:col-start-6 row-start-2 nav:row-start-1'
          } text-xl`}
        >
          <ZeroText data={text} />
        </div>
      )}
      {image_2 && (
        <div className="self-center col-start-1 row-start-3 text-center col-span-full nav:col-span-2 nav:col-start-10 nav:row-start-1">
          <NextImage image={image_2} />
        </div>
      )}
    </div>
  )
}

export default ZeroEnergyCard
