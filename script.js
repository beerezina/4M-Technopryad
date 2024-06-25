document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel");
  const items = document.querySelectorAll(".carousel-item");
  const totalItems = items.length;
  let index = 0;

  document.querySelector(".left-button").addEventListener("click", () => {
    // Move to the previous item
    if (index > 0) {
      index--;
    } else {
      index = totalItems - 1; // Wrap around to the last item
    }
    updateCarousel();
  });

  document.querySelector(".right-button").addEventListener("click", () => {
    // Move to the next item
    if (index < totalItems - 1) {
      index++;
    } else {
      index = 0; // Wrap around to the first item
    }
    updateCarousel();
  });

  function updateCarousel() {
    const sideItemWidth = (carousel.clientWidth - items[0].clientWidth) / 2;
    const offset = items[0].clientWidth * index + sideItemWidth;
    carousel.style.transform = `translateX(-${offset}px)`;
  }

  updateCarousel();
});
