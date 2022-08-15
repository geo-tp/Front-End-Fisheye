const lightboxModal = document.querySelector(".lightbox-modal");
let currentLightboxMedia = null;

function closeLightbox() {
  document.removeEventListener("keydown", lightboxKeyboardEvent);
  lightboxModal.style.display = "none";
  lightboxModal.setAttribute("role", "dialog");

  let main = document.getElementById("main");
  main.setAttribute("aria-hidden", false);
}

async function displayLightbox(data) {
  const lightbox = document.querySelector(".lightbox");
  const mediaModel = new MediaFactory(data);
  const lightboxDom = new LightBoxTemplate(mediaModel)
  const main = document.getElementById("main");
  currentLightboxMedia = data;
  lightboxModal.removeAttribute("role");

  document.addEventListener("keydown", lightboxKeyboardEvent);
  lightbox.parentNode.replaceChild(lightboxDom.createLightBox(), lightbox);
  lightboxModal.style.display = "block";

  const closeButton = document.getElementById("close-lightbox-button");
  closeButton.focus();

  main.setAttribute("aria-hidden", true);

  // prevents lightbox and filters open at same time
  closeFilters();
}

// Update media in lightbox, different behaviour if type is video or img
function updateMedia() {
  let lightboxMediaContentDOM = document.getElementById(
    "lightbox-media-content"
  );
  let lightboxMediaTitleDOM = document.getElementById("lightbox-media-title");

  // Get formatted path with phographerId : (/img/portfolio/134/myImage.jpg)
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

// Display next media in lightbox
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

// Display previous media in lightbox
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

// Media navigation with keyboards
function lightboxKeyboardEvent(e) {
  if (e.key === "Escape" || e.key === "Esc") {
    closeLightbox();
  }
  if (e.key === "ArrowLeft") {
    previousMedia();
  }
  if (e.key === "ArrowRight") {
    nextMedia();
  }
}
