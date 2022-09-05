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
        for(var i = 0; i < $project.length; i++){
            $projectInfo[i].classList.add("projectInfo-close");
            $title[i].classList.add("titleAct-close");
            $projectImage[i].classList.add("projectImage-close");
        }
    }
    javaScriptEnable()

    function projectInfoHide(currentLength){
            $projectInfo[currentLength].classList.toggle("projectInfo-close");
            $title[currentLength].classList.toggle("titleAct-close");
            $projectImage[currentLength].classList.toggle("projectImage-close");
    }

    //PROJECT DIV CLICK//
    $projects.addEventListener("click", (e) => {
        if(e.target.classList.contains('project-div')){
            var currentLength = Array.prototype.indexOf.call($project, e.target);
            e.target = projectInfoHide(currentLength);
        }
    })
})();