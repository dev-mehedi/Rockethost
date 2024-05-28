// owlCarousel

var owl = $('.owl-carousel');
owl.owlCarousel({
  items:3,
  loop:true,
  autoplay:true,
  autoplayTimeout:1500,
  autoplayHoverPause:true,
  responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        767:{
            items:1
        },
        991:{
            items:3
        }
    }
});

// TABS

$('#myTabs a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})

