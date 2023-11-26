const homeButton = document.querySelector("#homeButton");
const body = document.querySelector("body");
const aboutButton = document.querySelector("#aboutButton");
const projectsButton = document.querySelector("#projectsButton");
const experienceButton = document.querySelector("#experienceButton");
const talkButton = document.querySelector("#talkButton");
const homeSection = document.querySelector("#home");
const aboutSection = document.querySelector("#aboutMe");
const projectsSection = document.querySelector("#projects");
const experienceSection = document.querySelector("#experience");
const footerSection = document.querySelector("footer");

const homeText = document.querySelector("#home h1");


homeButton.addEventListener("click", () => {
        homeSection.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
})

aboutButton.addEventListener("click", () => {
        aboutSection.scrollIntoView({ behavior: "smooth"});
})

projectsButton.addEventListener("click", () => {
        projectsSection.scrollIntoView({ behavior: "smooth"});
})

experienceButton.addEventListener("click", () => {
        experienceSection.scrollIntoView({ behavior: "smooth"});
})

talkButton.addEventListener("click", () => {
        footerSection.scrollIntoView({ behavior: "smooth"});
})

homeText.addEventListener("mouseover", (event) => {

        event.target.style.transform = "scale(1.1)";

        event.target.style.transition = "all 0.4s ease-out";
        
        // for (let letter in event.target.innerText) {
        //         letter.style.transform = "scale(1.4)";
        //                 }
        // event.target.style.color ="orange";
        // for (let letter in homeText.innerHTML) {
        //         letter.style.padding = "3px";
        // }
})

homeText.addEventListener("mouseout", (event) => {
        event.target.style.color ="black";
        event.target.style.transform = "scale(1)";
        event.target.style.zIndex = "0";
        // for (let letter in homeText.innerHTML) {
        //         letter.style.padding = "3px";
        // }
})


window.onscroll = () => {
        
}

