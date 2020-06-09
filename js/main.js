$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})

$(document).ready(function () {
    $('.counter').each(function () {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({ countNum: $this.text() }).animate({
        countNum: countTo
      },
        {
          duration: 3000,
          easing: 'linear',
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
          }
        });
    });
  });
  
  $(window).scroll(function () {
    if ($(window).scrollTop() > 800) {
        $("#btnUp").fadeIn(500);
    }
    else {
        $("#btnUp").fadeOut(500);
    }
})
$("#btnUp").click(function(){
    $("body,html").animate({scrollTop:0},1000)
})



$("nav a").click(function () {
    let aHref = $(this).attr("href");
    let aOffset = $(aHref).offset().top;
    $("body,html").animate({ scrollTop: aOffset }, 1000)
})
