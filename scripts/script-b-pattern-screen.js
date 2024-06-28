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
const waboutUsText = document.querySelector(".w-about-us-text");
waboutUsText.addEventListener("click", function () {
  window.open(
    "https://deziiign.com/designer/eb26f621c3294af3a262f3714c3dcfd5",
    "_blank"
  );
});

const baboutUsText = document.querySelector(".b-about-us-text");
baboutUsText.addEventListener("click", function () {
  window.open(
    "https://deziiign.com/designer/eb26f621c3294af3a262f3714c3dcfd5",
    "_blank"
  );
});
