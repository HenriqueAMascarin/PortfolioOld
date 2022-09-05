(function(){
    const hamburguer = document.querySelector(".hamburguer");
    const navMenu = document.querySelector(".nav-menu");
    const navBar = document.querySelector(".navbar");

    navMenu.classList.remove("navmenu-noJs");
    navBar.classList.remove("navbar-noJs");

    hamburguer.addEventListener("click", () => {
        hamburguer.classList.toggle("active");
        navMenu.classList.toggle("active");
    })

    document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
        hamburguer.classList.remove("active");
        navMenu.classList.remove("active");
    }))
})();