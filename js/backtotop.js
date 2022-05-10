const backTo = document.querySelector("#backtotop");

function scrolldown() {
  let pageY = window.scrollY;
  if (pageY > 0) {
    backTo.classList.add("btn-appear");
  } else {
    backTo.classList.remove("btn-appear");
  }
}

function clickTop() {
  let pageY = window.scrollY;
  if (pageY > 0) {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
}

window.addEventListener("scroll", scrolldown);
backTo.addEventListener("click", clickTop);
