document.addEventListener("DOMContentLoaded", () => {
  const whiteHalf = document.querySelector(".ms-white-half");
  const blueHalf = document.querySelector(".ms-blue-half");
  const whiteView = document.querySelector(".white-view");
  const blueView = document.querySelector(".blue-view");
  const whiteMenu = document.querySelector(".white-menu");
  const blueMenu = document.querySelector(".blue-menu");
  const closeMenuElements = document.querySelectorAll(".close-menu");
  const openWhiteMenuButton = document.querySelector(".open-white-menu");
  const openBlueMenuButton = document.querySelector(".open-blue-menu");

  // Открытие видов при нажатии на половины экрана
  whiteHalf.addEventListener("click", () => {
    if (
      getComputedStyle(whiteMenu).display === "none" &&
      getComputedStyle(blueMenu).display === "none"
    ) {
      whiteView.style.display = "flex";
      blueView.style.display = "none";
    }
  });

  blueHalf.addEventListener("click", () => {
    if (
      getComputedStyle(whiteMenu).display === "none" &&
      getComputedStyle(blueMenu).display === "none"
    ) {
      blueView.style.display = "flex";
      whiteView.style.display = "none";
    }
  });

  // Открытие меню при нажатии на кнопку "Open Menu"
  openWhiteMenuButton.addEventListener("click", () => {
    whiteMenu.style.display = "block";
    whiteView.style.display = "none";
  });

  openBlueMenuButton.addEventListener("click", () => {
    blueMenu.style.display = "block";
    blueView.style.display = "none";
  });

  // Закрытие меню при нажатии на крестик
  closeMenuElements.forEach((closeBtn) => {
    closeBtn.addEventListener("click", () => {
      whiteMenu.style.display = "none";
      blueMenu.style.display = "none";
    });
  });

  // Закрытие меню при клике вне его области
  document.addEventListener("click", (e) => {
    if (
      !whiteMenu.contains(e.target) &&
      !openWhiteMenuButton.contains(e.target) &&
      getComputedStyle(whiteMenu).display === "block"
    ) {
      whiteMenu.style.display = "none";
    }

    if (
      !blueMenu.contains(e.target) &&
      !openBlueMenuButton.contains(e.target) &&
      getComputedStyle(blueMenu).display === "block"
    ) {
      blueMenu.style.display = "none";
    }
  });
});
