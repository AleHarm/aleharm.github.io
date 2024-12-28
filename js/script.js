document.addEventListener("DOMContentLoaded", () => {
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const sidebar = document.querySelector(".sidebar");
  const overlay = document.createElement("div");

  overlay.classList.add("overlay");
  document.body.appendChild(overlay);

  const toggleMenu = () => {
      const isOpen = sidebar.classList.toggle("active");
      overlay.classList.toggle("active");
      hamburgerMenu.classList.toggle("active");
      hamburgerMenu.textContent = isOpen ? "X" : "☰";
  };

  hamburgerMenu.addEventListener("click", toggleMenu);
  overlay.addEventListener("click", toggleMenu);
});
