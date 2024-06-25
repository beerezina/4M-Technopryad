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
document.addEventListener("DOMContentLoaded", function () {
  const goToMainPageButton = document.querySelector(".b-go-to-main-page");

  goToMainPageButton.addEventListener("click", function () {
    window.location.href = "index.html";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var box = document.getElementById("all-content-box-process");
  box.addEventListener("click", function () {
    window.location.href = "https://beerezina.github.io/Technopryad/";
  });
});

// синее меню

document.querySelector(".b-generator-box").addEventListener("click", () => {
  window.location.href = "generator.html";
});

document.querySelector(".b-process-box").addEventListener("click", () => {
  window.location.href = "process.html";
});

document.querySelector(".b-sign-up-box").addEventListener("click", () => {
  window.location.href = "b-sign-up.html";
});
