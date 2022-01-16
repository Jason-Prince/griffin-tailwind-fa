import BemCard from '../components/BemCard'
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
      <div className="grid grid-cols-12 col-start-1 col-end-13 p-6 bg-dark">
        <h3 className="col-start-1 col-end-13 pb-6 text-4xl text-center text-white font-Roboto">
          Contact
        </h3>
        <p className="col-start-1 col-end-13 text-xl text-center text-white font-Roboto">
          801.872.9786
        </p>
        <p className="col-start-1 col-end-13 text-xl text-center text-white font-Roboto">
          info@griffinec.com
        </p>
        <p className="col-start-1 col-end-13 text-xl text-center text-white font-Roboto">
          303 N 350 W
        </p>
        <p className="col-start-1 col-end-13 text-xl text-center text-white font-Roboto">
          Bountiful, UT 84010
        </p>
      </div>
    </div>
  )
}

export default Services
