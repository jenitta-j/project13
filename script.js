document.getElementById("bookingForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const destination = document.getElementById("destination").value;
  const date = document.getElementById("date").value;

  const confirmation = document.getElementById("confirmation");
  confirmation.textContent = `🎉 Thank you, ${name}! Your trip to ${destination} on ${date} has been booked. Confirmation sent to ${email}.`;

  this.reset(); // Clear the form
});
