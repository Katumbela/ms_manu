export const Settings = {
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

export const responsiveCarousel = {
  superLargeDesktop: {
    
    breakpoint: { max: 2200, min: 1286 },
    items: 4,
    gap: 20
  },
  desktop: {
    breakpoint: { max: 1285, min: 800 },
    items: 3,
    gap: 20
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};


export const responsiveCarouselDashboard = {
  superLargeDesktop: { 
    breakpoint: { max: 2200, min: 1286 },
    items: 1,
    gap: 20
  },
  desktop: {
    breakpoint: { max: 1285, min: 800 },
    items: 1,
    gap: 20
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};