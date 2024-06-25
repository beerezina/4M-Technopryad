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
document.addEventListener("DOMContentLoaded", function () {
  const goToMainPageButton = document.querySelector(".w-go-to-main-page");

  goToMainPageButton.addEventListener("click", function () {
    window.location.href = "index.html";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var box = document.getElementById("place-content-box");
  box.addEventListener("click", function () {
    window.location.href = "https://www.calameo.com/read/007623531576f854f426b";
  });
});

// белое меню

document.querySelector(".w-sign-up-box").addEventListener("click", () => {
  window.location.href = "w-sign-up.html";
});

document.querySelector(".w-poster-box").addEventListener("click", () => {
  window.location.href = "poster.html";
});

document.querySelector(".w-place-box").addEventListener("click", () => {
  window.location.href = "place.html";
});

document.querySelector(".w-shop-box").addEventListener("click", () => {
  window.location.href = "shop.html";
});
