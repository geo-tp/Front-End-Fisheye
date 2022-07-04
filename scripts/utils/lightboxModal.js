const lightboxMediaContentDOM = document.getElementById(
  "lightbox-media-content"
);
const lightboxMediaTitleDOM = document.getElementById("lightbow-media-title");
let currentLightboxMedia = null;
let photographerMedia = null;

function closeLightbox() {
  const lightboxModal = document.querySelector(".lightbox-modal");
  lightboxModal.style.display = "none";
}

function displayLightbox(data) {
  currentLightboxMedia = data;
  photographerMedia = getMediaByPhotographerId(data.photographerId);
  const lightboxModal = document.querySelector(".lightbox-modal");
  const lightboxModel = lightboxFactory(data);
  const lightboxDom = lightboxModel.getLightboxDOM();
  lightboxModal.innerHTML = lightboxDom;
  lightboxModal.style.display = "block";
}

function nextMedia() {
  photographerMedia.map((media, index) => {
    if (media.id === currentLightboxMedia.id) {
      if (index + 1 < photographerMedia.length - 1) {
        currentLightboxMedia = photographerMedia[index + 1];
        lightboxMediaContentDOM.src = photographerMedia[index + 1].mediaContent;
        lightboxMediaTitleDOM.textContent = photographerMedia[index + 1].title;
      } else {
        currentLightboxMedia = photographerMedia[0];
        lightboxMediaContentDOM.src = photographerMedia[0].mediaContent;
        lightboxMediaTitleDOM.textContent = photographerMedia[0].title;
      }
    }
  });
}

function previousMedia() {}
