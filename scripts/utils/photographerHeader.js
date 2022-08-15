async function displayPhotographerHeader(photographer) {
  const photographerHeader = document.querySelector(".photographer-header");
  const photographerModel = new PhotographersFactory(photographer);
  const photographerHeaderDom = new PhotographerHeaderTemplate(photographerModel)
  photographerHeader.parentNode.replaceChild(photographerHeaderDom.createPhotographerHeader(), photographerHeader);
}
