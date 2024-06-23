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
        button.classList.add("active");
        wishlistItems++;
        wishlistCount.textContent = wishlistItems;
        flashEffect(wishlistIcon, "flash");
      } else {
        button.classList.remove("active");
        wishlistItems--;
        wishlistCount.textContent = wishlistItems;
      }
    });
  });

  // В корзину
  document.querySelectorAll(".cart-button").forEach((button) => {
    button.addEventListener("click", () => {
      if (!button.classList.contains("active")) {
        button.classList.add("active");
        cartItems++;
        cartCount.textContent = cartItems;
        flashEffect(cartIcon, "flash");
      } else {
        button.classList.remove("active");
        cartItems--;
        cartCount.textContent = cartItems;
      }
    });
  });

  function flashEffect(element, className) {
    element.classList.add(className);
    setTimeout(() => {
      element.classList.remove(className);
    }, 500);
  }
});
