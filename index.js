window.addEventListener("scroll", () => {
    let header = document.querySelector(".sticky-nav");
    header.classList.toggle("sticky", window.scrollY > 0);
})
