var swiper = new Swiper(".home", {
  slidesPerView:1,
 
  centeredSlides: true,
  spaceBetween: 20,
  autoplay: {
    delay:2500,
    disableOninteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  
});




var swiper = new Swiper(".coming-container", {
  slidesPerView: 5,

  centeredSlides: true,
  spaceBetween: 20,
  autoplay: {
    delay:2500,
    disableOninteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

 



  
});


document.addEventListener('DOMContentLoaded', 
 function() {
   document.querySelector("select").onchange = function() {
     document.querySelector('body').style.background = this.value;
   }
 });

