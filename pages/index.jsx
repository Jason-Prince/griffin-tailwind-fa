import CallToAction from '../components/CallToAction'
import Footer from '../components/Footer'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Services from './services'

export default function index() {
  return (
    <>
      {/* <Head>
        <title>Griffin EnerG Consulting</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
          integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </Head> */}
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
