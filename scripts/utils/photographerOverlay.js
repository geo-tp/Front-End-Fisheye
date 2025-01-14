// Display photographer overlay with likes and pricing
function displayPhotographerOverlay(photographer, media) {
  const photographerOverlayDOM = document.querySelector(
    ".photographer-overlay"
  );

  const photographerModel  = new ElementsFactory(photographer, "PHOTOGRAPHER")
  const photographerOverlay = new PhotographerOverlayTemplate(
    media,
    photographerModel,
  );
  photographerOverlayDOM.parentNode.replaceChild(
    photographerOverlay.createPhotographerOverlay(),
    photographerOverlayDOM,
  );
}
