(function(){
    const $hamburguer = document.querySelector(".hamburguer");
    const $navMenu = document.querySelector(".nav-menu");
    const $navBar = document.querySelector(".navBar");

    $navMenu.classList.remove("navMenu-noJs");
    $navBar.classList.remove("navBar-noJs");
    $hamburguer.classList.remove("hamburguer-noJs");

    const ariaControl = $navBar.getAttribute("aria-controls");
    const $menu = document.getElementById(ariaControl);

    function aria(ariaExpanded){
        var ariaExpanded = $navBar.getAttribute("aria-expanded") === "true";
        $navBar.setAttribute("aria-expanded", !ariaExpanded);
        $menu.setAttribute("aria-expanded", !ariaExpanded);
    }

    $hamburguer.addEventListener("click", () => {
        $hamburguer.classList.toggle("active");
        $navMenu.classList.toggle("active");
        aria();
    })

    document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
        $hamburguer.classList.remove("active");
        $navMenu.classList.remove("active");
        aria();
    }))
})();