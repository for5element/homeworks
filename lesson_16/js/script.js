document.addEventListener("click", documentActions);

function documentActions(e) {
  const targetElement = e.target;
  if (targetElement.closest(".header__menu")) {
    document.body.classList.toggle("menu-open");
  }
}