const project = document.querySelector(".project");
const project2 = document.querySelector(".project-2");
const project3 = document.querySelector(".project-3");

const titleProject = document.querySelector(".title-act")
const titleProject2 = document.querySelector(".title-act2")
const titleProject3 = document.querySelector(".title-act3")

const buttons = document.querySelector(".selection-buttons")
const button = document.querySelector(".button");
const button2 = document.querySelector(".button2");
const button3 = document.querySelector(".button3");

//PROJECT DIV CLICK
project.addEventListener("click", () => {
    project.classList.toggle("active");
    titleProject.classList.toggle("active");
})

project2.addEventListener("click", () => {
    project2.classList.toggle("active");
    titleProject2.classList.toggle("active");
})

project3.addEventListener("click", () => {
    project3.classList.toggle("active");
    titleProject3.classList.toggle("active");
})

//PROJECT SELECT BUTTONS
button.addEventListener("click", () => {
    button2.classList.remove("active");
    button3.classList.remove("active");
    button.classList.add("active");
    project.style.marginLeft = "0%";
})

button2.addEventListener("click", () => {
    button.classList.remove("active");
    button3.classList.remove("active");
    button2.classList.add("active");
    project.style.marginLeft = "-115%";
})

button3.addEventListener("click", () => {
    button.classList.remove("active");
    button2.classList.remove("active");
    button3.classList.add("active");
    project.style.marginLeft = "-230%";
})