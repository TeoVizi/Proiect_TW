md = window.matchMedia("(max-width: 1100px)")

window.onload = () => {

    // HAMBURGER MENU

    const navigation = document.getElementsByTagName("nav")[0]
    const menu = document.getElementsByClassName("menu")[0];
    const menuItems = document.querySelectorAll(".menu-item");
    const hamburger = document.getElementById("hamburger-button");
    const closeIcon = document.querySelector(".close-icon");
    const menuIcon = document.querySelector(".menu-icon");
    closeIcon.style.display = "none"

    navDisplay(md)
    md.addEventListener('change', navDisplay)

    function navDisplay(media) {
        if (media.matches) {
            menuIcon.style.display = "block"
            hamburger.style.display = "block"
            navigation.style.display = "none"
            menu.style.display = 'block'
        } else {
            menuIcon.style.display = "none"
            hamburger.style.display = "none"
            menu.style.display = 'none'
            navigation.style.display = "block"
        }
    }

    function toggleMenu() {
        if (menu.classList.contains("show-menu")) {
            menu.classList.remove("show-menu");
            closeIcon.style.display = "none";
            menuIcon.style.display = "block";
        } else {
            menu.classList.add("show-menu");
            closeIcon.style.display = "block";
            menuIcon.style.display = "none";
        }
    }

    hamburger.addEventListener("click", toggleMenu);

    menuItems.forEach(
        function (menuItem) {
            menuItem.addEventListener("click", toggleMenu);
        }
    )
}