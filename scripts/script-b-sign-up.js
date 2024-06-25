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

const fields = [
  { id: "b-name-input", statusId: "b-name-status" },
  { id: "b-email-input", statusId: "b-email-status" },
  { id: "b-date-input", statusId: "b-date-status" },
  { id: "b-time-input", statusId: "b-time-status" },
];

function checkField(field) {
  const input = document.getElementById(field.id);
  const status = document.getElementById(field.statusId);
  if (input.value.trim() !== "") {
    status.textContent = "✓";
    status.classList.add("b-valid");
    status.classList.remove("b-invalid");
  } else {
    status.textContent = "✖";
    status.classList.add("b-invalid");
    status.classList.remove("b-valid");
  }
}

fields.forEach((field) => {
  document
    .getElementById(field.id)
    .addEventListener("input", () => checkField(field));
});

document.getElementById("b-reset-button").addEventListener("click", () => {
  fields.forEach((field) => {
    const input = document.getElementById(field.id);
    const status = document.getElementById(field.statusId);
    input.value = "";
    status.textContent = "";
    status.classList.remove("b-valid", "b-invalid");
  });
});

document.getElementById("b-submit-button").addEventListener("click", () => {
  let allFilled = true;
  fields.forEach((field) => {
    checkField(field);
    const input = document.getElementById(field.id);
    if (input.value.trim() === "") {
      allFilled = false;
    }
  });

  const notice = document.getElementById("b-notice");
  const noticeText = document.getElementById("b-notice-text");
  if (allFilled) {
    noticeText.textContent = "ЗАЯВКА УСПЕШНО ОТПРАВЛЕНА";
    notice.classList.add("b-success");
    notice.style.display = "flex";
  } else {
    noticeText.textContent = "ПОЖАЛУЙСТА, ЗАПОЛНИТЕ ВСЕ ЯЧЕЙКИ";
    notice.classList.remove("b-success");
    notice.style.display = "flex";
  }
});

document.getElementById("b-close-notice").addEventListener("click", () => {
  const notice = document.getElementById("b-notice");
  notice.style.display = "none";
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
