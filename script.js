// Search functionality
const searchButton = document.querySelector('.search');
searchButton.addEventListener('click', () => {
  const query = document.querySelector('.search-input').value;
  fetch(`/search?q=${query}`)
    .then(response => response.json())
    .then(data => console.log(data.results));
});

// Menu functionality
const menuButton = document.querySelector('.menu');
menuButton.addEventListener('click', () => {
  fetch('/menu')
    .then(response => response.json())
    .then(data => console.log(data.items));
});
<script>
    // Simulate logout by clearing session storage (if applicable)
    sessionStorage.clear();  // Clear session data if you're using sessionStorage

    // Optionally, you can clear cookies too (if your app uses cookies for authentication)
    document.cookie = "user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/"; // Example for clearing a cookie

    // Redirect the user to the homepage after logout
    setTimeout(function() {
        window.location.href = "index.html"; // Redirect to homepage
    }, 2000); // Wait for 2 seconds before redirecting
</script>
