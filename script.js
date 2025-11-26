window.onload = function() {
  // FIXED TOGGLE LOGIC
  const toggleBtn = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  toggleBtn.addEventListener("click", () => {
    toggleBtn.classList.toggle("active");
    navLinks.classList.toggle("show");
  });

  function updateClock() {
    const now = new Date();
    document.getElementById("clock").textContent = now.toLocaleTimeString();
  }

  setInterval(updateClock, 1000);
  updateClock();
}