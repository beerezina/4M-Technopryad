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
const fields = [
  { id: "w-name-input", statusId: "w-name-status" },
  { id: "w-email-input", statusId: "w-email-status" },
  { id: "w-date-input", statusId: "w-date-status" },
  { id: "w-time-input", statusId: "w-time-status" },
];

function checkField(field) {
  const input = document.getElementById(field.id);
  const status = document.getElementById(field.statusId);
  if (input.value.trim() !== "") {
    status.textContent = "✓";
    status.classList.add("w-valid");
    status.classList.remove("w-invalid");
  } else {
    status.textContent = "✖";
    status.classList.add("w-invalid");
    status.classList.remove("w-valid");
  }
}

fields.forEach((field) => {
  document
    .getElementById(field.id)
    .addEventListener("input", () => checkField(field));
});

document.getElementById("w-reset-button").addEventListener("click", () => {
  fields.forEach((field) => {
    const input = document.getElementById(field.id);
    const status = document.getElementById(field.statusId);
    input.value = "";
    status.textContent = "";
    status.classList.remove("w-valid", "w-invalid");
  });
});

document.getElementById("w-submit-button").addEventListener("click", () => {
  let allFilled = true;
  fields.forEach((field) => {
    checkField(field);
    const input = document.getElementById(field.id);
    if (input.value.trim() === "") {
      allFilled = false;
    }
  });

  const notice = document.getElementById("w-notice");
  const noticeText = document.getElementById("w-notice-text");
  if (allFilled) {
    noticeText.textContent = "ЗАЯВКА УСПЕШНО ОТПРАВЛЕНА";
    notice.classList.add("w-success");
    notice.style.display = "flex";
  } else {
    noticeText.textContent = "ПОЖАЛУЙСТА, ЗАПОЛНИТЕ ВСЕ ЯЧЕЙКИ";
    notice.classList.remove("w-success");
    notice.style.display = "flex";
  }
});

document.getElementById("w-close-notice").addEventListener("click", () => {
  const notice = document.getElementById("w-notice");
  notice.style.display = "none";
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
