import Image from 'next/image'
import React from 'react'

const NextImage = ({ image }) => {
  const { alt, src, width, height, layout } = image
  return (
    <Image
      src={src}
      width={width}
      height={height}
      layout={layout}
      alt={alt}
      priority
    />
  )
}

export default NextImage
