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

document.addEventListener("DOMContentLoaded", () => {
  const wishlistIcon = document.getElementById("wishlist-icon");
  const cartIcon = document.getElementById("cart-icon");
  const wishlistCount = document.getElementById("wishlist-count");
  const cartCount = document.getElementById("cart-count");

  let wishlistItems = 0;
  let cartItems = 0;

  // Отложить
  document.querySelectorAll(".wishlist-button").forEach((button) => {
    button.addEventListener("click", () => {
      if (!button.classList.contains("active")) {
        wishlistItems += 1;
        wishlistCount.textContent = wishlistItems;
        flashIcon(wishlistIcon, "flash"); // мигание иконки
        button.textContent = "Убрать";
        button.classList.add("active");
      } else {
        wishlistItems -= 1;
        wishlistCount.textContent = wishlistItems;
        if (wishlistItems === 0) wishlistCount.textContent = 0; // на случай если было последнее удаление
        flashIcon(wishlistIcon, "flash"); // мигание иконки
        button.textContent = "Отложить";
        button.classList.remove("active");
      }
    });
  });

  // В корзину
  document.querySelectorAll(".cart-button").forEach((button) => {
    button.addEventListener("click", () => {
      if (!button.classList.contains("active")) {
        cartItems += 1;
        cartCount.textContent = cartItems;
        flashIcon(cartIcon, "flash"); // мигание иконки
        button.textContent = "Удалить";
        button.classList.add("active");
      } else {
        cartItems -= 1;
        cartCount.textContent = cartItems;
        if (cartItems === 0) cartCount.textContent = 0; // на случай если было последнее удаление
        flashIcon(cartIcon, "flash"); // мигание иконки
        button.textContent = "В корзину";
        button.classList.remove("active");
      }
    });
  });

  function flashIcon(icon, flashClass) {
    icon.classList.add(flashClass);
    setTimeout(() => {
      icon.classList.remove(flashClass);
    }, 300);
  }
});
