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
      <nav className="sticky top-0 z-50 grid w-screen grid-cols-12 px-2 py-3 bg-white place-content-center place-items-center">
        <div className="col-start-1 col-end-11 row-start-1 pt-2 sm:col-end-8 md:col-end-6 nav:col-start-5 nav:col-end-9">
          <Image src="/Full GEC Logo.png" width={9578} height={712} alt="logo" />
        </div>

        <FontAwesomeIcon
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          icon={isMenuOpen ? faTimes : faBars}
          className="col-span-2 col-start-12 col-end-13 row-start-1 text-2xl cursor-pointer sm:col-span-1 sm:col-start-12 hover:text-orange-focus nav:hidden"
        />

        <div
          className={`${
            isMenuOpen ? null : 'hidden'
          } row-start-2 col-start-1 col-end-13 col-span-5 nav:col-start-1 nav:col-end-13 nav:grid nav:grid-flow-col nav:row-start-2 nav:gap-2`}
        >
          {links.map((link) => (
            <Link href={link.href} key={link.name}>
              <div className="flex px-4 py-2 border-l-2 border-white border-solid cursor-pointer text-dark nav:border-l-0 nav:border-b-2 hover:border-orange place-items-center nav:rounded nav:flex">
                <FontAwesomeIcon
                  icon={link.icon}
                  className="col-start-6 col-end-7 mr-2  nav:flex nav:flex-auto nav:mr-2"
                />
                <a className="col-start-7 col-end-8 row-start-1 tracking-wider uppercase font-Montserrat nav:col-start-1 nav:col-span-12 place-self-start nav:place-self-center ">
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
