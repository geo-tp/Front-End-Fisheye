// Display photographer overlay with likes and pricing
function displayPhotographerOverlay(photographer, media) {
  const photographerOverlayDOM = document.querySelector(
    ".photographer-overlay"
  );
  const photographerMediaModel = photographerOverlayFactory({
    photographer,
    media,
  });
  const overlayDOM = photographerMediaModel.getUserOverlayDOM();
  photographerOverlayDOM.parentNode.replaceChild(
    overlayDOM,
    photographerOverlayDOM
  );
}
