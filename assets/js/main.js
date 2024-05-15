// toggle button
function toggleButton(activeButtonId, disabledButtonId) {
  // Get references to the active and disabled buttons
  var activeButton = document.getElementById(activeButtonId);
  var disabledButton = document.getElementById(disabledButtonId);

  // Call toggleSecondRow function (assuming it's defined elsewhere)
  toggleSecondRow();

  // Check if the activeButton does not already have the "active" class
  if (!activeButton.classList.contains("active")) {
    // If not, add the "active" class to the activeButton
    activeButton.classList.add("active");
    // Remove the "active" class from the disabledButton
    disabledButton.classList.remove("active");
  }
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
