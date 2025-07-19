import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navigation from './customer/component/navigation/Navigation'
import MainCarousel from './customer/component/HomeCarousel/MainCarousel'
import HomeSectionPart from './customer/component/HomeCarousel/HomesectionPart/HomeSectionPart'
import HomeSectionCarousel from './customer/component/HomeCarousel/HomeSectionCarousel'
import HomePage from './customer/pages/Homepage/Homepage'

function App() {
  
  return (
    <div>
    <Navigation/>
    <HomePage/>
     
    </div>
  )
}

export default App
