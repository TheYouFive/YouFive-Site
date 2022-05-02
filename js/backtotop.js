const backTo = document.querySelector("#backtotop");

function scrolldown() {
  let pageY = window.pageYOffset;
  if (pageY !== 0) {
    backTo.classList.add("show");
  } else {
    backTo.classList.remove("show");
  }
}

function clickTop() {
  if (window.pageYOffset > 0) {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
}

window.addEventListener("scroll", scrolldown);
backTo.addEventListener("click", clickTop);
