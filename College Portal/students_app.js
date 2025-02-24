document.addEventListener('DOMContentLoaded', function () {
  // Handle report issue button clicks
  const reportButtons = document.querySelectorAll('.reportIssue');
  reportButtons.forEach(button => {
      button.addEventListener('click', function () {
          const row = this.closest('tr');
          const subject = row.querySelector('td:nth-child(2)').textContent;
          const marks = row.querySelector('td:nth-child(3)').textContent;
          const grade = row.querySelector('td:nth-child(4)').textContent;

          if (confirm(`Are you sure you want to report an issue with ${subject} (Marks: ${marks}, Grade: ${grade})?`)) {
              alert(`Issue reported for ${subject}. An administrator will review your concern.`);
          }
      });
  });

  // Handle view answer sheet links
  const viewAnswerSheets = document.querySelectorAll('.viewAnswerSheet');
  viewAnswerSheets.forEach(link => {
      link.addEventListener('click', function (event) {
          event.preventDefault();
          const row = this.closest('tr');
          const subject = row.querySelector('td:nth-child(2)').textContent;
          alert(`Viewing answer sheet for ${subject}.`);
      });
  });

  // Save the last visited page before navigating
  if (document.referrer && !sessionStorage.getItem("lastPage")) {
      sessionStorage.setItem("lastPage", document.referrer);
  }

  // Logout button functionality (Ensure single event listener)
  const logoutButton = document.getElementById("logout");
  if (logoutButton) {
      logoutButton.addEventListener("click", function (event) {
          event.preventDefault();
          if (confirm("Are you sure you want to logout?")) {
              alert("Logged out successfully!");
              const lastPage = sessionStorage.getItem("lastPage") || "index.html"; // Default page if not stored
              sessionStorage.removeItem("lastPage"); // Clear last page after logout
              window.location.href = lastPage; // Redirect to last visited page
          }
      });
  }

  // Handle compose message button
  const composeMessageButton = document.getElementById('composeMessage');
  if (composeMessageButton) {
      composeMessageButton.addEventListener('click', function () {
          alert('Compose new message feature coming soon!');
      });
  }
});
