import CallToAction from '../components/CallToAction'
import Footer from '../components/Footer'
import Image from 'next/image'
import InfographicContent from '../components/InfographicContent'
import InfographicImage from '../components/InfographicImage'
import Navbar from '../components/Navbar'
import PageTitle from '../components/PageTitle'
import React from 'react'
import Section from '../components/Section'
import SubSection from '../components/SubSection'
import ZeroEnergyCard from '../components/ZeroEnergyCard'
import ZeroEnergyCert from '../components/ZeroEnergyCert'

const zne = [
  {
    alt: 'ZNE Guide Gas Electric',
    src: '/ZNE Guide_print_Gas_Electric_final.jpg',
    width: 5100,
    height: 3300,
    layout: 'intrinsic',
  },
  {
    alt: 'ZNE Guide Single Family',
    src: '/ZNE Guide_Print_SingleFamily.png',
    width: 3400,
    height: 2200,
    layout: 'intrinsic',
  },
  {
    paragraphs: [
      'Griffin EnerG Consulting approached the Governor’s Office of Energy Development (OED), Rocky Mountain Power (RMP), and Dominion about educating developers, contractors, and design professionals on zero net energy building principles (Climate Zone 5B) through a series of infographics.',
      'The results of the effort was in the form of interactive, web-capable infographics for both single family homes and multi-family projects.',
    ],
  },
]
const living_building_challenge = {
  image: {
    alt: 'Living Building Challenge',
    src: '/Living_Building_Challenge.jpg',
    width: 1600,
    height: 1200,
    layout: 'intrinsic',
  },
  image_2: {
    alt: 'Living Building Challenge Logo',
    src: '/Living_Building_Challenge_Logo.jpg',
    width: 288,
    height: 102,
    layout: 'intrinsic',
  },
  text: {
    title: 'Living Building Challenge',
    project: 'Arch|Nexus Sac',
    level: 'Full',
    approach: 'On-site Generation',
    status: 'Verified',
    location: 'Sacramento, CA',
    note: 'Under separate tenure',
  },
}
const green_globes = {
  image: {
    alt: 'Green Globes',
    src: '/Green_Globes.jpg',
    width: 1050,
    height: 693,
    layout: 'intrinsic',
  },
  image_2: {
    alt: 'Green Globes Logo',
    src: '/green_globes_logo.jpg',
    width: 180,
    height: 151,
    layout: 'intrinsic',
  },
  text: {
    title: 'Green Globes',
    project: 'Wynn South Convention Expansion',
    level: 'Full',
    approach: 'Three Green Globes',
    status: 'Pending Verification',
    location: 'Las Vegas, NV',
  },
}
const infographic_1 = {
  image: {
    alt: 'ZNE Guide Gas Electric',
    src: '/ZNE Guide_print_Gas_Electric_final.jpg',
    width: 5100,
    height: 3300,
    layout: 'responsive',
  },
  title: 'ZNE Multifamily Infographic',
}
const infographic_2 = {
  image: {
    alt: 'ZNE Guide Single Family',
    src: '/ZNE Guide_Print_SingleFamily.png',
    width: 3400,
    height: 2200,
    layout: 'intrinsic',
  },
  title: 'ZNE Residential Infographic',
}
const infographic_content = {
  p1: `Griffin EnerG Consulting approached the Governor’s Office of Energy
    Development (OED), Rocky Mountain Power (RMP), and Dominion about
    educating developers, contractors, and design professionals on zero net
    energy building principles (Climate Zone 5B) through a series of
    infographics.`,
  p2: `The results of the effort was in the form of interactive, web-capable
    infographics for both single family homes and multi-family projects.`,
}
const zero_energy_certification = {
  image: {
    alt: 'Zero Energy Logo',
    src: '/Zero_Energy_Logo.png',
    width: 1285,
    height: 658,
    layout: 'intrinsic',
  },
  text: {
    paragraph:
      'The most effective way of verifying the status of a zero net energy (ZNE) building is via third party verification. I have had the opportunity to work on the design and operation of several ZNE projects which have been verified by a third party through a certification system. The Living Building Challenge, Green Globes, and the  International Living Future Institute’s (ILFI) zero energy certification are relevant work examples illustrated below.',
  },
}
const highland_drive = {
  image: {
    alt: 'Higland Drive',
    src: '/Highland.jpg',
    width: 4032,
    height: 3024,
    layout: 'intrinsic',
  },
  text: {
    title: 'ILFI Zero Energy',
    project: 'Highland Drive',
    level: 'Full',
    approach: 'On-site Generation',
    status: 'Verified',
    location: 'Holladay, UT',
  },
}
const lincoln_lane = {
  image: {
    alt: 'Lincoln Lane',
    src: '/Lincoln.jpg',
    width: 1600,
    height: 1200,
    layout: 'intrinsic',
  },
  text: {
    title: 'ILFI Zero Energy',
    project: 'Lincoln Lane',
    level: 'Full',
    approach: 'On-site Generation',
    status: 'Verified',
    location: 'Holladay, UT',
  },
}
const fire_station = {
  image: {
    alt: 'SLC Fire Station #14 (SLC, UT)',
    src: '/Fire_Station.png',
    width: 1180,
    height: 915,
    layout: 'intrinsic',
  },
  text: {
    title: 'SLC Fire Station #14',
    approach: 'On-site Generation',
    status: 'Post Occupancy Evaluation',
    location: 'SLC, UT',
  },
}
const us_bureau_of_reclamation = {
  image: {
    alt: 'US Bureau of Reclamation',
    src: '/US_Bureau_of_Reclamation.jpg',
    width: 5000,
    height: 2768,
    layout: 'intrinsic',
  },
  text: {
    title: 'US Bureau of Reclamation',
    approach: 'On-site Generation',
    status: 'Feasibility Study',
    location: 'Pleasant Grove, UT',
    note: 'Under separate tenure',
  },
}
const slc_branch_library = {
  image: {
    alt: 'SCL Branch Library',
    src: '/SCL_Branch_Library.jpg',
    width: 4032,
    height: 3024,
    layout: 'intrinsic',
  },
  text: {
    title: 'SLC Branch Library',
    approach: 'On-site Generation',
    status: 'ZNE Design',
    location: 'Daybreak, UT',
    note: 'Under separate tenure',
  },
}
const non_certification = {
  text: {
    paragraph: `The Department of Energy’s (DOE) zero net energy building (ZNEB)
        definition is an alternative path to third party certifications. On
        multiple occasions, I have had the opportunity to provide feasibility
        studies and post occupancy evaluation for getting projects to ZNE. The
        projects below illustrate projects which either explored ZNE and chose
        not to obtain the status or the owner experienced issues getting to ZNE
        and required corrective action post occupancy to obtain the operational
        goal.`,
  },
}
const project_credits = {
  text: {
    credits: [
      'Emma Shipley, Graphic Designer, ZNE Infographics',
      'Shawna Cuan, Project Manager, ZNE Infographics',
      'Joseph Yee, Architect, Arch|Nexus SAC',
      'Frank Moore, Wynn Architect, Wynn South Convention Expansion',
      'Amir Haskic, Owner, Lincoln Lane Residence',
      'Amir Haskic, Owner, Highland Drive',
      'Cameron Scott, SLC CxA, Fire Station 14',
      'Stephen Dundorf, Sustainable Building Design, US Bureau of Reclamation',
      'Arch|Nexus, Architect, Daybreak Branch Library',
    ],
  },
}

