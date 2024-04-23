var forblur = document.getElementById("forblur");

function toggleMiniMenu() {
    var menu = document.getElementById("mini-menu");
    var isOpen = menu.classList.toggle("open");
    if (isOpen) {
        menu.style.transform = "translateX(0)"; 
        forblur.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
        forblur.style.height = "100%";
    } else {
        menu.style.transform = "translateX(100%)";
        forblur.style.backgroundColor = "rgba(0, 0, 0, 0)";
        forblur.style.height = "0";
    }
}   

document.addEventListener("DOMContentLoaded", function() {
    var forClose = document.querySelector(".for-close");

    forClose.addEventListener("click", function() {
        var miniMenu = document.getElementById("mini-menu");
        miniMenu.classList.remove("open"); 
        miniMenu.style.transform = "translateX(100%)";
        forblur.style.backgroundColor = "rgba(0, 0, 0, 0)"; 
        forblur.style.height = "0";
    });
});

// !form gonderilmesi

document.addEventListener("DOMContentLoaded", function () {
    const subscribeForm = document.querySelector('.subs-form form');

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
});
