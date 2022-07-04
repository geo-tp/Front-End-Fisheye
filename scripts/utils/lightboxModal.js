function closeLightbox() {
  const lightboxModal = document.querySelector(".lightbox-modal");
  lightboxModal.style.display = "none";
}

function displayLightbox(data) {
  const lightboxModal = document.querySelector(".lightbox-modal");
  const lightboxModel = lightboxFactory(data);
  const lightboxDom = lightboxModel.getLightboxDOM();
  lightboxModal.innerHTML = lightboxDom;
  lightboxModal.style.display = "block";
}
