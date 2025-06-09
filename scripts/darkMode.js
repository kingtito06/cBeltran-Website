const toggle = document.getElementById('modeToggle');

toggle.addEventListener('change', () => {
  document.documentElement.classList.toggle('dark-mode');

  // Optional: Save preference
  localStorage.setItem('theme', toggle.checked ? "dark" : "light");
});

// Optional: Restore theme and icon on load
window.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('theme');
  const isDark = saved === "dark";
  if (isDark) {
    document.documentElement.classList.add("dark-mode");
    toggle.checked = true;
    icon.textContent = "🌙";
  }
});