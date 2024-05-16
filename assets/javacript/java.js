document.addEventListener("DOMContentLoaded", function () {
    var forblur = document.getElementById("forblur");

    function toggleMiniMenu() {
        var menu = document.getElementById("mini-menu");
        var isOpen = menu.classList.toggle("open");
        if (isOpen) {
            menu.style.transform = "translateX(0)";
            if (forblur) {
                forblur.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
                forblur.style.height = "100%";
            }
        } else {
            menu.style.transform = "translateX(100%)";
            if (forblur) {
                forblur.style.backgroundColor = "rgba(0, 0, 0, 0)";
                forblur.style.height = "0";
            }
        }
    }

    var forClose = document.querySelector(".for-close");

    if (forClose) {
        forClose.addEventListener("click", function () {
            var miniMenu = document.getElementById("mini-menu");
            miniMenu.classList.remove("open");
            miniMenu.style.transform = "translateX(100%)";
            if (forblur) {
                forblur.style.backgroundColor = "rgba(0, 0, 0, 0)";
                forblur.style.height = "0";
            }
        });
    }

    // !form gönderilmesi
    const subscribeForm = document.querySelector('.subs-form form');

    if (subscribeForm) {
        subscribeForm.addEventListener('submit', function (event) {
            event.preventDefault();
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
                });
            }
        });
    }

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        breakpoints: {
            1024: {
                slidesPerView: 3,
                spaceBetween: 10
            }
        }
    });

    swiper.el.addEventListener('touchstart', function () {
        swiper.autoplay.stop();
    });

    swiper.el.addEventListener('touchend', function () {
        swiper.autoplay.start();
    });
});
