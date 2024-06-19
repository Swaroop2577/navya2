var typed= new Typed('#element',{
    strings:["Frontend developer", "Web Developer","UI/UX Designer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true

})
let menuicon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav ul li a");

window.onscroll = () => {
  let top = window.scrollY;

  sections.forEach((sec) => {
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
      });

      document
        .querySelector(`header nav ul li a[href*='${id}']`)
        .classList.add("active");
    }
  });
};

menuicon.onclick = () => {
  navbar.classList.toggle("active");
};