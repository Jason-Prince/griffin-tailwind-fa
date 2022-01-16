import React from 'react'

const CallToAction = ({ text }) => {
  return (
    <div className="grid grid-cols-12 text-xl text-center font-Montserrat nav:text-4xl">
      <h4 className="self-center col-start-3 col-end-11 py-2 border-2 border-solid border-dark">
        {text}
      </h4>
    </div>
  )
}

export default CallToAction
