const $project = document.querySelector(".project-div");
const $projectInfo = document.querySelector(".project-info");
const $projectCard = document.querySelector(".project-card");
const $title = document.querySelector(".title-project");
const $projectImage = document.querySelector(".project-image");
var click = 1;

function projectInfoHide(scaleProject,scaleTitle,brightnessImage){
    
    $projectInfo.style.transform = scaleProject;
    $title.style.transform = scaleTitle;
    $projectImage.style.filter = brightnessImage;
}
projectInfoHide("scaleY(0)", "scale(0)", "brightness(100%)");

//PROJECT DIV CLICK
$project.addEventListener("click", () => {
    if(click === 1){
        projectInfoHide("scaleY(1)", "scale(1)", "brightness(60%)");
        click = 0;
    }else{
        projectInfoHide("scaleY(0)", "scale(0)", "brightness(100%)");
        click = 1;
    } 
});

// e.stopPropagation();
//                 console.log(this)
//                 console.log(e.currentTarget);
//                 console.log(e.target);