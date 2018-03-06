document.addEventListener("DOMContentLoaded", function() {
    function toggleDisplayClass(e) {
        let navMenu = document.getElementById("drawer");
        console.log(navMenu);
        navMenu.classList.toggle("show");
    }

    let navToggleButton = document.getElementsByClassName("header__menu-toggle")[0];
    navToggleButton.addEventListener("click", toggleDisplayClass);
});