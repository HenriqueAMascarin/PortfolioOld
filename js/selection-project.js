const $project = document.querySelector(".project-div");
const $projectInfo = document.querySelector(".project-info");
const $projectCard = document.querySelector(".project-card");
const $title = document.querySelector(".title-project");
const $projectImage = document.querySelector(".project-image");
var click = 1;

function projectInfoHide(sizePadding,scaleProject,scaleTitle,brightnessImage){
    $projectCard.style.paddingBottom = sizePadding;
    $projectInfo.style.transform = scaleProject;
    $title.style.transform = scaleTitle;
    $projectImage.style.filter = brightnessImage;
}
projectInfoHide("0px", "scaleY(0)", "scale(0)", "brightness(100%)");

//PROJECT DIV CLICK
$project.addEventListener("click", () => {
    if(click === 1){
        projectInfoHide("270px", "scaleY(1)", "scale(1)", "brightness(60%)");
        click = 0;
    }else{
        projectInfoHide("0px" , "scaleY(0)", "scale(0)", "brightness(100%)");
        click = 1;
    } 
});