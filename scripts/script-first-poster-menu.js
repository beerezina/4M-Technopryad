let currentIndex = 0;

function showSlide(index) {
  const slider = document.getElementById("fp-slider");
  const totalSlides = document.getElementsByClassName("fp-slider-item").length;
  if (index >= totalSlides) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = totalSlides - 1;
  } else {
    currentIndex = index;
  }
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}
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
