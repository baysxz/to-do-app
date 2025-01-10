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
    statusSelect.addEventListener("change", updateStatusLabel)  



});
    // // Ensure the elements exist before adding event listeners
    // if (statusSelect && statusLabel) {
    //   // Function to update the label text based on selected option
    //   function updateStatusLabel() {
    //     const selectedOption = statusSelect.options[statusSelect.selectedIndex];
    //     statusLabel.textContent = selectedOption.text; // Set label to match selected option text
    //   }
  
    //   // Listen for changes to the select dropdown
    //   statusSelect.addEventListener("change", updateStatusLabel);
  
    //   // Optionally call the function initially to set the label if there's a default selection
    //   updateStatusLabel();
    // } else {
    //   console.error("Elements not found: status-select or status-label");
    // 
