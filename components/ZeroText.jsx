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
    p1,
    p2,
    p3,
    credentials,
  } = data
  return (
    <div className="grid grid-cols-12 gap-2 m-auto gap-y-4 nav:text-2xl font-Roboto">
      {title && (
        <h3 className="col-start-1 col-end-13 row-start-1 text-3xl tracking-normal font-Montserrat nav:text-4xl text-blue">
          {title}
        </h3>
      )}
      {paragraph && (
        <div className="col-start-1 px-4 py-10 col-span-full">
          <p className="self-center nav:text-2xl">{paragraph}</p>
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
      {p1 && <p className="col-start-1 col-end-13 row-start-2 ">{p1}</p>}
      {p2 && <p className="col-start-1 col-end-13 row-start-3 ">{p2}</p>}
      {p3 && <p className="col-start-1 col-end-13 row-start-4 ">{p3}</p>}
      {credentials && (
        <p className="col-start-1 col-end-13 row-start-3 font-Montserrat text-blue">
          {credentials}
        </p>
      )}
    </div>
  )
}

export default ZeroText
