const openBtn = document.querySelector(".fa-solid");
const closeBtn = document.querySelector(".fa-xmark");
const nav = document.querySelector(".top-navBar");

openBtn.addEventListener("click", () => {
  nav.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  nav.classList.remove("active");
});
