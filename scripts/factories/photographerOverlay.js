function photographerOverlayFactory(data) {
  const { media, photographer } = data;

  function getUserOverlayDOM() {
    let likeCount = 0;

    for (let photographerMedia of media) {
      likeCount += photographerMedia.likes;
    }

    const content = `
                <div class="button-like photographer-overlay__like">
                    <span id="likes-total-count">${likeCount}</span> <i class="fas fa-heart"></i>
                </div>
                <div class="photographer-overlay__pricing">${photographer.price}€/jour</div>
        `;

    const overlay = document.createElement("div");
    overlay.classList.add("photographer-overlay");
    overlay.innerHTML = content;

    return overlay;
  }

  return {
    photographer,
    media,
    getUserOverlayDOM,
  };
}
