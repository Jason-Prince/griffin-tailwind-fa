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
      <nav className="px-2 w-screen bg-white grid grid-cols-12 place-content-center place-items-center sticky top-0 z-50 py-3">
        <div className="pt-2 col-start-1 col-end-11 row-start-1 sm:col-end-8 md:col-end-6 nav:col-start-5 nav:col-end-9">
          <Image src="/Full GEC Logo.png" width={9578} height={712} alt="logo" />
        </div>

        <FontAwesomeIcon
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          icon={isMenuOpen ? faTimes : faBars}
          className="text-2xl col-start-12 col-end-13 row-start-1 col-span-2 sm:col-span-1 sm:col-start-12 hover:text-orange-focus cursor-pointer nav:hidden"
        />

        <div
          className={`${
            isMenuOpen ? null : 'hidden'
          } row-start-2 col-start-1 col-end-13 col-span-5 nav:col-start-1 nav:col-end-13 nav:grid nav:grid-flow-col nav:row-start-2 nav:gap-2`}
        >
          {links.map((link) => (
            <Link href={link.href} key={link.name}>
              <div className="text-dark border-l-2 nav:border-l-0 nav:border-b-2 border-white hover:border-orange border-solid  cursor-pointer py-2 px-4 flex place-items-center nav:rounded nav:flex">
                <FontAwesomeIcon
                  icon={link.icon}
                  className=" col-start-6 col-end-7 mr-2 nav:flex nav:flex-auto nav:mr-2"
                />
                <a className="font-Montserrat tracking-wider uppercase col-start-7 col-end-8 row-start-1 nav:col-start-1 nav:col-span-12 place-self-start nav:place-self-center ">
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
