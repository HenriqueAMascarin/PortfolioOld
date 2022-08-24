const $project = document.querySelector("#projectDiv");
const $projectInfo = document.querySelector(".project-info");
const $projectCard = document.querySelector(".project-card");
var click = 1;

function projectInfoHide(typeDisplay, sizePadding){
    $projectInfo.style.display = typeDisplay;
    $projectCard.style.paddingBottom = sizePadding;
}
projectInfoHide("none", 0);

//PROJECT DIV CLICK
$project.addEventListener("click", () => {
    if(click === 1){
        projectInfoHide("flex", "270px");
        click = 0;
    }else{
        projectInfoHide("none", "0px");
        click = 1;
    }
    
});