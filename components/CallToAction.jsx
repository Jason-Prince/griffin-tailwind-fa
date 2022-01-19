import React from 'react'

const CallToAction = ({ text }) => {
  return (
    <div className="text-xl text-center w-80 font-Montserrat nav:text-4xl">
      <h4 className="self-center px-2 py-2 border-2 border-solid border-dark">
        {text}
      </h4>
    </div>
  )
}

export default CallToAction
