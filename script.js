const btnNavEl = document.querySelector(".menu-btn");
const headerNavEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerNavEl.classList.toggle("nav-open");
});


$(".counter").counterUp({
  delay: 10,
  time: 1000,
});
