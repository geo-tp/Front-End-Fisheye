async function init() {
  let params = new URL(document.location).searchParams;
  let id = params.get("id");
  const photographer = await getPhotographerById(id);
  photographerMedia = await getMediaByPhotographerId(id);

  displayPhotographerHeader(photographer);
  displayPhotographerMedia(photographerMedia);
  displayPhotographerOverlay(photographer, photographerMedia);
}

init();
