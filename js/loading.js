window.onload = () => {
    const img = document.getElementsByClassName('load__image')[0];
    let w = window.innerWidth;
    let h = window.innerHeight;

    document.addEventListener('keydown', () => {
        const anotherImage = document.createElement('img')
        anotherImage.setAttribute('src', '../img/nacho.jpeg')
        const styles = window.getComputedStyle(img);

        let cssText = styles.cssText;

        if (!cssText) {
            cssText = Array.from(styles).reduce((str, property) => {
                return `${str}${property}:${styles.getPropertyValue(property)};`;
            }, '');
        }

        anotherImage.style.cssText = cssText
        anotherImage.style.position = 'absolute'
        let posx = Math.floor(Math.random() * w);
        let posy = Math.floor(Math.random() * h);
        anotherImage.style.left = posx + "px";
        anotherImage.style.top = posy + "px";

        const now = Date.now()

        anotherImage.addEventListener('click', () => {
            let timer = setInterval(() => {
                let timePassed = Date.now() - now
                if(timePassed >= 5000) {
                    clearInterval(timer)
                }
                anotherImage.style.scale = '1.05'
            }, 1000)
        })
        document.body.appendChild(anotherImage)
    })
}