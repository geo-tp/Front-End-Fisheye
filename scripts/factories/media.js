function mediaFactory(data) {
  const { id, photographerId, title, image, video, likes, date, price } = data;

  let mediaContentDom = "";

  const mediaContent = `assets/portfolio/${photographerId}/${
    video ? video : image
  }`;

  if (video) {
    mediaContentDom = `<video src="${mediaContent}"> </video>`;
  } else {
    mediaContentDom = `<img alt="${title}" src="${mediaContent}" />`;
  }

  function getMediaCardDOM() {
    const content = `      
      ${mediaContentDom}
      <div class="media-card__infos">
        <div class="media-card__infos__name">${title}</div>
        <button class="button-like">${likes} <a class="fa fa-heart"></a></button>
      </div>
        `;

    const media = document.createElement("div");
    media.classList.add("media-card");
    media.innerHTML = content;

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
