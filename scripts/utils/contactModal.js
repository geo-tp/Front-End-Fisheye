function displayContactModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "block";

  let main = document.getElementById("main");
  main.setAttribute("aria-hidden", true);
  modal.removeAttribute("role");
  // keys controls for accessibility
  document.addEventListener("keydown", contactKeyboardEvent);

  const close = document.getElementById("contact-close-button");

  // focus on close button
  close.focus();

  // prevent contact modal and filters open at same time
  closeFilters();
}

function closeContactModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "none";
  modal.setAttribute("role", "dialog");
  let main = document.getElementById("main");
  main.setAttribute("aria-hidden", false);
  document.removeEventListener("keydown", contactKeyboardEvent);
}

function contactKeyboardEvent(e) {
  if (e.key === "Escape" || e.key === "Esc") {
    closeContactModal();
  }
}
