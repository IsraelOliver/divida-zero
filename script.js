let pag1 = document.getElementById("pag1");
let pag2 = document.getElementById("pag2");
let pag3 = document.getElementById("pag3");

let pages = document.querySelector(".rightContent2");

pages.addEventListener("mouseenter", () => {
    pag1.style.transform = "translateX(-10px)";
    pag2.style.transform = "translateX(40px)";
    pag3.style.transform = "translateX(80px)";
});

pages.addEventListener("mouseleave", () => {
    pag1.style.transform = "translateX(0)";
    pag2.style.transform = "translateX(0)";
    pag3.style.transform = "translateX(0)";
});