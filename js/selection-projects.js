const projects = document.querySelectorAll(".project-card");
const ballSelection = document.querySelectorAll(".ball");
const projectDiv = document.querySelector(".project-card")
const projectContainer = document.querySelector(".project-container")
var currentLength = 0;
var currentButton;
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
    currentButton(0);
});
ballSelection[1].addEventListener("click", (e) =>{
    if(currentLength < (projects.length - 1)){
        currentLength += 1;
        UpdateCarousel("right");
    }
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

window.addEventListener("resize", (e) => {
    if(currentButton === 1){
        UpdateCarousel("right");
        console.log("foi");
    }else if(currentButton === 0){
        UpdateCarousel("left");
        console.log("esquerda");
    }
});