import BemCard from '../components/BemCard'
import HersCard from '../components/HersCard'
import Navbar from '../components/Navbar'

const Services = () => {
  return (
    <div>
      <Navbar />
      <div className="col-start-1 col-end-13 row-start-1 row-end-2 grid grid-cols-12">
        <h1 className=" col-start-4 col-end-10 font-robot text-5xl font-bold tracking-wide self-center text-center border-2 border-solid border-dark p-10">
          Services
        </h1>
      </div>
      <BemCard />
      <HersCard />
      <div className="col-start-1 col-end-13 grid grid-cols-12 bg-dark p-6">
        <h3 className="col-start-1 col-end-13 text-center text-4xl text-white font-Roboto pb-6">
          Contact
        </h3>
        <p className="col-start-1 col-end-13 text-center text-xl text-white font-Roboto">
          801.872.9786
        </p>
        <p className="col-start-1 col-end-13 text-center text-xl text-white font-Roboto">
          info@griffinec.com
        </p>
        <p className="col-start-1 col-end-13 text-center text-xl text-white font-Roboto">
          303 N 350 W
        </p>
        <p className="col-start-1 col-end-13 text-center text-xl text-white font-Roboto">
          Bountiful, UT 84010
        </p>
      </div>
    </div>
  )
}

export default Services
