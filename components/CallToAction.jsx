import React from 'react'

const CallToAction = ({ text }) => {
  return (
    <div className="grid grid-cols-12">
      <h4 className="self-center col-start-3 col-end-11 py-2 text-center border-2 border-solid font-roboto nav:text-4xl border-dark">
        {text}
      </h4>
    </div>
  )
}

export default CallToAction
