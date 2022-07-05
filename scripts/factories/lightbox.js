function lightboxFactory(data) {
  const { id, title, image, video } = data;
  const mediaContent = formatMediaPath(data);

  function getLightboxDOM() {
    const content = `      
        <button
        class="button-close lightbox__close"
        src="assets/icons/close.svg"
        onclick="closeLightbox()"
        aria-label="fermer l'image"
        >
          <i class="fas fa-close"></i>
        </button>

        <a class="lightbox__arrow-left" onclick="previousMedia()" aria-label="média précédent"
        ><i class="fas fa-angle-left"></i
        ></a>

        <div class="lightbox__media">
        ${
          image
            ? `<img id="lightbox-media-content" src="${mediaContent}" alt="${title}" />`
            : `<video controls id="lightbox-media-content" src="${mediaContent}" />`
        }
        
        <p id="lightbox-media-title" class="lightbox__media__name">${title}</p>
        </div>
        <a class="lightbox__arrow-right" onclick="nextMedia()" aria-label="média suivant"
        ><i class="fa fa-angle-right"></i
        ></a>
        `;

    const lightbox = document.createElement("div");
    lightbox.classList.add("lightbox");
    lightbox.innerHTML = content;

    return lightbox;
  }
  return { id, title, image, video, getLightboxDOM };
}
