async function displayPhotographerHeader(photographer) {
  const photographerHeader = document.querySelector(".photographer-header");
  const photographerHeaderModel = photographerHeaderFactory(photographer);
  const userHeaderDom = photographerHeaderModel.getUserHeaderDOM();
  photographerHeader.parentNode.replaceChild(userHeaderDom, photographerHeader);
}
