$('.projects-content').slick({
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 3,
    arrows:true,
    focusOnSelect: true,
    prevArrow: $(".prev"),
    nextArrow: $(".next"),

    responsive: [
      {
        breakpoint: 1026,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '20px',
          slidesToShow: 1
        }
      },
    ]
  });

$('.single-item').slick({
    dots:true,
    // arrows:false,
    prevArrow: $(".prev"),
    nextArrow: $(".next"),
});