const header = {
  title: 'Zero Net Energy',
  img: "url('/gec_banner_bg.jpg')",
}
const ZeroNetEnergy = () => {
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-12 gap-y-10 nav:gap-20">
        <div className="col-start-1 row-start-1 col-span-full">
          <PageTitle data={header} />
        </div>
        <div className="mx-4 col-start-1 row-start-2 nav:col-span-6 col-span-full">
          <InfographicImage data={infographic_1} />
        </div>
        <div className="mx-4 col-start-1 row-start-3 col-span-full nav:col-span-6 nav:col-start-7 nav:row-start-2">
          <InfographicImage data={infographic_2} />
        </div>
        <div className="col-start-1 row-start-4 col-span-full nav:col-span-8 nav:row-start-3">
          <InfographicContent data={infographic_content} />
        </div>
        <div className="row-start-5 col-span-full nav:col-span-4 nav:col-start-9 nav:row-start-3">
          <CallToAction text={'Start your project today'} />
        </div>
        <div className="col-start-1 row-start-6 nav:row-start-4 col-span-full">
          <SubSection title={'Certifications'} />
        </div>
        <div className="col-start-1 row-start-7 nav:row-start-5 col-span-full">
          <ZeroEnergyCard data={living_building_challenge} />
        </div>
        <div className="col-start-1 row-start-[8] nav:row-start-6 col-span-full">
          <ZeroEnergyCard data={green_globes} />
        </div>
        <div className="col-start-1 row-start-[9] nav:row-start-7 col-span-full">
          <ZeroEnergyCard data={zero_energy_certification} />
        </div>
        <div className="col-start-1 row-start-[10] nav:row-start-[8] col-span-full">
          <ZeroEnergyCard data={highland_drive} />
        </div>
        <div className="col-start-1 row-start-[11] nav:row-start-[10] col-span-full">
          <ZeroEnergyCard data={lincoln_lane} />
        </div>
        <div className="col-start-1 row-start-[12] nav:row-start-[11] col-span-full">
          <SubSection title={'Non-Certifications'} />
        </div>
        <div className="col-start-1 row-start-[13] nav:row-start-[12] col-span-full">
          <ZeroEnergyCard data={fire_station} />
        </div>
        <div className="col-start-1 row-start-[14] nav:row-start-[13] col-span-full">
          <ZeroEnergyCard data={us_bureau_of_reclamation} />
        </div>
        <div className="col-start-1 row-start-[15] nav:row-start-[14] col-span-full">
          <ZeroEnergyCard data={slc_branch_library} />
        </div>
        <div className="col-start-1 row-start-[16] nav:row-start-[15] col-span-full">
          <ZeroEnergyCard data={non_certification} />
        </div>
        <div className="col-start-1 row-start-[17] nav:row-start-[16] col-span-full">
          <SubSection title={'Project Credits'} />
        </div>
        <div className="col-start-1 row-start-[18] nav:row-start-[17] col-span-full">
          <ZeroEnergyCard data={project_credits} />
        </div>
        <div className="col-start-1 row-start-[19] nav:row-start-[18] col-span-full">
          <Footer />
        </div>
      </div>
    </>
  )
}

export default ZeroNetEnergy
