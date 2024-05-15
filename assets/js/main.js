function toggleButton(activeButtonId, disabledButtonId) {
  var activeButton = document.getElementById(activeButtonId);
  var disabledButton = document.getElementById(disabledButtonId);

  if (!activeButton.classList.contains("active")) {
    activeButton.classList.add("active");
    disabledButton.classList.remove("active");
  }
}

