(function(){
    const projects = document.querySelectorAll(".project-card");
    const ballSelection = document.querySelectorAll(".ball");
    const projectDiv = document.querySelector(".project-card");
    const projectContainer = document.querySelector(".project-container");
    const projectScroll = document.querySelector(".projects");
    const $selectionbuttons = document.querySelector(".selection-buttons");

    var currentLength = 0;
    var showingProjects;
    var select = 3;

    function addClass(current){
        var x = 0;
        ballSelection.forEach(function(element){
            element.classList.remove('currentButton');
        })
        ballSelection[current].classList.add("currentButton");
    }

    function offset(){
        if(projectScroll.clientWidth < 704){
            showingProjects = 1;
            $selectionbuttons.classList.add("selectionButtons-js");
        }else if(projectScroll.clientWidth === 704){ //fixed value of clientWidth
            showingProjects = 2;
            $selectionbuttons.classList.add("selectionButtons-js");
        }else{
            showingProjects = 3;
            $selectionbuttons.classList.remove("selectionButtons-js");
        }
    }
    offset();

    $selectionbuttons.addEventListener("click", (e) =>{
        var currentIndex = Array.prototype.indexOf.call(ballSelection, e.target);
        if(currentIndex === 1 && currentLength < (projects.length - showingProjects)){
            currentLength += 1;
            UpdateCarousel("right");
            select = currentIndex;
            addClass(currentIndex);
        }else if(currentIndex === 0 && currentLength < (projects.length) && currentLength > 0){
            currentLength -= 1;
            UpdateCarousel("left");
            select = currentIndex;
            addClass(currentIndex);
        }
    })

    function UpdateCarousel (direction){
        var projectWidth = projectDiv.clientWidth;
        if(direction === "right"){
            projectContainer.style.transform = "translate(-" + (projectWidth * currentLength) + "px)";
        }else{
            projectContainer.style.transform = "translate(-" + (projectWidth * currentLength) + "px)";
        }
    }

    window.addEventListener("resize", () => {
        setTimeout(() => {
            if(currentLength > 0){
                currentLength -= 1;
            }
            offset();
            if(select === 1){
                UpdateCarousel("right");
            }else if(select === 0){
                UpdateCarousel("left");
            }
        }, 600);     
    });
})()