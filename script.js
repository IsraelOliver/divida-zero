let pag1 = document.getElementById("pag1");
let pag2 = document.getElementById("pag2");
let pag3 = document.getElementById("pag3");
let content = document.querySelector("content ")

let pages = document.querySelector(".rightContent2");

pages.addEventListener("mouseenter", () => {
    if(content.style.flexDirection == column) {
        pag1.style.transform = "translateX(0)";
        pag2.style.transform = "translateX(0)";
        pag3.style.transform = "translateX(0)";
    } else {
        pag1.style.transform = "translateX(-100px)";
        pag2.style.transform = "translateX(-10px)";
        pag3.style.transform = "translateX(70px)";
    }
});

pages.addEventListener("mouseleave", () => {
    pag1.style.transform = "translateX(0)";
    pag2.style.transform = "translateX(0)";
    pag3.style.transform = "translateX(0)";
});