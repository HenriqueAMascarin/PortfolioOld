(function(){
    const $loader = document.querySelector(".preloader");
    const $enableDiv = document.querySelector("#principal");
    var $windowDisplay = document.querySelector("body");
    $enableDiv.setAttribute("id", "disable")
    $loader.classList.add("preloader-js");
    $windowDisplay.classList.add("hiddenOverflow");

    window.addEventListener("load", () => {
        setTimeout(() => {
            $enableDiv.removeAttribute('id');
            $windowDisplay.classList.remove("hiddenOverflow");
            $loader.remove();
        }, 3000);
    });
})();