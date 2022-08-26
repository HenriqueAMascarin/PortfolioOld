const $project = document.querySelector(".project-div");
const $projectInfo = document.querySelector(".project-info");
const $projectCard = document.querySelector(".project-card");
const $title = document.querySelector(".title-project");
const $projectImage = document.querySelector(".project-image");
var click = 1;

function projectInfoHide(){
    $projectInfo.classList.add("projectInfo-close");
    $title.classList.add("titleAct-close");
    $projectImage.classList.add("projectImage-close");
}
projectInfoHide();

//PROJECT DIV CLICK
$project.addEventListener("click", () => {
    if(click === 1){
        $projectInfo.classList.remove("projectInfo-close");
        $title.classList.remove("titleAct-close");
        $projectImage.classList.remove("projectImage-close");
        click = 0;
    }else{
        projectInfoHide();
        click = 1;
    } 
});

// e.stopPropagation();
//                 console.log(this)
//                 console.log(e.currentTarget);
//                 console.log(e.target);