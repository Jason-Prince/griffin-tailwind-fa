import Carousel from '../components/Carousel'
import Navbar from '../components/Navbar'
const slides = [
  { title: 'Huntsman', src: '/Huntsman.jpg' },
  { title: 'Impact Prosperity Epicenter', src: '/ImpactProsperityEpicenter.jpg' },
  { title: 'KoZo House', src: '/KoZoHouse.jpg' },
  { title: 'Public Safety Building', src: '/PublicSafetyBuilding.jpg' },
]

export default function index() {
  return (
    <>
      <Navbar className="mt-0" />
      <section className="mt-48">
        <Carousel slides={slides} />
      </section>
    </>
  )
}
