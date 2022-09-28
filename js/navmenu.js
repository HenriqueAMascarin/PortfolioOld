(function(){
    const $hamburguer = document.querySelector(".hamburguer");
    const $navMenu = document.querySelector(".nav-menu");
    const $navBar = document.querySelector(".navBar");
    const navLink = document.querySelectorAll(".nav-link");

    $navMenu.classList.remove("navMenu-noJs");
    $navBar.classList.remove("navBar-noJs");
    $hamburguer.classList.remove("hamburguer-noJs");

    function aria(ariaExpanded){
        var ariaExpanded = $navBar.getAttribute("aria-expanded") === "true";
        $navBar.setAttribute("aria-expanded", !ariaExpanded);
        $navMenu.setAttribute("aria-expanded", !ariaExpanded);
    }

    $hamburguer.addEventListener("click", () => {
        $hamburguer.classList.toggle("active");
        $navMenu.classList.toggle("active");
        aria();
    })

    navLink.forEach(function(element) {
        element.addEventListener("click", () => {
            $hamburguer.classList.remove("active");
            $navMenu.classList.remove("active");
            aria();
        })
    })
})();