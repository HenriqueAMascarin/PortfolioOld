const project = document.querySelector(".project-card");
const titleProject = document.querySelector(".title-project")
project.addEventListener("click", (e) => {
    project.classList.toggle("active");
    titleProject.classList.toggle("active");
})