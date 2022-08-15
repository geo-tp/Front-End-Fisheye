class LightBoxTemplate {
    constructor(media) {
        this._media = media
    }

    createLightBox() {
        const content = `      
        <button
        id="close-lightbox-button"
        class="button-close lightbox__close"
        onclick="closeLightbox()"
        aria-label="fermer l'image"
        >
          <i class="fas fa-close"></i>
        </button>

        <a class="lightbox__arrow-left" onclick="previousMedia()" aria-label="média précédent"
        ><i class="fas fa-angle-left" aria-hidden="true"></i
        ></a>

        <div class="lightbox__media">
        ${
            this._media.image
            ? `<img id="lightbox-media-content" src="${formatMediaPath(this._media)}" alt="${this._media.title}" />`
            : `<video controls id="lightbox-media-content" src="${formatMediaPath(this._media)}" />`
        }
        
        <h1 id="lightbox-media-title" class="lightbox__media__name">${this._media.title}</h1>
        </div>
        <a class="lightbox__arrow-right" onclick="nextMedia()" aria-label="média suivant"
        ><i class="fa fa-angle-right" aria-hidden="true"></i
        ></a>
        `;

    const lightbox = document.createElement("div");
    lightbox.classList.add("lightbox");
    lightbox.innerHTML = content;

    return lightbox;
    }
}