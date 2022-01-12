import Image from 'next/image'
import React from 'react'

const hers = [
  {
    image: {
      title: 'RESNET HERS Rater',
      src: '/RESNET_HERS_Rater.jpg',
    },
    content: {
      title: 'HERS Rating',
      paragraph: [
        'The Home Energy Rating System (HERS) Index is the industry standard by which a home’s energy efficiency is measured. It’s also the nationally recognized system for inspecting and calculating new and existing home’s energy performance.',
        'A certified Home Energy Rater assesses the energy efficiency of a home, assigning it a relative performance score. The lower the number, the more energy efficient the home. The U.S. Department of Energy has determined that a typical resale home scores 130 on the HERS Index while a standard new home is awarded a rating of 100.',
      ],
      bullets: [
        'Zero Energy Ready Homes',
        'Energy Efficient Mortgage',
        'EPA ENERGY STAR® program',
        'Energy Code Compliance',
      ],
    },
  },
]

const HersCard = () => {
  return (
    <div className="m-4">
      {hers.map(({ image, content }, index) => (
        <div
          className="grid grid-cols-12 content-center justify-center gap-4 items-center"
          key={index}
        >
          <div className="col-start-1 col-end-13 nav:col-start-1 nav:col-end-5 row-start-1 row-end-2 m-auto">
            <Image
              width={380}
              height={266}
              alt={image.title}
              layout="intrinsic"
              src={image.src}
            />
          </div>
          <div className="col-start-1 col-end-13 row-start-2 row-end-3  nav:col-start-5 nav:col-end-13 nav:row-start-1 nav:row-end-2 grid gap-4">
            <h2 className="font-Montserrat text-blue text-5xl">{content.title}</h2>
            {content.paragraph.map((p, index) => (
              <p className="text-dark font-Roboto text-2xl" key={index}>
                {p}
              </p>
            ))}
            <ul>
              {content.bullets.map((b, index) => (
                <li
                  className="font-Roboto text-dark text-2xl border-l-2 border-white px-2"
                  key={index}
                >
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  )
}

export default HersCard
