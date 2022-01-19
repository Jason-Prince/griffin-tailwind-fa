import CallToAction from '../components/CallToAction'
import Footer from '../components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Services from './services'

export default function index() {
  return (
    <>
      <Navbar />
      <div
        className="w-full h-1/2 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/gec_banner_bg.jpg')" }}
      >
        <Image
          src="/gec_banner_white.png"
          width={4001}
          height={1651}
          alt="Griffin Energy Consulting"
          layout="intrinsic"
          className="backdrop-blur-sm backdrop-brightness-50 scale-90"
        />
      </div>
      <div className="w-full h-1/2">
        <Image
          src="/home_page.jpg"
          width={1897}
          height={988}
          alt="Helping you save the world one building at a time. Save money. Save energy. Save the planet."
          layout="responsive"
        />
      </div>
      <div className="grid justify-center my-14 cursor-pointer">
        <Link href="/contact">
          <a>
            <CallToAction text={'Start your project today'} />
          </a>
        </Link>
      </div>
      <Footer />
    </>
  )
}
