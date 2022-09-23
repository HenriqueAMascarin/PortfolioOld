(function(){
    const projects = document.querySelectorAll(".project-card");
    const ballSelection = document.querySelectorAll(".ball");
    const projectDiv = document.querySelector(".project-card");
    const projectContainer = document.querySelector(".project-container");
    const projectScroll = document.querySelector(".projects");
    const $selectionbuttons = document.querySelector(".selection-buttons");

    var sizeWindow = window.innerWidth;
    var currentLength = 0;
    var showingProjects = 0;
    var select;

    function addClass(current){
        ballSelection.forEach(function(element){
            element.classList.remove('currentButton');
        })
        ballSelection[current].classList.add("currentButton");
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
        var currentIndex = Array.prototype.indexOf.call(ballSelection, e.target);
        if(currentIndex === 1 && currentLength < (projects.length - showingProjects)){
            currentLength += 1;
            UpdateCarousel("right");
        }else if(currentIndex === 0 && currentLength < (projects.length) && currentLength > 0){
            currentLength -= 1;
            UpdateCarousel("left");
        }
        select = currentIndex;
        addClass(currentIndex);
    })

    function UpdateCarousel (direction){
        var projectWidth = projectDiv.clientWidth;
        if(direction === "right"){
            projectContainer.style.transform = "translate(-" + (projectWidth * currentLength) + "px)";
        }else{
            projectContainer.style.transform = "translate(-" + (projectWidth * currentLength) + "px)";
        }
    }
    
    var timeout;
    window.addEventListener("resize", function() {
        if(sizeWindow != window.innerWidth){
            clearTimeout(timeout)
            timeout = setTimeout(function() {
                alert("tela mudou");
                size = window.innerWidth;
                offset();
                currentLength = 0;
                UpdateCarousel("left");
            }, 250);  
        }      
    });
})()