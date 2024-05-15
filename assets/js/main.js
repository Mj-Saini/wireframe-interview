function toggleButton(activeButtonId, disabledButtonId) {
  const activeButton = document.getElementById(activeButtonId);
  const disabledButton = document.getElementById(disabledButtonId);

  // If the active button is already active, do nothing
  if (activeButton.classList.contains("active")) {
    return;
  }

  // Toggle active class for buttons
  activeButton.classList.add("active");
  disabledButton.classList.remove("active");
}

// radio button
const radioButtons = document.querySelectorAll('input[type="radio"]');
radioButtons.forEach((radioButton) => {
  radioButton.addEventListener("click", () => {
    radioButtons.forEach((rb) => {
      if (rb !== radioButton && rb.name === radioButton.name) {
        rb.checked = false;
      }
    });
  });
});

// toggle header
function toggleHeaderClasses() {
  const headerResponsive = document.querySelector(".header_responsive");
  const menuBar = document.querySelector("#menuBar");
  const menuIcon = document.querySelector("#menuIcon");

  headerResponsive.classList.toggle("header_show");

  menuBar.classList.toggle("d-none");
  menuIcon.classList.toggle("d-none");
}
function toggleMenu() {
  toggleHeaderClasses();
}
document.addEventListener("DOMContentLoaded", function () {
  const headerResponsive = document.querySelector(".header_responsive");
  headerResponsive.classList.add("header_responsive");
});

document.querySelector("#menuBar").addEventListener("click", toggleMenu);
document.querySelector("#menuIcon").addEventListener("click", toggleMenu);
