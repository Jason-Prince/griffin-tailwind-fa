import {
  faBars,
  faCertificate,
  faDraftingCompass,
  faEnvelope,
  faHome,
  faPlug,
  faTimes,
  faUsers,
} from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'

const links = [
  {
    href: '/',
    name: 'home',
    icon: faHome,
  },
  {
    href: '/services',
    name: 'services',
    icon: faDraftingCompass,
  },
  {
    href: '/zeronetenergy',
    name: 'zero net energy',
    icon: faPlug,
  },
  {
    href: '/buildingcertification',
    name: 'building certification',
    icon: faCertificate,
  },
  {
    href: '/aboutus',
    name: 'about us',
    icon: faUsers,
  },
  {
    href: '/contact',
    name: 'contact',
    icon: faEnvelope,
  },
  {
    href: 'https://www.linkedin.com/company/griffin-energ-consulting/',
    name: 'linkedin',
    icon: faLinkedin,
  },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <>
      <nav className="px-2 w-screen bg-slate-300 grid grid-cols-12 place-content-center place-items-center fixed py-3">
        <div className="pt-2 col-start-1 col-end-11 row-start-1 sm:col-end-8 md:col-end-6 lg:col-start-5 lg:col-end-9">
          <Image
            src="/Full GEC Logo.png"
            width={9578}
            height={712}
            alt="logo"
          />
        </div>
        {isMenuOpen ? (
          <FontAwesomeIcon
            onClick={() => setIsMenuOpen(false)}
            icon={faTimes}
            className="text-2xl col-start-12 col-end-13 row-start-1 col-span-2 sm:col-span-1 sm:col-start-12 hover:text-gray-600 cursor-pointer lg:hidden"
          />
        ) : (
          <FontAwesomeIcon
            onClick={() => setIsMenuOpen(true)}
            icon={faBars}
            className="text-xl col-start-12 col-end-13 row-start-1 col-span-2 sm:col-span-1 sm:col-start-12 hover:text-gray-600 cursor-pointer lg:hidden"
          />
        )}

        <div
          className={`${
            isMenuOpen ? null : 'hidden'
          } row-start-2 col-start-1 col-end-13 col-span-5 lg:col-start-1 lg:col-end-13 lg:grid lg:grid-flow-col lg:row-start-2 lg:gap-2`}
        >
          {links.map((link) => (
            <Link href={link.href} key={link.name}>
              <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 text-sm flex place-items-center lg:rounded lg:flex">
                <FontAwesomeIcon
                  icon={link.icon}
                  className="col-start-6 col-end-7 mr-2 lg:flex lg:flex-auto lg:mr-2"
                />
                <a className="font-Montserrat tracking-wider uppercase col-start-7 col-end-8 row-start-1 lg:col-start-1 lg:col-span-12 place-self-start lg:place-self-center ">
                  {link.name}
                </a>
              </div>
            </Link>
          ))}
        </div>
      </nav>
    </>
  )
}
