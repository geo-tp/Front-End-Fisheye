function displayPhotographerOverlay(photographer, media) {
  const photographerOverlay = document.querySelector(".photographer-overlay");
  const photographerMediaModel = photographerOverlayFactory({
    photographer,
    media,
  });
  const overlayDOM = photographerMediaModel.getUserOverlayDOM();
  photographerOverlay.appendChild(overlayDOM);
}
