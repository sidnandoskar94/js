const body = document.querySelector('body');
const btns = document.querySelectorAll('.theme-btn');

btns.forEach(btn => {
    btn.addEventListener('mouseover', (e) => {
        const color = window.getComputedStyle(e.target).backgroundColor;
        body.style.backgroundColor = color
    })
})