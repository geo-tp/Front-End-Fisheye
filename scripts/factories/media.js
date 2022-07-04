function mediaFactory(data) {
  const { id, photographerId, title, image, video, likes, date, price } = data;

  const mediaContent = `assets/portfolio/${photographerId}/${
    video ? video : image
  }`;
  const lightboxData = { title, mediaContent, isImage: image ? true : false };

  function getMediaCardDOM() {
    let mediaContentDOM = null;
    if (video) {
      mediaContentDOM = document.createElement("video");
      mediaContentDOM.src = mediaContent;
    } else {
      mediaContentDOM = document.createElement("img");
      mediaContentDOM.src = mediaContent;
      mediaContentDOM.alt = title;
    }

    mediaContentDOM.onclick = () => displayLightbox(lightboxData);

    mediaInfoDOM = document.createElement("div");
    mediaInfoDOM.classList.add("media-card__infos");
    mediaInfoDOM.innerHTML = `      
      <div class="media-card__infos__name">${title}</div>
      <button class="button-like">${likes} <a class="fa fa-heart"></a></button>
      `;

    const media = document.createElement("div");
    media.classList.add("media-card");
    media.appendChild(mediaContentDOM);
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
