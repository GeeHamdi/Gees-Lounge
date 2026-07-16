function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}

function toggleTheme() {
  document.body.classList.toggle("light-mode");
}function slideServices(direction) {
  const slider = document.getElementById("serviceSlider");

  if (!slider) {
    return;
  }

  slider.scrollBy({
    left: direction * 335,
    behavior: "smooth"
  });
}