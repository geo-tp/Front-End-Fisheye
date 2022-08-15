class PhotographerOverlayTemplate {
    constructor(media, photographer) {
        this._media = media
        this._photographer = photographer
    }

    createPhotographerOverlay() {
        let likeCount = 0;

        for (let photographerMedia of this._media) {
          likeCount += photographerMedia.likes;
        }
    
        const content = `
                    <div class="button-like photographer-overlay__like">
                        <span id="likes-total-count">${likeCount}</span> <i class="fas fa-heart"></i>
                    </div>
                    <div class="photographer-overlay__pricing">${this._photographer.price}€/jour</div>
            `;
    
        const overlay = document.createElement("aside");
        overlay.classList.add("photographer-overlay");
        overlay.innerHTML = content;
    
        return overlay;
    }
}