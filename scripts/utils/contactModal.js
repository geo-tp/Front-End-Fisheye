function displayContactModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "block";

  let main = document.getElementById("main");
  main.setAttribute("aria-hidden", true);
  // keys controls for accessibility
  document.addEventListener("keydown", contactKeyboardEvent);

  const firstname = document.getElementById("firstname");

  // focus on first field to improve accessibility
  firstname.focus();

  // prevent contact modal and filters open at same time
  closeFilters();
}

function closeContactModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "none";
  let main = document.getElementById("main");
  main.setAttribute("aria-hidden", false);
  document.removeEventListener("keydown", contactKeyboardEvent);
}

function contactKeyboardEvent(e) {
  if (e.key === "Escape" || e.key === "Esc") {
    closeContactModal();
  }
}
