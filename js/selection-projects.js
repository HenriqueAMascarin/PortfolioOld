const projects = document.querySelectorAll(".project-card");
const ballSelection = document.querySelectorAll(".ball");
const projectDiv = document.querySelector(".project-card")
const projectContainer = document.querySelector(".project-container")
var currentLength = 0;
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

ballSelection[0].addEventListener("click", (e) =>{
    if(currentLength > 0){
        currentLength -= 1;
        UpdateCarousel("left");
    }
    select = 0;
    currentButton(0);
});
ballSelection[1].addEventListener("click", (e) =>{
    if(currentLength < (projects.length - 1)){
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
        if(select === 1){
            UpdateCarousel("right");
        }else{
            UpdateCarousel("left");
        }
    }, 600);
});