function mediaFactory(data) {
  const { id, photographerId, title, image, likes, date, price } = data;

  //   const picture = `assets/photographers/${portrait}`;
  // TODO FONCTION POUR GENERER LE BON PATH DE LIMAGE
  function getMediaCardDOM() {
    const content = `      
      <img alt="" src="./assets/portfolio/Mimi/Animals_Rainbow.jpg" />
      <div class="media-card__infos">
        <div class="media-card__infos__name">Lenom</div>
        <button class="button-like">189 <a class="fa fa-heart"></a></button>
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
