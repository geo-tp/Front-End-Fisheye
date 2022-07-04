let currentLightboxMedia = null;
let photographerMedia = null;

function closeLightbox() {
  const lightboxModal = document.querySelector(".lightbox-modal");
  lightboxModal.style.display = "none";
}

async function displayLightbox(data) {
  currentLightboxMedia = data;
  photographerMedia = await getMediaByPhotographerId(data.photographerId);
  const lightboxModal = document.querySelector(".lightbox-modal");
  const lightboxModel = lightboxFactory(data);
  const lightboxDom = lightboxModel.getLightboxDOM();
  lightboxModal.innerHTML = lightboxDom;
  lightboxModal.style.display = "block";
}

function updateMedia() {
  let lightboxMediaContentDOM = document.getElementById(
    "lightbox-media-content"
  );
  let lightboxMediaTitleDOM = document.getElementById("lightbox-media-title");

  const mediaContent = formatMediaPath(currentLightboxMedia);
  const media = document.createElement(
    currentLightboxMedia.video ? "video" : "img"
  );
  media.setAttribute("id", "lightbox-media-content");
  media.setAttribute("controls", "controls");
  media.src = mediaContent;
  media.alt = currentLightboxMedia.title;
  lightboxMediaContentDOM.parentNode.replaceChild(
    media,
    lightboxMediaContentDOM
  );
  lightboxMediaTitleDOM.textContent = currentLightboxMedia.title;
}

function nextMedia() {
  for (let index = 0; index < photographerMedia.length; index++) {
    if (photographerMedia[index].id === currentLightboxMedia.id) {
      if (index + 1 <= photographerMedia.length - 1) {
        currentLightboxMedia = photographerMedia[index + 1];
      } else {
        currentLightboxMedia = photographerMedia[0];
      }

      updateMedia(currentLightboxMedia);

      break;
    }
  }
}

function previousMedia() {
  for (let index = 0; index <= photographerMedia.length; index++) {
    if (photographerMedia[index].id === currentLightboxMedia.id) {
      if (index - 1 > 0) {
        currentLightboxMedia = photographerMedia[index - 1];
      } else {
        currentLightboxMedia = photographerMedia[photographerMedia.length - 1];
      }

      updateMedia(currentLightboxMedia);

      break;
    }
  }
}
