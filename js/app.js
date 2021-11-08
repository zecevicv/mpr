/* #Header
  ======================================================= */
const body = document.querySelector('body');
const header = document.querySelector('.header');
const hamburgerBtn = document.querySelector('.header-hamburger');

hamburgerBtn.addEventListener('click', (e) => {
  body.classList.toggle('no-scroll');
  header.classList.toggle('show');
});

/* #Banner
  ======================================================= */
if (document.querySelector('.home-page .banner .swiper')) {
  new Swiper(".home-page .banner .swiper", {
    loop: true,
    navigation: {
      nextEl: ".home-page .banner .next",
      prevEl: ".home-page .banner .prev",
    },
  });
}

/* #Posts Slider
  ======================================================= */
if (document.querySelector('.posts-slider .swiper')) {
  new Swiper(".posts-slider .swiper", {
    centeredSlides: true,
    loop: true,
    navigation: {
      nextEl: ".posts-slider .next",
      prevEl: ".posts-slider .prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1
      },
      1024: {
        slidesPerView: 3
      }
    }
  });
}

/* #Home About 2
  ======================================================= */
if (document.querySelector('.home-about-2 .swiper')) {
  new Swiper(".home-about-2 .swiper", {
    centeredSlides: true,
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 1.5
      },
      1024: {
        slidesPerView: 3,
      }
    },
    navigation: {
      nextEl: ".home-about-2 .next",
      prevEl: ".home-about-2 .prev",
    },
  });
}