let swiperCards = new Swiper('.cards__content', {
    loop: true,
    spaceBetween: 32,
    grabCursor: true,
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        600: {
            slidesPerView: 2,
        },
        968: {
            slidesPerView: 3,
        },
    },
});

let swiperQuestions = new Swiper('.questions__content', {
    loop: true,
    spaceBetween: 32,
    grabCursor: true,
  
    pagination: {
      el: '.swiper-pagination-questions',
      clickable: true,
      dynamicBullets: true,
    },
  
    navigation: {
      nextEl: '.swiper-questions-button-next',
      prevEl: '.swiper-questions-button-prev',
    },

    breakpoints: {
        600: {
            slidesPerView: 2,
        },
        968: {
            slidesPerView: 3,
        },
    },
});

let popup = document.getElementById('popup'),
popupToggle = document.getElementById('myBtn'),
popupClose = document.querySelector('.close');

popupToggle.onclick = function() {
    popup.style.display = "block"
};

popupClose.onclick = function() {
    popup.style.display = "none"
};

window.onclick = function(e) {
    if (e.target == popup) {
        popup.style.display = "none";
    }
}

const myBtn = document.getElementById('myBtn');
let scrollDisabled = false;

myBtn.addEventListener('click', () => {
    if (!scrollDisabled) {
        document.body.style.overflow = 'hidden';
        scrollDisabled = true;
    }
    else {
        document.body.style.overflow = 'auto';
        scrollDisabled = false;
    }
});