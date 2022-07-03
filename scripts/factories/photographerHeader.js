function photographerHeaderFactory(data) {
  const { id, name, city, country, tagline, price, portrait } = data;
  const picture = `assets/photographers/${portrait}`;

  function getUserHeaderDOM() {
    const picture = `assets/photographers/${portrait}`;

    const content = `
          <div class="photographer-card2">
            <h2 class="photographer-card2__infos__name">${name}</h2>  
            <div class="photographer-card2__infos__location">${city}, ${country}</div>
            <div class="photographer-card2__infos__description">${tagline}</div>      
          </div>
  
          <button class="button-default" onclick="displayModal()">
            Contactez-moi
          </button>
  
          <div class="photographer-header__picture">
            <img class="photographer-picture" src="${picture}" alt="${name}" />
          </div>
      `;

    return content;
  }

  return {
    id,
    name,
    city,
    country,
    tagline,
    price,
    portrait,
    getUserHeaderDOM,
  };
}