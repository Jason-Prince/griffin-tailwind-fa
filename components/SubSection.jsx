import React from 'react'

const SubSection = ({ title }) => {
  return (
    <div className="col-start-1 col-end-13 nav:row-start-5 nav:row-end-6 bg-dark">
      <h2 className="py-8 font-bold tracking-wider text-center text-white nav:text-4xl font-roboto">
        {title}
      </h2>
    </div>
  )
}

export default SubSection
