async function displayPhotographerHeader(photographer) {
  const photographerHeader = document.querySelector(".photographer-header");
  const photographerHeaderModel = photographerHeaderFactory(photographer);
  const userHeaderDom = photographerHeaderModel.getUserHeaderDOM();
  photographerHeader.parentNode.replaceChild(userHeaderDom, photographerHeader);
}

async function displayMedia(media) {
  const photographerMedia = document.querySelector(".photographer-media");
  const photographerMediaModel = mediaFactory(media);
  const mediaCardDOM = photographerMediaModel.getMediaCardDOM();

  photographerMedia.appendChild(mediaCardDOM);
}

function displayPhotographerOverlay(photographer, media) {
  const photographerOverlay = document.querySelector(".photographer-overlay");
  const photographerMediaModel = photographerOverlayFactory({
    photographer,
    media,
  });
  const overlayDOM = photographerMediaModel.getUserOverlayDOM();
  photographerOverlay.appendChild(overlayDOM);
}

async function init() {
  let params = new URL(document.location).searchParams;
  let id = params.get("id");
  const photographer = await getPhotographerById(id);
  const photographerMedia = await getMediaByPhotographerId(id);

  displayPhotographerHeader(photographer);

  for (let media of photographerMedia) {
    displayMedia(media);
  }

  displayPhotographerOverlay(photographer, photographerMedia);
}

init();
