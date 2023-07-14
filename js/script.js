const header = document.querySelector("header");
window.addEventListener("scroll", function()
{
    header.classList.toggle("sticky", wimdow.scrollY > 100)
});