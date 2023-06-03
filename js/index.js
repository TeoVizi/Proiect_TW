md = window.matchMedia("(max-width: 1100px)")

window.onload = () => {

    // HAMBURGER MENU

    const navigation = document.getElementsByTagName("nav")[0]
    const menu = document.getElementsByClassName("menu")[0];
    const menuItems = document.querySelectorAll(".menu-item");
    const hamburger= document.getElementById("hamburger-button");
    const closeIcon= document.querySelector(".close-icon");
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
        function(menuItem) {
            menuItem.addEventListener("click", toggleMenu);
        }
    )

    // COOKIES POP-UP

    const backdrop = document.createElement("div")
    const overlay = document.createElement('div')

    // COOKIES BACKDROP
    backdrop.style.width = '100%'
    backdrop.style.height = '100%'
    backdrop.style.backgroundColor = 'black'
    backdrop.style.opacity = '70%'
    backdrop.style.position = 'absolute'
    backdrop.style.top = '0'
    backdrop.style.left = '0'
    backdrop.style.zIndex = '1000'
    document.body.appendChild(backdrop)

    //COOKIES OVERLAY

    overlay.style.width = '30rem'
    overlay.style.height = '25rem'
    overlay.style.backgroundColor = 'white'
    overlay.style.position = 'fixed'
    overlay.style.display = 'flex'
    overlay.style.flexDirection = 'column'
    overlay.style.justifyContent = 'center'
    overlay.style.alignItems = 'center'
    overlay.style.gap = '2rem'
    overlay.style.zIndex = '2000'
    overlay.style.borderRadius = '5%'
    overlay.style.padding = '4rem'


    let positionArray = [
        {top: 0, left: 0},
        {bottom: 0, left: 0},
        {bottom: 0, right: 0},
        {top: 0, right: 0}
    ]

    let position = Math.floor(Math.random() * positionArray.length)
    if (positionArray[position].top !== undefined) {
        overlay.style.top = positionArray[position].top
    }
    if (positionArray[position].bottom !== undefined) {
        overlay.style.bottom = positionArray[position].bottom
    }
    if (positionArray[position].left !== undefined) {
        overlay.style.left = positionArray[position].left
    }
    if (positionArray[position].right !== undefined) {
        overlay.style.right = positionArray[position].right
    }


    const buttons = document.createElement('div')
    buttons.style.display = 'flex'
    buttons.style.gap = '1rem'
    buttons.style.alignItems = 'center'

    const cancelBtn = document.createElement('button')
    cancelBtn.setAttribute('type', 'button')
    cancelBtn.setAttribute('id', 'cancel-btn')

    //cancel button
    cancelBtn.style.paddingLeft = '2rem'
    cancelBtn.style.paddingRight = '2rem'
    cancelBtn.style.paddingTop = '1rem'
    cancelBtn.style.paddingBottom = '1rem'
    cancelBtn.style.fontSize = '1.4rem'
    cancelBtn.style.borderStyle = 'solid'
    cancelBtn.style.borderRadius = '10%'
    cancelBtn.style.borderWidth = '.2rem'
    cancelBtn.style.borderColor = 'darkRed'
    cancelBtn.style.backgroundColor = 'white'
    cancelBtn.style.color = 'darkRed'
    cancelBtn.innerHTML = 'Decline'
    cancelBtn.style.fontFamily = '\'Lora\', serif'
    cancelBtn.addEventListener('mouseenter', () => {
        cancelBtn.style.backgroundColor = 'darkRed'
        cancelBtn.style.color = 'white'
    })

    cancelBtn.addEventListener('mouseleave', () => {
        cancelBtn.style.backgroundColor = 'white'
        cancelBtn.style.color = "darkRed"
    })

    cancelBtn.addEventListener('click', () => {
        localStorage.setItem('cookies', 'decline')
        overlay.remove()
        backdrop.remove()
    })

    const acceptBtn = document.createElement('button')

    acceptBtn.style.paddingLeft = '2rem'
    acceptBtn.style.paddingRight = '2rem'
    acceptBtn.style.paddingTop = '1rem'
    acceptBtn.style.paddingBottom = '1rem'
    acceptBtn.style.fontSize = '1.4rem'
    acceptBtn.style.borderStyle = 'solid'
    acceptBtn.style.borderRadius = '10%'
    acceptBtn.style.borderWidth = '.2rem'
    acceptBtn.style.borderColor = 'darkGreen'
    acceptBtn.style.backgroundColor = 'darkGreen'
    acceptBtn.style.color = 'white'
    acceptBtn.style.fontFamily = '\'Lora\', serif'

    acceptBtn.addEventListener('mouseenter', () => {
        acceptBtn.style.backgroundColor = 'green'
    })

    acceptBtn.addEventListener('mouseleave', () => {
        acceptBtn.style.backgroundColor = 'darkGreen'
    })

    acceptBtn.addEventListener('click', () => {
        localStorage.setItem('cookies', 'accept')
        overlay.remove()
        backdrop.remove()
    })

    const cookiesText = document.createElement('p')
    cookiesText.innerHTML = 'This website uses cookies to ensure you get the best experience on out website.'
    cookiesText.style.fontSize = '1.8rem'
    cookiesText.style.display = 'block'
    cookiesText.style.textAlign = 'center'

    const xBtn = document.createElement('img')
    xBtn.setAttribute('src', '../img/close.png')
    xBtn.style.width = '2rem'
    xBtn.style.alignSelf = 'end'
    xBtn.style.cursor = 'pointer'

    xBtn.addEventListener('click', () => {
        localStorage.setItem('cookies', 'decline')
        overlay.remove()
        backdrop.remove()
    })

    overlay.appendChild(xBtn)
    overlay.appendChild(cookiesText)
    acceptBtn.innerHTML = 'Accept'
    buttons.appendChild(cancelBtn)
    buttons.appendChild(acceptBtn)
    overlay.appendChild(buttons)
    document.body.appendChild(overlay)

    if (localStorage.getItem('cookies')) {
        overlay.remove()
        backdrop.remove()
    }
}