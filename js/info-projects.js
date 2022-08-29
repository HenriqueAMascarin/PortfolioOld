(function(){
    const $projects = document.querySelector(".project-container");
    const $project = document.querySelectorAll(".project-div");
    const $projectInfo = document.querySelectorAll(".project-info");
    const $title = document.querySelectorAll(".title-project");
    const $projectImage = document.querySelectorAll(".project-image");
    const $selectionbuttons = document.querySelector(".selection-buttons");

    function javaScriptEnable(){
        $projects.classList.add("projects-js");
        $selectionbuttons.classList.add("selectionButtons-js");
    }
    javaScriptEnable()

    function projectInfoHide(currentLength){
        for (var i = 0; i < $projectInfo.length; i++){
            $projectInfo[currentLength || i].classList.add("projectInfo-close");
            $title[currentLength || i].classList.add("titleAct-close");
            $projectImage[currentLength || i].classList.add("projectImage-close");
        }
    }

    function projectOpen(currentLength){
        $projectInfo[currentLength].classList.remove("projectInfo-close");
        $title[currentLength].classList.remove("titleAct-close");
        $projectImage[currentLength].classList.remove("projectImage-close");
    }

    projectInfoHide();

    //PROJECT DIV CLICK
    for(var i = 0; i < $project.length; i++){
        $project[i].addEventListener("click", (e) => {
            var currentLength = Array.prototype.indexOf.call($project,e.currentTarget);
            if($projectInfo[currentLength].classList.contains('projectInfo-close')){
                e.currentTarget = projectOpen(currentLength);
            }else{
                e.currentTarget = projectInfoHide(currentLength);
            } 
        });
    }

})();