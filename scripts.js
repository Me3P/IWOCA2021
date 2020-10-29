// $(document).ready(function () {
//     $(document).on("scroll", onScroll);
    
//     //smoothscroll
//     $('a[href^="#"]').on('click', function (e) {
        
        
//         $('a').each(function () {
//             $(this).removeClass('active');
//         })
//         $(this).addClass('active');
      
//     });
// });

// function onScroll(event){
//     var scrollPos = $(document).scrollTop();
//     $('#mynav a').each(function () {
//         var currLink = $(this);
//         var refElement = $(currLink.attr("href"));
//         // alert(refElement)
//         if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
//             $('#mynav a').removeClass("active");
//             currLink.addClass("active");
//         }
//         else{
//             currLink.removeClass("active");
//         }
//     });
// }
(() => {
    'use strict';
    // Page is loaded
    const objects = document.getElementsByClassName('asyncImage');
    Array.from(objects).map((item) => {
      // Start loading image
      const img = new Image();
      img.src = item.dataset.src;
      // Once image is loaded replace the src of the HTML element
      img.onload = () => {
        item.classList.remove('asyncImage');
        return item.nodeName === 'IMG' ? 
          item.src = item.dataset.src :        
          item.style.backgroundImage = `url(${item.dataset.src})`;
      };
    });
  })();