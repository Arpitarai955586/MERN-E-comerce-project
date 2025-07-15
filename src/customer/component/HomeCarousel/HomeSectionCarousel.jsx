
// import React from 'react';
// import HomeSectionPart from './HomesectionPart/HomeSectionPart';
// import AliceCarousel from 'react-alice-carousel';
// import 'react-alice-carousel/lib/alice-carousel.css';

// const HomeSectionCarousel = () => {
//   const responsive = {
//     0: { items: 1 },
//     600: { items: 2 },
//     1024: { items: 4 },
//   };

//   const items = new Array(10)
//     .fill(1)
//     .map((item, index) => <HomeSectionPart key={index} />);

//   return (
//     <div>
//       <AliceCarousel
//         items={items}
//         responsive={responsive}
//         autoPlay
//         autoPlayInterval={3000}
//         infinite
//         disableButtonsControls
//         disableDotsControls={false}
//         mouseTracking
//       />
//     </div>
//   );
// };

// export default HomeSectionCarousel;
// import React from 'react';
// import HomeSectionPart from './HomesectionPart/HomeSectionPart';
// import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

// import AliceCarousel from 'react-alice-carousel';
// import { Button } from '@headlessui/react';

// const HomeSectionCarousel = () => {
//   const responsive = {
//    0: { items: 1 },
//    600: { items: 3 },
//    1024: { items: 5.5},
//  };
   
//   const items = [1, 1, 1, 1, 1].map((_, index) => (
//     <div key={index} className="inline-block mr-10 w-[200px] border-1 ">
//       <HomeSectionPart />
//     </div>
//   ));

//   return (
//     // <div className="overflow-x-auto whitespace-nowrap py-2 scrollbar-hide border-4 w-[112rem] mx-10 bg-white">

      
//     //   {items}
      
//     // </div>
//     <div className='border'>
//       <div className='relative p-5'>
//         <AliceCarousel
//            items={items}
//            disableButtonsControls
//            infinite
//            responsive={responsive}
//            disableDotsControls
//         />
//       </div>
//       <Button variant="contained"
//       className="z-50 bg-white"
//       sx={{position:"absolute",top:"8rem",left:"0rem", transform:"translateX(50%) rotate(-90deg)",bgcolor:"white",}}
//       aria-label='next'
//       >
//       <KeyboardArrowLeftIcon
//       sx={{transform:"rotate(90deg)",color:"black"}}
//       />
//       </Button>

//     </div>
    

//   );
// };

// export default HomeSectionCarousel;
import React, { useRef } from 'react';
import HomeSectionPart from './HomesectionPart/HomeSectionPart';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const HomeSectionCarousel = ({title}) => {
  const carouselRef = useRef(null);

  const responsive = {
    0: { items: 1 },
    600: { items: 3 },
    1024: { items: 5.5 },
  };

  const items = [1,1,1,1,1].map((_, index) => (
    <div key={index} className="inline-block w-[200px]">
      <HomeSectionPart />
    </div>
  ));

  return (
    <div className="relative border p-5 bg-white">
            <h1 className=" text-4xl font-bold mb-2 px-3  text-black">{title}</h1>

      {/* Carousel */}
      <AliceCarousel
        ref={carouselRef}
        items={items}
        disableButtonsControls
        infinite
        responsive={responsive}
        disableDotsControls
        mouseTracking
      />

      {/* Left Arrow */}
      <button
        onClick={() => carouselRef.current.slidePrev()}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow hover:bg-gray-100"
      >
        <ChevronLeftIcon className="h-6 w-6 text-gray-800" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={() => carouselRef.current.slideNext()}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow hover:bg-gray-100"
      >
        <ChevronRightIcon className="h-6 w-6 text-gray-800" />
      </button>
    </div>
  );
};

export default HomeSectionCarousel;

