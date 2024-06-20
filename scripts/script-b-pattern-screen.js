document.addEventListener("DOMContentLoaded", function () {
  const menuText = document.querySelector(".b-menu-text");
  const blueMenu = document.querySelector(".blue-menu");
  const closeMenuBtn = document.querySelector(".close-menu");
  const patternScreen = document.querySelector(".b-pattern-screen");

  menuText.addEventListener("click", function () {
    if (blueMenu.style.display === "none" || blueMenu.style.display === "") {
      blueMenu.style.display = "block";
    } else {
      blueMenu.style.display = "none";
    }
  });

  closeMenuBtn.addEventListener("click", function () {
    blueMenu.style.display = "none";
  });

  patternScreen.addEventListener("click", function (event) {
    if (!blueMenu.contains(event.target) && !menuText.contains(event.target)) {
      blueMenu.style.display = "none";
    }
  });
});
