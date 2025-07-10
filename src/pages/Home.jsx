import React from 'react'
import HeaderPage from '../components/HeaderPage'
import Ourbranches from '../components/Ourbranches'
import Timeline from '../components/Aboutsection/Timeline'
import Example from '../components/Example'
import OmsheelContent from '../components/OmsheelContent'
import EmailVerification from './EmailVerification'
// import Footer from '../components/Footer'
import OurAssociatePartners from '../components/OurAssociatePartners'
const Home = () => {
  return (
    <div>
        <HeaderPage/>
        <OmsheelContent/>
        <Ourbranches/>
        <OurAssociatePartners/>
        <Timeline/>
        {/* <EmailVerification/> */}
        {/* <Footer/> */}
    </div>
  )
}

export default Home
