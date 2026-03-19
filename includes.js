document.addEventListener("DOMContentLoaded", () => {
    // Load the navbar
    fetch("/navbar.html")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to load navbar: ${response.statusText}`);
        }
        return response.text();
      })
      .then((data) => {
        document.querySelector("header").innerHTML = data;
      })
      .catch((error) => console.error(error));
  
    // Load the footer
    fetch("/footer.html")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to load footer: ${response.statusText}`);
        }
        return response.text();
      })
      .then((data) => {
        document.querySelector("footer").innerHTML = data;
      })
      .catch((error) => console.error(error));
  });