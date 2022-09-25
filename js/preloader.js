(function(){
    const $loader = document.querySelector(".preloader");
    var $windowDisplay = document.querySelector("body");
    $loader.classList.add("preloader-js");
    $windowDisplay.classList.add("hiddenOverflow");

    window.addEventListener("load", () => {
        setTimeout(() => {
            $windowDisplay.classList.remove("hiddenOverflow")
            $loader.remove();
        }, 3000);
    });
})();