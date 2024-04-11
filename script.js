window.addEventListener("load",() => {
    const loader = document.querySelector(".loader");

    loader.classList.add("loader-hidden");
    loader.addEventListener("transitioned", () => {
        document.body.removeChild("loader");
    })
})
const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('nav a').
forEach(link=> {
    if(link.href.incudes(`${activePage}`)){
        link.classList.add('active');
    }
})
