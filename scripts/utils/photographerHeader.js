async function displayPhotographerHeader(photographer) {
  const photographerHeader = document.querySelector(".photographer-header");
  const photographerModel = new ElementsFactory(photographer, "PHOTOGRAPHER");
  const photographerHeaderDom = new PhotographerHeaderTemplate(photographerModel)
  photographerHeader.parentNode.replaceChild(photographerHeaderDom.createPhotographerHeader(), photographerHeader);
}
