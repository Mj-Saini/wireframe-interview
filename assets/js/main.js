function toggleButton(activeButtonId, disabledButtonId) {
  var activeButton = document.getElementById(activeButtonId);
  var disabledButton = document.getElementById(disabledButtonId);
  toggleSecondRow()
  if (!activeButton.classList.contains("active")) {
    activeButton.classList.add("active");
    disabledButton.classList.remove("active");
  }
}
  const radioButtons = document.querySelectorAll('input[type="radio"]');

  // Add event listener to each radio button
  radioButtons.forEach((radioButton) => {
    radioButton.addEventListener("click", () => {
      // Deselect other radio buttons in the same group
      radioButtons.forEach((rb) => {
        if (rb !== radioButton && rb.name === radioButton.name) {
          rb.checked = false;
        }
      });
    });
  });

// show table row
function toggleSecondRow() {
  var secondRow = document.getElementById("secondRow");
  if (secondRow.style.display === "none") {
      secondRow.style.display = "table-row";
  } else {
      secondRow.style.display = "none";
  }
}