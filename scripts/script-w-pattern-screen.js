document.addEventListener("DOMContentLoaded", function () {
  const menuText = document.querySelector(".w-menu-text");
  const whiteMenu = document.querySelector(".white-menu");
  const closeMenuBtn = document.querySelector(".close-menu");
  const patternScreen = document.querySelector(".w-pattern-screen");

  menuText.addEventListener("click", function () {
    if (whiteMenu.style.display === "none" || whiteMenu.style.display === "") {
      whiteMenu.style.display = "block";
    } else {
      whiteMenu.style.display = "none";
    }
  });

  closeMenuBtn.addEventListener("click", function () {
    whiteMenu.style.display = "none";
  });

  patternScreen.addEventListener("click", function (event) {
    if (!whiteMenu.contains(event.target) && !menuText.contains(event.target)) {
      whiteMenu.style.display = "none";
    }
  });
});
