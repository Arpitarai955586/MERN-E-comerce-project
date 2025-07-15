import React from 'react'
import MainCarousel from '../../component/HomeCarousel/MainCarousel'g
import HomeSectionCarousel from '../../component/HomeCarousel/HomeSectionCarousel'

const HomePage = () => {
  return (
    <div>
     <MainCarousel/>
     <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
      <HomeSectionCarousel title="Mens kutta" />
      <HomeSectionCarousel  title="Mens Shoes"/>
       <HomeSectionCarousel title="Womens Saree" />
        <HomeSectionCarousel title="Womens Kutti"/>
         <HomeSectionCarousel title="Womens Kutti"/>
   
</div>

    </div>
  )
}

export default HomePage
