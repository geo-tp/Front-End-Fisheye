function mediaFactory(data) {
  const { id, photographerId, title, image, video, likes, date, price } = data;

  const mediaContent = formatMediaPath(data);

  const lightboxData = {
    id,
    photographerId,
    title,
    mediaContent,
    isImage: image ? true : false,
  };

  function getMediaCardDOM() {
    let mediaContentDOM = null;
    const media = document.createElement("article");
    media.classList.add("media-card");

    if (video) {
      mediaContentDOM = document.createElement("video");
      mediaContentDOM.src = mediaContent;
      playButton = document.createElement("i");
      playButton.classList.add("fas", "fa-video", "media-card__video-play");
      media.appendChild(playButton);
    } else {
      mediaContentDOM = document.createElement("img");
      mediaContentDOM.src = mediaContent;
      mediaContentDOM.alt = title;
    }

    mediaInfoDOM = document.createElement("div");
    mediaInfoDOM.classList.add("media-card__infos");
    mediaInfoDOM.innerHTML = `      
      <div class="media-card__infos__name">${title}</div>
      <button class="button-like" onclick='incrementMediaLikes(${id})' aria-label="ajouter un j'aime au média">
        <span aria-label="nombre de j'aime du média" id=media-${id}>${likes}</span>
        <i class="fa fa-heart" aria-hidden="true"></i>
      </button>
      `;

    let buttonDOM = document.createElement("button");
    buttonDOM.setAttribute(
      "aria-label",
      `ouvrir le média ${title} en plein écran`
    );
    buttonDOM.setAttribute("aria-haspopup", `dialog`);
    buttonDOM.appendChild(mediaContentDOM);
    buttonDOM.onclick = () => displayLightbox(data);
    buttonDOM.classList.add("media-card__button-open");

    media.appendChild(buttonDOM);
    media.appendChild(mediaInfoDOM);

    return media;
  }
  return {
    id,
    photographerId,
    title,
    image,
    likes,
    date,
    price,
    getMediaCardDOM,
  };
}
