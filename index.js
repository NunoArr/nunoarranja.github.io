const homeButton = document.querySelector(".homeButton");
const homeButtonMenu = document.querySelector(".homeButtonMenu");
const aboutButton = document.querySelector(".aboutButton");
const aboutButtonMenu = document.querySelector(".aboutButtonMenu");
const projectsButton = document.querySelector(".projectsButton");
const projectsButtonMenu = document.querySelector(".projectsButtonMenu");
const experienceButton = document.querySelector(".experienceButton");
const experienceButtonMenu = document.querySelector(".experienceButtonMenu");
const talkButton = document.querySelector(".talkButton");
const talkButtonMenu = document.querySelector(".talkButtonMenu");
const homeSection = document.querySelector("#home");
const aboutSection = document.querySelector("#aboutMe");
const projectsSection = document.querySelector("#projects");
const experienceSection = document.querySelector("#experience");
const body = document.querySelector("body");
const footerSection = document.querySelector("footer");
const menuList = document.querySelector(".menuList");
const menuButton = document.querySelector(".menuButtonSection img");
const menuButtons = document.querySelectorAll(".menuList ul li");

const homeText = document.querySelector("#home h1");

homeButton.addEventListener("click", () => {
        homeSection.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
})

homeButtonMenu.addEventListener("click", () => {
        homeSection.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
})

aboutButton.addEventListener("click", () => {
        aboutSection.scrollIntoView({ behavior: "smooth"});
})

aboutButtonMenu.addEventListener("click", () => {
        aboutSection.scrollIntoView({ behavior: "smooth"});
})

projectsButton.addEventListener("click", () => {
        projectsSection.scrollIntoView({ behavior: "smooth"});
})

projectsButtonMenu.addEventListener("click", () => {
        projectsSection.scrollIntoView({ behavior: "smooth"});
})

experienceButton.addEventListener("click", () => {
        experienceSection.scrollIntoView({ behavior: "smooth"});
})

experienceButtonMenu.addEventListener("click", () => {
        experienceSection.scrollIntoView({ behavior: "smooth"});
})

talkButton.addEventListener("click", () => {
        footerSection.scrollIntoView({ behavior: "smooth"});
})

talkButtonMenu.addEventListener("click", () => {
        footerSection.scrollIntoView({ behavior: "smooth"});
})

menuButtons.forEach((button) => {
        button.addEventListener("click", () => {
                menuList.style.display = "none";
                menuButton.src = "Images/menu-alt-svgrepo-com.svg"; 
        }) 
})


menuButton.addEventListener("click", () => {
        if (menuList.style.display === "block") {
                menuList.style.display = "none";
                menuButton.src = "Images/menu-alt-svgrepo-com.svg";   
                menuList.style.transition = "all 0.9s ease-out"  
        } else {
                menuList.style.display = "block";
                menuButton.src = "Images/close-square-svgrepo-com.svg";     
                menuList.style.transition = "all 0.9s ease"  
        }
})




