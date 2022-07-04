function lightboxFactory(data) {
  const { title, mediaContent } = data;

  function getLightboxDOM() {
    const lightbox = `      
    <div class="lightbox">
        <button
        class="button-close lightbox__close"
        src="assets/icons/close.svg"
        onclick="closeLightbox()"
        aria-label="fermer l'image"
        >
        <i class="fas fa-close"></i>
        </button>

        <a class="lightbox__arrow-left" href="" aria-label="média précédent"
        ><i class="fas fa-angle-left"></i
        ></a>

        <div class="lightbox__media">
        <img src="${mediaContent}" alt="${title}" />
        <p class="lightbox__media__name">${title}</p>
        </div>
        <a class="lightbox__arrow-right" href="" aria-label="média suivant"
        ><i class="fa fa-angle-right"></i
        ></a>
    </div>
        `;

    return lightbox;
  }
  return { title, mediaContent, getLightboxDOM };
}
