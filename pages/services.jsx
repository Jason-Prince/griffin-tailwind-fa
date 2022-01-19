import BemCard from '../components/BemCard'
import Footer from '../components/Footer'
import HersCard from '../components/HersCard'
import Navbar from '../components/Navbar'
import PageTitle from '../components/PageTitle'

const header = {
  title: 'Services',
  img: "url('/gec_banner_bg.jpg')",
}

const Services = () => {
  return (
    <div>
      <Navbar />
      <PageTitle data={header} />
      <BemCard />
      <HersCard />
      <Footer />
    </div>
  )
}

export default Services
