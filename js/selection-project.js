const $project = document.querySelector("#projectDiv");
const $projectInfo = document.querySelector(".project-info");
const $projectCard = document.querySelector(".project-card");
var click = 1;

function projectInfoHide(sizePadding,scaleNumber){
    // $projectInfo.style.display = typeDisplay;
    $projectCard.style.paddingBottom = sizePadding;
    $projectInfo.style.transform = scaleNumber;
}
projectInfoHide("0px", "scaleY(0)");

//PROJECT DIV CLICK
$project.addEventListener("click", () => {
    if(click === 1){
        projectInfoHide("270px", "scaleY(1)");
        click = 0;
    }else{
        projectInfoHide("0px" , "scaleY(0)");
        click = 1;
    }
    
});