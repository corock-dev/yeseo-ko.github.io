$(document).ready(function () {
    $('.projects').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3.2,
        slidesToScroll: 4,
        autoplay:true,
        autoplaySpeed: 1000,
        // 반응형으로 작업할 때의 옵션들
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 480,
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
              
});
