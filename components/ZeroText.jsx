import React from 'react'

const ZeroText = ({ data }) => {
  const {
    title,
    project,
    level,
    approach,
    status,
    location,
    note,
    paragraph,
    credits,
  } = data
  return (
    <div className="grid grid-cols-12 gap-2 m-auto nav:text-2xl">
      {title && (
        <h3 className="col-start-1 col-end-13 row-start-1 tracking-normal font-Roboto nav:text-4xl text-blue">
          {title}
        </h3>
      )}
      {paragraph && (
        <div className="col-start-1 py-10 col-span-full font-Roboto">
          <p className="self-center nav:text-2xl font-Roboto">{paragraph}</p>
        </div>
      )}
      {project && (
        <p className="col-start-1 col-end-13 row-start-2 row-end-3 ">
          Project: <span className="font-bold">{project}</span>
        </p>
      )}
      {level && (
        <p className="col-start-1 col-end-13 row-start-3 row-end-4 ">
          Certification Level: <span className="font-bold">{level}</span>
        </p>
      )}
      {approach && (
        <p className="col-start-1 col-end-13 row-start-4 row-end-5 ">
          ZNE Approach: <span className="font-bold">{approach}</span>
        </p>
      )}
      {status && (
        <p className="col-start-1 col-end-13 row-start-5 row-end-6 ">
          ZNE Status: <span className="font-bold">{status}</span>
        </p>
      )}
      {location && (
        <p className="col-start-1 col-end-13 row-start-6 row-end-7 ">
          Location: <span className="font-bold">{location}</span>
        </p>
      )}
      {note && (
        <p className="col-start-1 col-end-13 row-start-7 text-sm row-end-8">
          {note}
        </p>
      )}
      {credits &&
        credits.map((p, index) => (
          <div key={index} className="col-start-1 col-end-13 ">
            <p className="text-center font-roboto">{p}</p>
          </div>
        ))}
    </div>
  )
}

export default ZeroText
