// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
  const openButtons = document.querySelectorAll(".open-modal");
  const closeButtons = document.querySelectorAll(".close");

  // Open modal
  openButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = btn.getAttribute("data-target");
      const modal = document.getElementById(targetId);
      if (modal) {
        modal.classList.remove("fade-out");
        modal.classList.add("fade-in");
        modal.style.display = "block";
        document.body.style.overflow = "hidden"; // prevent background scroll
      }
    });
  });

  // Close modal
  closeButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const modal = btn.closest(".modal");
      if (!modal) return;

      modal.classList.remove("fade-in");
      modal.classList.add("fade-out");

      modal.addEventListener("animationend", () => {
        modal.style.display = "none";
        document.body.style.overflow = ""; // allow scroll again
      }, { once: true });
    });
  });

  // Optional: Close modal when clicking outside modal-content
  window.addEventListener("click", (e) => {
    document.querySelectorAll(".modal").forEach(modal => {
      if (e.target === modal) {
        modal.classList.remove("fade-in");
        modal.classList.add("fade-out");

        modal.addEventListener("animationend", () => {
          modal.style.display = "none";
          document.body.style.overflow = "";
        }, { once: true });
      }
    });
  });
});