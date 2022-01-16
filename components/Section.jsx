import React from 'react'

const Section = ({ text }) => {
  return (
    <div className="grid grid-cols-12">
      <h1 className="self-center col-span-6 col-start-4 p-10 text-3xl font-bold tracking-wide text-center border-2 border-solid font-Montserrat nav:text-5xl border-dark">
        {text}
      </h1>
    </div>
  )
}

export default Section
