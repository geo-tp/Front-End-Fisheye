class MediaTemplate {
    constructor(media) {
        this._media = media
    }

    formatMediaPath() {
        return `./assets/portfolio/${this._media.photographerId}/${
          this._media.video ? this._media.video : this._media.image
        }`;
      }

    createMediaCard() {
        let mediaContentDOM = null;
        const media = document.createElement("article");
        media.classList.add("media-card");

        //Media can be video or image type
        if (this._media.video) {
          mediaContentDOM = document.createElement("video");
          mediaContentDOM.src = this.formatMediaPath();
          // button in top left to indicate media is video
          let playButton = document.createElement("i");
          playButton.classList.add("fas", "fa-video", "media-card__video-play");
          media.appendChild(playButton);
        } else {
          mediaContentDOM = document.createElement("img");
          mediaContentDOM.src = this.formatMediaPath();
          mediaContentDOM.alt = this._media.title;
        }
    
        let mediaInfoDOM = document.createElement("div");
        mediaInfoDOM.classList.add("media-card__infos");
        mediaInfoDOM.innerHTML = `      
          <div class="media-card__infos__name">${this._media.title}</div>
          <button class="button-like" onclick='incrementMediaLikes(${this._media.id})' aria-label="ajouter un j'aime au média">
            <span id=media-${this._media.id}>${this._media.likes}</span>
            <i class="fa fa-heart" aria-hidden="true"></i>
          </button>
          `;
    
        // Button used to wrap mediaContent
        let buttonDOM = document.createElement("button");
        buttonDOM.setAttribute(
          "aria-label",
          `ouvrir le média ${this._media.title} en plein écran`
        );
        buttonDOM.setAttribute("aria-haspopup", `dialog`);
        buttonDOM.appendChild(mediaContentDOM);
        buttonDOM.onclick = () => displayLightbox(this._media);
        buttonDOM.classList.add("media-card__button-open");
    
        media.appendChild(buttonDOM);
        media.appendChild(mediaInfoDOM);
    
        return media;
    }
}