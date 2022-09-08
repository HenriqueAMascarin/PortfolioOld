const projects = document.querySelectorAll(".project-card");
const ballSelection = document.querySelectorAll(".ball");
const projectDiv = document.querySelector(".project-card");
const projectContainer = document.querySelector(".project-container");
const projectScroll = document.querySelector(".projects");
var currentLength = 0;
var showingProjects;
var select;
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

function currentButton(currentBall){
    addClass(currentBall);
}

function offset(){
    if(projectScroll.clientWidth < 704){
        showingProjects = 1;
    }else if(projectScroll.clientWidth === 704){
        showingProjects = 2;
    }else{
        showingProjects = 3;
    }
}
offset();

ballSelection[0].addEventListener("click", (e) =>{
    if(currentLength < (projects.length) && currentLength > 0){
        currentLength -= 1;
        UpdateCarousel("left");
    }
    select = 0;
    currentButton(0);
});
ballSelection[1].addEventListener("click", (e) =>{
    if(currentLength < (projects.length - showingProjects)){
        currentLength += 1;
        UpdateCarousel("right");
    }
    select = 1;
    currentButton(1);
});

function UpdateCarousel (direction){
    var projectWidth = projectDiv.clientWidth;
    if(direction === "right"){
        projectContainer.style.transform = "translateX(-" + (projectWidth * currentLength) + "px)";
    }else{
        projectContainer.style.transform = "translateX(-" + (projectWidth * currentLength) + "px)";
    }
}

window.addEventListener("resize", function () {
    setTimeout(() => {
        offset();
        if(select === 1){
            UpdateCarousel("right");
        }else{
            UpdateCarousel("left");
        }
        if(currentLength > 0){
            currentLength -= 1;
        }
    }, 600);
    
});

