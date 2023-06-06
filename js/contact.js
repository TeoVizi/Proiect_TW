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


    // FORM VALIDATION

    const form = document.getElementsByTagName('form')[0];
    const name = document.getElementsByClassName('form__input')[0]
    const email = document.getElementsByClassName('form__input')[1]
    const textArea = document.getElementsByClassName('form__input')[2]
    const formContent = document.getElementsByClassName('form__content')[0]
    const errorMessage = document.createElement('p')

    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    errorMessage.style.color = 'darkRed'
    errorMessage.style.padding = '2rem'
    errorMessage.style.fontSize = '1.4rem'
    errorMessage.style.backgroundColor = 'mistyRose'
    errorMessage.style.marginBottom = '2rem'
    errorMessage.style.borderRadius = '2rem'
    errorMessage.style.display = 'none'
    formContent.appendChild(errorMessage)

    const emailValid = (email) => {
        return email.value.trim().match(validRegex)
    }

    name.addEventListener('change', (event) => {
        if (event.target.value.trim().length < 3) {
            event.target.style.backgroundColor = 'mistyRose'
            event.target.style.borderBottomColor = 'darkRed'
        } else {
            event.target.style.backgroundColor = 'white'
            event.target.style.borderBottomColor = 'darkGreen'
        }
    } )

    email.addEventListener('change', (event) => {
        if (event.target.value.trim().length < 3) {
            event.target.style.backgroundColor = 'mistyRose'
            event.target.style.borderBottomColor = 'darkRed'
        } else if (!emailValid(event.target)) {
            event.target.style.backgroundColor = 'mistyRose'
            event.target.style.borderBottomColor = 'darkRed'
        } else {
            event.target.style.backgroundColor = 'white'
            event.target.style.borderBottomColor = 'darkGreen'
        }
    } )

    form.addEventListener('submit', (e) => {
        e.preventDefault()

        errorMessage.style.display = 'none'

        name.style.borderBottomColor = 'white'
        name.style.backgroundColor = 'white'

        email.style.borderBottomColor = 'white'
        email.style.backgroundColor = 'white'

        textArea.style.borderBottomColor = 'white'
        textArea.style.backgroundColor = 'white'

        if (name.value.trim().length ===  0) {
            errorMessage.innerHTML = 'Please enter a valid name! (non-empty input)!'
            errorMessage.style.display = 'block'
            name.style.borderBottomColor = 'darkRed'
            name.style.backgroundColor = 'mistyRose'

        } else if (email.value.trim().length === 0) {

            errorMessage.innerHTML = 'Please enter a valid email! (non-empty input)!'
            errorMessage.style.display = 'block'
            email.style.borderBottomColor = 'darkRed'
            email.style.backgroundColor = 'mistyRose'

        } else if (!emailValid(email))  {
            errorMessage.innerHTML = 'Please enter a valid email!'
            errorMessage.style.display = 'block'
            email.style.borderBottomColor = 'darkRed'
            email.style.backgroundColor = 'mistyRose'

        } else if   (textArea.value.trim().length === 0) {
                    errorMessage.innerHTML = 'Please enter a valid message! (non-empty input)!'
                    errorMessage.style.display = 'block'
                    textArea.style.borderBottomColor = 'darkRed'
                    textArea.style.backgroundColor = 'mistyRose'
        }
    })
}