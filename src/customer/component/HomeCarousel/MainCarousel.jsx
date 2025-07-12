import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { MainCarouselPage } from './MainCarouselPage';


const MainCarousel = () => {
    const items = 
   MainCarouselPage.map((item)=><img className='cursor-pointer' roles='presentation' src={item.image} alt=""/>)
return(
<div>
    
    <AliceCarousel
        items={items}
        // consoleStrategy="alternate"
        autoPlay={true}
        autoPlayInterval={3000}
        infinite={true}
        disableButtonsControls={true}
        disableDotsControls={false}
    />
</div>
)
};
export default MainCarousel;