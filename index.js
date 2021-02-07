const navbar = document.querySelector('.sticky-nav');

window.onscroll = () => {
  const sticky = navbar.offsetTop;
  if (window.pageYOffset > sticky) {
    navbar.classList.add("activate");
  } else {
    navbar.classList.remove("activate");
  }
};