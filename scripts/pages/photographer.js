async function displayPhotographerHeader(photographer) {
  const photographerHeader = document.querySelector(".photographer-header");
  const photographerHeaderModel = photographerHeaderFactory(photographer);
  const userHeaderDom = photographerHeaderModel.getUserHeaderDOM();
  photographerHeader.innerHTML = userHeaderDom;
}

async function displayMedia(media) {
  const photographerMedia = document.querySelector(".photographer-media");
  const photographerMediaModel = mediaFactory(media);
  const mediaCardDOM = photographerMediaModel.getMediaCardDOM();

  photographerMedia.appendChild(mediaCardDOM);
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
}

init();
