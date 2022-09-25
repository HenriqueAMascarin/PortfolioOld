(function(){
    const sections = document.querySelectorAll("section:not(:first-child)");
    const $target = document.querySelectorAll(".canAnimate");

    $target.forEach(function(element){
        element.classList.add("animation");
    })

    function animeScroll(){
        const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
        sections.forEach(function(element){
            var currentLength = Array.prototype.indexOf.call(sections, element);
            if(windowTop > element.offsetTop){
                $target[currentLength].classList.remove("animation");
            }else{
                $target[currentLength].classList.add("animation");
            }   
        });
    }

    window.addEventListener("scroll", () => {
        if($target.length){
            animeScroll();
        }
    });
})();