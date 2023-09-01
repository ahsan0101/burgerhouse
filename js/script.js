// window.onload=function(){
//     $('.slider').slick({
//     autoplay:true,
//     autoplaySpeed:1500,
//     arrows:true,
//     prevArrow:'<button type="button" class="slick-prev"></button>',
//     nextArrow:'<button type="button" class="slick-next"></button>',
//     centerMode:true,
//     slidesToShow:3,
//     slidesToScroll:1,    
//     });
//   };

  $('.responsive').slick({
    // autoplay:true,
    autoplaySpeed:1500,
    dots: true,
    arrows:false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //       infinite: true,
    //       dots: true
    //     }
    //   },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  
  