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
    while(ballSelection[x]){
        if(ballSelection[x].classList.contains('currentButton')){
            ballSelection[x].classList.remove('currentButton');
        }
        x++;
    }
    ballSelection[current].classList.add("currentButton");
}

function offset(){
    if(projectScroll.clientWidth < 704){
        showingProjects = 1;
        $selectionbuttons.classList.add("selectionButtons-js");
    }else if(projectScroll.clientWidth === 704){
        showingProjects = 2;
        $selectionbuttons.classList.add("selectionButtons-js");
    }else{
        showingProjects = 3;
        $selectionbuttons.classList.remove("selectionButtons-js");
    }
}
offset();

ballSelection[0].addEventListener("click", (e) =>{
    debugger
    if(currentLength < (projects.length) && currentLength > 0){
        currentLength -= 1;
        UpdateCarousel("left");
    }
    select = 0;
    addClass(0);
});
ballSelection[1].addEventListener("click", (e) =>{
    debugger
    if(currentLength < (projects.length - showingProjects)){
        currentLength += 1;
        UpdateCarousel("right");
    }
    select = 1;
    addClass(1);
});

function UpdateCarousel (direction){
    debugger
    var projectWidth = projectDiv.clientWidth;
    if(direction === "right"){
        projectContainer.style.transform = "translateX(-" + (projectWidth * currentLength) + "px)";
    }else{
        projectContainer.style.transform = "translateX(-" + (projectWidth * currentLength) + "px)";
    }
}
if(select === 0 || select === 1){
    window.addEventListener("resize", () => {
        debugger
        setTimeout(() => {
            if(currentLength > 0){
                currentLength -= 1;
            }
            offset();
            if(select === 1){
                UpdateCarousel("right");
            }else{
                UpdateCarousel("left");
            }
        }, 600);
        
    });
}