
document.addEventListener("DOMContentLoaded", function () {
   const form = document.querySelector("form");

   form.addEventListener("submit", function (e) {
      e.preventDefault();

        // Get input from from User for form
        const selectedDate = document.getElementById("tour-date").value;
        const numAdults = parseInt(document.getElementById("num-adults").value);
        const numChildren = parseInt(document.getElementById("num-children").value);

        // Calculate total cost (assuming a simple cost structure)
        const costPerAdult = 100; // Replace with your actual pricing
        const costPerChild = 50; // Replace with your actual pricing
        const totalCost = numAdults * costPerAdult + numChildren * costPerChild;

        // Display a confirmation message
        const confirmationMessage = `
            Thank you for booking your tour!
            Date: ${selectedDate}
            Adults: ${numAdults}
            Children: ${numChildren}
            Total Cost: $${totalCost}
            (Payment processing not implemented in this example)
        `;

        alert(confirmationMessage);

    });
});
