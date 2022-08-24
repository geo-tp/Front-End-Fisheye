
const nameRegexp = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u

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

function handleFormClick(e) {
  e.preventDefault()

  const firstname = e.target[0].value
  const lastname = e.target[1].value
  const email = e.target[2].value
  const message = e.target[3].value

  if (!firstname.match(nameRegexp)) {
    console.log("Le prénom ne respecte pas le format")
  }

  else if (!lastname.match(nameRegexp)) {
    console.log("Le nom ne respecte pas le format")

  }

  else {
    console.log(`
      Prénom : ${firstname},
      Nom : ${lastname},
      Email : ${email}
      Message : ${message}
    `)
  }

}

function contactKeyboardEvent(e) {
  if (e.key === "Escape" || e.key === "Esc") {
    closeContactModal();
  }
}
