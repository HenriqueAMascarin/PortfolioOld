const projects = document.querySelectorAll(".project-card");
const ballSelection = document.querySelectorAll(".ball");
const projectDiv = document.querySelector(".project-card")
const projectsAll = document.querySelector(".projects");
var currentLength = 1;
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
    if(currentLength > 1){
        currentLength -= 1;
        UpdateCarousel(currentLength, "left");
    }
    console.log(currentLength)
    
    currentButton(0);
});
ballSelection[1].addEventListener("click", (e) =>{
    if(currentLength < projects.length){
        currentLength += 1;
        UpdateCarousel(currentLength, "right");
    }
    console.log(currentLength)
    currentButton(1);
});

function UpdateCarousel (current, direction){
    var projectWidth = projectDiv.clientWidth;
    if(direction === "right"){
        projectsAll.scrollLeft += projectWidth;
    }else{
        projectsAll.scrollLeft -= projectWidth;
    }
}