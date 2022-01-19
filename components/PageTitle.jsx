import React from 'react'

const PageTitle = ({ data }) => {
  const { title, img } = data
  return (
    <div
      style={{ backgroundImage: `${img}` }}
      className="w-full h-full py-24 bg-cover bg-center bg-fixed grid grid-cols-12 col-start-1 col-end-13 row-start-1 row-end-2"
    >
      <h1 className="whitespace-nowrap backdrop-blur-md backdrop-brightness-50 self-center col-start-4 col-end-10 p-10 text-5xl font-bold tracking-widest text-center border-4 border-solid font-Montserrat border-white text-white">
        {title}
      </h1>
    </div>
  )
}

export default PageTitle
