// start header
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", this.window.scrollY > 80);
});
// end header

// start media
let menu = document.querySelector("#menu-icon");
let nav = document.querySelector(".nav");

menu.onclick = () => {
    menu.classList.toggle("bx-x");
    nav.classList.toggle("open");
};

window.onscroll = () => {
    menu.classList.remove("bx-x");
    nav.classList.remove("open");
};
// end media

// start darkmode
let darkmode = document.querySelector("#darkModeToggle");

darkmode.onclick = () => {
    if(darkmode.classList.contains("fa-moon")) {
        darkmode.classList.replace("fa-moon", "fa-sun");
        document.body.classList.add("dark-mode");
    } else {
        darkmode.classList.replace("fa-sun", "fa-moon");
        document.body.classList.remove('dark-mode')
    }
}

const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});
// end darkmode