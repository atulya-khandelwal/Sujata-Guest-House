import React from 'react'
import Navbar from './components/Navbar'
import Navbar2 from './components/Navbar2'
import Hero from './components/Hero'
import Welcome from './components/Welcome'
import Facility from './components/Facility'
import Explore from './components/Explore'
import Gallary from './components/Gallary'
import Location from './components/Location'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Navbar2 />
        <Hero />
        <Welcome />
        <Facility />
        <Explore />
        <Gallary />
        <Location />
        <Footer />
      </div>
    </>
  )
}

export default App
