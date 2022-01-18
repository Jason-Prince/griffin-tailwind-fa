import BemCard from '../components/BemCard'
import Footer from '../components/Footer'
import HersCard from '../components/HersCard'
import Navbar from '../components/Navbar'

const Services = () => {
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-12 col-start-1 col-end-13 row-start-1 row-end-2">
        <h1 className="self-center col-start-4 col-end-10 p-10 text-5xl font-bold tracking-wide text-center border-2 border-solid  font-Montserrat border-dark">
          Services
        </h1>
      </div>
      <BemCard />
      <HersCard />
      <Footer />
    </div>
  )
}

export default Services
