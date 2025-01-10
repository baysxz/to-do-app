document.addEventListener("DOMContentLoaded", function () {
  const addTaskButton = document.getElementById("add-btn");
  const popUp = document.getElementById("pop-up");
  const statusLabel = document.getElementById("status-label");
  const statusSelect = document.getElementById("status-select");

  function showPopUp() {
    popUp.style.display = "flex";
  }

  function hidePopUp(event) {
    if (event.target === popUp) {
      popUp.style.display = "none";
    }
  }

  function updateStatusLabel() {
    const selectedOption = statusSelect.options[statusSelect.selectedIndex];
    statusLabel.textContent = selectedOption.text;
  }

  addTaskButton.addEventListener("click", showPopUp);
  popUp.addEventListener("click", hidePopUp);
  statusSelect.addEventListener("change", updateStatusLabel);
});
