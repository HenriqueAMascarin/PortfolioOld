const projects = document.querySelectorAll(".project-card");
const ballSelection = document.querySelectorAll(".ball");
const projectDiv = document.querySelector(".project-card")
const projectsAll = document.querySelector(".projects");

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

function setSlidePosition (current){
    

}

for(var i = 0; i < ballSelection.length; i++){
    ballSelection[i].addEventListener("click", (e) => {
        var currentLength = Array.prototype.indexOf.call(ballSelection,e.currentTarget);
        addClass(currentLength);
        setSlidePosition(currentLength);
        console.log(currentLength)
    });
}