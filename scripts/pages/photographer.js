async function init() {
  let params = new URL(document.location).searchParams;
  let id = params.get("id");
  const photographer = await getPhotographerById(id);
  const photographerMedia = await getMediaByPhotographerId(id);

  displayPhotographerHeader(photographer);

  for (let media of photographerMedia) {
    displayPhotographerMedia(media);
  }

  displayPhotographerOverlay(photographer, photographerMedia);
}

init();
