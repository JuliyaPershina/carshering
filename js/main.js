$(function () {
  $('.top__slider').slick({
    arrows: false,
    dots: true,
    // autoplay: true,
    fade: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          dots: false
        }
      },
    ]
  });
});
$(function () {
  $('.review__slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 1140,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
});

$('.menu__btn').on('click', function () {
  $('.menu__list').toggleClass('menu__list--active');
})

