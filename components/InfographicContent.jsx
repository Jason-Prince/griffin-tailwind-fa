import React from 'react'

const InfographicContent = ({ data }) => {
  const { p1, p2 } = data
  return (
    <div className="px-4 text-xl font-Roboto">
      <p>{p1}</p>
      <br />
      <p>{p2}</p>
    </div>
  )
}

export default InfographicContent
