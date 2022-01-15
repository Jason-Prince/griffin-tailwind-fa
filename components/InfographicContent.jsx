import React from 'react'

const InfographicContent = ({ data }) => {
  const { p1, p2 } = data
  return (
    <div className="font-Roboto nav:text-xl">
      <p>{p1}</p>
      <br />
      <p>{p2}</p>
    </div>
  )
}

export default InfographicContent
