var blurOverlay = document.getElementById("forblur");
var closeButtons = document.querySelectorAll(".for-close");
var subscribeForm = document.querySelector('.subs-form form');

function toggleMiniMenu() {
    var menu = document.getElementById("mini-menu");
    var isOpen = menu.classList.toggle("open");
    if (isOpen) {
        menu.style.transform = "translateX(0)"; 
        blurOverlay.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
        blurOverlay.style.height = "100%";
    } else {
        menu.style.transform = "translateX(100%)";
        blurOverlay.style.backgroundColor = "rgba(0, 0, 0, 0)";
        blurOverlay.style.height = "0";
    }
} 

closeButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        closeMenu();
    });
});

subscribeForm.addEventListener('submit', function (event) {
    event.preventDefault(); 
    validateForm();
});

function closeMenu() {
    var miniMenu = document.getElementById("mini-menu");
    miniMenu.classList.remove("open"); 
    miniMenu.style.transform = "translateX(100%)";
    blurOverlay.style.backgroundColor = "rgba(0, 0, 0, 0)"; 
    blurOverlay.style.height = "0";
}

function validateForm() {
    const inputs = subscribeForm.querySelectorAll('input');
    let formValid = true;

    inputs.forEach(function (input) {
        if (input.value.trim() === '') {
            input.style.borderBottomColor = 'red';
            formValid = false;
        } else {
            input.style.borderBottomColor = ''; 
        }
    });

    if (formValid) {
       alert('Thanks For Subscribing!');
       inputs.forEach(function (input) {
        input.value = '';        
    })
}}

// slayt duzelisleri
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
    breakpoints: {
        1024: {
            slidesPerView: 3,
            spaceBetween: 10
        }
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false, 
    }
});

var isTouchingSlide = false;

swiper.el.addEventListener('touchstart', handleTouchStart);
swiper.el.addEventListener('touchend', handleTouchEnd);

function handleTouchStart() {
    isTouchingSlide = true;
    stopAutoplay();
}

function handleTouchEnd() {
    isTouchingSlide = false;
    startAutoplay();
}

function startAutoplay() {
    if (!swiper.autoplay.running) {
        swiper.autoplay.start();
    }
}

function stopAutoplay() {
    if (swiper.autoplay.running) {
        swiper.autoplay.stop();
    }
}
