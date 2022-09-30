(function(){
    const projects = document.querySelectorAll(".project-card");
    const $ballSelection = document.querySelectorAll(".ball");
    const $projectContainer = document.querySelector(".project-container");
    const projectScroll = document.querySelector(".projects");
    const $selectionbuttons = document.querySelector(".selection-buttons");

    var sizeWindow = window.innerWidth;
    var currentLength = 0;
    var showingProjects = 0;
    var timeout;
    

    function addClass(current){
        $ballSelection.forEach(function(element){
            element.classList.remove('currentButton');
        })
        $ballSelection[current].classList.add("currentButton");
    }

    function offset(){
        showingProjects = parseInt(getComputedStyle(projectScroll).getPropertyValue('--projects-showing'));
        if(showingProjects === 3){
            $selectionbuttons.classList.remove("selectionButtons-js");
            return;
        }
        $selectionbuttons.classList.add("selectionButtons-js");
    }
    offset();

    $selectionbuttons.addEventListener("click", function(e){
        var currentIndex = Array.prototype.indexOf.call($ballSelection, e.target);
        if(currentIndex === 1 && currentLength < (projects.length - showingProjects)){
            currentLength += 1;
            UpdateCarousel();
        }else if(currentIndex === 0 && currentLength < (projects.length) && currentLength > 0){
            currentLength -= 1;
            UpdateCarousel();
        }
        addClass(currentIndex);
    })

    function UpdateCarousel(){
        var projectWidth = projects[0].clientWidth;
        $projectContainer.style.transform = "translate3d(-" + (projectWidth * currentLength) + "px, 0, 0)";
    }
    
    if(showingProjects != 3){
        setInterval(() => {
            if(currentLength < projects.length - showingProjects){
                currentLength++;
                UpdateCarousel();
            }else if(currentLength === projects.length - showingProjects){
                currentLength = 0;
                UpdateCarousel();
            }
        }, 5000);
    }
    
    window.addEventListener("resize", () => {
        if(sizeWindow != window.innerWidth){
            clearTimeout(timeout);
            timeout = setTimeout( () => {
                sizeWindow = window.innerWidth;
                offset();
                currentLength = 0;
                UpdateCarousel();
            }, 250);  
        }      
    });
})();