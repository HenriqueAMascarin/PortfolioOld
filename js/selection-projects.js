 
    const projects = document.querySelectorAll(".project-card");
    const ballSelection = document.querySelectorAll(".ball");
    const projectDiv = document.querySelector(".project-card");
    const projectContainer = document.querySelector(".project-container");
    const projectScroll = document.querySelector(".projects");
    const $selectionbuttons = document.querySelector(".selection-buttons");

    var currentLength = 0;
    var showingProjects;
    var select;

    function addClass(current){
        var x = 0;
        ballSelection.forEach(function(element){
            element.classList.remove('currentButton');
        })
        ballSelection[current].classList.add("currentButton");
    }

    function offset(){
        console.log("entrou fucna")
        $selectionbuttons.classList.add("selectionButtons-js");
        if(projectScroll.clientWidth < 704){
            console.log("entrou 704" + projectScroll.clientWidth)
            showingProjects = 1;
        }else if(projectScroll.clientWidth < 900){ //fixed value of clientWidth
            showingProjects = 2;
            console.log("entrou === 704" + projectScroll.clientWidth)
        }else{
            
            console.log("entrou ultimo" + projectScroll.clientWidth)
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

    var timeout;
    window.addEventListener("resize", function() {
        clearTimeout(timeout)
        timeout = setTimeout(function() {
            offset();
            if(currentLength > 0){
                currentLength -= 1;
            }
            if(select === 1){
                UpdateCarousel("right");
            }else{
                UpdateCarousel("left");
            }
        }, 250);        
    });
